import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="h-screen relative overflow-hidden pt-20">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
