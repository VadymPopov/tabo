import ClientLogos from '@/components/ClientLogos';
import PartnerLogos from '@/components/PartnerLogos';

import { Mail } from 'lucide-react';
import Image from 'next/image';

export default function page() {
  const executives = [
    {
      name: 'George Postalian',
      title: 'Interim President',
      email: 'george.postalian@rogers.com',
    },
    {
      name: 'Tony Luccisano',
      title: 'Membership Liaison Officer',
      email: 'tonylucc@gmail.com',
    },
    {
      name: 'Tim Laurain',
      title: 'Interim Vice President & Resource Officer',
      email: 'timlaurain@rogers.com',
    },
    {
      name: 'Oggie Sokolovic',
      title: 'Education Officer & Interpreter',
      email: 'oggie.sokolovic@gmail.com',
    },
    {
      name: 'Maria Lopez',
      title: 'Treasurer',
      email: 'tabotreasurer@gmail.com',
    },
    {
      name: 'Marlon Hemmings',
      title: 'Secretary',
      email: 'mohemmings@gmail.com',
    },
  ];

  return (
    <div className="text-lg">
      {/* Hero */}

      <section
        className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg/2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

        <div className="relative z-10 max-w-3xl text-start">
          <h2 className="text-5xl font-extrabold mb-6">
            The Toronto Association of Basketball Officials (TABO) Welcomes You!
          </h2>

          <div>
            <p className="text-gray-200 text-lg leading-relaxed  text-justify">
              TABO is the provincially and nationally sanctioned officiating
              organization for basketball, serving the City of Toronto since
              1957. TABO educates, trains, and certifies individuals interested
              in supporting the basketball community through officiating. As
              basketball officials, TABO takes pride in officiating all levels,
              using{' '}
              <a
                href="https://about.fiba.basketball/en/our-sport/official-basketball-rules"
                className="underline"
              >
                FIBA&apos;s rule set
              </a>{' '}
              — from elementary schools to adult leagues and everything in
              between. TABO is a not-for-profit, unincorporated association, and
              governs itself via its Constitution, By-Laws, Policies and
              Procedures.
            </p>
          </div>
        </div>
      </section>

      {/* About Us - History & Mission */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-white">
          About Us
        </h2>

        <div className="space-y-6 leading-relaxed text-justify max-w-5xl mx-auto">
          <p>
            Annually, TABO&apos;s 240+ members service more than 170 clients,
            spanning the entire City of Toronto - from Port Union Rd. (east), to
            Hwy 27 (west), to Steeles Avenue (north), to Lake Ontario (south).
          </p>

          <p>
            Along with neighbouring Basketball Officials Boards of Durham, York,
            Peel and Hamilton we work together to service the GTHA (Greater
            Toronto and Hamilton Area).
          </p>
        </div>

        <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="leading-relaxed">
            <h4 className="text-3xl font-bold text-[rgb(255,108,0)] mb-6">
              TABO is a registered member of:
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-lg">
                <span className="w-3 h-3 bg-[#d57a1f] rounded-full"></span>
                Ontario Association of Basketball Officials (OABO)
              </li>
              <li className="flex items-center gap-3 text-lg">
                <span className="w-3 h-3 bg-[#d57a1f] rounded-full"></span>
                Ontario Basketball Association (OBA)
              </li>
              <li className="flex items-center gap-3 text-lg">
                <span className="w-3 h-3 bg-[#d57a1f] rounded-full"></span>
                Canadian Basketball Officials Commission (CBOC)
              </li>
              <li className="flex items-center gap-3 text-lg">
                <span className="w-3 h-3 bg-[#d57a1f] rounded-full"></span>
                Canada Basketball
              </li>
            </ul>
          </div>
          <PartnerLogos />
        </div>
      </section>

      {/* Executive Team */}
      <section className="px-6 py-24 max-w-6xl mx-auto border-t border-gray-800">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">
          Executive Team
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Meet the dedicated leadership team guiding TABO forward
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {executives.map((exec, idx) => (
            <a
              key={idx}
              href={`mailto:${exec.email}`}
              className="group bg-transparent rounded-2xl p-6 border border-white hover:border-[rgb(255,108,0)] transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-[rgb(255,108,0)] transition-colors">
                {exec.name}
              </h3>
              <p className="text-white text-sm font-semibold mb-3">
                {exec.title}
              </p>

              <div className="flex items-center gap-2 text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="break-all">{exec.email}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Annual TABO Sponsored Tournaments Section */}
      <section className="px-6 py-24 max-w-6xl mx-auto border-t border-gray-800">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Annual TABO Sponsored Tournaments
          </h2>

          <p className="leading-relaxed text-justify max-w-5xl mx-auto text-lg">
            Each year, TABO honors the legacy of two legendary figures in
            Toronto basketball officiating through our annual sponsored
            tournaments. These events bring together players, coaches, and
            officials in celebration of excellence, integrity, and community.
          </p>
        </div>
        <div className="w-full h-[550px] bg-gray-900 rounded-2xl flex items-center justify-center text-lg overflow-hidden mb-16">
          <Image
            src="/10.JPEG"
            className="w-full h-full object-cover"
            alt="refs"
            width={400}
            height={500}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bob Little Tournament */}
          <div className="bg-white rounded-2xl p-8 border-2 border-[rgb(255,108,0)]">
            <h4 className="text-2xl font-bold mb-4 text-[rgb(255,108,0)]">
              BOB LITTLE TOURNAMENT
            </h4>
            <div className="space-y-4 leading-relaxed text-gray-800">
              <p>
                Bob Little&apos;s accomplishments on and off the floor set an
                example for his colleagues. The high standards he set continue
                to influence officiating in Toronto to this day.
              </p>
              <p>
                TABO is grateful to Bob for his leadership and counsel over a
                distinguished career.
              </p>
              <p className="font-semibold">
                This Sr. Boys High School Tournament reflects his commitment.
              </p>
            </div>
          </div>

          {/* Nan Copp Tournament */}
          <div className="bg-white rounded-2xl p-8 border-2 border-[rgb(255,108,0)]">
            <h4 className="text-2xl font-bold mb-4 text-[rgb(255,108,0)]">
              NAN COPP TOURNAMENT
            </h4>
            <div className="space-y-4 leading-relaxed text-gray-800">
              <p>
                Nan was the president of the Board of Women&apos;s Officials. In
                her time, she was a role model and inspiration to young women
                who played and officiated basketball.
              </p>
              <p className="font-semibold">
                The Nan Copp Invitational is dedicated in honour of the late
                official and organizer of the women&apos;s basketball games and
                official&apos;s development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="px-6 py-20 max-w-5xl mx-auto text-center border-t border-gray-800 space-y-10">
        <h3 className="text-3xl font-bold">Organizations We Serve</h3>

        <p className=" leading-relaxed text-justify max-w-5xl mx-auto">
          As an unincorporated, not-for-profit association, TABO&apos;s sole
          purpose is to provide the best basketball officiating services to the
          Public, Catholic, Independent and Private Schools (Elementary, Middle
          & Secondary), Ontario&apos;s Colleges & Universities, Basketball
          Associations such as the OBA, Coalition, CYBL and Hoop City.
          Recreational Leagues such as Hoopdome, Jam Group, MegaCity &
          Basketball World Toronto, and many other basketball organizations and
          charities.
        </p>
        <ClientLogos />
      </section>
    </div>
  );
}
