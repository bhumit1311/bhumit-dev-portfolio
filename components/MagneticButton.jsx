"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  as = "div",
  children,
  className,
  onClick,
  ...rest
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const MotionComponent = motion[as] ?? motion.div;

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <MotionComponent
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      initial={{ x: 0, y: 0 }}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      onClick={onClick}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
