import { FaHandHoldingUsd, FaHandshake, FaUserPlus } from "react-icons/fa";
import type { IconType } from "react-icons";
import SectionHeader from "./SectionHeader";

type Card = {
  icon: IconType;
  titleLines: [string, string];
  descriptionLines: string[];
  button: string;
  buttonStyle: "solid" | "outline";
  bg: string;
};

const cards: Card[] = [
  {
    icon: FaUserPlus,
    titleLines: ["Become a", "volunteer"],
    descriptionLines: [
      "Life Positive Mission integrates",
      "spirituality, life coaching, and",
      "leadership development to create",
      "real transformation in individuals",
      "and society.",
    ],
    button: "Join Us Now",
    buttonStyle: "solid",
    bg: "bg-brand-navy",
  },
  {
    icon: FaHandHoldingUsd,
    titleLines: ["Donate to", "support"],
    descriptionLines: [
      "Life Positive Mission is a global",
      "human development initiative",
      "focused on positive energy, life",
      "transformation, leadership, and",
      "business coaching.",
    ],
    button: "Donate Now",
    buttonStyle: "outline",
    bg: "bg-brand-orange",
  },
  {
    icon: FaHandshake,
    titleLines: ["Become a", "partner"],
    descriptionLines: [
      "Partner with us to to create a",
      "positive, conscious, and spiritually",
      "awakened world where",
      "individuals live with purpose,",
      "clarity, discipline, and prosperity.",
    ],
    button: "Learn More",
    buttonStyle: "solid",
    bg: "bg-[#3d3834]",
  },
];

const GetInvolved = () => {
  return (
    <section className="bg-[#f5f5f5] px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="GET INVOLVE NOW" title="Make a difference today" />

        <div className="mt-10 grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-3 lg:gap-12">
          {cards.map(
            ({
              icon: Icon,
              titleLines,
              descriptionLines,
              button,
              buttonStyle,
              bg,
            }) => (
              <article
                key={titleLines.join(" ")}
                className={`w-full rounded-[28px] px-6 py-8 text-white sm:py-10 ${bg}`}
              >
                <div className="flex items-start gap-3">
                  <Icon
                    className="mt-0.5 shrink-0 text-[2rem] leading-none"
                    aria-hidden
                  />
                  <h3 className="card-title-lg text-white">
                    <span className="block">{titleLines[0]}</span>
                    <span className="block">{titleLines[1]}</span>
                  </h3>
                </div>

                <div className="mt-5 text-[15px] leading-relaxed">
                  {descriptionLines.map((line, index) => (
                    <span key={index} className="block">
                      {line}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className={`mt-7 w-fit cursor-pointer rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                    buttonStyle === "solid"
                      ? "bg-brand-orange text-white hover:bg-[#d94e38]"
                      : "border-2 border-white bg-transparent text-white hover:bg-white/10"
                  }`}
                >
                  {button}
                </button>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
