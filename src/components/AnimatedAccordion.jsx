import { useId, useState } from "react";

function AnimatedAccordionItem({ content, defaultOpen = false, index, numbered, title }) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <article className={open ? "accordion-item is-open" : "accordion-item"}>
      <button
        className="accordion-trigger"
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((current) => !current)}
      >
        {numbered ? (
          <span className="module-number">{String(index + 1).padStart(2, "0")}</span>
        ) : null}
        <span className="accordion-title">{title}</span>
      </button>
      <div className="accordion-panel" id={contentId} role="region">
        <div className="accordion-panel__inner">
          <p>{content}</p>
        </div>
      </div>
    </article>
  );
}

export default function AnimatedAccordion({
  className = "",
  firstOpen = false,
  items,
  numbered = false,
}) {
  return (
    <div className={`accordion-list animated-accordion ${className}`.trim()}>
      {items.map((item, index) => (
        <AnimatedAccordionItem
          content={item.content}
          defaultOpen={firstOpen && index === 0}
          index={index}
          key={item.title}
          numbered={numbered}
          title={item.title}
        />
      ))}
    </div>
  );
}
