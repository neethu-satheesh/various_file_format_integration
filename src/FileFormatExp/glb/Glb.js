import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import file from './spongebob.glb';

const Model = () => {
  const { scene } = useGLTF(file);
  return <primitive object={scene} />;
}

const Glb = () => {
  return (
    <>
      <p> Glb 3D Image is below</p>
      <Canvas pixelRatio={[1, 2]} camera={{ position: [-10, 15, 15], fov: 50 }}>
        
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default Glb;
