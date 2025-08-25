"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface TabContent {
  id: string;
  title: string;
  textContent: string;
  images: string[];
}

const portfolioData: TabContent[] = [
  {
    id: "interior-design",
    title: "INTERIOR DESIGN",
    textContent:
      "We develop and acquire multifamily buildings that respect the history and character of their neighborhoods. layouts, amenities, quality and livability.",
    images: [
      "/portfolio/elegant-black-minimal-interior-design.jpg",
      "/portfolio/modern-styled-entryway.jpg",
      "/portfolio/armchair-green-living-room-with-copy-space.jpg",
      "/portfolio/spacejoy-YI2YkyaREHk-unsplash.jpg",
      "/portfolio/aaron-huber-G7sE2S4Lab4-unsplash.jpg",
      "/portfolio/modern-styled-entryway (1).jpg",
    ],
  },
  {
    id: "layout-planning",
    title: "LAYOUT PLANNING",
    textContent:
      "Strategic space planning and layout optimization for maximum functionality and flow. Creating efficient, beautiful spaces that work for modern living.",
    images: [
      "/portfolio/modern-styled-entryway.jpg",
      "/portfolio/armchair-green-living-room-with-copy-space.jpg",
      "/portfolio/spacejoy-YI2YkyaREHk-unsplash.jpg",
      "/portfolio/aaron-huber-G7sE2S4Lab4-unsplash.jpg",
      "/portfolio/elegant-black-minimal-interior-design.jpg",
      "/portfolio/modern-styled-entryway (1).jpg",
    ],
  },
  {
    id: "3d-modeling",
    title: "3D MODELING",
    textContent:
      "Advanced 3D modeling and visualization services. Bringing concepts to life with detailed digital representations and immersive experiences.",
    images: [
      "/portfolio/armchair-green-living-room-with-copy-space.jpg",
      "/portfolio/spacejoy-YI2YkyaREHk-unsplash.jpg",
      "/portfolio/aaron-huber-G7sE2S4Lab4-unsplash.jpg",
      "/portfolio/elegant-black-minimal-interior-design.jpg",
      "/portfolio/modern-styled-entryway.jpg",
      "/portfolio/modern-styled-entryway (1).jpg",
    ],
  },
  {
    id: "renderings",
    title: "RENDERINGS",
    textContent:
      "Photorealistic renderings and visualizations that showcase design intent. High-quality imagery for presentations and marketing materials.",
    images: [
      "/portfolio/spacejoy-YI2YkyaREHk-unsplash.jpg",
      "/portfolio/aaron-huber-G7sE2S4Lab4-unsplash.jpg",
      "/portfolio/elegant-black-minimal-interior-design.jpg",
      "/portfolio/modern-styled-entryway.jpg",
      "/portfolio/armchair-green-living-room-with-copy-space.jpg",
      "/portfolio/modern-styled-entryway (1).jpg",
    ],
  },
];

export function Portfolio() {
  const [activeTab, setActiveTab] = useState(0);

  const nextTab = () => {
    setActiveTab((prev) => (prev + 1) % portfolioData.length);
  };

  const prevTab = () => {
    setActiveTab(
      (prev) => (prev - 1 + portfolioData.length) % portfolioData.length
    );
  };

  const currentContent = portfolioData[activeTab];

  return (
    <section id="portfolio" className="relative bg-white min-h-screen py-16">
      <div className="max-w-[90rem] mx-auto px-6">
        {/* PORTFOLIO Heading and Tabs */}
        <div className="flex items-center justify-between mb-12">
          <h2
            className="text-2xl font-normal text-black"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            PORTFOLIO
          </h2>

          {/* Tab Navigation */}
          <div className="flex items-center gap-8">
            {portfolioData.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`text-base font-medium transition-all duration-300 ${
                  activeTab === index
                    ? "text-black border-b-2 border-black"
                    : "text-gray-500 hover:text-black"
                }`}
                style={{
                  fontFamily: "Helvetica, Arial, sans-serif",
                  letterSpacing:
                    index === 0
                      ? "-0.05em"
                      : index === 1
                        ? "-0.03em"
                        : index === 2
                          ? "-0.08em"
                          : "-0.06em",
                }}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-3 gap-12 items-start">
          {/* Text Content - 1/3 width */}
          <div className="col-span-1">
            <p
              className="text-lg leading-relaxed text-black opacity-60"
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                letterSpacing: "-0.076em",
              }}
            >
              {currentContent.textContent}
            </p>
          </div>

          {/* Image Grid - 2/3 width with arrows */}
          <div className="col-span-2 relative">
            {/* Left Arrow */}
            <button
              onClick={prevTab}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 border border-gray-200"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Image Grid */}
            <div className="grid grid-cols-3 gap-8">
              {currentContent.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200"
                >
                  <img
                    src={image}
                    alt={`Portfolio image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextTab}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 border border-gray-200"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
