import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { IoMdDownload } from 'react-icons/io'
import { ReactNode } from 'react';

type SideBarIconProps = {
  icon: ReactNode;
  text?: string;
  link?:string;
};

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0
                    flex flex-col
                    bg-gray-100 text-gray-900 shadow-lg
                    dark:bg-gray-900 dark:text-white">
      <SideBarIcon icon={<IoMdDownload size="28" />} text="Downloads" link="/downloads/downloads" />
      <SideBarIcon icon={<BsPlus size="28" />} text="Plus" />
      <SideBarIcon icon={<BsFillLightningFill size="28" />} text="Lightning" />
      <SideBarIcon icon={<FaPoo size="28" />} text="Poo" />
    </div>
  );
};

const SideBarIcon = ({ icon, text, link }: SideBarIconProps) => (
  <a href={link}>
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  </a>
);

export default SideBar;