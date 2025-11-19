import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="absolute z-10 w-full">
        <div className="w-full max-w-[1024px] mx-auto px-6 pt-12 flex justify-between items-center">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
          <nav>
            <ul className="flex gap-6 font-semibold text-white uppercase">
              <li className="hover:opacity-80 hover:text-[rgb(255,108,0)] hover:cursor-pointer transition">
                Home
              </li>
              <li className="hover:opacity-80 transition hover:text-[rgb(255,108,0)] hover:cursor-pointer">
                Membership
              </li>
              <li className="hover:opacity-80 transition hover:text-[rgb(255,108,0)] hover:cursor-pointer">
                Book Officials
              </li>
              <li className="hover:opacity-80 transition hover:text-[rgb(255,108,0)] hover:cursor-pointer">
                Events
              </li>
              <li className="hover:opacity-80 transition hover:text-[rgb(255,108,0)] hover:cursor-pointer">
                Contact
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/ref-four.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

        <div className="relative z-10 max-w-3xl text-start">
          <p className="text-[#d57a1f] font-bold mb-6">
            Proudly serving the City of Toronto since 1957*
          </p>
          <h2 className="text-5xl font-extrabold mb-6">
            TORONTO ASSOCIATION of BASKETBALL OFFICIALS
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed mb-10">
            Educated · Trained · Certified · Insured. We are the Toronto
            Association of Basketball Officials, committed to elevating the game
            through professionalism and excellence.
          </p>
          <div className="flex gap-4 justify-start">
            <button className="px-6 py-3 bg-[#d57a1f] text-black font-semibold rounded-xl hover:opacity-80 transition hover:cursor-pointer">
              Become an Official
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-200 rounded-xl hover:bg-black/40 transition hover:cursor-pointer">
              Book Officials
            </button>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-6 py-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="p-6 bg-gray-900 rounded-2xl shadow-md border border-gray-800">
          <h3 className="text-2xl font-bold mb-3">Training & Development</h3>
          <p className=" text-sm">
            Workshops, rule clinics, and on‑court training for officials of all
            levels.
          </p>
        </div>
        <div className="p-6 bg-gray-900 rounded-2xl shadow-md border border-gray-800">
          <h3 className="text-2xl font-bold mb-3">Booking Services</h3>
          <p className=" text-sm">
            Certified and insured referees for leagues, tournaments, and special
            events.
          </p>
        </div>
        <div className="p-6 bg-gray-900 rounded-2xl shadow-md border border-gray-800">
          <h3 className="text-2xl font-bold mb-3">Community</h3>
          <p className=" text-sm">
            A strong network of officials dedicated to upholding the integrity
            of the sport.
          </p>
        </div>
      </section>

      {/* Logos Section */}
      <section className="px-6 py-20 max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-10">Organizations We Serve</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 items-center justify-center">
          <Image src="/Bay-hoops.png" alt="logo" width={100} height={100} />
          <Image src="/BWT.png" alt="logo" width={100} height={100} />
          <Image src="/osba.svg" alt="logo" width={100} height={100} />
          <Image src="/D-League.png" alt="logo" width={100} height={100} />
          <Image src="/CISAA.png" alt="logo" width={100} height={100} />
          <Image src="/SSAF.png" alt="logo" width={100} height={100} />
          <Image src="/TDSB.png" alt="logo" width={100} height={100} />
          <Image src="/OBA.png" alt="logo" width={150} height={150} />
          <Image src="/CB.png" alt="logo" width={150} height={150} />
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start border-t border-gray-800 text-justify">
        {/* Text */}
        <div className="leading-relaxed space-y-6">
          <h3 className="text-4xl font-bold mb-8 text-[rgb(255,108,0)]">
            The Toronto Association of Basketball Officials (TABO) Welcomes You!
          </h3>

          <p>
            TABO is the provincially and nationally sanctioned officiating
            organization for basketball, serving the City of Toronto.
          </p>

          <p>
            As basketball officials, TABO takes pride in officiating all levels,
            using FIBA&apos;s rule set — from elementary schools to adult
            leagues and everything in between.
          </p>

          <p>
            TABO is a not-for-profit, unincorporated association, and governs
            itself via its Constitution, By-Laws, Policies and Procedures.
          </p>

          <div className="mt-10">
            <h4 className="text-xl font-bold text-[rgb(255,108,0)] mb-4">
              TABO is a registered member of:
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#d57a1f] rounded-full"></span>
                Ontario Association of Basketball Officials (OABO)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#d57a1f] rounded-full"></span>
                Ontario Basketball Association (OBA)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#d57a1f] rounded-full"></span>
                Canadian Basketball Officials Commission (CBOC)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#d57a1f] rounded-full"></span>
                Canada Basketball
              </li>
            </ul>
          </div>
        </div>

        {/* Image / logos collab style */}
        <div className="flex flex-col gap-8 items-center justify-center">
          <div className="w-full h-80 bg-gray-900 rounded-2xl border border-gray-800 flex items-center justify-center text-lg overflow-hidden">
            <Image
              src="/ref-two.webp"
              className="w-full h-full object-cover"
              alt="refs"
              width={400}
              height={400}
            />
          </div>

          <div className="w-full grid grid-cols-2 gap-6 items-center justify-center">
            <div className="flex justify-center">
              <Image src="/OABO.webp" alt="logo" width={150} height={150} />
            </div>
            <div className="flex justify-center">
              <Image src="/CBOC.png" alt="logo" width={120} height={120} />
            </div>
            <div className="flex justify-center">
              <Image src="/OBA.png" alt="logo" width={150} height={150} />
            </div>
            <div className="flex justify-center">
              <Image src="/CB.png" alt="logo" width={150} height={150} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 border-t border-gray-800">
        <p>
          © {new Date().getFullYear()} Toronto Association of Basketball
          Officials. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
