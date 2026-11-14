"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

export default function BookingMiniMap({
  pickupCoords,
  dropoffCoords,
  pickupName,
  dropoffName,
}) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const layerGroupRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !mapContainerRef.current) return;

    let isMounted = true;

    import("leaflet").then((L) => {
      if (!isMounted || !mapContainerRef.current) return;

      // Fix default marker icon issues in Next.js bundler
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const defaultCenter = [-33.8688, 151.2093]; // Sydney Center

      if (!mapInstanceRef.current) {
        const map = L.map(mapContainerRef.current, {
          center: defaultCenter,
          zoom: 11,
          zoomControl: false,
          attributionControl: false,
        });

        // 100% Free OpenStreetMap tile server
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          subdomains: ["a", "b", "c"],
        }).addTo(map);

        const layerGroup = L.layerGroup().addTo(map);

        mapInstanceRef.current = map;
        layerGroupRef.current = layerGroup;
      }

      const map = mapInstanceRef.current;
      const layerGroup = layerGroupRef.current;

      if (!map || !layerGroup) return;

      layerGroup.clearLayers();

      const hasPickup = pickupCoords?.lat != null && pickupCoords?.lng != null;
      const hasDropoff = dropoffCoords?.lat != null && dropoffCoords?.lng != null;

      // Custom circular dots matching SYD map style
      const createDotIcon = (color, isSquare = false) =>
        L.divIcon({
          className: "custom-pin",
          html: `
            <div style="
              width: 14px;
              height: 14px;
              background: ${color};
              border: 2.5px solid #ffffff;
              border-radius: ${isSquare ? "2px" : "50%"};
              box-shadow: 0 2px 6px rgba(0,0,0,0.4);
            "></div>
          `,
          iconSize: [14, 14],
          iconAnchor: [7, 7],
        });

      const pIcon = createDotIcon("#0c1938", false); // Circle dot
      const dIcon = createDotIcon("#0c1938", true);  // Square dot

      const latlngs = [];

      if (hasPickup) {
        const pLatLng = [pickupCoords.lat, pickupCoords.lng];
        latlngs.push(pLatLng);
        L.marker(pLatLng, { icon: pIcon })
          .bindPopup(`<b>Pick-up:</b><br/>${pickupName || "Selected"}`)
          .addTo(layerGroup);
      }

      if (hasDropoff) {
        const dLatLng = [dropoffCoords.lat, dropoffCoords.lng];
        latlngs.push(dLatLng);
        L.marker(dLatLng, { icon: dIcon })
          .bindPopup(`<b>Drop-off:</b><br/>${dropoffName || "Selected"}`)
          .addTo(layerGroup);
      }

      if (hasPickup && hasDropoff) {
        // Draw Navy Route Line matching SYD style
        const polyline = L.polyline(latlngs, {
          color: "#0c1938",
          weight: 4,
          opacity: 0.9,
          lineJoin: "round",
        }).addTo(layerGroup);

        map.fitBounds(polyline.getBounds(), {
          padding: [25, 25],
          maxZoom: 14,
        });
      } else if (hasPickup) {
        map.setView(latlngs[0], 13);
      } else if (hasDropoff) {
        map.setView(latlngs[0], 13);
      } else {
        map.setView(defaultCenter, 11);
      }

      setTimeout(() => {
        map.invalidateSize();
      }, 200);
    });

    return () => {
      isMounted = false;
    };
  }, [pickupCoords, dropoffCoords, pickupName, dropoffName]);

  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div ref={mapContainerRef} className="w-full h-full min-h-[160px] z-0" />
    </div>
  );
}

