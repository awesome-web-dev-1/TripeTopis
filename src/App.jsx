import { BrowserRouter, Route, Routes } from "react-router-dom";
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

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route path="/" element={<PagesLayout />}>
            {/* Blog Section */}
            <Route path="blog" element={<BlogSideSec />}>
              <Route index element={<Blog />} />
              <Route path=":id" element={<BlogDetails />} />
            </Route>

            {/* Other Pages */}
            <Route path="destination" element={<Destination />} />
            <Route path="destination/:id" element={<DestinationDetails />} />
            <Route path="faq" element={<Faq />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="terms&condition" element={<TermsCondition />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}