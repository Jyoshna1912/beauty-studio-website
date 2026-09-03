import { useEffect, useState } from "react";
import { gallery } from "../data/salonData";

export function Gallery() {
  const [selected, setSelected] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const visibleSlides = 5;

  // Clone the first 5 images so the carousel can loop seamlessly
  const extendedGallery = [...gallery, ...gallery.slice(0, visibleSlides)];

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(gallery.length);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setCurrentIndex(gallery.length - 1);
        });
      });

      return;
    }

    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  /*Auto scroll*/
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  /* When we reach the cloned slides, instantly jump back to the real slides. */
  useEffect(() => {
    if (currentIndex !== gallery.length) return;

    const timeout = setTimeout(() => {
      setIsTransitioning(false);
      setCurrentIndex(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }, 600);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <section id="gallery" className="bg-[#fbf5ef] px-5 py-14 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div
          className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
          data-reveal
        >
          <div>
            <p className="section-kicker">A glimpse of our work</p>

            <h2 className="section-title">Beauty in every detail.</h2>
          </div>

          <p className="section-copy max-w-sm">
            Real work, close-up details and visual inspiration from Fairy of
            Nail & Lash.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="gallery-carousel">
            <div
              className="gallery-track"
              style={{
                transform: `translateX(
                  calc(
                    -${currentIndex} *
                    (var(--slide-width) + 0.75rem)
                  )
                )`,
                transition: isTransitioning ? "transform 0.6s ease" : "none",
              }}
            >
              {extendedGallery.map((item, index) => (
                <button
                  key={`${item.title}-${index}`}
                  type="button"
                  onClick={() => setSelected(item)}
                  className="gallery-item group"
                >
                  <img src={item.image} alt={item.title} />

                  <span className="gallery-overlay">
                    <span className="font-display text-3xl">{item.title}</span>

                    <span className="mt-1 text-[9px] uppercase tracking-[.22em]">
                      {item.service}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[.2em] text-[#8a7770]">
              {String((currentIndex % gallery.length) + 1).padStart(2, "0")} /{" "}
              {String(gallery.length).padStart(2, "0")}
            </p>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="gallery-arrow"
                aria-label="Previous images"
              >
                ←
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="gallery-arrow"
                aria-label="Next images"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#1e1715]/80 p-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute -right-2 -top-2 z-10 rounded-full bg-white p-2 text-[#352b27] shadow"
              aria-label="Close image"
            >
              <X size={18} />
            </button>

            <img
              src={selected.image}
              alt={selected.title}
              className="max-h-[85vh] rounded-[1.8rem] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
