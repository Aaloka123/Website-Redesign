import EventsContent from "./EventsContent";
import SectionHeader from "./SectionHeader";

const RecentEvents = () => {
  return (
    <section className="bg-white px-4 py-14 sm:py-16 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="SOCIAL ACTIVITES" title="Recent Events" />

        <EventsContent />

        <div className="mt-10 text-center sm:mt-12">
          <button type="button" className="btn-cta">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;
