import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Universe = (props) => {
  const universe = useGLTF("/universe/scene.gltf");
  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <group ref={ref} {...props}>
      <primitive
        object={universe.scene}
        scale={0.015 * 600} // 👈 Scale it down significantly
        position={[0, -13, -1]} // 👈 Pull it back slightly into view
      />
    </group>
  );
};

const UniverseCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 2], fov: 50 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={1.5} />
        <Suspense fallback={null}>
          <Universe />
        </Suspense>
        <Preload all />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default UniverseCanvas;
