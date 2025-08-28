"use client";

import { Nav } from "@/components/Nav";
import Link from "next/link";

const portfolioCategories = [
  {
    id: "interior-design",
    title: "INTERIOR DESIGN",
    description: "Creating beautiful, functional spaces that inspire",
    image: "/portfolio/elegant-black-minimal-interior-design.jpg",
  },
  {
    id: "layout-planning",
    title: "LAYOUT PLANNING",
    description: "Strategic space optimization for modern living",
    image: "/portfolio/modern-styled-entryway.jpg",
  },
  {
    id: "3d-modeling",
    title: "3D MODELING",
    description: "Bringing concepts to life with digital precision",
    image: "/portfolio/armchair-green-living-room-with-copy-space.jpg",
  },
  {
    id: "renderings",
    title: "RENDERINGS",
    description: "Photorealistic visualizations for presentations",
    image: "/portfolio/spacejoy-YI2YkyaREHk-unsplash.jpg",
  },
];

export default function PortfolioIndexPage() {
  return (
    <div className="relative bg-black text-white min-h-screen">
      <Nav />

      <div className="pt-24 pb-16">
        <div className="max-w-[90rem] mx-auto px-6">
          {/* Header */}
          <div className="mb-16">
            <h1
              className="text-4xl sm:text-5xl font-normal mb-6"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              PORTFOLIO
            </h1>
            <p
              className="text-xl text-white/60 max-w-2xl"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              Explore our diverse range of design services and projects
            </p>
          </div>

          {/* Portfolio Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioCategories.map((category) => (
              <Link
                key={category.id}
                href={`/portfolio/${category.id}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden mb-4">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <h3
                  className="text-xl font-normal mb-2 group-hover:text-white/80 transition-colors"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  {category.title}
                </h3>
                <p
                  className="text-white/60 group-hover:text-white/80 transition-colors"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
