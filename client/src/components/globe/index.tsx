import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import the Globe component with SSR turned off
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const MyGlobe = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      backgroundColor="rgba(0,0,0,0)" // Set to transparent or any desired background color
      width={dimensions.width}
      height={dimensions.height}
    />
  );
};

export default MyGlobe;
