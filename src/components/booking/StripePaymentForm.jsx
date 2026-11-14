"use client";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";

export default function StripePaymentForm({
  booking,
  amount,
  currency = "AUD",
  onPaymentSuccess,
  onCancel,
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage("");

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: "if_required",
      });

      if (error) {
        setErrorMessage(
          error.message || "Payment failed. Please verify your card details.",
        );
        setIsProcessing(false);
        return;
      }

      if (
        paymentIntent &&
        (paymentIntent.status === "succeeded" ||
          paymentIntent.status === "processing")
      ) {
        // Notify backend to confirm the booking status
        const API_BASE =
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
        try {
          await fetch(`${API_BASE}/payments/confirm`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              paymentIntentId: paymentIntent.id,
              bookingId: booking?.id || booking?._id,
              bookingNumber: booking?.bookingNumber,
              paymentMethod: "online",
            }),
          });
        } catch (confirmErr) {
          console.warn("Backend confirm call notification warning:", confirmErr);
        }

        onPaymentSuccess({
          ...paymentIntent,
          paymentMethod: "online",
        });
      } else {
        setErrorMessage("Payment status pending or incomplete. Please check.");
      }
    } catch (err) {
      setErrorMessage(
        err.message || "An unexpected error occurred during payment processing.",
      );
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errorMessage && (
        <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
          {errorMessage}
        </div>
      )}

      <div className="p-4 bg-slate-50/70 border border-slate-200 rounded-2xl">
        <PaymentElement
          options={{
            layout: "tabs",
          }}
        />
      </div>

      <div className="flex items-center justify-between pt-2">
        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className="px-7 py-3 rounded-xl bg-[#0c1938] hover:bg-[#16274e] disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer flex items-center space-x-2"
        >
          {isProcessing ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Processing Payment...</span>
            </>
          ) : (
            <span>Pay ${amount} {currency}</span>
          )}
        </button>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            disabled={isProcessing}
            className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
          >
            Cancel / Back
          </button>
        )}
      </div>
    </form>
  );
}

