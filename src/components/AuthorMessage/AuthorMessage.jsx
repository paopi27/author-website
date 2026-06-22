const AuthorMessage = () => {
  return (
    <section className="bg-[#B89B72] py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p
          className="text-sm md:text-base uppercase tracking-[0.3em] text-[#F8F5F2]/80"
          style={{ fontFamily: "DM Sans" }}
        >
          Word from the Author
        </p>

        <h2
          className="mt-10 text-3xl md:text-6xl leading-tight text-[#F8F5F2] max-w-4xl"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          “Lorem ipsum dolor sit amet. Sed officia voluptatem et omnis
          perferendis”
        </h2>

        <div className="flex justify-center md:justify-end mt-16">
          <a
            href="https://amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#F8F5F2] rounded-full text-[#F8F5F2] tracking-[0.15em] uppercase text-sm hover:bg-[#F8F5F2] hover:text-[#2B2B2B] hover:scale-105 transition-all duration-300"
            style={{ fontFamily: "DM Sans" }}
          >
            Explore Books →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AuthorMessage;
