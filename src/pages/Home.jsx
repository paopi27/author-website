import Hero from "../components/Hero/Hero";
import AuthorMessage from "../components/AuthorMessage/AuthorMessage";
import FeaturedWorks from "../components/FeaturedWorks/FeaturedWorks";
import BooksSection from "../components/BooksSection/BooksSection";
import AboutAuthor from "../components/AboutAuthor/AboutAuthor";
import StayConnected from "../components/StayConnected/StayConnected";
const Home = () => {
  return (
    <main>
      <Hero />
      <AuthorMessage />
      <FeaturedWorks />
      <BooksSection />
      <AboutAuthor />
      <StayConnected />
    </main>
  );
};

export default Home;
