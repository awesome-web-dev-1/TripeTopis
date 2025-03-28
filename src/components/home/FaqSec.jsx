import { faqItems } from "../../constant/data";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FaqSec = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <section className="py-[120px] md:py-[150px]">
      <div className="container grid gap-9 md:gap-[60px] md:grid-cols-2 md:items-start">
        {/* FAQ Header Section */}
        <div>
          <p className="subtitle text-lg font-medium text-gray-500">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Frequently Asked <br /> Questions
          </h2>
          <div className="flex gap-6 mt-10">
            <div className="">
            <img 
              src="/images/faq-img-1.png" 
              alt="Decorative illustration" 
              className=""
              loading="lazy"
            />
            </div>
            <div className="">
            <img 
              src="/images/faq-img-2.png" 
              alt="Decorative illustration" 
              className=""
              loading="lazy"
            />
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="grid gap-6">
          {faqItems.map((item) => {
            const isActive = activeFaq === item.id;
            return (
              <div 
                key={item.id} 
                className="border border-neutral-700/15 rounded-lg overflow-hidden transition-all"
              >
                <button
                  className="flex items-center justify-between w-full px-6 py-5 text-left"
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isActive}
                  aria-controls={`faq-content-${item.id}`}
                >
                  <h3 className={`text-lg md:text-xl font-semibold transition-colors ${isActive ? 'text-primaryClr' : 'text-neutral-700'}`}>
                    {item.title}
                  </h3>
                  <span className={`ml-4 transition-transform ${isActive ? 'rotate-180' : ''}`}>
                    {isActive ? <ChevronUp /> : <ChevronDown />}
                  </span>
                </button>
                
                <div
                  id={`faq-content-${item.id}`}
                  className={`px-6 overflow-hidden transition-all duration-300 ${isActive ? 'max-h-[500px] pb-6' : 'max-h-0'}`}
                >
                  <p className="text-neutral-700">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSec;