import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    glareEnable={true}
    glareMaxOpacity={0.2}
    scale={1.05}
    transitionSpeed={500}
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    className="xs:w-[260px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.8)}
      className="w-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-[2px] rounded-[20px] shadow-lg hover:shadow-pink-500/40 transition duration-300"
    >
      <div className="bg-black/60 backdrop-blur-md rounded-[20px] py-6 px-8 min-h-[300px] flex flex-col justify-center items-center space-y-5 border border-white/10">
        <img
          src={icon}
          alt={title}
          className="w-20 h-20 object-contain drop-shadow-xl"
        />
        <h3 className="text-white text-[22px] font-bold text-center tracking-wide">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-gray-400`}>Introduction</p>
        <h2
          className={`${styles.sectionHeadText} bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 text-transparent bg-clip-text`}
        >
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-6 text-gray-300 text-[18px] max-w-3xl leading-[32px]"
      >
        I'm a passionate full-stack web developer and a B.Tech student
        experienced in JavaScript, Python, and Java. I build robust, responsive
        applications using React, Node.js, and MongoDB. From real-time chat apps
        to AI-powered tools, I enjoy creating functional, scalable, and elegant
        solutions while continuously exploring new technologies and frameworks.
      </motion.p>

      <motion.div
        variants={fadeIn("", "", 0.4, 1)}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
