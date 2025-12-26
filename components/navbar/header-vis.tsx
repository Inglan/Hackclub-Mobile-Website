"use client";

import { usePathname } from 'next/navigation';
import { MainHeader} from './header';

const HeaderVis = () => {
  const pathname = usePathname();
  // Only render Header if path does not start with /docs/
  if (pathname.startsWith('/docs')) {
    return null;
  }
  return <MainHeader />;
};

export default HeaderVis;
