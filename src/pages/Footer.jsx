import { ArrowRight, LucideCamera, MessageCircle } from "lucide-react";
import { salonInfo, serviceGroups } from "../data/salonData";
import { scrollToId } from "../components/CommonComps";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#211b19] px-5 pb-5 pt-16 text-[#f8eee8] lg:px-10">
      <span className="pointer-events-none absolute right-[8%] top-10 font-display text-2xl text-[#cda878]/50">
        ✦
      </span>
      <span className="pointer-events-none absolute top-5 left-[15%] text-md text-[#cda878]">
        ✦
      </span>
      <span className="pointer-events-none absolute top-80 left-[15%] text-md text-[#cda878]">
        ✦
      </span>
      <span className="pointer-events-none absolute left-[5%] top-32 text-lg text-[#d9b6a7]/40">
        ✧
      </span>

      <span className="pointer-events-none absolute bottom-24 right-[4%] text-xs text-[#cda878]/40">
        ✦
      </span>
      <span className="pointer-events-none absolute top-60 right-[12%] text-md text-[#cda878]">
        ✦
      </span>

      <div className="relative mx-auto max-w-7xl">
        <div className="border-b border-white/10 pb-12 text-center">
          <p className="footer-kicker">Until your next little ritual</p>

          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight text-[#f8eee8] sm:text-5xl lg:text-6xl">
            Leave feeling a little more
            <span className="ml-2 text-[#d9b6a7] italic">magical.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-md text-xs leading-6 text-stone-400">
            Beautiful details, thoughtful care and a little Fairy magic —
            whenever you are ready for your next beauty moment.
          </p>

          <button
            type="button"
            onClick={() => scrollToId("booking")}
            className="group mt-7 inline-flex items-center gap-2 rounded-full border border-[#d9b6a7]/40 px-5 py-3 text-[10px] font-semibold uppercase tracking-[.2em] text-[#f8eee8] transition-all duration-300 hover:-translate-y-1 hover:border-[#d9b6a7] hover:bg-[#d9b6a7] hover:text-[#211b19] hover:shadow-[0_8px_25px_rgba(217,182,167,0.15)]"
          >
            <span className="text-xl text-[#cda878]">✦</span>
            Book your little ritual
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Main footer */}
        <div className="grid gap-12 py-12 grid-cols-2 sm:grid-cols-3">
          {/* Explore */}
          <div>
            <p className="footer-kicker">Explore</p>

            <div className="mt-5 grid gap-3 text-xs text-stone-400">
              {[
                "Home",
                "Services",
                "Story",
                "About",
                "Gallery",
                "Reviews",
                "Contact",
              ].map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => scrollToId(item.toLowerCase())}
                  className="group flex w-fit items-center gap-2 text-left transition-colors duration-200 hover:text-[#f8eee8]"
                >
                  <span className="text-[8px] text-[#cda878] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    ✦
                  </span>
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="footer-kicker">Beauty rituals</p>

            <div className="mt-5 grid gap-3 text-xs text-stone-400">
              {serviceGroups.map((service) => (
                <span
                  key={service.title}
                  className="transition-colors duration-200 hover:text-[#f8eee8]"
                >
                  {service.title}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="hidden sm:block">
            <p className="footer-kicker">Come say hello</p>

            <p className="mt-5 text-xs leading-6 text-stone-400">
              {salonInfo.shortAddress}
              <br />
              {salonInfo.phoneDisplay}
              <br />
              Open every day
            </p>

            <p className="mt-3 text-[10px] uppercase tracking-[.16em] text-[#d9b6a7]">
              10 AM — 7 PM
            </p>

            <div className="mt-5 flex gap-2">
              <a
                href={salonInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="footer-social group"
                aria-label="Instagram"
              >
                <LucideCamera
                  size={15}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              <a
                href={`https://wa.me/${salonInfo.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="footer-social group"
                aria-label="WhatsApp"
              >
                <MessageCircle
                  size={15}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-[9px] tracking-wide text-stone-500">
            © 2026 Fairy of Nail & Lash. All rights reserved.
          </p>

          <p className="font-display text-sm italic text-stone-500">
            Made with a little magic @Jyosh{" "}
            <span className="text-[#cda878]">✦</span>
          </p>
        </div>
      </div>
    </footer>
  );
}