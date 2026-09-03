import { Check, Sparkles } from "lucide-react";
import { trustPoints } from "../data/salonData";

export function About() {
  return (
    <section id="about" className="bg-[#fffaf6] px-5 py-14 lg:px-10 lg:py-22">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.95fr_1.05fr]">
        <div className="relative" data-reveal>
          <div className="about-art">
            <div className="about-photo-placeholder">
              <div className="text-center">
                <Sparkles className="mx-auto mb-3 text-[#c69c6c]" size={22} />
                <p className="font-display text-3xl">A little space</p>
                <p className="font-script text-3xl text-[#c86f72]">
                  to feel beautiful.
                </p>
              </div>
            </div>
          </div>
          <div className="about-note">
            <p className="font-display text-2xl">More than a salon.</p>
            <p className="font-script text-3xl text-[#a9565c]">
              It's your moment.
            </p>
          </div>
        </div>

        <div data-reveal>
          <p className="section-kicker">About Fairy</p>
          <h2 className="font-display mt-3 text-6xl leading-[.9] sm:text-8xl">
            Beauty lives in <span className="text-[#c86f72]">the details.</span>
          </h2>
          <p className="mt-7 max-w-xl text-sm leading-7 text-[#746763]">
            Fairy of Nail & Lash is a Tirupati beauty studio built around the
            details that make a beauty appointment feel personal. Whether you
            are here for a nail transformation, a lash look, a facial or a saree
            that needs perfectly placed pleats, the focus is on careful work and
            making you feel comfortable while it happens.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#746763]">
            For birthdays, weddings, festivals, functions or simply a day when
            you want to do something for yourself — come in with a reference, an
            idea or just a feeling. We can take it from there.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {trustPoints.map((point) => (
              <div key={point.title} className="border-t border-[#e7d8cf] pt-4">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#f6e4df] text-[#a9565c]">
                  <Check size={14} />
                </div>
                <p className="text-xs font-semibold">{point.title}</p>
                <p className="mt-2 text-[10px] leading-5 text-[#8a7770]">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
