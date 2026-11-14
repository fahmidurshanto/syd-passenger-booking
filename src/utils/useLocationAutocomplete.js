"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const PHOTON_BASE = "https://photon.komoot.io/api";

/**
 * Common Australian popular airport and hub presets
 */
export const POPULAR_AU_HUBS = [
  {
    name: "Sydney Airport (SYD)",
    subtext: "Mascot NSW • Intl & Domestic • Flight tracked",
    type: "airport",
    lat: -33.9399,
    lng: 151.1753,
  },
  {
    name: "Sydney Airport (SYD) — Domestic T2/T3",
    subtext: "Mascot NSW • Intl & Domestic • Flight tracked",
    type: "airport",
    lat: -33.9351,
    lng: 151.1802,
  },
  {
    name: "Sydney Airport (SYD) — International T1",
    subtext: "Mascot NSW • International • Flight tracked",
    type: "airport",
    lat: -33.9388,
    lng: 151.1645,
  },
  {
    name: "Sydney CBD",
    subtext: "Sydney NSW, Australia",
    type: "city",
    lat: -33.8688,
    lng: 151.2093,
  },
  {
    name: "Sydney Opera House",
    subtext: "Bennelong Point, Sydney NSW 2000",
    type: "landmark",
    lat: -33.8568,
    lng: 151.2153,
  },
];

export function useLocationAutocomplete(query) {
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef(null);
  const abortRef = useRef(null);

  const search = useCallback((q) => {
    if (!q || !q.trim()) {
      setSuggestions(POPULAR_AU_HUBS);
      setIsLoading(false);
      return;
    }

    const cleanQ = q.trim().toLowerCase();

    // Check local preset hubs first for instant match
    const matchedPresets = POPULAR_AU_HUBS.filter(
      (hub) =>
        hub.name.toLowerCase().includes(cleanQ) ||
        hub.subtext.toLowerCase().includes(cleanQ)
    );

    if (cleanQ.length < 2) {
      setSuggestions(matchedPresets.length > 0 ? matchedPresets : POPULAR_AU_HUBS);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    if (abortRef.current) abortRef.current.abort();
    abortRef.current = new AbortController();

    const params = new URLSearchParams({
      q: cleanQ,
      limit: "8",
      lang: "en",
      lat: "-33.8688",
      lon: "151.2093",
    });

    fetch(`${PHOTON_BASE}?${params}`, { signal: abortRef.current.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        const features = data?.features || [];

        const auResults = features.filter((f) => {
          const cc = f.properties?.countrycode?.toLowerCase();
          const country = f.properties?.country?.toLowerCase();
          return cc === "au" || country === "australia";
        });

        const mapped = auResults.map((f) => {
          const p = f.properties;
          const coords = f.geometry?.coordinates; // [lng, lat]
          const parts = [
            p.name,
            p.street && p.housenumber ? `${p.housenumber} ${p.street}` : p.street,
            p.suburb || p.district,
            p.city || p.town,
            p.state,
          ].filter(Boolean);

          const title = parts.slice(0, 2).join(", ") || p.name || "Location";
          const subtext = parts.slice(2).join(", ") || `${p.state || "NSW"}, Australia`;

          return {
            name: title,
            subtext: subtext,
            type: p.osm_key === "aeroway" ? "airport" : "place",
            lat: coords?.[1],
            lng: coords?.[0],
          };
        });

        // Combine matched presets + photon results
        const combined = [...matchedPresets, ...mapped];
        const seen = new Set();
        const unique = combined.filter((item) => {
          if (seen.has(item.name.toLowerCase())) return false;
          seen.add(item.name.toLowerCase());
          return true;
        });

        setSuggestions(unique);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setSuggestions(matchedPresets);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => search(query), 200);
    return () => clearTimeout(timerRef.current);
  }, [query, search]);

  return { suggestions, isLoading };
}

