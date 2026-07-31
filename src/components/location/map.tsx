"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import MapboxMap, { Marker } from "react-map-gl/mapbox";
import LiveClock from "@/components/location/live-clock";

interface MapPropsType {
  location: string;
  timeZone: string;
  pillText: string;
  centerLat: number;
  centerLng: number;
  markerLat: number;
  markerLng: number;
  zoom?: number;
}

export default function Map({
  location,
  timeZone,
  pillText,
  centerLat,
  centerLng,
  markerLat,
  markerLng,
  zoom = 10,
}: MapPropsType) {
  return (
    <div className="bg-card relative flex h-85.75 w-87.5 flex-col justify-between overflow-hidden rounded-3xl p-4">
      <MapboxMap
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        initialViewState={{ longitude: centerLng, latitude: centerLat, zoom }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        attributionControl={false}
        style={{ position: "absolute", inset: 0 }}
      >
        <Marker longitude={markerLng} latitude={markerLat}>
          <div className="relative flex h-6 w-6 items-center justify-center">
            <div className="absolute h-full w-full rounded-full bg-blue-500/30" />
            <div className="relative h-3 w-3 rounded-full border-2 border-white bg-blue-500 shadow-md" />
          </div>
        </Marker>
      </MapboxMap>

      <span className="relative z-10 inline-block w-fit rounded-full bg-white/90 px-3 py-1 font-sans text-base font-medium shadow-md dark:bg-neutral-900/80 dark:text-white">
        {pillText}
      </span>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-black/85 to-transparent" />

      <div className="relative z-10 font-sans text-base">
        <p className="font-medium text-white">{location}</p>
        <p className="font-normal text-white/70">
          <LiveClock timeZone={timeZone} />
        </p>
      </div>
    </div>
  );
}
