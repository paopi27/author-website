import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();

  const titleY = useTransform(scrollY, [0, 500], [0, -150]);
  const subtitleY = useTransform(scrollY, [0, 500], [0, -250]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="h-screen flex items-center justify-center px-6 bg-[#F8F5F2] overflow-hidden">
      <motion.div className="max-w-6xl text-center" style={{ opacity }}>
        <motion.h1
          className="text-6xl md:text-[9rem] font-medium leading-[0.9] tracking-[0.08em] text-[#2B2B2B]"
          style={{
            fontFamily: "Cormorant Garamond",
            y: titleY,
          }}
        >
          AUTHOR NAME
        </motion.h1>

        <motion.p
          className="mt-8 text-lg md:text-2xl tracking-[0.3em] uppercase text-[#6E6E6E]"
          style={{
            fontFamily: "DM Sans",
            y: subtitleY,
          }}
        >
          Poet & Author
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
