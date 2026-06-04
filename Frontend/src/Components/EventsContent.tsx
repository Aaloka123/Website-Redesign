const events = [
  {
    progress: 70,
    progressColor: "bg-brand-orange",
    title: "Entrepreneurship Award",
    description:
      "Recognizing and honoring outstanding entrepreneurs who have made significant contributions to the community through innovation and social responsibility.",
  },
  {
    progress: 85,
    progressColor: "bg-brand-navy",
    title: "Financial help for poor, needy families",
    description:
      "Providing essential support and resources to underprivileged families to help them build a better future and overcome financial challenges.",
  },
];

const EventsContent = () => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
      {events.map(({ progress, progressColor, title, description }) => (
        <article
          key={title}
          className="overflow-hidden rounded-2xl border border-[#e2e6ec] bg-white shadow-sm"
        >
          <div className="relative aspect-16/10 w-full overflow-hidden bg-[#c5ccd6]">
            <div
              className="absolute inset-0"
              aria-label={`${title} image placeholder`}
            />

            <div className="absolute inset-x-0 bottom-0 bg-[#e8eaee]/90">
              <div className="h-10 overflow-hidden">
                <div
                  className={`flex h-full min-w-0 items-center justify-between px-4 text-xs font-semibold text-white ${progressColor}`}
                  style={{ width: `${progress}%` }}
                >
                  <span>Raised Funds</span>
                  <span>{progress}%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-6 sm:px-7 sm:py-7">
            <h3 className="card-title">{title}</h3>
            <p className="body-text mt-3">{description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default EventsContent;
