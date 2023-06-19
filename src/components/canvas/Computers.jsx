import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Preload, useAnimations, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const [index, setIndex] = useState(2);
  const computer = useGLTF("./Avatar/MaoAvatarAnimation.glb");
  const { actions, names } = useAnimations(computer.animations, computer.scene);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    actions[names[index]]?.reset().fadeIn(0.5).play();

    return () => {
      actions[names[index]]?.fadeOut(0.5);
    };
  }, [index, actions, names]);

  return (
    <group>
    <primitive
      object={computer.scene}
      scale={2}
      position-y={-2.5}
      rotation-y={-0.7}
      position-x={[4.5]}
    />

    <Html position={[-4.4, 0, 0]}>
      <button
        className="font-black text-[#915EFF] lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[20px] lg:leading-[98px] mt-2 w-[100px] p-2 rounded-lg text-xs sm:text-lg sm:w-[500px] hover:bg-white hover:scale-110 duration-500"
        onClick={() => {
          setIndex((index + 1) % names.length);
          setIsClicked(!isClicked);
        }}
      >
        {isClicked ? "Impress Me!" : "I can fly!"}
      </button>
    </Html>
  </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas dpr={[0, 2]}>
      <ambientLight intensity={0.5} />
      <pointLight position={[1, 1, 1]} />
      <OrbitControls enabled={false} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;