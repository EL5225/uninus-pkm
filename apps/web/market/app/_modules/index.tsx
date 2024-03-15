'use client';
import { trpc } from '@psu/web-services';
import { FC } from 'react';

export const MarketModule: FC = () => {
  const getGreet = trpc.greet.useQuery();

  return <div>{getGreet?.data}</div>;
};
