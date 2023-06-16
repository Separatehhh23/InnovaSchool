import { ReactNode } from "react";
import Link from "next/link";

type SideBarIconProps = {
  icon: ReactNode;
  text?: string;
  link: string;
  onClick?: () => void;
};

const SideBarIcon = ({ icon, text, link, onClick }: SideBarIconProps) => (
    <Link href={link} onClick={onClick}>
      <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
          {text}
        </span>
      </div>
    </Link>
);

export default SideBarIcon;