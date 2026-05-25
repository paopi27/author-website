const books = [
  {
    title: "A Dream of You",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rem modi repudiandae voluptates voluptatum doloribus harum. Aperiam labore voluptates saepe maxime minima. Tenetur magni officiis illum quaerat, aut ducimus et?",
    image: "https://placehold.co/600x800",
    reverse: false,
  },
  {
    title: "The Garden of Silent Letters",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rem modi repudiandae voluptates voluptatum doloribus harum.",
    image: "https://placehold.co/600x800",
    reverse: true,
  },
  {
    title: "Echoes of the Quiet Sea",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rem modi repudiandae voluptates voluptatum doloribus harum. Aperiam labore voluptates saepe maxime minima. Tenetur magni officiis illum quaerat, aut ducimus et?",
    image: "https://placehold.co/600x800",
    reverse: false,
  },
];

const BooksSection = () => {
  return (
    <section className="bg-[#F8F5F2] py-32">
      <div className="max-w-6xl mx-auto px-6 space-y-32">
        {books.map((book, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-16 ${
              book.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="flex-1">
              <img
                src={book.image}
                alt={book.title}
                className="w-full rounded-[2rem] shadow-lg hover:scale-[1.02] transition-all duration-500"
              />
            </div>

            {/* TEXT */}
            <div className="flex-1">
              <p
                className="uppercase tracking-[0.3em] text-sm text-[#B89B72]"
                style={{ fontFamily: "DM Sans" }}
              >
                Featured Book
              </p>

              <h2
                className="mt-6 text-4xl md:text-6xl leading-tight text-[#2B2B2B]"
                style={{ fontFamily: "Cormorant Garamond" }}
              >
                {book.title}
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-[#6E6E6E]">
                {book.description}
              </p>

              <a
                href="https://amazon.com"
                target="_blank"
                className="inline-block mt-10 px-8 py-4 border border-[#2B2B2B] rounded-full text-[#2B2B2B] tracking-[0.15em] uppercase text-sm hover:bg-[#2B2B2B] hover:text-[#F8F5F2] hover:scale-105 transition-all duration-300"
              >
                View Book →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BooksSection;
