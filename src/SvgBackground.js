import React from "react";

const SvgBackground = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,
    }}
  >
    <path
      fill="#ff7e5f"
      fillOpacity="0.5"
      d="M0,128L30,122.7C60,117,120,107,180,106.7C240,107,300,117,360,144C420,171,480,213,540,213.3C600,213,660,171,720,160C780,149,840,171,900,176C960,181,1020,171,1080,138.7C1140,107,1200,53,1260,32C1320,11,1380,21,1410,26.7L1440,32L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
    >
      <animate
        attributeName="d"
        dur="10s"
        repeatCount="indefinite"
        values="
        M0,128L30,122.7C60,117,120,107,180,106.7C240,107,300,117,360,144C420,171,480,213,540,213.3C600,213,660,171,720,160C780,149,840,171,900,176C960,181,1020,171,1080,138.7C1140,107,1200,53,1260,32C1320,11,1380,21,1410,26.7L1440,32L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z;
        M0,128L30,133.3C60,139,120,149,180,165.3C240,181,300,203,360,218.7C420,235,480,245,540,245.3C600,245,660,235,720,213.3C780,192,840,160,900,154.7C960,149,1020,171,1080,176C1140,181,1200,160,1260,160C1320,160,1380,192,1410,213.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
      />
    </path>
  </svg>
);

export default SvgBackground;