import { Header } from "../Header";
import { Hero } from "../Hero/Hero";
import { Search } from "../Search";
import { Books } from "../Books";

const Home: React.FC = () => {
  return (
    <>
      <section className="w-full h-20">
        <Header />
      </section>
      <section className="container">
        <Hero />
        <Search />
        <Books 
          thumbnail={""}
          title={""} 
          authors={""} 
          language={""} 
          description={""} 
          infoLink={""} 
          publishedDate={0} 
          publisher={""} 
          pageCount={0} />
      </section>
    </>
  );
};

export { Home };