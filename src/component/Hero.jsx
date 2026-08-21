import { useEffect, useState } from "react";
import beautyImage from "../pictures/beauty1.jpg";
import furnitureImage from "../pictures/furniture1.jpg";
import groceriesImage from "../pictures/groceries1.jpg";
import fragrancesImage from "../pictures/fragrances1.jpg";
//
import beautyImage2 from "../pictures/beauty2.jpg";
import furnitureImage2 from "../pictures/fragrances2.jpg";
import groceriesImage2 from "../pictures/groceries2.jpg";
import fragrancesImage2 from "../pictures/fragrances2.jpg";

const slides = [
  {
    image: groceriesImage,
    alt: "Fresh groceries arranged on a table",
    eyebrow: "Fresh arrivals",
    title: "Everyday essentials, picked for you.",
  },
  {
    image: beautyImage2,
    alt: "Beauty products on a soft pink background",
    eyebrow: "Beauty edit",
    title: "Small rituals for a brighter day.",
  },
  {
    image: furnitureImage,
    alt: "Modern furniture in a bright room",
    eyebrow: "Home collection",
    title: "Make room for the pieces you love.",
  },
  {
    image: fragrancesImage,
    alt: "Luxury fragrance collection",
    eyebrow: "Fragrances collection",
    title: "Discover Your Signature Scent.",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveIndex(
        (currentIndex) => (currentIndex + 1) % slides.length,
      );
    }, 8000);

    return () => window.clearInterval(slideTimer);
  }, []);

  function moveSlide(direction) {
    setActiveIndex(
      (currentIndex) =>
        (currentIndex + direction + slides.length) % slides.length,
    );
  }

  return (
    <section
      aria-label="Featured collections"
      aria-roledescription="carousel"
      className="container mx-auto mb-6 px-4 sm:px-6"
    >
      <div className="relative isolate overflow-hidden rounded-2xl bg-slate-950 shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <article
              aria-hidden={index !== activeIndex}
              className="relative min-w-full "
              key={slide.title}
            >
              <img
                alt={slide.alt}
                className="h-72 w-full object-cover sm:h-96"
                src={slide.image}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-left text-white sm:p-10">
                <p className="mb-5 ml-7 text-sm font-semibold tracking-wide text-white/80">
                  {slide.eyebrow}
                </p>
                <h1 className="m-0 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                  {slide.title}
                </h1>
              </div>
            </article>
          ))}
        </div>

        <button
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-xl font-semibold text-slate-900 transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          onClick={() => moveSlide(-1)}
          type="button"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          aria-label="Next slide"
          className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-xl font-semibold text-slate-900 transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          onClick={() => moveSlide(1)}
          type="button"
        >
          <span aria-hidden="true">›</span>
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((slide, index) => (
            <button
              aria-current={index === activeIndex ? "true" : undefined}
              aria-label={`Go to ${slide.eyebrow} slide`}
              className={`h-2.5 rounded-full transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                index === activeIndex
                  ? "w-7 bg-white"
                  : "w-2.5 bg-white/55 hover:bg-white/80"
              }`}
              key={slide.title}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
