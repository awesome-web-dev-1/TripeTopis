import AboutSec from "../components/home/AboutSec"
import BlogSec from "../components/home/BlogSec"
import Categories from "../components/home/Categories"
import FaqSec from "../components/home/FaqSec"
import Hero from "../components/home/Hero"
import TestimonialsSec from "../components/home/TestimonialsSec"
import TopDestinations from "../components/home/TopDestinations"

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <AboutSec />
      <TopDestinations />
      <FaqSec />
      <TestimonialsSec />
      <BlogSec />
    </>
  )
}

export default Home