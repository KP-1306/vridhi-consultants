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

        {/* Firm overview */}
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

        {/* Leadership / Our Team */}
        <div
          className="team-section"
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(148, 163, 184, 0.35)",
          }}
        >
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: 600,
              color: "#f9fafb",
              marginBottom: "0.25rem",
            }}
          >
            Our Leadership Team
          </h3>
          <p
            style={{
              fontSize: "0.85rem",
              color: "#9ca3af",
              marginBottom: "1.5rem",
            }}
          >
            Experienced professionals leading tax, compliance and advisory so
            your business always has a trusted point of contact.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {/* Founder */}
            <div
              style={{
                padding: "1.4rem 1.2rem",
                borderRadius: "0.9rem",
                border: "1px solid rgba(56, 189, 248, 0.35)",
                background:
                  "linear-gradient(135deg, rgba(8, 47, 73, 0.9), rgba(15, 23, 42, 0.95))",
                boxShadow: "0 18px 45px rgba(8, 47, 73, 0.55)",
              }}
            >
              <div
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                  textTransform: "uppercase",
                  color: "#7dd3fc",
                  marginBottom: "0.4rem",
                }}
              >
                Founder &amp; Managing Partner
              </div>
              <div
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#f9fafb",
                  marginBottom: "0.45rem",
                }}
              >
                Naveen Durgapal
              </div>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#d1d5db",
                  lineHeight: 1.6,
                }}
              >
                Leads the firm&apos;s vision, client relationships and overall
                growth, with a focus on practical, business-first compliance
                solutions.
              </p>
            </div>

            {/* Practice Head – Business Setup & Corporate Compliance */}
            <div
              style={{
                padding: "1.2rem 1.1rem",
                borderRadius: "0.9rem",
                border: "1px solid rgba(51, 65, 85, 0.85)",
                background: "linear-gradient(135deg, #020617, #020617)",
              }}
            >
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#60a5fa",
                  marginBottom: "0.4rem",
                }}
              >
                Practice Head – Business Setup &amp; Corporate Compliance
              </div>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#d1d5db",
                  lineHeight: 1.6,
                }}
              >
                Specialises in new business setup, company and LLP incorporation,
                MCA/ROC filings and ongoing corporate law compliance for
                startups and MSMEs.
              </p>
            </div>

            {/* Practice Head – Direct Tax & ITR */}
            <div
              style={{
                padding: "1.2rem 1.1rem",
                borderRadius: "0.9rem",
                border: "1px solid rgba(51, 65, 85, 0.85)",
                background: "linear-gradient(135deg, #020617, #020617)",
              }}
            >
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#a5b4fc",
                  marginBottom: "0.4rem",
                }}
              >
                Practice Head – Direct Tax &amp; ITR
              </div>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#d1d5db",
                  lineHeight: 1.6,
                }}
              >
                Leads income-tax advisory and return filing for individuals and
                businesses, assessments and tax-efficient planning for
                promoters.
              </p>
            </div>

            {/* Practice Head – GST & Indirect Tax */}
            <div
              style={{
                padding: "1.2rem 1.1rem",
                borderRadius: "0.9rem",
                border: "1px solid rgba(51, 65, 85, 0.85)",
                background: "linear-gradient(135deg, #020617, #020617)",
              }}
            >
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#c4b5fd",
                  marginBottom: "0.4rem",
                }}
              >
                Practice Head – GST &amp; Indirect Tax
              </div>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#d1d5db",
                  lineHeight: 1.6,
                }}
              >
                Handles GST registration, monthly and annual returns, audits,
                departmental notices and representation before authorities.
              </p>
            </div>

            {/* Practice Head – Audit & Assurance */}
            <div
              style={{
                padding: "1.2rem 1.1rem",
                borderRadius: "0.9rem",
                border: "1px solid rgba(51, 65, 85, 0.85)",
                background: "linear-gradient(135deg, #020617, #020617)",
              }}
            >
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#fbbf24",
                  marginBottom: "0.4rem",
                }}
              >
                Practice Head – Audit &amp; Assurance
              </div>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#d1d5db",
                  lineHeight: 1.6,
                }}
              >
                Oversees statutory, tax and internal audits to ensure financial
                statements are reliable, compliant and ready for banks and
                investors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
