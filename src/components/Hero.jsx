import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1
            className={`${styles.heroHeadText} bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 text-transparent bg-clip-text`}
          >
            Hi, I'm <span className="text-white">Akshay</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-gray-300`}>
            "Passionate full-stack developer"
            <br className="sm:block hidden" />
            with a strong focus on building innovative and efficient
            applications.
            <br className="sm:block hidden" />
            Skilled in crafting dynamic, user-centric web experiences with
            modern technologies like React, Node.js, and Django.
            <br className="sm:block hidden" />
            <br className="sm:block hidden" />
            Let’s build something amazing together.
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-purple-400 flex justify-center items-start p-2 hover:shadow-lg hover:shadow-purple-500/50 transition">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-purple-400 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
