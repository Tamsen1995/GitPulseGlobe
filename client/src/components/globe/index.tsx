import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import the Globe component with SSR turned off
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const MyGlobe = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [color, setColor] = useState("red");

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  // Define your geolocations here
  const geolocations = [
    { lat: 51.5074, lng: 0.1278 }, // London
    { lat: 40.7128, lng: -74.006 }, // New York
    // Add more geolocations as needed
  ];

  // Convert geolocations to pointsData
  const pointsData = geolocations.map((location, index) => ({
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
