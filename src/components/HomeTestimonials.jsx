// src/components/HomeTestimonials.jsx
import React, { useState } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    initials: "RV",
    name: "Rahul Verma",
    title: "Director, Manufacturing MSME – Noida",
    quote:
      "VridhI Consultants have been handling our GST, TDS and ROC work for the last 3 years. Returns are always filed on time and we get clear updates before every due date."
  },
  {
    id: 2,
    initials: "SP",
    name: "Sonal Patel",
    title: "Founder, D2C Fashion Brand – Ahmedabad",
    quote:
      "They set up our company, GST and payroll in one go. I don’t have to chase multiple people for ROC, income tax and accounting anymore – everything is coordinated."
  },
  {
    id: 3,
    initials: "AK",
    name: "Ankit Kumar",
    title: "Proprietor, Logistics & Transport – Delhi NCR",
    quote:
      "Notices used to be a constant headache. Now every query is answered with proper working papers and replies. Compliance is finally predictable for us."
  },
  {
    id: 4,
    initials: "NS",
    name: "Neha Shah",
    title: "Consultant & Freelancer – Mumbai",
    quote:
      "My ITR, TDS and advance tax are all planned in advance. They explain everything in simple language, so I know exactly how much to keep aside and why."
  },
  {
    id: 5,
    initials: "VK",
    name: "Vikram Khanna",
    title: "Director, Tech Startup – Bengaluru",
    quote:
      "From incorporation to ESOP design, they have been a sounding board for every decision. Clean books and timely filings really helped in our first funding round."
  }
];

export default function HomeTestimonials() {
  const [page, setPage] = useState(0);

  const perPage = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / perPage);
  const start = page * perPage;
  const visible = TESTIMONIALS.slice(start, start + perPage);

  const handlePrev = () => setPage((p) => Math.max(p - 1, 0));
  const handleNext = () => setPage((p) => Math.min(p + 1, totalPages - 1));

  return (
    <section className="home-testimonials">
      <div className="container section-inner">
        <div className="section-header section-header-center">
          <div>
            <div className="section-title">See what our clients have to say</div>
            <div className="section-kicker">
              Real feedback from business owners, startups and professionals we
              work with every month.
            </div>
          </div>
        </div>

        <div className="testimonial-shell">
          <button
            type="button"
            className="testimonial-nav"
            onClick={handlePrev}
            disabled={page === 0}
            aria-label="Previous testimonials"
          >
            ‹
          </button>

          <div className="testimonial-grid">
            {visible.map((t) => (
              <article key={t.id} className="testimonial-card">
                <p className="testimonial-quote">“{t.quote}”</p>
                <div className="testimonial-footer">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-meta">{t.title}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="testimonial-nav"
            onClick={handleNext}
            disabled={page === totalPages - 1}
            aria-label="Next testimonials"
          >
            ›
          </button>
        </div>

        <div className="testimonial-dots">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <span
              key={idx}
              className={
                "testimonial-dot" + (idx === page ? " testimonial-dot--active" : "")
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
