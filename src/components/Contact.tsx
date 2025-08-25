import Image from "next/image";

export function Contact() {
  return (
    <section id="contact" className="relative bg-black text-white min-h-screen">
      {/* Full Width Image */}
      <div className="w-full h-[700px] relative">
        <Image
          src="/contact/pexels-nextvoyage-1481105.jpg"
          alt="Building Image"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 py-16">
        {/* Building Title */}
        <h2
          className="text-4xl font-normal mb-4"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          210 S 12
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
  );
}
