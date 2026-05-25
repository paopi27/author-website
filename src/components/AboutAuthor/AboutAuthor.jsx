const AboutAuthor = () => {
  return (
    <section className="bg-[#B89B72] py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-20">
          {/* IMAGE */}
          <div className="flex-1">
            <img
              src="https://placehold.co/700x900"
              alt="Author Portrait"
              className="w-full rounded-[2rem] shadow-xl hover:scale-[1.02] transition-all duration-500"
            />
          </div>

          {/* TEXT */}
          <div className="flex-1">
            <p
              className="uppercase tracking-[0.3em] text-sm text-[#F8F5F2]/80"
              style={{ fontFamily: "DM Sans" }}
            >
              About the Author
            </p>

            <h2
              className="mt-6 text-4xl md:text-6xl leading-[1.1] text-[#F8F5F2]"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              Author Name
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-[#F8F5F2]/90 max-w-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus blanditiis, odio reiciendis distinctio eaque nobis
              repellendus quis earum, mollitia sint maiores reprehenderit
              nostrum dolore, amet quia repudiandae ducimus quas molestiae!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
