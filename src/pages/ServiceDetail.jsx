// src/pages/ServiceDetail.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import { services } from "../data/services";

export default function ServiceDetail() {
  const { slug } = useParams();

  const svc = services.find((s) => s.slug === slug);

  if (!svc) {
    return (
      <section>
        <div className="container section-inner">
          <p style={{ color: "#fca5a5", marginBottom: "1rem" }}>
            The requested service could not be found.
          </p>
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
            <div className="section-title">{svc.name}</div>
            <div className="section-kicker">{svc.desc}</div>
          </div>
          <div className="section-pill">Service {svc.tag}</div>
        </div>

        <div className="two-col">
          <div>
            <h3 className="service-detail-heading">What we cover</h3>
            <ul className="service-list">
              {svc.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="pill-list">
              <div className="pill-item">
                <strong>Next step</strong>
                <span>
                  Share a brief of your requirement and we’ll confirm scope,
                  timelines and fees.
                </span>
              </div>
              <div className="pill-item">
                <strong>Talk to a consultant</strong>
                <span>
                  Call us directly or{" "}
                  <Link to="/contact" className="inline-link">
                    submit an enquiry
                  </Link>{" "}
                  for this service.
                </span>
              </div>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <Link to="/services" className="btn-outline">
                ← Back to all services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
