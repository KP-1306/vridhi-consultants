// src/components/HomeTestimonials.jsx
import React, { useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "VridhI Consultants have been handling our GST, TDS and ROC work for the last 3 years. Returns are always filed on time and we get clear updates before every due date.",
    name: "Rahul Verma",
    title: "Director, Manufacturing MSME – Noida"
  },
  {
    quote:
      "As a startup founder, I wanted someone who could explain taxation in simple language. The team helped us choose the right structure, set up our books and stay bank-ready for funding.",
    name: "Sakshi Mehta",
    title: "Co-founder, Tech Startup – Gurgaon"
  },
  {
    quote:
      "They cleaned up two years of pending compliances, regularised our GST and income-tax filings and coordinated smoothly with our internal accounts team.",
    name: "Anil Sharma",
    title: "Owner, Retail Chain – Ghaziabad"
  },
  {
    quote:
      "Professional, responsive and practical. I can focus on my practice while they take care of registrations, returns and notices for my clinic.",
    name: "Dr. Nidhi Singh",
    title: "Medical Practitioner – Delhi NCR"
  }
];

export default function HomeTestimonials() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((idx) => (idx === 0 ? TESTIMONIALS.length - 1 : idx - 1));
  const next = () =>
    setActive((idx) => (idx === TESTIMONIALS.length - 1 ? 0 : idx + 1));

  const current = TESTIMONIALS[active];

  return (
    <section className="home-testimonials">
      <div className="container section-inner">
        <div className="section-header section-header-centered">
          <div>
            <div className="section-title">See what our clients have to say</div>
            <div className="section-kicker">
              Real feedback from business owners, startups and professionals we
              work with every month.
            </div>
          </div>
        </div>

        <div className="testimonial-shell">
          {/* Slider card */}
          <button
            type="button"
            className="testimonial-arrow testimonial-arrow-left"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <article className="testimonial-card">
            <p className="testimonial-quote">“{current.quote}”</p>
            <div className="testimonial-meta">
              <div className="testimonial-avatar">
                {current.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <div className="testimonial-name">{current.name}</div>
                <div className="testimonial-title">{current.title}</div>
              </div>
            </div>
          </article>

          <button
            type="button"
            className="testimonial-arrow testimonial-arrow-right"
            onClick={next}
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="testimonial-dots">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={
                "testimonial-dot" + (idx === active ? " testimonial-dot-active" : "")
              }
              onClick={() => setActive(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
