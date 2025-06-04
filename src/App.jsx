import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import InvestmentPage from './pages/InvestmentPage';
import VipReviewsPage from './pages/VipReviewsPage';
import EventsPage from './pages/EventsPage';
import CareersPage from './pages/CareersPage';
import ProjectMilestonesPage from './pages/ProjectMilestonesPage';

function App() {
  return (
    <BrowserRouter basename="/">
      <Header />
      <main className="pt-16 pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/investment" element={<InvestmentPage />} />
          <Route path="/vip-reviews" element={<VipReviewsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/project-milestones" element={<ProjectMilestonesPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
