// src/pages/ServiceDetail.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import { services } from "../data/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section>
        <div className="container section-inner">
          <h1 className="section-title">Service not found</h1>
          <p className="section-kicker">
            The service you are looking for does not exist. Please check all
            services below.
          </p>
          <Link to="/services" className="btn-primary">
            View all services
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="container section-inner">
        {/* Header */}
        <div className="section-header">
          <div>
            <div className="section-eyebrow">Service {service.tag}</div>
            <h1 className="section-title">{service.name}</h1>
            <p className="section-kicker">{service.desc}</p>
          </div>
          <div className="section-pill">
            Individuals • Firms • LLPs • Companies • NGOs
          </div>
        </div>

        {/* Core inclusions + contact card */}
        <div className="two-col">
          <div>
            <h2 className="service-detail-subtitle">
              What’s included in this service
            </h2>
            <ul className="service-list">
              {service.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>

          <aside className="service-detail-aside">
            <div className="service-detail-card">
              <h3>Talk to a consultant</h3>
              <p>
                Share your current situation and we’ll suggest the right
                structure, registrations and next steps.
              </p>
              <Link to="/contact" className="btn-primary w-full text-center">
                Book a free discussion
              </Link>
              <p className="service-detail-note">
                Prefer email? Write to{" "}
                <a href="mailto:info@vridhiconsultants.com">
                  info@vridhiconsultants.com
                </a>
              </p>
            </div>

            <Link to="/services" className="service-back-link">
              ← Back to all services
            </Link>
          </aside>
        </div>

        {/* Extra: who it’s for + benefits */}
        {(service.whoFor && service.whoFor.length > 0) ||
        (service.benefits && service.benefits.length > 0) ? (
          <div style={{ marginTop: "2.5rem" }}>
            <div className="two-col">
              {service.whoFor && service.whoFor.length > 0 && (
                <div>
                  <h2 className="service-detail-subtitle">
                    Who is this service ideal for?
                  </h2>
                  <ul className="service-list">
                    {service.whoFor.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {service.benefits && service.benefits.length > 0 && (
                <div>
                  <h2 className="service-detail-subtitle">
                    How this service helps your business
                  </h2>
                  <ul className="service-list">
                    {service.benefits.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
