import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SobreLocal from "../components/SobreLocal";
import Rectangle from "../assets/Rectangle.png";
import Espaco from "../components/Espaco";
import segundolanche from "../assets/segundolanche.png";
import BannerFooter from "../components/bannerFooter";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SobreLocal />
      <div>
        <img src={Rectangle} alt="" />
      </div>
      <Espaco />
      <div className="flex justify-center bg-black">
        <img className="w-[80%]" src={segundolanche} alt="" />
      </div>
      <BannerFooter />
      <Footer />
    </div>
  );
}
