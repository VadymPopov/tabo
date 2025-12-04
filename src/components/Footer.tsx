import { Mail } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  // { name: 'Home', href: '/' },
  { name: 'Membership', href: '/membership' },
  { name: 'Book Officials', href: '/officials' },
  // { name: 'About Us', href: '/about' },
  // { name: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className=" bg-black py-10 text-center text-gray-500 border-t border-gray-800 space-y-8">
      <div className="text-white pb-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <span>info@torontobasketballofficials.ca</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4">Quick Links</h3>

              <nav>
                <ul className="flex flex-col gap-4 font-semibold text-[rgb(255,108,0)] uppercase">
                  {navItems.map((item) => (
                    <li
                      key={item.name}
                      className="hover:opacity-80 transition hover:text-white"
                    >
                      <Link href={item.href} className="hover:cursor-pointer">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4">About TABO</h3>
              <p className="text-gray-400">
                Proudly serving basketball across Toronto for schools, colleges,
                and adult leagues since 1957*
              </p>
            </div>
          </div>
        </div>
      </div>
      <p>
        © {new Date().getFullYear()} Toronto Association of Basketball
        Officials.
      </p>
    </footer>
  );
}
