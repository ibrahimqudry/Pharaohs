import ExclusiveOffers from '../components/ExclusiveOffers/ExclusiveOffers.jsx';
import Projects from '../components/Projects/Projects.jsx';
import WhyInvest from '../components/WhyInvest/WhyInvest.jsx';
import Testimonials from '../components/Testimonials/Testimonials.jsx';
import Hero from '../components/Hero/Hero.jsx';
import PharaohsEvents from '../components/PharaohsEvents/PharaohsEvents.jsx';

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