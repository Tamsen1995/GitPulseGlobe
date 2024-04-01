import React, { useState, useEffect, useRef } from "react";
import Globe from "react-globe.gl";

// Gen random data
const N = 10;
const gData = [...Array(N).keys()].map(() => ({
  lat: (Math.random() - 0.5) * 180,
  lng: (Math.random() - 0.5) * 360,
  maxR: Math.random() * 20 + 3,
  propagationSpeed: (Math.random() - 0.5) * 20 + 1,
  repeatPeriod: Math.random() * 2000 + 200,
}));

const colorInterpolator = (t: number): string =>
  `rgba(255,100,50,${Math.sqrt(1 - t)})`;

const World = () => {
  const globeEl = useRef<any | null>(null);

  // Effects
  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 1.5; // Adjust the speed as needed
    }
  }, []);

  return (
    <div className="relative">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        ringsData={gData}
        ringColor={() => colorInterpolator}
        ringMaxRadius="maxR"
        ringPropagationSpeed="propagationSpeed"
        ringRepeatPeriod="repeatPeriod"
      />
      <div className="absolute top-0 right-0 w-64 h-screen border-4 bg-opacity-50">
        {/* Content of the right-hand side window goes here */}
      </div>
    </div>
  );
};

export default World;
