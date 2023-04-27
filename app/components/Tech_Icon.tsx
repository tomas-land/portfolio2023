"use client"

import { FaReact, FaSass } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiTypescript, SiPrisma } from "react-icons/si";

interface iProps {
  icon_name: string;
}

const Tech_Icon = ({ icon_name }: iProps) => {
  const renderIcon = (icon_name: string) => {
    switch (icon_name) {
      case "react":
        return <FaReact size={25} />;
      case "sass":
        return <FaSass size={25} />;
      case "next":
        return <SiNextdotjs size={25} />;
      case "mysql":
        return <GrMysql size={25} />;
      case "typescript":
        return <SiTypescript size={25} />;
      case "prisma":
        return <SiPrisma size={25} />;
      default:
        return <div>Icon not found</div>;
    }
  };
  return <div>{renderIcon(icon_name)}</div>;
};
export default Tech_Icon;
