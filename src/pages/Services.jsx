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
            <Link
              key={svc.tag}
              to={`/services/${svc.slug}`}
              className="service-card-link"
            >
              <article className="service-card">
                <div className="service-tag">{svc.tag}</div>
                <h2 className="service-name">{svc.name}</h2>
                <p className="service-desc">{svc.desc}</p>
                <ul className="service-list">
                  {svc.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
                <span className="service-cta">View full details →</span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
