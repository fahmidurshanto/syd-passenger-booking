"use client";

const TOKEN_KEY = "syd_customer_token";
const USER_KEY = "syd_customer_user";

export const getStoredToken = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
};

export const getStoredCustomer = () => {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const setStoredAuth = (token, customer) => {
  if (typeof window === "undefined") return;
  if (token) localStorage.setItem(TOKEN_KEY, token);
  if (customer) localStorage.setItem(USER_KEY, JSON.stringify(customer));
};

export const clearStoredAuth = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

export const loginCustomerApi = async (identifier, password) => {
  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
  const res = await fetch(`${API_BASE}/customer/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ identifier, password }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to log in.");
  }

  setStoredAuth(data.token || data.accessToken, data.customer);
  return data;
};

export const registerCustomerApi = async ({ fullName, email, phone, password }) => {
  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
  const res = await fetch(`${API_BASE}/customer/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ fullName, email, phone, password }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Registration failed.");
  }

  setStoredAuth(data.token || data.accessToken, data.customer);
  return data;
};

export const logoutCustomerApi = async () => {
  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
  const token = getStoredToken();
  try {
    await fetch(`${API_BASE}/customer/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      credentials: "include",
    });
  } catch {
    // Non-fatal if offline
  }
  clearStoredAuth();
};

export const fetchCurrentCustomer = async () => {
  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
  const token = getStoredToken();
  if (!token) return null;

  try {
    const res = await fetch(`${API_BASE}/customer/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    if (res.ok) {
      const data = await res.json();
      const cust = data.customer || data;
      setStoredAuth(token, cust);
      return cust;
    } else {
      clearStoredAuth();
      return null;
    }
  } catch {
    return getStoredCustomer();
  }
};

