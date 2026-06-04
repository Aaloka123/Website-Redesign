const logos = [1, 2, 3, 4];

const LogoSection = () => {
  return (
    <section className="bg-[#f5f5f5] px-4 py-12 sm:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          {logos.map((item) => (
            <div
              key={item}
              className="group flex h-28 cursor-pointer items-center justify-center rounded-lg border-2 border-brand-navy/25 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange hover:shadow-md sm:h-32"
              aria-label={`Partner logo ${item}`}
            >
              <span className="text-lg font-medium text-brand-navy transition-all duration-300 group-hover:scale-110 group-hover:text-brand-orange">
                logo
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button type="button" className="section-eyebrow cursor-pointer transition-colors hover:text-[#d94e38]">
            GET INVOLVE NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
