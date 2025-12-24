import Image from 'next/image';
import Link from 'next/link';

const clientLogos = [
  {
    src: '/Bay-hoops.png',
    alt: 'Bay Hoops logo',
    width: 100,
    height: 100,
    href: 'https://baystreethoops.com/',
  },
  { src: '/BWT.png', alt: 'BWT logo', width: 100, height: 100, href: '#bwt' },
  {
    src: '/osba.svg',
    alt: 'OSBA logo',
    width: 100,
    height: 100,
    href: 'https://www.ontariosba.ca/',
  },
  { src: '/Jam.png', alt: 'Jam logo', width: 100, height: 100, href: '#jam' },
  {
    src: '/D-League.png',
    alt: 'D-League logo',
    width: 100,
    height: 100,
    href: 'https://basketball.on.ca/programs/high-performance/development-league/',
  },
  {
    src: '/CISAA.png',
    alt: 'CISAA logo',
    width: 100,
    height: 100,
    href: 'https://www.cisaa.ca',
  },
  {
    src: '/SSAF.png',
    alt: 'SSAF logo',
    width: 100,
    height: 100,
    href: 'https://ssaf.ca',
  },
  {
    src: '/TDSB.png',
    alt: 'TDSB logo',
    width: 100,
    height: 100,
    href: 'https://www.tdsb.on.ca/',
  },
  {
    src: '/TCDSB.png',
    alt: 'TCDSB logo',
    width: 100,
    height: 100,
    href: 'https://www.tcdsb.org/',
  },
  {
    src: '/OBL.png',
    alt: 'OBL logo',
    width: 150,
    height: 150,
    href: 'https://basketball.on.ca/competitions/obl/about/',
  },
  {
    src: '/Coalition.png',
    alt: 'Coalition logo',
    width: 100,
    height: 100,
    href: 'https://coalitionbasketball.com/',
  },
  {
    src: '/TCBL.png',
    alt: 'TCBL logo',
    width: 100,
    height: 100,
    href: 'https://www.tcbl.ca/',
  },
  {
    src: '/G-ELITE.svg',
    alt: 'G-ELITE logo',
    width: 100,
    height: 100,
    href: 'https://obagelite.com/',
  },
];

function ClientLogos() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 items-center justify-center">
      {clientLogos.map((logo) => (
        <div key={logo.alt} className="flex justify-center">
          <Link
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition duration-200 block"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ClientLogos;
