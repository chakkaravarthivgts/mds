import Image from "next/image";

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-red-600 z-[9999] flex items-center justify-center">
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
