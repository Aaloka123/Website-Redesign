import SectionHeader from "./SectionHeader";

const galleryItems = Array.from({ length: 8 }, (_, i) => i);

const PhotoGallery = () => {
  return (
    <section className="bg-[#f5f5f5] px-4 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="PORTFOLIO / GALLERY" title="Photo gallery" />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {galleryItems.map((index) => (
            <div
              key={index}
              className="group relative aspect-4/3 w-full cursor-pointer overflow-hidden rounded-2xl bg-[#c5ccd6]"
              aria-label={`Gallery image ${index + 1}`}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/50">
                <p className="card-title text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  text
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
