import React, { useState, useEffect, FC, useRef } from "react";
import Globe from "react-globe.gl";

interface GeoLocation {
  lat: number;
  lng: number;
}

interface PointData extends GeoLocation {
  color: string;
  altitude: number;
  radius: number;
}

const MyGlobe: FC = () => {
  // State and refs
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const [color, setColor] = useState<string>("red");
  const globeEl = useRef<any | null>(null);

  // Effects
  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 1.5; // Adjust the speed as needed
    }
  }, []);

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  // Data
  const geolocations: GeoLocation[] = [
    { lat: 51.5074, lng: 0.1278 }, // London
    { lat: 40.7128, lng: -74.006 }, // New York
    // Add more geolocations as needed
  ];

  const pointsData: PointData[] = geolocations.map((location) => ({
    lat: location.lat,
    lng: location.lng,
    color: color,
    altitude: 0.1,
    radius: 0.5,
  }));

  // Handlers
  const handleClick = () => {
    setColor(color === "red" ? "blue" : "red");
  };

  // Render
  return (
    <div onClick={handleClick}>
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundColor="rgba(9, 8, 23, 1)"
        width={dimensions.width}
        height={dimensions.height}
        pointsData={pointsData}
        pointAltitude="altitude"
        pointColor="color"
        pointRadius="radius"
      />
    </div>
  );
};

export default MyGlobe;
