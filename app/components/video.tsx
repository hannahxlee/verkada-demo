"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});

export default function Video() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const [dimensions, setDimensions] = useState({ circleRadius: 20, width: 300, height: 651 });

  useEffect(() => {
    const updateCirclePosition = () => {
      if (window.innerWidth >= 1025) {
        setDimensions({ circleRadius: 30, width: 390, height: 846 });
      }
    };

    updateCirclePosition()
    window.addEventListener("resize", updateCirclePosition);

    return () => {
      window.removeEventListener("resize", updateCirclePosition);
    };
  }, []);
  
  return (
    <div className="main">
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={dimensions.circleRadius} pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r={dimensions.circleRadius}
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
      <Link href="/capstone" className={`${poppins.variable} font-sans font-bold text-3xl md:text-4xl fixed top-8 right-6 opacity-60`}>HL</Link>
      <ul ref={ref} >
        <li>
          <Image
            src="/SENSOR_HOME.gif"
            alt="HOME"
            width={dimensions.width}
            height={dimensions.height}
            className="rounded-xl"
          />
        </li>
        <li>
          <Image
            src="/SENSOR_DASHBOARDS.gif"
            alt="DASHBOARDS"
            width={dimensions.width}
            height={dimensions.height}
            className="rounded-xl"
          />
        </li>
        <li>
          <Image
            src="/SENSOR_ANALYTICS.gif"
            alt="ANALYTICS"
            width={dimensions.width}
            height={dimensions.height}
            className="rounded-xl"
          />
        </li>
        <li>
          <Image
            src="/SENSOR_CALIBRATION.gif"
            alt="CALIBRATION"
            width={dimensions.width}
            height={dimensions.height}
            className="rounded-xl"
          />
        </li>
      </ul>
    </div>
  );
}
