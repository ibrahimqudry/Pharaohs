import ExclusiveOffers from '../components/ExclusiveOffers/ExclusiveOffers.jsx';
import Projects from '../components/Projects/Projects.jsx';
import WhyInvest from '../components/WhyInvest/WhyInvest.jsx';
import Testimonials from '../components/Testimonials/Testimonials.jsx';

function HomePage() {
  return (
    <main className="pt-16">
      <ExclusiveOffers />
      <Projects />
      <WhyInvest />
      <Testimonials />
    </main>
  );
}

export default HomePage;