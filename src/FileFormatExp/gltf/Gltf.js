import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
// import npm from 'npm-commands';


const convertGltfToGlb = (glbFile) => {
  const command = "cd gltf && gltf-pipeline -i scene.gltf -o " + glbFile;
  // npm().run(command);
}

const Model = () => {
  const glbFile = './gltf/glbFile.glb'; // Need to automate the folder creation and storing of file
  convertGltfToGlb(glbFile);
  const { scene } = useGLTF(glbFile);
  return <primitive object={scene} />;
}

const SameAsGlb = () => {
  return (
    <>
      <p> Gltf 3D File is below. Gltf file is converted into Glb file to show as the 3D Image</p>
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

const Gltf = () => {
  return (
    <SameAsGlb />
  );
}



export default Gltf;
