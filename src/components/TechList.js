import { IoLogoJavascript } from 'react-icons/io';
import { FaNode, FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJest, SiPrisma, SiMongodb } from 'react-icons/si';
import { PiFileSql } from 'react-icons/pi';

const TechList = () => {
  return (
    <div className="icons-container">
      <IoLogoJavascript size={120} className="icons-container-item" />
      <FaNode size={120} className="icons-container-item" />
      <SiJest size={120} className="icons-container-item" />
      <FaReact size={120} className="icons-container-item" />
      <FaHtml5 size={120} className="icons-container-item" />
      <FaCss3Alt size={120} className="icons-container-item" />
      <PiFileSql size={120} className="icons-container-item" />
      <SiPrisma size={120} className="icons-container-item" />
      <SiMongodb size={120} className="icons-container-item" />
    </div>
  );
};

export default TechList;
