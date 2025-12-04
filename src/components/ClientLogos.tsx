import Image from 'next/image';
import Link from 'next/link';

// Data array containing all client/league logo details and their external links
const clientLogos = [
  {
    src: '/Bay-hoops.png',
    alt: 'Bay Hoops logo',
    width: 100,
    height: 100,
    href: '#bayhoops',
  },
  { src: '/BWT.png', alt: 'BWT logo', width: 100, height: 100, href: '#bwt' },
  {
    src: '/osba.svg',
    alt: 'OSBA logo',
    width: 100,
    height: 100,
    href: '#osba',
  },
  { src: '/Jam.png', alt: 'Jam logo', width: 100, height: 100, href: '#jam' },
  {
    src: '/D-League.png',
    alt: 'D-League logo',
    width: 100,
    height: 100,
    href: '#dleague',
  },
  {
    src: '/CISAA.png',
    alt: 'CISAA logo',
    width: 100,
    height: 100,
    href: '#cisaa',
  },
  {
    src: '/SSAF.png',
    alt: 'SSAF logo',
    width: 100,
    height: 100,
    href: '#ssaf',
  },
  {
    src: '/TDSB.png',
    alt: 'TDSB logo',
    width: 100,
    height: 100,
    href: '#tdsb',
  },
  // Note: OBL uses larger dimensions
  { src: '/OBL.png', alt: 'OBL logo', width: 150, height: 150, href: '#obl' },
  {
    src: '/Coalition.png',
    alt: 'Coalition logo',
    width: 100,
    height: 100,
    href: '#coalition',
  },
];

function ClientLogos() {
  return (
    // The existing responsive grid structure is maintained
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 items-center justify-center">
      {clientLogos.map((logo) => (
        // The container ensures the link/image is centered in its grid cell
        <div key={logo.alt} className="flex justify-center">
          {/* Wrap Image in Link. I've used placeholder hrefs (`#...`) which you should 
            replace with the actual website URL for each client.
          */}
          <Link
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            // Added a slight hover effect to confirm clickability
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
