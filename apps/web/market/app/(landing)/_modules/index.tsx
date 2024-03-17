'use client';
// import { trpc } from '@psu/web-services';
import { NavbarMarket } from '@psu/web-component-molecules';
import { FC, ReactElement } from 'react';

export const MarketModule: FC = (): ReactElement => {
  return (
    <main className="w-full h-screen flex flex-col">
      <NavbarMarket />
      <section className="flex flex-col justify-center items-center w-full h-full px-[6rem]">
        <div className="w-full h-[443px] bg-neutral-30% rounded-md flex flex-col justify-center items-center gap-12">
          <h1 className="text-3xl">Digitalisasi Pasar Desa</h1>
          <p className="text-base w-[50%] text-center">
            Digitalisasi Pasar Desa di desa Bojongsari kecamatan Bojongsoang
            merujuk pada proses memanfaatkan teknologi digital, seperti platform
            online yang bertujuan untuk meningkatkan pendapatan hingga
            memperluas akses pasar.
          </p>
        </div>
      </section>
    </main>
  );
};
