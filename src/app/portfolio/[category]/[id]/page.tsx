"use client";

import { Nav } from "@/components/Nav";
import { Contact } from "@/components/Contact";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface PortfolioItem {
  id: string;
  title: string;
  textContent: string;
  images: string[];
}

const portfolioData: PortfolioItem[] = [
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

export default function PortfolioItemPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [categoryTitle, setCategoryTitle] = useState<string>("");
  const [categoryDescription, setCategoryDescription] = useState<string>("");

  useEffect(() => {
    if (params.category && params.id) {
      const category = portfolioData.find(
        (item) => item.id === params.category
      );
      if (category) {
        const imageIndex = parseInt(params.id as string) - 1;
        if (imageIndex >= 0 && imageIndex < category.images.length) {
          setSelectedImage(category.images[imageIndex]);
          setCategoryTitle(category.title);
          setCategoryDescription(category.textContent);
        }
      }
    }
  }, [params.category, params.id]);

  if (!selectedImage) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-black text-white min-h-screen">
      <Nav />

      {/* Back Button */}
      <div className="fixed top-24 left-6 z-40">
        <Link
          href="/#portfolio"
          className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white hover:bg-white/30 transition-all duration-300"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Portfolio
        </Link>
      </div>

      {/* Contact Section with Selected Image as Background */}
      <section
        id="contact"
        className="relative bg-black text-white min-h-screen"
      >
        {/* Full Width Image - Using Selected Portfolio Image */}
        <div className="w-full h-[700px] relative">
          <img
            src={selectedImage}
            alt="Portfolio Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-[90rem] mx-auto px-6 py-16">
          {/* Building Title */}
          <h2
            className="text-4xl font-normal mb-4"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            {categoryTitle}
          </h2>

          {/* Address */}
          <p
            className="text-xl font-normal mb-8"
            style={{
              fontFamily: "Helvetica, Arial, sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            210 S 12th St, Philadelphia, PA 19107
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
                A 31-story luxury rental tower in Midtown Village designed by
                Rogers Stirk Harbour +
              </h3>

              <div className="opacity-50">
                <p
                  className="text-2xl leading-relaxed mb-4"
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    letterSpacing: "0.01025em",
                  }}
                >
                  to premier shopping, dining, and cultural destinations, the
                  building has redefined the Philadelphia skyline and is one of
                  the best-performing
                </p>
                <p
                  className="text-2xl leading-relaxed"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  residential buildings in Philadelphia.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Three Images with Specific Widths - Full Width */}
        <div className="w-full ">
          <div className="flex gap-6">
            {/* Left Image - 1/4 width */}
            <div className="w-1/4 aspect-[2/1] bg-gray-800 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <img
                  src="/portfolio/spacejoy-YI2YkyaREHk-unsplash.jpg"
                  alt="Image 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Center Image - 1/2 width */}
            <div className="w-1/2 aspect-[2/1] bg-gray-800 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <img
                  src="/portfolio/elegant-black-minimal-interior-design.jpg"
                  alt="Image 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Image - 1/4 width */}
            <div className="w-1/4 aspect-[2/1] bg-gray-800 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <img
                  src="/portfolio/aaron-huber-G7sE2S4Lab4-unsplash.jpg"
                  alt="Image 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
