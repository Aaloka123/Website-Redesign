import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const featuredEvent = {
  day: "15th",
  month: "AUG",
  title: "Self Management Leadership",
  time: "8:00 am - 12:30 pm",
  location: "Ananda Pashupati Dharmashala",
  description:
    "It is widely used in youth development, entrepreneurship, and organizational growth because it creates responsible individuals who can lead by example, inspire trust, and maintain stability even in challenging situations.",
};

const upcomingList = [
  {
    day: "20th",
    month: "AUG",
    borderColor: "border-brand-navy text-brand-navy",
    title: "Youth Empowerment Workshop",
    time: "10:00 am - 4:00 pm",
    location: "LPM Training Hall, Kathmandu",
    description:
      "A workshop focused on developing leadership skills, positive mindset, and career guidance for the youth of Nepal.",
  },
  {
    day: "25th",
    month: "AUG",
    borderColor: "border-brand-orange text-brand-orange",
    title: "Spiritual Awakening Program",
    time: "6:00 am - 9:00 am",
    location: "Pashupatinath Temple Area",
    description:
      "Discover the power of positive energy and spiritual growth through our guided meditation and mindfulness sessions.",
  },
  {
    day: "10th",
    month: "SEP",
    borderColor: "border-brand-navy text-brand-navy",
    title: "Entrepreneurship Development Meet",
    time: "1:00 pm - 5:00 pm",
    location: "Kathmandu University Hall",
    description:
      "Connecting aspiring entrepreneurs with mentors to foster innovation and business growth in local communities.",
  },
];

const DateBadge = ({
  day,
  month,
  variant = "filled",
  borderColor,
}: {
  day: string;
  month: string;
  variant?: "filled" | "outlined";
  borderColor?: string;
}) => {
  if (variant === "filled") {
    return (
      <div className="flex flex-col items-center justify-center rounded-md bg-brand-orange px-3 py-2 text-center text-white">
        <span className="text-lg font-bold leading-none">{day}</span>
        <span className="mt-1 text-xs font-semibold uppercase">{month}</span>
      </div>
    );
  }

  return (
    <div
      className={`flex min-w-[4.5rem] flex-col items-center justify-center rounded-md border-2 bg-white px-2 py-2 text-center ${borderColor}`}
    >
      <span className="text-base font-bold leading-none">{day}</span>
      <span className="mt-1 text-xs font-semibold uppercase">{month}</span>
    </div>
  );
};

const UpcomingEvents = () => {
  return (
    <section className="bg-[#f5f5f5] px-4 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="INVOLVE NOW" title="Upcoming Events" />

        <div className="mt-10 grid gap-8 lg:grid-cols-[2fr_3fr] lg:gap-10">
          <article className="relative min-h-[380px] overflow-hidden rounded-2xl lg:min-h-[420px]">
            <div
              className="absolute inset-0 bg-[#54595f]"
              aria-label="Featured event image placeholder"
            />
            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute right-4 top-4 sm:right-5 sm:top-5">
              <DateBadge
                day={featuredEvent.day}
                month={featuredEvent.month}
                variant="filled"
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
              <h3 className="card-title-lg text-white">{featuredEvent.title}</h3>
              <div className="mt-3 flex flex-col gap-2 text-[15px] text-white/95">
                <span className="flex items-center gap-2">
                  <FaClock className="shrink-0 text-brand-orange" aria-hidden />
                  {featuredEvent.time}
                </span>
                <span className="flex items-start gap-2">
                  <FaMapMarkerAlt
                    className="mt-0.5 shrink-0 text-brand-orange"
                    aria-hidden
                  />
                  {featuredEvent.location}
                </span>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-white/90">
                {featuredEvent.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="btn-cta-orange rounded-lg px-5 py-2.5"
                >
                  Donate Now
                </button>
                <button
                  type="button"
                  className="cursor-pointer rounded-lg border-2 border-white bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  View Details
                </button>
              </div>
            </div>
          </article>

          <div className="flex flex-col gap-5">
            {upcomingList.map((event) => (
              <article
                key={event.title}
                className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm sm:gap-5 sm:p-6"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="card-title">{event.title}</h3>
                  <div className="body-text mt-2 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-4">
                    <span className="flex items-center gap-1.5">
                      <FaClock
                        className="shrink-0 text-brand-orange"
                        aria-hidden
                      />
                      {event.time}
                    </span>
                    <span className="flex items-start gap-1.5">
                      <FaMapMarkerAlt
                        className="mt-0.5 shrink-0 text-brand-orange"
                        aria-hidden
                      />
                      {event.location}
                    </span>
                  </div>
                  <p className="body-text mt-3">{event.description}</p>
                </div>
                <DateBadge
                  day={event.day}
                  month={event.month}
                  variant="outlined"
                  borderColor={event.borderColor}
                />
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center sm:mt-12">
          <button type="button" className="btn-cta">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
