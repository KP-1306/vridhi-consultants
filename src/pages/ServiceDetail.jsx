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
          <div className="section-header">
            <div>
              <div className="section-title">Service not found</div>
              <div className="section-kicker">
                The service you’re looking for doesn’t exist or the link is
                outdated.
              </div>
            </div>
          </div>
          <Link to="/services" className="btn-outline">
            ← Back to all services
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="container section-inner">
        <div className="section-header">
          <div>
            <div className="section-title">{service.name}</div>
            <div className="section-kicker">{service.desc}</div>
          </div>
          <div className="section-pill">Service {service.tag}</div>
        </div>

        <div className="two-col">
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide">
              What we cover
            </h3>
            <ul className="service-list">
              {service.bullets.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="pill-list">
              <div className="pill-item">
                <strong>Next step</strong>
                <span>
                  Share your requirement with us and we’ll suggest the right
                  scope, timelines and professional fee for this service.
                </span>
              </div>
              <div className="pill-item">
                <strong>Talk to a consultant</strong>
                <span>
                  Call us on the number in the header or submit an enquiry from
                  the contact page.
                </span>
              </div>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <Link to="/contact" className="btn-primary">
                Discuss this service
              </Link>
              <Link
                to="/services"
                className="btn-outline"
                style={{ marginLeft: "0.75rem" }}
              >
                Back to all services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
