"use client"

import { BsFillLightningFill } from 'react-icons/bs';
import { FiSun, FiMoon } from 'react-icons/fi';
import { IoMdDownload, IoMdHome, IoMdPerson, IoMdLogIn, IoMdLogOut, IoMdPersonAdd } from 'react-icons/io';
import { useDarkMode, useIsClient } from 'usehooks-ts';
import SideBarIcon from './SideBarIcon';

const SideBar = () => {
  const { isDarkMode, toggle } = useDarkMode(false);
  const isClient = useIsClient();

  if (!isClient) {
    return (
      <>
        <div className={`fixed top-0 left-0 h-screen transition-colors w-16 m-0
                        flex flex-col
                      bg-gray-100 text-gray-900 shadow-lg`}
        >
          <SideBarIcon icon={<IoMdHome size="28" />} text="Home" link="/" />
          <SideBarIcon icon={<IoMdDownload size="28" />} text="Downloads" link="/downloads/" />
          <SideBarIcon icon={<BsFillLightningFill size="28" />} text="Lightning" link="#" />
          <SideBarIcon icon={<FiMoon size="28" />} text="Toggle Dark Mode" link="#" />
        </div>
        <div className={`fixed bottom-0 left-0 h-1/2 w-16 m-0
                        flex flex-col-reverse
                      bg-gray-100 text-gray-900 shadow-lg
                        ${isDarkMode ? 'dark:bg-gray-900 dark:text-gray-100' : ''}`}
        >
          {/*<SideBarIcon icon={<IoMdLogOut size="28" />} text="Log Out" link="#" />
          <SideBarIcon icon={<IoMdLogIn size="28" />} text="Log In"  link="#" />
          <SideBarIcon icon={<IoMdPersonAdd size="28" />} text="Sign Up" link="/register" />
          <SideBarIcon icon={<IoMdPerson size="28" />} text="Profile" link="/profile" />*/}
        </div>
      </>
    );
  }

  return (
    <>
      <div className={`fixed top-0 left-0 h-1/2 w-16 m-0
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
      
      <div className={`fixed bottom-0 left-0 h-1/2 w-16 m-0
                      flex flex-col-reverse
                    bg-gray-100 text-gray-900 shadow-lg
                      ${isDarkMode ? 'dark:bg-gray-900 dark:text-gray-100' : ''}`}
      >
        {/*<SideBarIcon icon={<IoMdLogOut size="28" />} text="Log Out" link="#" />
        <SideBarIcon icon={<IoMdLogIn size="28" />} text="Log In" link="#" />
        <SideBarIcon icon={<IoMdPersonAdd size="28" />} text="Sign Up" link="/register" />
  <SideBarIcon icon={<IoMdPerson size="28" />} text="Profile" link="/profile" />*/}
      </div>
    </>
  );
};

export default SideBar;