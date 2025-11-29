import React from "react";

export default function About() {
  return (
    <section>
      <div className="container section-inner">
        <div className="section-header">
          <div>
            <div className="section-title">About VridhI Consultants</div>
            <div className="section-kicker">
              A focused team of CAs and tax professionals helping businesses
              stay compliant and grow with confidence.
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
              VridhI Consultants was started with a simple belief —{" "}
              <strong>
                compliance should give you peace of mind, not more confusion
              </strong>
              . We combine CA-led expertise with a practical, business-first
              approach so that you always know where you stand with tax, GST and
              regulatory requirements.
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#e5e7eb",
                marginBottom: "0.9rem",
              }}
            >
              We work with{" "}
              <strong>
                startups, proprietors, MSMEs, family businesses and growing
                companies
              </strong>{" "}
              across sectors. For many clients, we act as their{" "}
              <strong>
                “virtual finance &amp; compliance department”
              </strong>{" "}
              handling registrations, returns, books, audits and banking
              documentation so they can focus on customers and operations.
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#9ca3af",
              }}
            >
              Whether you are regularising past compliances or planning for
              growth, our job is to convert complex regulations into clear,
              actionable steps.
            </p>
          </div>

          <div>
            <div className="pill-list">
              <div className="pill-item">
                <strong>Who we serve</strong>
                <span>
                  Individuals, proprietors, firms, LLPs, companies, NGOs and
                  trusts across sectors.
                </span>
              </div>
              <div className="pill-item">
                <strong>How we work</strong>
                <span>
                  Structured onboarding, transparent scope, clear timelines and
                  regular updates.
                </span>
              </div>
              <div className="pill-item">
                <strong>What you get</strong>
                <span>
                  Clean books, timely filings, reduced notice risk and
                  decision-ready reports.
                </span>
              </div>
              <div className="pill-item">
                <strong>Engagement style</strong>
                <span>
                  One-time projects (setup / clean-up) or ongoing monthly
                  retainers as your compliance partner.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

