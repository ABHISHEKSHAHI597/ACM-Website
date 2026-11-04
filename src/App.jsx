import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import AcmwPage from "./pages/AcmwPage";
import ContactPage from "./pages/ContactPage";
import EventsPage from "./pages/EventsPage";
import HomePage from "./pages/HomePage";
import InfoPage, { pageContent } from "./pages/InfoPage";
import ProjectsPage from "./pages/ProjectsPage";
import ResourcesPage from "./pages/ResourcesPage";
import TeamPage from "./pages/TeamPage";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/acm-w" element={<AcmwPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          {Object.keys(pageContent).map((path) => (
            <Route key={path} path={path} element={<InfoPage path={path} />} />
          ))}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
