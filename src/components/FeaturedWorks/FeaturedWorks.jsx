import { motion } from "framer-motion";

const FeaturedWorks = () => {
  return (
    <section className="py-32 bg-[#F8F5F2]">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 text-center"
      >
        <p
          className="text-sm md:text-base uppercase tracking-[0.3em] text-[#B89B72]"
          style={{ fontFamily: "DM Sans" }}
        >
          Featured Works
        </p>

        <h2
          className="mt-10 text-3xl md:text-5xl leading-[1.2] tracking-tight text-[#2B2B2B]"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          A collection of poetry, stories and reflections.
        </h2>
      </motion.div>
    </section>
  );
};

export default FeaturedWorks;
