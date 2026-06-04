import { FaPlay } from "react-icons/fa";

const CallToAction = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="relative bg-[#5c5651]">
      <div className="absolute inset-0 bg-black/35" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
        <div className="text-white">
          <p className="section-eyebrow">CALL TO ACTION</p>
          <h2 className="section-title mt-4 text-white">
            Fundraising for the people and causes you care about
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/90">
            LPM promotes the philosophy that life is not based on luck or
            coincidence, but on conscious construction through positive thinking,
            discipline, and spiritual awakening.
          </p>

          <button
            type="button"
            className="mt-8 flex cursor-pointer items-center gap-4 transition-opacity hover:opacity-90"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/80 bg-black/30">
              <FaPlay className="ml-1 text-brand-orange" aria-hidden />
            </span>
            <span className="text-sm font-semibold tracking-wide text-white uppercase">
              Play Short Video
            </span>
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-brand-navy/90 p-6 shadow-lg backdrop-blur-sm sm:p-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter Name*"
            required
            className="mb-4 w-full rounded-lg border-0 bg-white px-4 py-3 text-sm text-[#333] placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-orange"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email*"
            required
            className="mb-4 w-full rounded-lg border-0 bg-white px-4 py-3 text-sm text-[#333] placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-orange"
          />
          <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone No*"
              required
              className="w-full rounded-lg border-0 bg-white px-4 py-3 text-sm text-[#333] placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
            <input
              type="text"
              name="code"
              placeholder="Enter Code*"
              required
              className="w-full rounded-lg border-0 bg-white px-4 py-3 text-sm text-[#333] placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>
          <button type="submit" className="btn-cta w-full rounded-lg">
            Get Involve Today
          </button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;
