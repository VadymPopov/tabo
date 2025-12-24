import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg/1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

        <div className="relative z-10 max-w-3xl text-start">
          <p className="text-[#d57a1f] font-bold mb-6">
            Proudly serving the City of Toronto since 1957*
          </p>
          <h2 className="text-5xl font-extrabold mb-6">
            TORONTO ASSOCIATION of BASKETBALL OFFICIALS
          </h2>
          <p className="text-[#d57a1f] font-bold mb-6">
            Educated · Trained · Certified · Insured.
          </p>
          <p className="text-gray-200 text-lg leading-relaxed mb-10">
            We are the Toronto Association of Basketball Officials, committed to
            elevating the game through professionalism and excellence.
          </p>
          <div className="flex gap-4 justify-start">
            <Link
              href="/membership"
              className="px-6 py-3 bg-[#d57a1f] text-black font-semibold rounded-xl hover:opacity-80 transition hover:cursor-pointer"
            >
              Become an Official
            </Link>
            <Link
              href="/officials"
              className="px-6 py-3 border border-gray-300 text-gray-200 rounded-xl hover:bg-black/40 transition hover:cursor-pointer"
            >
              Book Officials
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 bg-[#d57a1f] text-black font-semibold rounded-xl hover:opacity-80 transition hover:cursor-pointer"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-gray-300 text-gray-200 rounded-xl hover:bg-black/40 transition hover:cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
    </>
  );
}
