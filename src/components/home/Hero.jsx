import React from 'react';
import Button from '../common/Button';
import { motion } from 'motion/react';
// Animation variants
const fadeIn = (direction = "up", delay = 0) => {
  const distance = 100; // Base distance for all directions
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const value = {
    left: distance,
    right: -distance,
    up: distance,
    down: -distance,
  }[direction] || 0;

  return {
    hidden: { 
      opacity: 0, 
      [axis]: value 
    },
    visible: {
      opacity: 1,
      [axis]: 0,
      transition: {
        delay,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1], // Smooth cubic bezier curve
      },
    },
  };
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <section className="relative pt-[120px] pb-[80px]">
      <div className="container grid gap-[50px] md:grid-cols-[0.8fr,1fr] md:gap-5 md:items-center">
        {/* Content Section */}
        <motion.section
          className="max-w-[550px] mx-auto text-center md:text-left md:max-w-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Start animation a bit earlier
          variants={containerVariants}
        >
          {/* Title - slides down */}
          <motion.h1
            className="font-poppins font-bold leading-tight"
            variants={fadeIn("down", 0.1)}
          >
            Explore Your World with <span className="text-primaryClr">Tourice</span>
          </motion.h1>

          {/* Description - slides from left */}
          <motion.p
            className="mt-6 mb-12 text-lg md:text-xl text-gray-600 leading-relaxed"
            variants={fadeIn("left", 0.6)}
          >
            Experience bespoke itineraries and unparalleled service. Explore the world without breaking the bank.
          </motion.p>

          {/* Button group - staggered from bottom */}
          <motion.div
            className="flex flex-wrap gap-6 justify-center md:justify-start"
            variants={fadeIn("up", 0.5)}
          >
            {/* Contact Us - slides from right */}
            <motion.div variants={fadeIn("right", 0.7)}>
              <Button 
                label="Contact Us" 
                className="btn-primary px-8 py-3 text-lg" 
                path="contact" 
              />
            </motion.div>

            {/* Get Quote - slides from left */}
            <motion.div variants={fadeIn("left", 0.7)}>
              <Button 
                label="Get Quote" 
                className="btn-secondary px-8 py-3 text-lg" 
                path="" 
              />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Image Section */}
        <figure className="mx-auto overflow-hidden">
          <motion.img
            src="/images/hero-banner.png"
            alt="Travelers enjoying a tour"
            className="w-full h-auto"
            loading="eager"
            width={666}
            height={764}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              transition: {
                delay: 0.5,
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
              }
            }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </figure>
      </div>

      {/* Background Image */}
      <img 
        src="/images/hero-bg-img.png" 
        alt="Decorative background" 
        className="absolute top-0 right-0 pointer-events-none -z-10 hidden md:block"
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;