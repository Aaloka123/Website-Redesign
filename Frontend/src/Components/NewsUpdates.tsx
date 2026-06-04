import SectionHeader from "./SectionHeader";

const newsItems = [
  {
    title: "Leadership Training",
    description:
      "A transformational leadership training program focused on self-management, positive thinking, communication skills, teamwork, and youth empowerment to develop responsible and visionary leaders for society.",
    date: "August 17, 2025",
  },
  {
    title: "Traffic Awareness Program",
    description:
      "A public awareness initiative designed to educate citizens, students, and drivers about road safety, traffic discipline & responsible driving.",
    date: "September 17, 2025",
  },
  {
    title: "Entrepreneurship Award",
    description:
      "A prestigious recognition program honoring innovative entrepreneurs, startup founders, and business leaders who are contributing to economic growth, employment generation, and positive social impact.",
    date: "March 17, 2026",
  },
];

const NewsUpdates = () => {
  return (
    <section className="bg-white px-4 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="LATEST UPDATES"
          title="News & Updates"
          align="left"
        />

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
          {newsItems.map(({ title, description, date }) => (
            <article
              key={title}
              className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5"
            >
              <div
                className="group relative aspect-5/3 w-full cursor-pointer overflow-hidden bg-[#c5ccd6]"
                aria-label={`${title} image`}
              >
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/50">
                  <p className="card-title text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    text
                  </p>
                </div>
              </div>

              <div className="px-5 py-6 sm:px-6">
                <h3 className="card-title">{title}</h3>
                <p className="body-text mt-3">{description}</p>
                <p className="mt-5 border-t border-[#e2e6ec] pt-4 text-xs text-brand-muted">
                  Life Positive Mission | {date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates