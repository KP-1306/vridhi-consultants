// src/components/HomeTestimonials.jsx

import React from "react";

const testimonials = [
  {
    quote:
      "VridhI helped us set up our private limited company, handle GST and keep our books clean from day one. Compliance is no longer a headache.",
    name: "Rahul Sharma",
    role: "Founder, technology startup"
  },
  {
    quote:
      "For our family-owned trading business, they streamlined GST returns, income-tax filings and notices. We get clear timelines and regular updates.",
    name: "Meena Agarwal",
    role: "Proprietor, trading & distribution"
  },
  {
    quote:
      "Their team handled company incorporation, ROC filings and CMA data for our working capital loan. The banker was very happy with the documentation.",
    name: "Amit Verma",
    role: "Director, manufacturing company"
  }
];

export default function HomeTestimonials() {
  return (
    <section>
      <div className="container section-inner">
        <div className="section-header">
          <div>
            <div className="section-title">See what our clients have to say</div>
            <div className="section-kicker">
              Real businesses that trust VridhI Consultants for tax, GST and
              compliance.
            </div>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <figure key={idx} className="testimonial-card">
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-role">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
