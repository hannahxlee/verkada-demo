"use client";
import { Poppins } from "next/font/google";
import Video from "@/app/components/video";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});

export default function Home() {
  return (
    <div className="flex flex-col items-center py-24 md:py-28 overflow-hidden">
      <div className="text-center text-navy md:space-y-2">
        <div
          className={`${poppins.variable} font-sans font-bold text-xl md:text-3xl`}
        >
          Sensor WebFusionX
        </div>
        <div className={`${poppins.variable} font-sans text-sm md:text-lg`}>
          home &#183; dashboards &#183; analytics &#183; calibrations
        </div>
      </div>
      <Video />
    </div>
  );
}
