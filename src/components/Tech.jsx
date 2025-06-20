import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles"; // <-- make sure this import exists

import "react-vertical-timeline-component/style.min.css";

const Tech = () => {
  return (
    <>
      {/* Section Heading */}
      <motion.div>
        <p className={styles.sectionSubText}>What I use</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      {/* 3D Ball Icons Grid */}
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
