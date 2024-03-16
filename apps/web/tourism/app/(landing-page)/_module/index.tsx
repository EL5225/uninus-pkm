'use client';

import Image from 'next/image';
import { FC, ReactElement } from 'react';
import { Footer, Navbar } from '@psu/web-component-molecules';
import { Button } from '@psu/web-component-atoms';

export const TourismModule: FC = (): ReactElement => {
  return (
    <main className="w-full min-h-screen space-y-10">
      <Navbar logoUrl="/assets/logo.svg" />
      <section className="bg-hero bg-center bg-cover w-full min-h-[90dvh]">
        <div className="flex flex-col px-5 relative top-72 space-y-6">
          <h3 className="text-primary-50 drop-shadow-md text-center text-2xl font-bold md:text-4xl uppercase">
            WISATA DESA
          </h3>
          <h2 className="text-primary-50 drop-shadow-lg text-center text-lg lg:px-64 font-semibold md:text-2xl capitalize">
            Selamat datang di Wisata Desa Bojongsari Kecamatan Bojongsoang.
            Nikmati berbagai macam wisata desa.
          </h2>
          <div className="flex justify-center">
            <Button size="md" variant="primary">
              Baca Selengkapnya
            </Button>
          </div>
        </div>
      </section>
      <article className="px-2 md:px-10 space-y-10 pb-5">
        <h1 className="text-center font-bold text-3xl text-black">
          Tempat Populer
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="flex flex-col items-center justify-between bg-white p-2 border border-grey-400 border-opacity-15 rounded-lg shadow-lg">
            <Image
              src="/assets/image-placeholder.png"
              alt="placeholder"
              width={500}
              height={500}
            />
            <h2 className="p-4 text-xl font-semibold">PDAM</h2>
          </div>
          <div className="flex flex-col items-center justify-between bg-white p-2 border border-grey-400 border-opacity-15 rounded-lg shadow-lg">
            <Image
              src="/assets/image-placeholder.png"
              alt="placeholder"
              width={500}
              height={500}
            />
            <h2 className="p-4 text-xl font-semibold">Perikanan</h2>
          </div>
          <div className="flex flex-col items-center justify-between bg-white p-2 border border-grey-400 border-opacity-15 rounded-lg shadow-lg">
            <Image
              src="/assets/image-placeholder.png"
              alt="placeholder"
              width={500}
              height={500}
            />
            <h2 className="p-4 text-xl font-semibold">Pertanian</h2>
          </div>
        </div>
      </article>
      <article className="px-2 md:px-10 space-y-10 pb-5">
        <h1 className="text-center font-bold text-3xl text-black">Destinasi</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="flex flex-col items-center justify-between bg-white p-2 border border-grey-400 border-opacity-15 rounded-lg shadow-lg">
            <Image
              src="/assets/image-placeholder.png"
              alt="placeholder"
              width={350}
              height={350}
            />
            <h2 className="p-4 text-xl font-semibold">PDAM</h2>
          </div>
          <div className="flex flex-col items-center justify-between bg-white p-2 border border-grey-400 border-opacity-15 rounded-lg shadow-lg">
            <Image
              src="/assets/image-placeholder.png"
              alt="placeholder"
              width={350}
              height={350}
            />
            <h2 className="p-4 text-xl font-semibold">Perikanan</h2>
          </div>
          <div className="flex flex-col items-center justify-between bg-white p-2 border border-grey-400 border-opacity-15 rounded-lg shadow-lg">
            <Image
              src="/assets/image-placeholder.png"
              alt="placeholder"
              width={350}
              height={350}
            />
            <h2 className="p-4 text-xl font-semibold">Pertanian</h2>
          </div>
          <div className="flex flex-col items-center justify-between bg-white p-2 border border-grey-400 border-opacity-15 rounded-lg shadow-lg">
            <Image
              src="/assets/image-placeholder.png"
              alt="placeholder"
              width={350}
              height={350}
            />
            <h2 className="p-4 text-xl font-semibold">Pertanian</h2>
          </div>
          <div className="flex flex-col items-center justify-between bg-white p-2 border border-grey-400 border-opacity-15 rounded-lg shadow-lg">
            <Image
              src="/assets/image-placeholder.png"
              alt="placeholder"
              width={350}
              height={350}
            />
            <h2 className="p-4 text-xl font-semibold">Pertanian</h2>
          </div>
          <div className="flex flex-col items-center justify-between bg-white p-2 border border-grey-400 border-opacity-15 rounded-lg shadow-lg">
            <Image
              src="/assets/image-placeholder.png"
              alt="placeholder"
              width={350}
              height={350}
            />
            <h2 className="p-4 text-xl font-semibold">Pertanian</h2>
          </div>
          <div className="flex flex-col items-center justify-between bg-white p-2 border border-grey-400 border-opacity-15 rounded-lg shadow-lg">
            <Image
              src="/assets/image-placeholder.png"
              alt="placeholder"
              width={350}
              height={350}
            />
            <h2 className="p-4 text-xl font-semibold">Pertanian</h2>
          </div>
          <div className="flex flex-col items-center justify-between bg-white p-2 border border-grey-400 border-opacity-15 rounded-lg shadow-lg">
            <Image
              src="/assets/image-placeholder.png"
              alt="placeholder"
              width={350}
              height={350}
            />
            <h2 className="p-4 text-xl font-semibold">Pertanian</h2>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
};
