// src/pages/ServiceDetail.jsx

import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { services } from "../data/services";

export default function ServiceDetail() {
  const { slug } = useParams();

  const service = services.find((svc) => svc.slug === slug);

  // Basic SEO: update page title when service changes
  useEffect(() => {
    if (service) {
      document.title = `${service.shortTitle} | VridhI Consultants`;
    } else {
      document.title = "Service not found | VridhI Consultants";
    }
  }, [service]);

  if (!service) {
    return (
      <section>
        <div className="container section-inner">
          <div className="section-header">
            <div>
              <div className="section-title">Service not found</div>
              <div className="section-kicker">
                The service you’re looking for may have been moved or renamed.
              </div>
            </div>
          </div>

          <p
            style={{
              marginTop: "1rem",
              color: "#9ca3af",
              fontSize: "0.9rem",
            }}
          >
            Please go back to the full services list and choose a service.
          </p>

          <div style={{ marginTop: "1.5rem" }}>
            <Link to="/services" className="btn-outline">
              ← Back to all services
            </Link>
          </div>
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
            <div className="section-kicker">
              A focused, end-to-end service by VridhI Consultants.
            </div>
          </div>
          <div className="section-pill">Service code {service.tag}</div>
        </div>

        <div className="two-col">
          <div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#e5e7eb",
                marginBottom: "0.9rem",
              }}
            >
              {service.desc}
            </p>

            <p
              style={{
                fontSize: "0.9rem",
                color: "#9ca3af",
                marginBottom: "0.9rem",
              }}
            >
              Every engagement starts with understanding your business,
              current compliance status and timelines. We then create a
              clear action plan with responsibilities, due dates and document
              checklists so you always know what is happening.
            </p>
          </div>

          <div>
            <div className="pill-list">
              <div className="pill-item">
                <strong>Scope typically covers</strong>
                <ul
                  className="service-list"
                  style={{ marginTop: "0.5rem", paddingLeft: "1rem" }}
                >
                  {service.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className="pill-item">
                <strong>How we work with you</strong>
                <span>
                  Structured onboarding, transparent scope, defined timelines
                  and regular updates over phone, WhatsApp or email — whichever
                  works best for you.
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
