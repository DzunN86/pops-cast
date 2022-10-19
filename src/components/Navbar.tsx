import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { NAVIGATION } from '../constants';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-secondary font-josefin">
      <nav className="mx-auto flex w-full items-center justify-between px-6 py-[26px] md:px-[50px] lg:max-w-[1440px]">
        <div className="pt-[2px]">
          <Link href="/">
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={92}
              height={34.18}
            />
          </Link>
        </div>
        <ul className="hidden gap-[80px] lg:flex">
          {NAVIGATION.map((item, index) => (
            <li
              key={index}
              className="text-[16px] font-normal text-[#B3B3B3] hover:text-white"
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-[15px]">
          <button className="h-[38px] w-[99px] rounded-full bg-[#45444A] text-[14px] font-normal text-white transition duration-300 hover:bg-[#504e55]">
            Login
          </button>
          <button className="h-[38px] w-[99px] rounded-full border border-primary text-[14px] font-normal text-primary transition duration-300 hover:bg-primary hover:text-secondary">
            Subscribe
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
