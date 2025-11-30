// src/pages/Services.jsx

import React from "react";
import { Link } from "react-router-dom";      // ✅ ADD THIS
import { services } from "../data/services.js";

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
            <Link
              key={svc.slug}                      // use slug as key
              to={`/services/${svc.slug}`}        // clickable card
              className="service-card-link"       // optional class for styling
            >
              <article className="service-card">
                <div className="service-tag">{svc.tag}</div>
                <div className="service-name">{svc.name}</div>
                <p className="service-desc">{svc.desc}</p>
                <ul className="service-list">
                  {svc.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
