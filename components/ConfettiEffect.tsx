"use client";

import Confetti from "react-confetti";
import { useEffect, useState } from "react";

export default function ConfettiEffect() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <Confetti
      width={dimensions.width}
      height={dimensions.height}
      numberOfPieces={250}
      recycle={false}
      gravity={0.2}
    />
  );
}