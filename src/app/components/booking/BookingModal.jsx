"use client";

import QuickBookingWidget from "./QuickBookingWidget";

export default function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl my-8">
        <QuickBookingWidget onClose={onClose} isModal={true} />
      </div>
    </div>
  );
}

