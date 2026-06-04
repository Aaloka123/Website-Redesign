import SectionHeader from "./SectionHeader";

const volunteers = [
  {
    name: "Santosh Prasain",
    role: "Social Activist",
    bio: "is a dedicated youth volunteer passionate about leadership, community service, and positive social transformation through awareness and educational programs.",
  },
  {
    name: "Ishwar Bhandari",
    role: "Event Manager",
    bio: "is an active volunteer focused on empowering youth, promoting positive thinking, and supporting community development initiatives with compassion and teamwork.",
  },
];

const VolunteerOfTheYear = () => {
  return (
    <section className="bg-[#f5f5f5] px-4 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="POWER OF POSITIVE ENERGY"
          title="Volunteer of the Year"
        />

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {volunteers.map(({ name, role, bio }) => (
            <article key={name} className="text-center">
              <div
                className="mx-auto aspect-3/4 w-full max-w-[240px] overflow-hidden rounded-2xl bg-[#c5ccd6] sm:max-w-[280px]"
                aria-label={`${name} photo placeholder`}
              />

              <h3 className="card-title-lg mt-6">{name}</h3>
              <p className="body-text mt-2 font-medium">{role}</p>
              <p className="body-text mx-auto mt-4 max-w-md text-center">
                {bio}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center sm:mt-12">
          <button type="button" className="btn-cta">
            View All Member
          </button>
        </div>
      </div>
    </section>
  );
};

export default VolunteerOfTheYear;
