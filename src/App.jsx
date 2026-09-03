import { useState } from "react";
import { ArrowDown, ArrowRight, Menu, X } from "lucide-react";
import { NailBanner, salonInfo } from "./data/salonData";
import {
  FairyDecor,
  FloatingBookButton,
  scrollToId,
  useReveal,
} from "./components/CommonComps";
import { Services } from "./pages/Services";
import { ScrollingStory } from "./pages/Story";
import { About } from "./pages/About";
import { Gallery } from "./pages/Gallery";
import { Reviews } from "./pages/Reviews";
import { Booking } from "./pages/BookingPage";
import { Contact } from "./pages/ContactPage";
import { Footer } from "./pages/Footer";

function Logo() {
  return (
    <div className="text-left flex items-center">
      <img
        src={salonInfo.logo}
        alt="Fairy of Nail & Lash"
        className="hidden md:block h-12 w-auto max-w-[190px] object-contain sm:h-14 sm:max-w-[220px] lg:h-16 lg:max-w-[250px]"
      />
      <img
        src={salonInfo.mobilelogo}
        alt="Fairy of Nail & Lash"
        className="block md:hidden h-12 w-auto max-w-[190px] object-contain sm:h-14 sm:max-w-[220px] lg:h-16 lg:max-w-[250px]"
      />
      <div className="block md:hidden">
        <p className="font-script text-2xl leading-none text-[#8e5a43]">
          Fairy
        </p>
        <p className="mt-1 text-[8px] font-semibold tracking-[0.25em] text-[#7b6258]">
          OF NAIL & LASH
        </p>
      </div>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Services", "services"],
    ["Story", "story"],
    ["About", "about"],
    ["Gallery", "gallery"],
    ["Reviews", "reviews"],
    ["Contact", "contact"],
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-7xl rounded-[1.4rem] border border-white/70 bg-[#fffaf6]/88 px-4 py-3 shadow-[0_10px_40px_rgba(90,65,54,.08)] backdrop-blur-xl sm:px-5">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollToId("home")}
            aria-label="Go to home"
          >
            <Logo />
          </button>

          <nav className="hidden items-center gap-6 lg:flex">
            {links.map(([label, id]) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToId(id)}
                className="text-[11px] font-semibold tracking-wide text-[#66564f] transition hover:text-[#a9565c]"
              >
                {label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollToId("booking")}
              className="rounded-full bg-[#c86f72] px-5 py-3 text-[11px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#a9565c]"
            >
              Book Appointment
            </button>
          </nav>

          <button
            type="button"
            className="rounded-full border border-[#dfcec5] p-2 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {open && (
          <nav className="mt-3 grid gap-1 border-t border-[#eadbd2] pt-3 lg:hidden">
            {links.map(([label, id]) => (
              <button
                key={id}
                type="button"
                onClick={() => {
                  scrollToId(id);
                  setOpen(false);
                }}
                className="rounded-xl px-3 py-3 text-left text-sm text-[#66564f] hover:bg-[#f7e8e3]"
              >
                {label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                scrollToId("booking");
                setOpen(false);
              }}
              className="mt-1 rounded-full bg-[#c86f72] px-5 py-3 text-sm font-semibold text-white"
            >
              Book Appointment
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="hero relative overflow-hidden bg-[#fbf5ef] pt-22 lg:pt-32"
    >
      <FairyDecor />
      <div className="hero-wash hero-wash-left" />
      <div className="hero-wash hero-wash-right" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 lg:grid-cols-[1fr_.92fr] lg:px-10 lg:pb-28">
        <div className="relative z-10 pt-8 lg:pt-14" data-reveal>
          <div className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.28em] text-[#a9565c]">
            <span className="h-px w-9 bg-[#c86f72]" /> Beauty Studio · Tirupati
          </div>
          <p className="font-script text-5xl leading-none text-[#a9565c] sm:text-6xl">
            Where beauty
          </p>
          <h1 className="font-display mt-1 text-[4.4rem] font-medium leading-[.78] tracking-[-.05em] sm:text-[7rem] lg:text-[8.2rem]">
            MEETS
            <br />
            <span className="text-[#c86f72]">MAGIC</span>
          </h1>
          <p className="mt-7 max-w-xl text-sm leading-7 text-[#746763] sm:text-base">
            Nails, lashes, facials and saree pleating — thoughtful beauty
            services for everyday confidence, celebrations and your most special
            moments.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollToId("booking")}
              className="rounded-full bg-[#c86f72] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#a9565c]"
            >
              Book an Appointment
            </button>
            <button
              type="button"
              onClick={() => scrollToId("story")}
              className="flex items-center gap-2 rounded-full border border-[#d8c5bb] bg-[#fffaf6] px-7 py-3.5 text-sm font-semibold text-[#51443f] transition hover:bg-white"
            >
              Hear our story <ArrowRight size={16} />
            </button>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-[.18em] text-[#8d766c]">
            <span>Open every day</span>
            <span>•</span>
            <span>Special appointments available</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-140" data-reveal>
          <div className="absolute -left-2 top-8 z-20 rounded-full border border-[#cda878] bg-[#fbf5ef]/90 px-5 py-4 text-center text-[10px] uppercase tracking-[.2em] text-[#66564f] shadow-sm backdrop-blur">
            <span>
              Beauty
              <br />
              is a ritual
              <br />
              <span className="pointer-events-none text-[#cda878]">✦</span>
            </span>
          </div>
          <div className="hero-image-frame relative mx-auto h-[500px] w-[82%] border-[9px] border-[#fffaf6] shadow-[0_30px_90px_rgba(105,74,61,.16)] sm:h-[610px]">
            <img
              src={NailBanner}
              alt="Nail art work at Fairy of Nail & Lash"
              className="h-full w-full object-scale-down"
            />
          </div>
          <div className="absolute -bottom-7 -right-1 rounded-[1.8rem] border border-[#eadbd2] bg-[#fffaf6]/95 px-6 py-4 shadow-[0_12px_40px_rgba(90,65,54,.08)] backdrop-blur sm:right-2">
            <p className="font-display text-2xl">Your beauty,</p>
            <p className="font-script text-3xl text-[#c86f72]">
              our little magic.
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollToId("services")}
        className="mx-auto mb-8 flex flex-col items-center gap-2 text-[9px] uppercase tracking-[.25em] text-[#806f67]"
      >
        <span>Scroll to begin</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8c5bb]">
          <ArrowDown size={14} />
        </span>
      </button>
    </section>
  );
}

export default function App() {
  useReveal();
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbf5ef]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ScrollingStory />
        <About />
        <Gallery />
        <Reviews />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingBookButton />
    </div>
  );
}

export function Field({ label, children, full = false }) {
  return (
    <label
      className={`text-xs font-semibold text-[#4e413c] ${full ? "sm:col-span-2" : ""}`}
    >
      {label}
      {children}
    </label>
  );
}
