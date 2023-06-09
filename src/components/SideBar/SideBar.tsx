"use client"

import { BsFillLightningFill } from 'react-icons/bs';
import { FiSun, FiMoon } from 'react-icons/fi';
import { IoMdDownload, IoMdHome } from 'react-icons/io';
import { ReactNode } from 'react';
import { useDarkMode, useIsClient } from 'usehooks-ts';
import SideBarIcon from './SideBarIcon';

const SideBar = () => {
  const { isDarkMode, toggle } = useDarkMode(false);
  const isClient = useIsClient();

  if (!isClient) {
    return (
      <div className={`fixed top-0 left-0 h-screen transition-colors w-16 m-0
                       flex flex-col
                     bg-gray-100 text-gray-900 shadow-lg`}
      >
        <SideBarIcon icon={<IoMdHome size="28" />} text="Home" link="/" />
        <SideBarIcon icon={<IoMdDownload size="28" />} text="Downloads" link="/downloads/" />
        <SideBarIcon icon={<BsFillLightningFill size="28" />} text="Lightning" link="#" />
        <SideBarIcon icon={<FiMoon size="28" />} text="Toggle Dark Mode" link="#" />
      </div>
    );
  }

  return (
    <div className={`fixed top-0 left-0 h-screen w-16 m-0
                     flex flex-col
                   bg-gray-100 text-gray-900 shadow-lg
                     ${isDarkMode ? 'dark:bg-gray-900 dark:text-gray-100' : ''}`}
    >
      <SideBarIcon icon={<IoMdHome size="28" />} text="Home" link="/" />
      <SideBarIcon icon={<IoMdDownload size="28" />} text="Downloads" link="/downloads/" />
      <SideBarIcon icon={<BsFillLightningFill size="28" />} text="Lightning" link="#" />
      <SideBarIcon
        icon={isDarkMode ? <FiSun size="28" /> : <FiMoon size="28" />}
        text="Toggle Dark Mode"
        onClick={toggle}
      />
    </div>
  );
};

export default SideBar;