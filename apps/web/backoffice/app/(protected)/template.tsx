'use client';
import { Navbar, Sidebar } from '@psu/web-component-molecules';
import { FC, PropsWithChildren, ReactElement } from 'react';

const ProtectedTemplate: FC<Readonly<PropsWithChildren>> = ({
  children,
}): ReactElement => {
  return (
    <main className="w-full flex min-h-screen h-full bg-grey-50">
      <Sidebar />
      <section className="flex flex-col w-full">
        <Navbar logoUrl="" />
        <div className="flex px-8 py-6">{children}</div>
      </section>
    </main>
  );
};

export default ProtectedTemplate;
