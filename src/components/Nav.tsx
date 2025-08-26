"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export function Nav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      if (sectionId === "contact") {
        // For contact, scroll to the text content area but a bit lower
        const contentElement = element.querySelector(".relative.z-10");
        if (contentElement) {
          const rect = contentElement.getBoundingClientRect();
          const scrollTop = window.pageYOffset + rect.top - 150; // 150px offset from top
          window.scrollTo({
            top: scrollTop,
            behavior: "smooth",
          });
        } else {
          // Fallback to section if content element not found
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else if (sectionId === "portfolio") {
        // For portfolio, scroll a bit lower than start
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset + rect.top - 100; // 100px offset from top
        window.scrollTo({
          top: scrollTop,
          behavior: "smooth",
        });
      } else {
        // For other sections, use default behavior
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    closeDrawer();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-md border-b border-white/20">
        {/* Left side - Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="MDS4 Logo"
            width={60}
            height={60}
            className="w-10 h-10"
          />
        </div>

        {/* Right side - Menu Button */}
        <Button
          variant="ghost"
          onClick={toggleDrawer}
          className="text-white font-semibold tracking-wide border border-transparent hover:border-white/40 hover:bg-white/10 hover:text-white"
        >
          Menu
        </Button>
      </nav>

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-l border-white/20 transform transition-transform duration-300 ease-in-out z-40 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <Button
            variant="ghost"
            onClick={closeDrawer}
            className="text-white hover:bg-white/10 rounded-full w-10 h-10 p-0"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>

        {/* Drawer Content */}
        <div className="h-[calc(100%-88px)] px-6 pb-6 flex flex-col">
          {/* Top: Navigation + Social */}
          <div className="flex-1 overflow-y-auto pr-1 space-y-8">
            {/* Navigation Links */}
            <div className="space-y-4">
              <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider">
                Navigation
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="block text-white hover:text-white/80 transition-colors duration-200 text-lg font-medium text-left w-full"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-white hover:text-white/80 transition-colors duration-200 text-lg font-medium text-left w-full"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="block text-white hover:text-white/80 transition-colors duration-200 text-lg font-medium text-left w-full"
                >
                  Portfolio
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                >
                  <span className="text-white text-xs font-medium">FB</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                >
                  <span className="text-white text-xs font-medium">IG</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom: Contact pinned */}
          <div className="pt-6 border-t border-white/10">
            <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-3">
              Contact
            </h3>
            <div className="space-y-2">
              <p className="text-white/80 text-sm">
                210 S 12th St, Philadelphia, PA 19107
              </p>
              <p className="text-white/80 text-sm">
                info@midwooddesignstudio.com
              </p>
              <p className="text-white/80 text-sm">+1 (555) 123-4567</p>
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-3 w-full text-center text-white/90 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-md py-2 transition-colors"
              >
                Go to Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black/50 z-30" onClick={closeDrawer} />
      )}
    </>
  );
}
