import { useEffect } from "react";
import Tween, { Linear } from 'gsap'

// Resource: https://codepen.io/Fieve/pen/dVROEw?editors=1010

const plasmaEffect = function () {
  const plasmaBubbles = document.querySelectorAll('.plasma-bubble');
  const maxDisplacement = 200; // percentage of the bubble's size
  const maxDuration = 3; // in seconds
  const minDuration = 1; // in seconds

  [].forEach.call(plasmaBubbles, function(bubble) {
    const plasma = function (bubble) {
      const randomT = Math.random() * (maxDuration - minDuration) + minDuration;
      const randomX = Math.random() * (maxDisplacement + maxDisplacement) - maxDisplacement;
      const randomY = Math.random() * (maxDisplacement + maxDisplacement) - maxDisplacement;
      Tween.to(bubble, randomT, {
        xPercent:randomX,
        yPercent:randomY,
        ease:Linear.easeNone,
        onComplete: function(){
          plasma(bubble);
        }
      });
    }
    plasma(bubble);
  });
}

function PlasmaEffect() {
  useEffect(() => {
    plasmaEffect();
  }, [])

  return <div className="plasma">
    <svg
      width={250}
      height={250}
      viewBox="0 0 250 250"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <defs>
        <filter id="plasma">
          <feGaussianBlur
            in="SourceGraphic"
            colorInterpolationFilters="sRGB"
            stdDeviation={30}
            result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -16"
            result="plasma" />
          <feBlend in2="SourceGraphic" in="plasma" />
        </filter>
      </defs>
      <g style={{ filter: "url(#plasma)" }}>
        <circle
          cx={125}
          cy={125}
          r={40}
          stroke="#0070FF"
          strokeWidth={10}
          fill="#b390d1"
          className="plasma-bubble" />
        <circle
          cx={125}
          cy={125}
          r={40}
          stroke="#0070FF"
          strokeWidth={5}
          fill="#00FFDD"
          className="plasma-bubble" />
        <circle
          cx={125}
          cy={125}
          r={40}
          stroke="#9900ff"
          strokeWidth={5}
          fill="#b390d1"
          className="plasma-bubble" />
        <circle
          cx={125}
          cy={125}
          r={40}
          stroke="#9900ff"
          strokeWidth={5}
          fill="#00FFDD"
          className="plasma-bubble" />
        <circle
          cx={125}
          cy={125}
          r={40}
          stroke="#9900ff"
          strokeWidth={5}
          fill="#b390d1"
          className="plasma-bubble" />
        <circle
          cx={125}
          cy={125}
          r={40}
          stroke="#9900ff"
          strokeWidth={5}
          fill="#00FFDD"
          className="plasma-bubble" />
        <circle
          cx={125}
          cy={125}
          r={135}
          stroke="#9900ff"
          strokeWidth={9}
          fill="rgba(0,0,0,0)" />
        <circle
          cx={125}
          cy={125}
          r={40}
          stroke="#9900ff"
          strokeWidth={5}
          fill="#b390d1"
          className="plasma-bubble" />
      </g>
    </svg>
  </div>;
}

export default PlasmaEffect