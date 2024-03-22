import { FC, PropsWithChildren, ReactElement } from 'react';

const AuthTemplate: FC<Readonly<PropsWithChildren>> = (props): ReactElement => {
  return (
    <main className="flex overflow-hidden items-center w-full bg-white lg:bg-primary-50%">
      <div className="z-10 w-full overflow-y-hidden h-full">
        {props.children}
      </div>
    </main>
  );
};

export default AuthTemplate;
