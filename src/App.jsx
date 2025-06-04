import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import InvestmentPage from './pages/InvestmentPage';
import VipReviewsPage from './pages/VipReviewsPage';

function App() {
  return (
    <Router>
      <Header />
      <main className="pt-16 pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/investment" element={<InvestmentPage />} />
          <Route path="/vip-reviews" element={<VipReviewsPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
