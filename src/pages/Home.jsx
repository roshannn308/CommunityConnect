import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/home/Hero.jsx";
import Reality from "../components/home/Reality.jsx";
import Approach from "../components/home/Approach.jsx";
import Mission from "../components/home/Mission.jsx";
import Impact from "../components/home/Impact.jsx";
import UpcomingEvents from "../components/home/UpcomingEvents.jsx";
import Moments from "../components/home/Moments.jsx";
import Voices from "../components/home/Voices.jsx";
import GetInvolved from "../components/home/GetInvolved.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Reality />
      <Approach />
      <Mission />
      <Impact />
      <UpcomingEvents />
      <Moments />
      <Voices />
      <GetInvolved />
      <Footer />
    </>
  );
}

export default Home;
