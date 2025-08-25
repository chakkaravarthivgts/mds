export function About() {
  return (
    <section
      id="about"
      className="relative bg-white min-h-screen flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* ABOUT Heading */}
        <h2
          className="text-2xl font-normal text-black mb-8 text-center"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          ABOUT
        </h2>

        {/* Main Content */}
        <div
          className="max-w-4xl text-black opacity-60 text-justify mx-auto"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          <p className="text-lg leading-relaxed mb-6">
            Midwood Design Studio was formed to provide a cohesive design vision
            for Midwood&apos;s national portfolio, where all aspects of a
            commercial or residential building&apos;s design can be
            conceptualized and implemented.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Midwood Design Studio also offers design consultation services for
            current or new tenants to meet various needs, including building out
            various office or retail spaces in Midwood&apos;s properties.
          </p>

          <p
            className="text-lg leading-relaxed mb-6"
            style={{ letterSpacing: "-0.003em" }}
          >
            Midwood Design Studio, an in-house interior design firm, is led by
            Shazia Shahid as Principal of Midwood Design Studio. Shahid joined
            Midwood in 2010 and, since then, has overseen the design of some of
            the firm&apos;s most notable commercial and residential developments
            by collaborating with top architects and designers.
          </p>

          <p
            className="text-lg leading-relaxed mb-6"
            style={{ letterSpacing: "0.004em" }}
          >
            These notable projects include The Shops at Sportsmen&apos;s Lodge
            in Studio City, Los Angeles, a 95,000-square-foot open-air community
            gathering place that features top dining, shopping, and wellness
            tenants designed by Gensler; 150 East 78th Street, the sold-out
            luxury condominium development featuring architecture by
            award-winning firm Robert A.M. Stern Architects on NYC&apos;s Upper
            East Side; The Williams, a luxury residential and retail building in
            the heart of Williamsburg, Brooklyn with architecture by Morris
            Adjmi Architects; and a glass enclosed commercial building in the
            heart of Center City Philadelphia, designed by award winning
            architectural firm Bohlin Cywinski Jackson architects, who are known
            for their many iconic buildings including Apple&apos;s glass cube
            store on 5th Avenue in New York.
          </p>

          <p
            className="text-lg leading-relaxed"
            style={{ letterSpacing: "-0.006em" }}
          >
            Shahid has over 25 years of design experience and has worked on
            several marquee buildings. Before joining Midwood, Shahid was AVP at
            Related Companies, designing ground-up luxury rentals and condos.
            Previously, Shahid worked with New York architect and designer
            Costas Kondylis on converting the iconic Plaza Hotel.
          </p>
        </div>
      </div>
    </section>
  );
}
