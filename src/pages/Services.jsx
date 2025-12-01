// src/pages/Services.jsx

import React from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services";

export default function Services() {
  return (
    <section>
      <div className="container section-inner">
        <div className="section-header">
          <div>
            <div className="section-title">Detailed services</div>
            <div className="section-kicker">
              From first registration to ongoing tax, GST, ROC and labour
              compliance — everything under one roof.
            </div>
          </div>
          <div className="section-pill">
            Individuals • Firms • LLPs • Companies • NGOs
          </div>
        </div>

        <div className="services-grid">
          {services.map((svc) => (
            <article key={svc.tag} className="service-card">
              {/* Make the whole card clickable */}
              <Link
                to={`/services/${svc.slug}`}
                className="service-card-link"
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div className="service-tag">{svc.tag}</div>
                <div className="service-name">{svc.name}</div>
                <p className="service-desc">{svc.desc}</p>
                <ul className="service-list">
                  {svc.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>

                <div
                  style={{
                    marginTop: "0.75rem",
                    fontSize: "0.8rem",
                    color: "#60a5fa",
                  }}
                >
                  View full details →
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
