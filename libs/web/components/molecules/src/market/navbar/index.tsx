import { Button, InputText } from '@psu/web-component-atoms';
import { FC, ReactElement } from 'react';

export const NavbarMarket: FC = (): ReactElement => {
  return (
    <header className="w-full h-[116px] flex items-center px-10 justify-between shadow-lg">
      <figure className="flex gap-4">
        <img src="logo-desa.webp" alt="logo-desa" className="w-[85px]" />
        <figcaption className="flex flex-col">
          <p className="text-lg">Digitalisasi Pasar Desa</p>
          <p className="text-xs">Desa Bojongsari, Kab. Bandung</p>
        </figcaption>
      </figure>

      <div className="flex items-center gap-12">
        <nav className="relative w-[424px]">
          <InputText status="default" />
        </nav>
        <Button size="md">Masuk Akun</Button>
      </div>
    </header>
  );
};
