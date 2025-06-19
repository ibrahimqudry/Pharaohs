import ExclusiveOffers from '../components/HomePageComponents/ExclusiveOffers/ExclusiveOffers.jsx';
import Projects from '../components/HomePageComponents/Projects/Projects.jsx';
import WhyInvest from '../components/HomePageComponents/WhyInvest/WhyInvest.jsx';
import Testimonials from '../components/HomePageComponents/Testimonials/Testimonials.jsx';
import Hero from '../components/HomePageComponents/Hero/Hero.jsx';
import PharaohsEvents from '../components/HomePageComponents/PharaohsEvents/PharaohsEvents.jsx';

function HomePage() {
  return (
    <main className="pt-16">
      <Hero />
      <ExclusiveOffers />
      <Projects />
      <WhyInvest />
      <Testimonials />
      <PharaohsEvents />
    </main>
  );
}

export default HomePage;