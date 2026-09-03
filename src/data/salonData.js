import logo from "../assets/logo2.webp";
import fairyPhoto from "../assets/fairy.webp";
import Banner from "../assets/nail_banner.jpg";
//services
import realNailPhoto from "../assets/service-nails.avif";
import facial from "../assets/facial.webp";
import lashPic from "../assets/eyelash-lift.jpg";
import sareePleating from "../assets/service-pleating.jpg";
//gallery
import galleryNails from "../assets/gallery-nails.webp";
import galleryPleating from "../assets/gallery-pleating.jpg";
import galleryFacial from "../assets/gallery-facial.webp";
import galleryHairstyle from "../assets/gallery-hairstyle.jpg";
import galleryMakeup from "../assets/gallery-bridal-makeup.jpg";
import galleryLashes from "../assets/gallery-lash-extension.jpg";

export const fairy = fairyPhoto;
export const NailBanner = Banner;

export const salonInfo = {
  name: "Fairy of Nail & Lash",
  tagline: "Where beauty gets a little magical.",
  phoneDisplay: "062813 37170",
  phoneHref: "tel:+916281337170",
  whatsapp: "916281337170",
  instagram: "https://www.instagram.com/fairy.of.nail_tirupati/",
  address:
    "19-10-19A, Air Bypass Rd, Opp. PLR Convention Centre, New Indira Nagar, STV Nagar, Tirupati, Andhra Pradesh 517501",
  shortAddress: "Opp. PLR Convention Centre · Air Bypass Road · Tirupati",
  hours: "Open every day · General timings 10 AM – 7 PM",
  appointmentNote:
    "Special appointments can be arranged outside general hours.",
  logo,
  mapsQuery:
    "https://www.google.com/maps/search/?api=1&query=Fairy+of+Nail+%26+Lash%2C+19-10-19A%2C+Air+Bypass+Rd%2C+Tirupati%2C+Andhra+Pradesh+517501",
};

export const serviceGroups = [
  {
    number: "01",
    title: "Nails",
    eyebrow: "Your fingertips, your signature",
    description:
      "From everyday clean looks to extensions, detailed nail art and occasion-ready sets, your nails can be as subtle or expressive as you want them to be.",
    image: realNailPhoto,
    accent: "Extensions · Gel · Art · Care",
    items: [
      "Nail extensions",
      "Gel nails",
      "Acrylic nails",
      "Nail art & designs",
      "Manicure",
      "Pedicure",
      "French & chrome looks",
      "Custom nail looks",
    ],
  },
  {
    number: "02",
    title: "Facials",
    eyebrow: "A little pause. A fresh glow.",
    description:
      "Relax, reset and let your skin take the spotlight with facial rituals tailored to the kind of glow you are looking for.",
    image: facial,
    accent: "Hydra · O3 · Gold · Glow",
    items: [
      "Hydra Facial",
      "O3 Facial",
      "Gold Facial",
      "Fruit Facial",
      "Cleanup",
      "De-tan treatments",
      "Glow & hydration facials",
      "Skin polishing rituals",
    ],
  },
  {
    number: "03",
    title: "Lashes",
    eyebrow: "Let your eyes do the talking",
    description:
      "Lash looks designed around your eyes — from soft, natural definition to fuller statement extensions.",
    image: lashPic,
    accent: "Classic · Volume · Wispy · Custom",
    items: [
      "Classic lash extensions",
      "Volume lash extensions",
      "Hybrid lash looks",
      "Wispy & custom styles",
      "Lash lift / enhancement",
      "Lash care & removal",
    ],
  },
  {
    number: "04",
    title: "Saree Pleating",
    eyebrow: "Perfect pleats for your moment",
    description:
      "Neat, structured pleating for weddings, celebrations, festive occasions and any day you want your saree to fall just right.",
    image: sareePleating,
    accent: "Neat · Secure · Occasion-ready",
    items: [
      "Regular saree pleating",
      "Wedding & bridal pleating",
      "Function-ready pleating",
      "Pre-pleating",
      "Custom drape preparation",
    ],
  },
];

export const gallery = [
  {
    title: "Saree Pleating",
    service: "Saree pleating for wedding",
    image: galleryPleating,
  },
  {
    title: "Eyelash Extension",
    service: "Lashes Enlargement",
    image: galleryLashes,
  },
  {
    title: "Nail artistry",
    service: "Fancy Nails",
    image: galleryNails,
  },
  {
    title: "Bridal Makeup",
    service: "Makeup",
    image: galleryMakeup,
  },
  {
    title: "Bridal Hairstyles",
    service: "Hairstyling",
    image: galleryHairstyle,
  },
  {
    title: "Hydra Facials",
    service: "Facials",
    image: galleryFacial,
  },
];

export const reviews = [
  {
    quote:
      "I had a very good experience at Fairy of Lash and Nails Salon. Jayashree is very patient, kind, and professional. I did nails, Hydra Facial, and O3 Facial with her. She did the services very neatly and made me feel comfortable😎",
    detail:
      "The reviewer also praised the visible facial results, fresh glow and the care taken throughout the appointment.",
    name: "Google review",
  },
  {
    quote:
      "My sister recently visited Fairy of Nail & Lash for her nail service and she absolutely loved it. The staff were friendly and made her feel comfortable from the start.",
    detail:
      "She highlighted the attention to small details and how neat and beautiful the final nails looked.",
    name: "Google review",
  },
  {
    quote:
      "I had a better experience with this girl very soft nd patience magic in ur hands is simply superb I'm full satisfied with ur nail art in my nails, TQ jayashree garu mainly for ur good work ❤️💅",
    detail:
      "A happy client sharing a quick nail-service experience and our hygiene setup.",
    name: "Google review",
  },
  {
    quote:
      "I rushed to Jaya's parlour just 1 day before my marriage to fix my nails and she understood exactly what I want and made it look best on my big day🔥.",
    detail:
      "The review specifically appreciates Jaya’s patience, dedication and ability to understand the requested look.",
    name: "Google review",
  },
  {
    quote:
      "Got my nails & haircut here for my birthday. The prices are very affordable & the services everything was good. Definitely would recommend this place to the girlies💗",
    detail: "A birthday visit described as satisfying and affordable.",
    name: "Google review",
  },
];

export const trustPoints = [
  {
    title: "Hygiene first",
    text: "Clean, careful service with attention to hygiene.",
  },
  {
    title: "Premium products",
    text: "Beauty services using quality products and materials.",
  },
  {
    title: "Experienced hands",
    text: "Careful, detail-focused work across beauty services.",
  },
  {
    title: "Personal attention",
    text: "Your look is discussed and shaped around your preference.",
  },
];
