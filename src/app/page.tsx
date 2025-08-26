"use client";

import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Nav } from "@/components/Nav";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { LoadingScreen } from "@/components/LoadingScreen";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <LoadingScreen isLoading={isLoading} />
      <div
        className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
      >
        <Nav />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}
