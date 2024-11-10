export default function ImageSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <defs>
        <radialGradient id="sphereGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ff4d4d">
            <animate
              attributeName="stop-color"
              values="#ff4d4d;#ff6666;#ff3300;#cc3300;#ff4d4d"
              dur="5s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="70%" stopColor="#ff3300">
            <animate
              attributeName="stop-color"
              values="#ff3300;#ff6600;#cc2900;#cc0000;#ff3300"
              dur="5s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#cc0000">
            <animate
              attributeName="stop-color"
              values="#cc0000;#990000;#660000;#330000;#cc0000"
              dur="5s"
              repeatCount="indefinite"
            />
          </stop>
        </radialGradient>
      </defs>

      <circle cx="50" cy="50" r="40" fill="url(#sphereGradient)">
        <animate
          attributeName="r"
          values="40;42;40"
          dur="2s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
        />
      </circle>
    </svg>
  );
}
