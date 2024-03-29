import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Sphere, OrbitControls } from "@react-three/drei";

const Earth = () => {
  const texture = useLoader(TextureLoader, "./globe.jpg");

  if (!texture) {
    return null; // or return a loading indicator
  }

  return (
    <Sphere args={[1, 32, 32]}>
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
};

const Globe: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <Canvas style={{ background: "#DC143C" }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Earth />
        <OrbitControls />
      </Canvas>
    </div>
  );
};
export default Globe;
