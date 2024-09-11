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
    <div className="flex flex-col items-center py-24 overflow-hidden">
      <div className="text-center text-navy">
        <div className={`${poppins.variable} font-sans font-bold text-xl`}>Sensor WebFusionX</div>
        <div className={`${poppins.variable} font-sans`}>BY HANNAH LEE</div>
      </div>
      <Video />
    </div>
  );
}
