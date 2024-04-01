import React, { useState, useEffect, FC } from "react";
import dynamic from "next/dynamic";

// Dynamically import the Globe component with SSR turned off
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

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
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const [color, setColor] = useState<string>("red");

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  // Define your geolocations here
  const geolocations: GeoLocation[] = [
    { lat: 51.5074, lng: 0.1278 }, // London
    { lat: 40.7128, lng: -74.006 }, // New York
    // Add more geolocations as needed
  ];

  // Convert geolocations to pointsData
  const pointsData: PointData[] = geolocations.map((location) => ({
    lat: location.lat,
    lng: location.lng,
    color: color,
    altitude: 0.1,
    radius: 0.5,
  }));

  const handleClick = () => {
    console.log("Clicked!");
    // Change color on click
    setColor(color === "red" ? "blue" : "red");
  };

  return (
    <div onClick={handleClick}>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundColor="rgba(0,0,0,1)" // Set to black
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
