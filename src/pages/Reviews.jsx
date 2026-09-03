import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { fairy, reviews } from "../data/salonData";

export function Reviews() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const review = reviews[active];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActive((value) => (value + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="reviews" className="bg-[#fffaf6] px-5 py-14 lg:px-10 lg:py-22">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <p className="section-kicker">Kind words</p>
          <h2 className="section-title">The little things clients remember.</h2>
        </div>

        <div
          className="mt-14 grid items-stretch gap-8 lg:grid-cols-[.35fr_1fr]"
          data-reveal
        >
          {/* Rating card */}
          <div className="rounded-[2rem] bg-[#f4dfd9] p-7">
            <div className="text-center">
              <div className="flex justify-center gap-1 text-[#a9565c]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="mt-6 font-sans text-5xl">5.0</p>

              <p className="mt-2 text-xs leading-5 text-[#746763]">
                Google business rating currently shows a 5.0 rating from 43
                reviews.
              </p>

              <a
                href="https://www.google.com/search?q=Fairy+of+Nail+%26+Lash+Tirupati"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.18em] text-[#a9565c]"
              >
                See more reviews <ArrowRight size={14} />
              </a>
            </div>

            {/* Fairy avatar */}
            <div className="relative mt-4 flex justify-center sm:justify-end sm:hidden lg:flex lg:justify-center">
              <div className="relative h-42 w-60  sm:w-44 lg:h-60 lg:w-60">
                <img
                  src={fairy}
                  alt="Fairy of Nail & Lash"
                  loading="lazy"
                  className="h-full w-full object-contain drop-shadow-sm"
                />

                <span className="absolute left-1 top-3 text-[#cda878]">✦</span>

                <span className="absolute right-2 top-8 text-sm text-[#cda878]">
                  ✧
                </span>

                <span className="absolute bottom-4 left-3 text-xs text-[#cda878]">
                  ✦
                </span>
              </div>
            </div>
          </div>

          {/* Review carousel */}
          <div
            className="relative overflow-hidden rounded-[2rem] border border-[#eadbd2] bg-[#fbf5ef]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${active * 100}%)`,
              }}
            >
              {reviews.map((item) => (
                <div
                  key={item.name + item.quote}
                  className="w-full shrink-0 p-7 sm:p-10"
                >
                  <span className="font-display text-6xl text-[#cda878]">
                    “
                  </span>

                  <p className="mt-1 max-w-3xl font-display text-3xl leading-tight text-[#352b27] sm:text-4xl">
                    {item.quote}
                  </p>

                  <p className="mt-6 max-w-2xl text-xs leading-6 text-[#806f67]">
                    {item.detail}
                  </p>

                  <div className="mt-7 flex items-center justify-between gap-4 border-t border-[#e7d8cf] pt-5">
                    <div>
                      <p className="text-xs font-semibold">{item.name}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[.18em] text-[#a9565c]">
                        Customer review
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setActive(
                            (value) =>
                              (value - 1 + reviews.length) % reviews.length,
                          )
                        }
                        className="rounded-full border border-[#d8c5bb] p-2 transition hover:bg-[#f4dfd9]"
                        aria-label="Previous review"
                      >
                        <ChevronLeft size={16} />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setActive((value) => (value + 1) % reviews.length)
                        }
                        className="rounded-full border border-[#d8c5bb] p-2 transition hover:bg-[#f4dfd9]"
                        aria-label="Next review"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel dots */}
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-1.5">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Go to review ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    active === index ? "w-5 bg-[#a9565c]" : "w-1.5 bg-[#d8c5bb]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
