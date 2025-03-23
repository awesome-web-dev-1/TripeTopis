const Cta = () => {
  return (
    <section className="relative px-10 sm:px-0">
        <div className="container bg-[url(/images/news-bg.png)] bg-cover bg-center rounded-[16px] grid place-content-center text-center py-[60px] text-white md:grid-cols-2 items-center md:px-[92px] md:gap-5">
        <div className="md:text-left">
            <h2 className="text-white">Get our pro offers</h2>
            <p className="my-4 max-w-[450px] mx-auto md:max-w-none">Create a visual identity for your company and an overall branding that stands out.</p>
        </div>
            <div className="bg-white py-5 text-neutral-600 relative max-w-[532px] mx-auto w-full">
                <input type="email" placeholder="Enter Your Email" className="w-full indent-5 block" required />
                <button type="submit" className="bg-secodaryClr text-white px-4 absolute top-2 right-2 bottom-2 hover:bg-secodaryClr/90 transition-colors duration-200">
                    Subscribe
                </button>
            </div>
        </div>
        <div className="bg-secodaryClr absolute bottom-0 left-0 right-0 h-[50%] -z-10"></div>
    </section>
  )
}

export default Cta