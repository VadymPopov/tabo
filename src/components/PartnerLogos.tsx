import Image from 'next/image';
import Link from 'next/link';

const partnerLogos = [
  {
    src: '/OABO.webp',
    alt: 'Ontario Association of Basketball Officials logo',
    width: 150,
    height: 150,
    href: 'http://www.oabo.ca/',
  },
  {
    src: '/CBOC.png',
    alt: 'Canadian Basketball Officials Commission logo',
    width: 120,
    height: 120,
    href: 'https://www.basketball.ca/en/development/officials',
  },
  {
    src: '/OBA.png',
    alt: 'Ontario Basketball Association logo',
    width: 150,
    height: 150,
    href: 'https://basketball.on.ca/',
  },
  {
    src: '/CB.png',
    alt: 'Canada Basketball logo',
    width: 150,
    height: 150,
    href: 'https://www.basketball.ca/',
  },
];

function PartnerLogos() {
  return (
    <div className="w-full grid grid-cols-2 gap-6 items-center justify-center">
      {partnerLogos.map((logo) => (
        <div key={logo.alt} className="flex justify-center">
          <Link
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition duration-200 block"
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

export default PartnerLogos;
