import dynamic from "next/dynamic";
import React from "react";

const DynamicGlobe = dynamic(() => import("@/components/globe"), {
  ssr: false,
});

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <DynamicGlobe />
    </div>
  );
};

export default Home;
