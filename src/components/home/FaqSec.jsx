import { faqItems } from "../../constant/data";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FaqSec = () => {
  const [activeFaq, setActiveFaq] = useState(null); // Track active FAQ toggle

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id); // Toggle the specific FAQ item
  };

  return (
    <section className="py-[120px] md:py-[150px]">
      <div className="container grid gap-9 md:gap-[60px] md:grid-cols-2 md:items-start">
        <div>
          <p className="subtitle">FAQ</p>
          <h2>Frequently Asked <br /> Questions</h2>
          <div className="mt-6 flex gap-4 xs:gap-[60px]">
            <div>
              <img src="/images/faq-img-1.png" alt="" />
            </div>
            <div>
              <img src="/images/faq-img-2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="grid gap-[25px]">
          {faqItems.map((item) => (
            <div key={item.id} className="border border-neutral-700/15 px-8 py-5 rounded-lg">
              <div
                className="flex items-center py-5 justify-between gap-5 text-neutral-700 hover:text-primaryClr focus:text-primaryClr cursor-pointer"
                onClick={() => toggleFaq(item.id)}
              >
                <h3
                  className={`text-[20px] font-semibold transition-colors duration-300 ${activeFaq === item.id ? "text-primaryClr" : "text-neutral-700"}`}
                >
                  {item.title}
                </h3>
                <button className={`${activeFaq === item.id ? "text-primaryClr" : "text-neutral-700"}`}>
                  {activeFaq === item.id ?
                    <ChevronUp  />
                   : 
                    <ChevronDown />
                  }
                </button>
              </div>
              <div
                className={`faq-text ${activeFaq === item.id ? "active" : ""}`}
              >
                <p className="pt-[19.5px] pb-[33.5px]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSec;
