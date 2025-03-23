import React from 'react'
import Button from '../common/Button'

const Hero = () => {
  return (
    <section className="pt-[120px] md:pt-[150px] pb-[80px] relative">
        <div className="container grid gap-[50px] md:grid-cols-[0.8fr,1fr] md:gap-5 md:items-center">
            <div className="xs:max-w-[550px] xs:mx-auto text-center md:text-left md:max-w-none">
                <h1>Explore Your World with Tourice</h1>
                <p className='mt-4 mb-10'>Experience bespoke itineraries and unparalleled service.Explore the world without breaking the bank.</p>
                <div className="flex flex-wrap gap-5 items-center justify-center md:justify-start">
                    <Button label="Contact Us" className="btn-primary" path='contact' />
                    <Button label="Get Quote" className="btn-secondary" path=''/>
                </div>
            </div>
            <figure className="mx-auto">
                <img src="/images/hero-banner.png" alt="hero banner" />
            </figure>
        </div>
        <img src="/images/hero-bg-img.png" alt="bg img" className='absolute top-0 left-0 right-0 bottom-0 opacity-10 -z-10 mx-auto h-[100vh] object-cover' />
    </section>
  )
}

export default Hero