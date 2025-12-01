// src/pages/Home.jsx

import React from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services.js";
import HomeTestimonials from "../components/HomeTestimonials";
import HomeFAQ from "../components/HomeFAQ";

export default function Home() {
  const featuredServices = services.slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              Trusted CA & tax consultants for businesses, startups & MSMEs
            </div>
            <h1 className="hero-title">
              End-to-end <span className="accent">Tax, GST &amp; Compliance</span>{" "}
              under one roof.
            </h1>
            <p className="hero-subtitle">
              We help you start, run and grow your business with clean
              compliance — from company registration and GST returns to
              accounting, audits and advisory.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn">
                Talk to a consultant
              </Link>
              <Link to="/services" className="btn btn-outline">
                View all services
              </Link>
            </div>

            <div className="hero-badges">
              <span>Business setup to annual filings</span>
              <span>Individuals, firms, LLPs &amp; companies</span>
              <span>Notices, audits &amp; assessments handled</span>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="hero-panel-title">
              Your finance &amp; compliance command centre
            </div>
            <div className="hero-panel-sub">
              One partner for registrations, returns, books and bank-ready
              reports.
            </div>
            <div className="hero-panel-grid">
              <div className="hero-panel-item">
                <strong>New Business Setup</strong>
                <span>Proprietorship, Partnership, LLP, Pvt Ltd, OPC</span>
              </div>
              <div className="hero-panel-item">
                <strong>GST &amp; ITR</strong>
                <span>Registrations, monthly returns, notices, audits</span>
              </div>
              <div className="hero-panel-item">
                <strong>Books &amp; Audits</strong>
                <span>
                  Accounting, finalisation, statutory &amp; tax audit
                </span>
              </div>
              <div className="hero-panel-item">
                <strong>Advisory &amp; Loans</strong>
                <span>CMA data, project reports, cash-flow &amp; VCFO</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section>
        <div className="container section-inner">
          <div className="section-header">
            <div>
              <div className="section-title">Core services at a glance</div>
              <div className="section-kicker">
                A quick look at how we support your business throughout the
                year.
              </div>
            </div>
            <div className="section-pill">
              Business setup • GST • ITR • ROC • Audit • Advisory
            </div>
          </div>

          <div className="services-grid">
            {featuredServices.map((svc) => (
              <article key={svc.tag} className="service-card">
                <div className="service-tag">{svc.tag}</div>
                <div className="service-name">{svc.name}</div>
                <p className="service-desc">{svc.desc}</p>
                <ul className="service-list">
                  {svc.bullets.slice(0, 3).map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div style={{ marginTop: "1.4rem", textAlign: "right" }}>
            <Link to="/services" className="btn btn-outline">
              View detailed service list
            </Link>
          </div>
        </div>
      </section>

      <section id="why-us">
        <div className="container section-inner">
          <div className="section-header">
            <div>
              <div className="section-title">Why clients work with us</div>
              <div className="section-kicker">
                Not just return filing – we look at your entire business and
                cash flow.
              </div>
            </div>
            <div className="section-pill">CA-led team • Practical advisory</div>
          </div>

          <div className="two-col">
            <div>
              <div className="pill-list">
                <div className="pill-item">
                  <strong>CA-led, experienced team</strong>
                  <span>
                    Work handled by qualified professionals who understand
                    business as well as law.
                  </span>
                </div>
                <div className="pill-item">
                  <strong>End-to-end compliance partner</strong>
                  <span>
                    One point of contact for tax, GST, ROC, payroll and audits.
                  </span>
                </div>
                <div className="pill-item">
                  <strong>Bank &amp; investor-ready reporting</strong>
                  <span>
                    Clean books and clear reports for banks, investors and
                    internal decisions.
                  </span>
                </div>
                <div className="pill-item">
                  <strong>Proactive, not just reactive</strong>
                  <span>
                    We plan ahead for notices, assessments and cash-flow
                    impact.
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3
                style={{
                  fontSize: "0.95rem",
                  marginBottom: "0.6rem",
                  fontWeight: 600
                }}
              >
                How we work with you
              </h3>
              <ul className="steps">
                <li>
                  <div className="step-badge">1</div>
                  <div className="step-body">
                    <strong>Discovery &amp; understanding</strong>
                    <span>
                      We understand your business model, current structure,
                      pending compliances and goals.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="step-badge">2</div>
                  <div className="step-body">
                    <strong>Documentation &amp; planning</strong>
                    <span>
                      We collect documents, identify gaps and prepare a
                      practical compliance &amp; tax plan.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="step-badge">3</div>
                  <div className="step-body">
                    <strong>Execution &amp; filings</strong>
                    <span>
                      Registrations, returns, books and audits are executed on
                      time with clear communication.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="step-badge">4</div>
                  <div className="step-body">
                    <strong>Ongoing support &amp; advisory</strong>
                    <span>
                      Regular reviews, MIS and support for new projects, loans,
                      notices and expansions.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Testimonials and FAQ sections */}
      <HomeTestimonials />
      <HomeFAQ />
    </>
  );
}
