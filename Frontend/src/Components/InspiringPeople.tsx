import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const quoteText =
  "With the core message \"Transform Yourself, Transform the World,\" Life Positive Mission integrates spirituality, life coaching, business coaching, leadership development, and social empowerment to create meaningful transformation in individuals and communities.";

const testimonials = [
  { name: "Alison Scott" },
  { name: "William Wright" },
  { name: "Alison Doe" },
];

const InspiringPeople = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <section className="relative bg-[#6a6f75]">
      <div className="absolute inset-0 bg-black/35" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
        <div className="flex flex-col items-center text-center text-white lg:items-center">
          <div className="w-full max-w-md rounded-2xl bg-brand-orange px-6 py-8 sm:px-8 sm:py-10">
            <FaQuoteLeft
              className="mx-auto text-3xl text-white/90 sm:text-4xl"
              aria-hidden
            />
            <p className="mt-5 text-[15px] leading-relaxed text-white">
              {quoteText}
            </p>
          </div>

          <div className="mt-6 h-16 w-16 overflow-hidden rounded-full bg-[#c5ccd6]" />
          <p className="card-title-lg mt-4 text-white">{active.name}</p>

          <div className="mt-6 flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={testimonials[index].name}
                type="button"
                aria-label={`Show review ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === activeIndex
                    ? "bg-brand-orange"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-white">
          <p className="section-eyebrow">POSITIVE THINKING</p>
          <h2 className="section-title mt-4 text-white">Inspiring People</h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/90">
            Guided by the belief that every individual possesses infinite inner
            potential, LPM works to inspire people to transform their lives
            through positive thinking, discipline, self-management, spirituality,
            and purposeful action.
          </p>
          <button
            type="button"
            className="mt-8 cursor-pointer rounded-full border-2 border-white bg-transparent px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default InspiringPeople;
