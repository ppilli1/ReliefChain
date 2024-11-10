export default function ImageSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <defs>
        <radialGradient id="sphereGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#8B0000">
            <animate
              attributeName="stop-color"
              values="#8B0000;#B22222;#FF4500;#8B0000"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="70%" stopColor="#B22222">
            <animate
              attributeName="stop-color"
              values="#B22222;#FF6347;#8B0000;#B22222"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#FF4500">
            <animate
              attributeName="stop-color"
              values="#FF4500;#FF6347;#8B0000;#FF4500"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
        </radialGradient>
      </defs>

      <circle cx="50" cy="50" r="40" fill="url(#sphereGradient)">
        <animate
          attributeName="r"
          values="40;45;40"
          dur="1.5s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
        />
      </circle>
    </svg>
  );
}
