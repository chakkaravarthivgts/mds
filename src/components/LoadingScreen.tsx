import Image from "next/image";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setIsMounted(false), 500);
      return () => clearTimeout(timer);
    } else {
      // When entering loading again, ensure it's mounted
      setIsMounted(true);
    }
  }, [isLoading]);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        isLoading
          ? "opacity-100 bg-red-600"
          : "opacity-0 bg-red-600 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center">
        <Image
          src="/logo.png"
          alt="MDS4 Logo"
          width={300}
          height={300}
          className="w-50 h-50"
        />
      </div>
    </div>
  );
}
