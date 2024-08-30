import Footer from "./ui/Footer";
import Hero from "./ui/Hero";
import InfiniteVenue from "./ui/InfiniteVenue";
import Navbar from "./ui/Navbar";
import Schedule from "./ui/Schedule";
import Team from "./ui/Team";
// import Team from "./ui/Team";
import Testimonial from "./ui/Testimonial";

const App = () => {
  return (
    <div className="flex flex-col min-h-full bg-pr-s text-pr-p">
      <Navbar />
      <Hero />
      <InfiniteVenue />
      <Schedule />
      <Team />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
