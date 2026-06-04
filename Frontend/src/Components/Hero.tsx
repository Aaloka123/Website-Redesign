const Hero = () => {
  return (
    <section className="bg-[#3d3834] px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-brand-orange sm:text-5xl lg:text-6xl">
          Life Positive Mission
        </h1>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white sm:text-base">
          Life Positive Mission (LPM) is a volunteer-driven, public charitable,
          international non-profit organization dedicated to cultivating human
          potential.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button type="button" className="btn-cta-orange px-6 sm:px-8">
            Donate Fund
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:px-8"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
