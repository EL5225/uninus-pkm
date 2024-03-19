'use client';

import Image from 'next/image';
import { FC, ReactElement, useState } from 'react';
import { InputText } from '@psu/web-component-atoms';
import { IoCloseSharp, IoSearch } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Navbar: FC<{ logoUrl: string }> = ({ logoUrl }): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="bg-white fixed top-0 z-10 w-full shadow-md py-4 p-2 md:px-10 items-center flex justify-between">
      <Image src={logoUrl} alt="logo" width={50} height={50} />
      {isOpen ? (
        <IoCloseSharp
          id="close-dropdown"
          className="absolute right-8 top-6 cursor-pointer text-lg text-grey-900 md:hidden"
          onClick={handleOpen}
        />
      ) : (
        <GiHamburgerMenu
          id="open-dropdown"
          className="absolute right-8 top-6 cursor-pointer text-lg text-grey-900 md:hidden"
          onClick={handleOpen}
        />
      )}
      <div
        className={`md:flex items-start md:items-center gap-10 ${
          isOpen
            ? 'flex flex-col absolute bg-white top-[4.5rem] left-0 p-5 w-full'
            : 'hidden'
        }`}
      >
        <ul
          className={`gap-5 md:gap-10 cursor-pointer text-lg flex ${
            isOpen && 'flex-col'
          }`}
        >
          <li>Beranda</li>
          <li>Profil</li>
          <li>Kontak</li>
          <li>Inspirasi</li>
        </ul>
        <div className="relative">
          <InputText status="default" size="sm" append={<IoSearch />} />
        </div>
      </div>
    </nav>
  );
};
