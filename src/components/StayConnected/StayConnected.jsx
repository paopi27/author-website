import {
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const StayConnected = () => {
  return (
    <section className="bg-[#F8F5F2] py-32">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p
          className="uppercase tracking-[0.3em] text-sm text-[#B89B72]"
          style={{ fontFamily: "DM Sans" }}
        >
          Stay Connected
        </p>

        <h2
          className="mt-10 text-3xl md:text-5xl leading-tight text-[#2B2B2B]"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Follow along for new releases, poetry, reflections, and quiet moments
        </h2>

        {/* SOCIAL LINKS */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {[
            { icon: <FaInstagram size={20} />, link: "https://instagram.com" },
            { icon: <FaTiktok size={20} />, link: "https://tiktok.com" },
            { icon: <FaFacebook size={20} />, link: "https://facebook.com" },
            { icon: <FaXTwitter size={20} />, link: "https://x.com" },
            { icon: <FaYoutube size={20} />, link: "https://youtube.com" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-[#2B2B2B] rounded-full text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-[#F8F5F2] hover:scale-110 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StayConnected;
