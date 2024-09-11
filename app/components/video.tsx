"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});

export default function Video() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  return (
    <div className="main">
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="20" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="20"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
      <div className={`${poppins.variable} font-sans font-bold text-3xl fixed top-8 right-6 opacity-60`}>HL</div>
      <ul ref={ref} className="mt-36">
        <li>
          <Image
            src="/SENSOR_ANALYTICS.gif"
            alt="HOME"
            width={300}
            height={651}
            className="rounded-xl"
          />
        </li>
        <li>
          <Image
            src="/SENSOR_DASHBOARDS.gif"
            alt="DASHBOARDS"
            width={300}
            height={651}
            className="rounded-xl"
          />
        </li>
        <li>
          <Image
            src="/SENSOR_ANALYTICS.gif"
            alt="ANALYTICS"
            width={300}
            height={651}
            className="rounded-xl"
          />
        </li>
        <li>
          <Image
            src="/SENSOR_CALIBRATION.gif"
            alt="CALIBRATION"
            width={300}
            height={651}
            className="rounded-xl"
          />
        </li>
      </ul>
    </div>
  );
}
