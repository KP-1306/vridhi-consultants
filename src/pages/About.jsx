// src/pages/About.jsx

import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container section-inner">
        <div className="section-header">
          <div>
            <div className="section-title">About VridhI Consultants</div>
            <div className="section-kicker">
              A boutique CA and tax advisory firm helping businesses, MSMEs and
              professionals stay fully compliant while they focus on growth.
            </div>
          </div>
          <div className="section-pill">Compliance with clarity</div>
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
              VridhI Consultants was founded with a simple idea:{" "}
              <strong>
                compliance should give you peace of mind, not add to your
                workload
              </strong>
              . We bring together CA-led expertise in tax, GST, ROC/MCA and
              finance to give you a single, dependable partner for all statutory
              requirements.
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#e5e7eb",
                marginBottom: "0.9rem",
              }}
            >
              Our team works closely with{" "}
              <strong>
                startups, proprietors, MSMEs, family businesses and growing
                companies
              </strong>{" "}
              across sectors. For many clients, we function as their{" "}
              <strong>virtual finance &amp; compliance department</strong> –
              handling registrations, day-to-day accounting, GST and income-tax
              filings, audits and banking documentation.
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#9ca3af",
              }}
            >
              Whether you are regularising past compliances or planning for the
              next phase of expansion, our role is to convert complex laws into
              clear, actionable steps – with defined timelines, ownership and
              measurable outcomes.
            </p>
          </div>

          <div>
            <div className="pill-list">
              <div className="pill-item">
                <strong>Who we serve</strong>
                <span>
                  Individuals, proprietors, firms, LLPs, companies, NGOs and
                  trusts across trading, services and manufacturing sectors.
                </span>
              </div>
              <div className="pill-item">
                <strong>How we work</strong>
                <span>
                  Structured onboarding, documented scope of work, agreed
                  checklists and regular status updates so there are no
                  surprises.
                </span>
              </div>
              <div className="pill-item">
                <strong>What you gain</strong>
                <span>
                  Clean books, timely filings, lower risk of notices and
                  decision-ready MIS for owners, lenders and investors.
                </span>
              </div>
              <div className="pill-item">
                <strong>Engagement model</strong>
                <span>
                  One-time assignments (set-up, clean-up, due diligence) or
                  ongoing monthly retainers as your long-term compliance
                  partner.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
