import { FC, ReactElement } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

const DashboardLoading: FC = (): ReactElement => {
  return <BiLoaderAlt className="animate-spin" />;
};

export default DashboardLoading;
