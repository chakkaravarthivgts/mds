"use client";

import { Nav } from "./Nav";
import Image from "next/image";
import Link from "next/link";

interface PortfolioLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  mainImage: string;
  leftImage: string;
  centerImage: string;
  rightImage: string;
}

export function PortfolioLayout({
  title,
  subtitle,
  description,
  mainImage,
  leftImage,
  centerImage,
  rightImage,
}: PortfolioLayoutProps) {
  return (
    <div className="relative bg-black text-white min-h-screen">
      {/* Navigation */}
      <Nav />

      {/* Full Width Image */}
      <div className="w-full h-[700px] relative">
        <Image src={mainImage} alt={title} fill className="object-cover" />
      </div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 py-16">
        {/* Building Title */}
        <h2
          className="text-4xl font-normal mb-4"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          {title}
        </h2>

        {/* Address */}
        <p
          className="text-xl font-normal mb-8"
          style={{
            fontFamily: "Helvetica, Arial, sans-serif",
            letterSpacing: "0.01em",
          }}
        >
          {subtitle}
        </p>

        {/* Divider Line */}
        <div className="w-80 h-px bg-white opacity-25 mb-12"></div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-16">
          {/* Building Description */}
          <div className="lg:col-span-1">
            <h3
              className="text-2xl font-normal mb-6"
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                letterSpacing: "0.01em",
              }}
            >
              {description}
            </h3>
          </div>
        </div>
      </div>

      {/* Three Images with Specific Widths - Full Width */}
      <div className="w-full">
        <div className="flex gap-6">
          {/* Left Image - 1/4 width */}
          <div className="w-1/4 aspect-[2/1] bg-gray-800 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
              <img
                src={leftImage}
                alt="Left Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Image - 1/2 width */}
          <div className="w-1/2 aspect-[2/1] bg-gray-800 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
              <img
                src={centerImage}
                alt="Center Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Image - 1/4 width */}
          <div className="w-1/4 aspect-[2/1] bg-gray-800 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
              <img
                src={rightImage}
                alt="Right Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Navigation */}
      <div className="max-w-[90rem] mx-auto px-6 py-16">
        <div className="flex flex-wrap items-center gap-4 sm:gap-8 justify-center">
          <Link
            href="/portfolio/interior-design"
            className="text-sm sm:text-base tracking-wide transition-colors duration-200 text-white/60 hover:text-white"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            INTERIOR DESIGN
          </Link>
          <Link
            href="/portfolio/layout-planning"
            className="text-sm sm:text-base tracking-wide transition-colors duration-200 text-white/60 hover:text-white"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            LAYOUT PLANNING
          </Link>
          <Link
            href="/portfolio/3d-modeling"
            className="text-sm sm:text-base tracking-wide transition-colors duration-200 text-white/60 hover:text-white"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            3D MODELING
          </Link>
          <Link
            href="/portfolio/renderings"
            className="text-sm sm:text-base tracking-wide transition-colors duration-200 text-white/60 hover:text-white"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            RENDERINGS
          </Link>
        </div>
      </div>
    </div>
  );
}
