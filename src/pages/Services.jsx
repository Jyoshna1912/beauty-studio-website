import { ArrowRight } from "lucide-react";
import { serviceGroups } from "../data/salonData";
import { scrollToId } from "../components/CommonComps";

export function Services() {
  return (
    <section
      id="services"
      className="bg-[#fffaf6] px-5 py-14 lg:px-10 lg:py-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center" data-reveal>
          <p className="section-kicker">Our world of beauty</p>
          <h2 className="section-title">
            Everything you need to feel like you.
          </h2>
          <p className="section-copy mx-auto">
            Explore the four signature chapters of Fairy — each service can be
            tailored to the look, occasion and finish you have in mind.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {serviceGroups.map((service, index) => (
            <article
              key={service.title}
              className="service-card group flex h-full flex-col"
              data-reveal
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="service-card-image">
                <img
                  src={service.image}
                  alt={`${service.title} service`}
                  loading="lazy"
                />
                <span className="service-number">{service.number}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[9px] uppercase tracking-[.2em] text-[#a9565c]">
                  {service.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-4xl">{service.title}</h3>
                <p className="mt-3 text-xs leading-6 text-[#746763]">
                  {service.description}
                </p>

                <button
                  type="button"
                  onClick={() => scrollToId("story")}
                  className="mt-auto pt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.16em] text-[#a9565c] hover:cursor-pointer"
                >
                  Explore chapter <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
