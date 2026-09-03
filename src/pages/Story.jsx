import { useState } from "react";
import { serviceGroups } from "../data/salonData";
import { ArrowRight, Check } from "lucide-react";

export function StoryChapter({ service, reverse }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article
      className={`story-chapter ${reverse ? "md:text-right" : ""}`}
      data-reveal
    >
      <div className={`story-copy ${reverse ? "md:order-2" : ""}`}>
        <div
          className={`flex items-center gap-3 ${reverse ? "md:justify-end" : ""}`}
        >
          <span className="font-display text-7xl text-[#b99562]">
            {service.number}
          </span>
          <span className="h-px w-14 bg-[#d8c5bb]" />
        </div>
        <p className="mt-4 text-[10px] font-semibold uppercase tracking-[.28em] text-[#a9565c]">
          {service.eyebrow}
        </p>
        <h3 className="mt-2 font-display text-6xl leading-[.86] sm:text-8xl">
          {service.title}
        </h3>
        <p
          className={`mt-6 max-w-md text-sm leading-7 text-[#746763] ${reverse ? "md:ml-auto" : ""}`}
        >
          {service.description}
        </p>
        <p
          className={`mt-5 text-[10px] uppercase tracking-[.2em] text-[#9a7c54] ${reverse ? "md:text-right" : ""}`}
        >
          {service.accent}
        </p>
        <button
          type="button"
          onClick={() => setShowDetails((value) => !value)}
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#dcc9bf] px-5 py-3 text-xs font-semibold text-[#5f514b] transition hover:bg-white"
        >
          {showDetails ? "Hide details" : "View service details"}{" "}
          <ArrowRight
            size={14}
            className={showDetails ? "rotate-90 transition" : "transition"}
          />
        </button>
        {showDetails && (
          <div
            className={`mt-5 grid max-w-md gap-2 text-left sm:grid-cols-2 ${reverse ? "md:ml-auto" : ""}`}
          >
            {service.items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-xl border border-[#eadbd2] bg-[#fffaf6]/70 px-3 py-2 text-[11px] text-[#66564f]"
              >
                <Check size={13} className="text-[#c86f72]" />
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={`story-image-wrap ${reverse ? "md:order-1" : ""}`}>
        <div className="story-image-frame">
          <img
            src={service.image}
            alt={`${service.title} at Fairy of Nail & Lash`}
          />
        </div>
        <div className="story-caption">
          {service.number} / {service.title}
        </div>
      </div>
    </article>
  );
}

export function ScrollingStory() {
  return (
    <section
      id="story"
      className="story-section relative overflow-hidden bg-[#fbf5ef] px-5 py-14 lg:px-10 lg:py-20"
    >
      <div className="story-grid-pattern" />
      <div className="relative mx-auto max-w-6xl">
        <div
          className="mx-auto mb-6 lg:mb-20 max-w-2xl text-center"
          data-reveal
        >
          <p className="section-kicker">The Fairy experience</p>

          <h2 className="section-title">
            Come in for the beauty. Stay for the little moments.
          </h2>

          <p className="section-copy mx-auto">
            Explore our signature beauty rituals, where delicate details meet
            professional care — created to make you feel polished, pampered and
            completely yourself.
          </p>
        </div>
        <div className="story-line" aria-hidden="true" />
        <div className="relative grid gap-15 md:gap-30 lg:gap-45">
          {serviceGroups.map((service, index) => (
            <StoryChapter
              key={service.title}
              service={service}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
