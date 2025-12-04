import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Membership', href: '/membership' },
  { name: 'Book Officials', href: '/officials' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Header() {
  return (
    <header className="absolute z-10 w-full">
      <div className="w-full max-w-[1024px] mx-auto px-6 pt-12 flex justify-between items-center">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
        <nav>
          <ul className="flex gap-6 font-semibold text-white uppercase">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="hover:opacity-80 transition hover:text-[rgb(255,108,0)]"
              >
                <Link href={item.href} className="hover:cursor-pointer">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
