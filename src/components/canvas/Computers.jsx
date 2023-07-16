import React, { Suspense,useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, useAnimations, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const [index, setIndex] = useState(0);
  const computer = useGLTF("./Avatar/Mao.glb");
  const { actions, names } = useAnimations(computer.animations, computer.scene);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const animationName = names[index];
    const animationAction = actions[animationName];

    if (animationAction) {
      animationAction.reset().fadeIn(0.5).play();

      const maxIterations = 10;
      const animationDuration = animationAction.getClip().duration;
      const framesPerSecond = 120;
      const framesPerIteration = Math.floor(framesPerSecond * animationDuration);
      const frameDuration = 1 / framesPerSecond;
      const iterationDuration = framesPerIteration * frameDuration;

      let currentIteration = 0;
      let frame = 0;

      const animate = () => {
        if (currentIteration < maxIterations) {
          const time = currentIteration * iterationDuration + frame * frameDuration;
          animationAction.time = time % animationDuration;
          animationAction.paused = false;
          frame++;

          if (frame >= framesPerIteration) {
            frame = 0;
            currentIteration++;
          }

          requestAnimationFrame(animate);
        } else {
          animationAction.fadeOut(0.5);
        }
      };

      animate();
    }

    return () => {
      if (animationAction) {
        animationAction.fadeOut(0.5);
      }
    };
  }, [index, actions, names]);

  return (
    <>
      <primitive
        object={computer.scene}
        scale={isMobile ? 2 : 2}
        position={isMobile ? [0.2, -4.7, -2] : [4.5, -2.5, 0.1]}
        rotation={isMobile ? [0, 0, 0] : [0.1, -0.7, 0]}
      />

      <Html position={isMobile ? [1, -2, 0] : [-4.4, -1, 0]}>
        <button
          className="font-black text-white-100 lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[20px] lg:leading-[98px] mt-2 w-[100px] p-2 rounded-lg text-xs sm:text-lg sm:w-[500px] hover:bg-violet-700 hover:scale-110 duration-500"
          onClick={() => {
            setIndex((index + 1) % names.length);
            setIsClicked(!isClicked);
          }}
        >
          {isClicked ? "Impress Me!" : "I can fly!"}
        </button>
      </Html>
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 500);
      setIsTablet(width > 500 && width <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Canvas dpr={isMobile || isTablet ? [0, 1] : [0, 2]}>
      <ambientLight intensity={0.5} />
      <pointLight position={[1, 1, 1]} />
      <OrbitControls enabled={false} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile || isTablet} />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;