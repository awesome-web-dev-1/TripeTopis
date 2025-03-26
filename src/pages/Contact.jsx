import { useForm } from "react-hook-form";
import { useState } from "react";
import { Plane } from "lucide-react";
import Button from "../components/common/Button";

const Contact = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitSuccessful }, 
    reset 
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      console.log("Form Data Submitted:", data);
      // Form submission logic here (API call, etc.)
      reset();
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="pt-[120px] md:pt-[150px] pb-[80px]">
        <div className="container grid gap-[50px] md:grid-cols-2 md:items-center">
          <div>
            <p className="subtitle">GET TO KNOW US</p>
            <h2 className="mt-2">Experience the World With Tourice</h2>
            <p className="mt-4 mb-8">
              Tourice was born out of a shared passion for exploration and a desire to create meaningful travel experiences. We believe travel is more than just visiting a place; it's about creating lasting memories.
            </p>

            <div className="bg-[#DEF2F0] p-8">
              <h3 className="text-[24px]">The world is a book, and those who do not travel read only one page.</h3>
            </div>

            <ul className="mt-5">
              <li className="flex gap-3 mb-[15px]">
                <Plane fill="#333" />
                <p>Curating personalized itineraries</p>
              </li>
              <li className="flex gap-3">
                <Plane fill="#333" />
                <p>Believing that travel fosters understanding</p>
              </li>
            </ul>

            <Button className="btn-primary my-8" label="Discover More" path="about" />
          </div>

          <figure className="mx-auto">
            <img src="/images/about-banner.png" alt="about banner" />
          </figure>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-bgClr1 py-[120px]">
        <div className="container">
          <img src="/images/map-img.png" alt="map" />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-[120px]">
        <div className="container grid sm:grid-cols-2 items-stretch gap-3">
          <div>
            <h2>Get In Touch</h2>
            {isSubmitSuccessful && (
              <p className="text-green-500 my-4">Your message has been sent successfully!</p>
            )}
            <form className="my-6 grid gap-[26px]" onSubmit={handleSubmit(onSubmit)}>

              {/* Name Field */}
              <div>
                <input
                  type="text"
                  placeholder="Enter name"
                  {...register("name", { required: "Name is required" })}
                  className="bg-bgClr1 h-10 w-full indent-4 border focus:border-primaryClr outline-none"
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
                  })}
                  className="bg-bgClr1 h-10 w-full indent-4 border focus:border-primaryClr outline-none"
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>

              {/* Company Field (Optional) */}
              <div>
                <input
                  type="text"
                  placeholder="Company Name (Optional)"
                  {...register("company")}
                  className="bg-bgClr1 h-10 w-full indent-4 border focus:border-primaryClr outline-none"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  placeholder="Your Message"
                  {...register("message", { required: "Message is required" })}
                  className="bg-bgClr1 px-4 py-3 resize-none h-[150px] w-full border focus:border-primaryClr outline-none"
                />
                {errors.message && <p className="text-red-500">{errors.message.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-primaryClr p-3 text-white w-full hover:bg-primaryClr/90 transition duration-200"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div>
            <img src="/images/contact-page-form-banner.png" alt="contact image" width={500} height={584} className="rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;