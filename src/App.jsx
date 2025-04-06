import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Destination from "./pages/Destination";
import DestinationDetails from "./pages/DestinationDetails";
import Faq from "./pages/Faq";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import PagesLayout from "./layout/PagesLayout";
import Contact from "./pages/Contact";
import BlogSideSec from "./layout/BlogSideSec";
import ScrollToTop from "./components/sections/ScrollToTop";
import TermsCondition from "./pages/TermsCondition";
import SignUp from "./pages/SignUp";

const AnimatedPage = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAppLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!isAppLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 flex items-center justify-center"
          >
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<AnimatedPage><Home /></AnimatedPage>} />
            
            <Route path="/" element={<PagesLayout />}>
              {/* Blog Section */}
              <Route path="blog" element={<BlogSideSec />}>
                <Route index element={<AnimatedPage><Blog /></AnimatedPage>} />
                <Route path=":id" element={<AnimatedPage><BlogDetails /></AnimatedPage>} />
              </Route>

              {/* Destination Routes */}
              <Route path="destination" element={<AnimatedPage><Destination /></AnimatedPage>} />
              <Route path="destination/:id" element={<AnimatedPage><DestinationDetails /></AnimatedPage>} />

              {/* Other Pages */}
              <Route path="faq" element={<AnimatedPage><Faq /></AnimatedPage>} />
              <Route path="pricing" element={<AnimatedPage><Pricing /></AnimatedPage>} />
              <Route path="about" element={<AnimatedPage><About /></AnimatedPage>} />
              <Route path="contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
              <Route path="terms&condition" element={<AnimatedPage><TermsCondition /></AnimatedPage>} />
              <Route path="signup" element={<AnimatedPage><SignUp /></AnimatedPage>} />
              
              {/* 404 Page */}
              <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
            </Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}