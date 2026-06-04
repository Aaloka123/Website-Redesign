import { FaCheck } from "react-icons/fa";

const missionPoints = [
  "To inspire positive thinking and mindset transformation",
  "To develop life skills and leadership qualities",
  "To empower students and youth",
  "To support entrepreneurs and professionals",
  "To promote cultural harmony and human connection",
  "To strengthen Nepal–India friendship through spiritual and social initiatives",
];

const OurMission = () => {
  return (
    <section className="bg-white px-4 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div
          className="aspect-[4/3] w-full rounded-2xl bg-[#c5ccd6]"
          aria-label="Mission image placeholder"
        />

        <div>
          <p className="section-eyebrow">OUR MISSION</p>
          <h2 className="section-title">
            Transform Yourself, Transform the World
          </h2>
          <p className="body-text mt-5">
            We work to connect spirituality with practical life development for
            real-world success.
          </p>

          <ul className="mt-8 space-y-4">
            {missionPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <FaCheck
                  className="mt-1 shrink-0 text-brand-orange"
                  aria-hidden
                />
                <span className="body-text text-brand-body-alt">{point}</span>
              </li>
            ))}
          </ul>

          <button type="button" className="btn-cta-orange mt-8">
            Continue Reading
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
