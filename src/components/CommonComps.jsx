import { CalendarDays, Sparkles } from "lucide-react";
import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

export function scrollToId(id) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function FairyDecor() {
  return (
    <>
      <span className="fairy-star left-[9%] top-[28%]">✦</span>
      <span className="fairy-star right-[10%] top-[21%]">✧</span>
      <span className="fairy-star right-[21%] bottom-[17%]">✦</span>
      <span className="fairy-dot left-[17%] bottom-[25%]" />
      <span className="fairy-dot right-[14%] top-[46%]" />
      <Sparkles
        className="absolute left-[7%] top-[49%] text-[#c69c6c]"
        size={16}
      />
    </>
  );
}

export function FloatingBookButton() {
  return (
    <button
      type="button"
      onClick={() => scrollToId("booking")}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#c86f72] px-5 py-3 text-xs font-semibold text-white hover:cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(200,111,114,0.25)] hover:bg-[#a9565c]"
    >
      <CalendarDays size={15} /> Book
    </button>
  );
}
