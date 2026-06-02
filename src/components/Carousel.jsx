import { Children, useEffect, useId, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ children, label, className = "" }) {
  const items = Children.toArray(children);
  const trackRef = useRef(null);
  const carouselId = useId();
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    if (!items.length) return;

    const nextIndex = (index + items.length) % items.length;
    const track = trackRef.current;
    const nextSlide = track?.children[nextIndex];

    nextSlide?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });

    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !items.length) return undefined;

    let frame = 0;

    const updateActiveSlide = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const slides = Array.from(track.children);
        const nextActive = slides.reduce(
          (closest, slide, index) => {
            const distance = Math.abs(slide.offsetLeft - track.scrollLeft);
            return distance < closest.distance ? { distance, index } : closest;
          },
          { distance: Number.POSITIVE_INFINITY, index: 0 },
        );

        setActiveIndex(nextActive.index);
      });
    };

    updateActiveSlide();
    track.addEventListener("scroll", updateActiveSlide, { passive: true });
    window.addEventListener("resize", updateActiveSlide);

    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", updateActiveSlide);
      window.removeEventListener("resize", updateActiveSlide);
    };
  }, [items.length]);

  return (
    <div className={`carousel ${className}`.trim()} aria-label={label}>
      <div className="carousel__top">
        <div className="carousel__controls" aria-controls={carouselId}>
          <button
            className="carousel__button"
            type="button"
            onClick={() => goToSlide(activeIndex - 1)}
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="carousel__button"
            type="button"
            onClick={() => goToSlide(activeIndex + 1)}
            aria-label="Siguiente"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="carousel__track" id={carouselId} ref={trackRef} tabIndex={0}>
        {items.map((item, index) => (
          <div
            className="carousel__slide"
            data-active={activeIndex === index}
            key={item.key ?? index}
            style={{ "--slide-index": index }}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="carousel__dots" aria-label="Posición del carrusel">
        {items.map((item, index) => (
          <button
            type="button"
            key={item.key ?? index}
            className={activeIndex === index ? "carousel__dot is-active" : "carousel__dot"}
            onClick={() => goToSlide(index)}
            aria-label={`Ir al elemento ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
