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
        return <FaReact />;
      case "sass":
        return <FaSass />;
      case "next":
        return <SiNextdotjs />;
      case "mysql":
        return <GrMysql />;
      case "typescript":
        return <SiTypescript />;
      case "prisma":
        return <SiPrisma />;
      default:
        return <div>Icon not found</div>;
    }
  };
  return <div>{renderIcon(icon_name)}</div>;
};
export default Tech_Icon;
