import { ArrowRight, CalendarDays, Clock3, LucideCamera, MapPin, MessageCircle, Phone } from "lucide-react";
import { salonInfo } from "../data/salonData";
import { scrollToId } from "../components/CommonComps";

export function Contact() {
  return (
    <section id="contact" className="bg-[#fffaf6] px-5 py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="contact-card">
          <div className="grid gap-12 lg:grid-cols-[1fr_.85fr]">
            <div data-reveal>
              <p className="section-kicker">Come say hello</p>
              <h2 className="font-display mt-3 text-6xl leading-[.9] sm:text-8xl">
                Let's make your{" "}
                <span className="font-script text-[#c86f72]">
                  moment beautiful.
                </span>
              </h2>
              <div className="mt-9 grid gap-5 text-sm text-[#66564f]">
                {/* <div className="flex gap-3">
                  <MapPin
                    size={18}
                    className="mt-0.5 shrink-0 text-[#a9565c]"
                  />
                  <span>{salonInfo.address}</span>
                </div> */}
                <div className="flex gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-[#a9565c]" />
                  <a href={salonInfo.phoneHref}>{salonInfo.phoneDisplay}</a>
                </div>
                <div className="flex gap-3">
                  <Clock3
                    size={18}
                    className="mt-0.5 shrink-0 text-[#a9565c]"
                  />
                  <span>
                    {salonInfo.hours}
                    <br />
                    {salonInfo.appointmentNote}
                  </span>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={salonInfo.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-[#c86f72] px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(200,111,114,0.25)]"
                >
                  <Phone size={14} /> Call
                </a>
                <a
                  href={`https://wa.me/${salonInfo.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d8c5bb] px-5 py-3 text-xs font-semibold text-[#5f514b]  transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(200,111,114,0.25)]"
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </div>
            </div>

            <div data-reveal>
              <div className="location-card ">
                <div>
                  <p className="mt-6 text-[10px] font-semibold uppercase tracking-[.22em] text-[#a9565c]">
                    Find Fairy
                  </p>
                  <h3 className="mt-2 font-display text-4xl">Tirupati</h3>
                  <p className="mt-2 text-sm leading-6 text-[#746763]">
                    {salonInfo.address}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white p-1 mt-5 rounded-full">
                    <MapPin size={28} className="text-[#c86f72]" />
                  </div>
                  <a
                    href={salonInfo.mapsQuery}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#c86f72] px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(200,111,114,0.25)]"
                  >
                    Open in Google Maps <ArrowRight size={14} />
                  </a>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={salonInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(200,111,114,0.25)]"
                >
                  <LucideCamera size={17} /> Instagram
                </a>
                <button
                  type="button"
                  onClick={() => scrollToId("booking")}
                  className="social-link hover:cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(200,111,114,0.25)]"
                >
                  <CalendarDays size={17} /> Book a slot
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
