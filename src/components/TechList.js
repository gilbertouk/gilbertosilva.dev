import { IoLogoJavascript } from 'react-icons/io';
import { FaNode, FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJest, SiPrisma, SiMongodb } from 'react-icons/si';
import { PiFileSql } from 'react-icons/pi';

const TechList = () => {
  return (
    <div className="icons-container">
      <IoLogoJavascript
        size={120}
        className="icons-container-item"
        title="JavaScript"
      />
      <FaNode size={120} className="icons-container-item" title="NodeJS" />
      <SiJest size={120} className="icons-container-item" title="Jest" />
      <FaReact size={120} className="icons-container-item" title="React" />
      <FaHtml5 size={120} className="icons-container-item" title="HTML5" />
      <FaCss3Alt size={120} className="icons-container-item" title="CSS" />
      <PiFileSql size={120} className="icons-container-item" title="SQL" />
      <SiPrisma size={120} className="icons-container-item" title="PrismaORM" />
      <SiMongodb size={120} className="icons-container-item" title="MongoDB" />
    </div>
  );
};

export default TechList;
