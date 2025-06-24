import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext'; // Add this import
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import InvestmentPage from './pages/InvestmentPage';
import VipReviewsPage from './pages/VipReviewsPage';
import EventsPage from './pages/EventsPage';
import CareersPage from './pages/CareersPage';
import AboutPage from './pages/AboutPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ProjectDetailsPage from './pages/ProjectDetailsPage';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider> 
        <Router>
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={
              // <ProtectedRoute>
              //   <AdminDashboard />
              // </ProtectedRoute>
                <AdminDashboard />
            } />

            {/* Public Routes */}
            <Route path="/" element={
              <>
                <Header />
                <main className="pt-16 pb-16">
                  <Home />
                </main>
                <Footer />
              </>
            } />
            <Route path="/projects" element={
              <>
                <Header />
                <main className="pt-16 pb-16">
                  <ProjectsPage />
                </main>
                <Footer />
              </>
            } />
            <Route path="/contact" element={
              <>
                <Header />
                <main className="pt-16 pb-16">
                  <ContactPage />
                </main>
                <Footer />
              </>
            } />
            <Route path="/investment" element={
              <>
                <Header />
                <main className="pt-16 pb-16">
                  <InvestmentPage />
                </main>
                <Footer />
              </>
            } />
            <Route path="/vip-reviews" element={
              <>
                <Header />
                <main className="pt-16 pb-16">
                  <VipReviewsPage />
                </main>
                <Footer />
              </>
            } />
            <Route path="/events" element={
              <>
                <Header />
                <main className="pt-16 pb-16">
                  <EventsPage />
                </main>
                <Footer />
              </>
            } />
            <Route path="/careers" element={
              <>
                <Header />
                <main className="pt-16 pb-16">
                  <CareersPage />
                </main>
                <Footer />
              </>
            } />
            <Route path="/about" element={
              <>
                <Header />
                <main className="pt-16 pb-16">
                  <AboutPage />
                </main>
                <Footer />
              </>
            } />
            <Route path="/projects/:id" element={
              <>
                <Header />
                <main className="pt-16 pb-16">
                  <ProjectDetailsPage />
                </main>
                <Footer />
              </>
            } />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
