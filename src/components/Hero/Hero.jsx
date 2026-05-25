const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center px-6 bg-[#F8F5F2]">
      <div className="max-w-6xl text-center">
        <h1
          className="text-6xl md:text-[9rem] font-medium leading-[0.9] tracking-[0.08em] text-[#2B2B2B]"
          style={{
            fontFamily: "Cormorant Garamond",
          }}
        >
          AUTHOR NAME
        </h1>

        <p
          className="mt-8 text-lg md:text-2xl tracking-[0.3em] uppercase text-[#6E6E6E]"
          style={{ fontFamily: "DM Sans" }}
        >
          Poet & Author
        </p>
      </div>
    </section>
  );
};

export default Hero;
