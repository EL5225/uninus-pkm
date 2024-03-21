import type { NextPage } from 'next';
import type { ReactElement } from 'react';
import { AuthLoginModule } from './_modules';
import Image from 'next/image';

const AuthLoginPage: NextPage = (): ReactElement => {
  return (
    <section className="flex overflow-y-hidden md:flex-row flex-col gap-y-5 lg:justify-between justify-center items-center w-full h-full min-h-screen">
      <div className="hidden w-1/4 lg:flex flex-col shrink-0 justify-center item-center lg:items-center gap-y-4">
        <Image
          src="/assets/logo-desa.png"
          alt="logo"
          width={250}
          height={219}
        />
        <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
          WISATA DESA BOJONGSARI
        </h1>
      </div>
      <div className="md:w-3/4 w-full h-full md:pl-6">
        <AuthLoginModule />
      </div>
    </section>
  );
};

export default AuthLoginPage;
