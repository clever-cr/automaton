import Hero from "../components/sections/Hero";
import NavBar from "../components/sections/NavBar";
import About from "../components/sections/About";
function AboutUs() {
  return (
    <>
      <div className="bg-[url('./assets/bg.jpeg')] bg-no-repeat bg-cover h-full">
        <NavBar />
        <Hero />
      </div>
      <About />
    </>
  );
}
export default AboutUs;
