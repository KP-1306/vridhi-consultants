// src/components/HomeFAQ.jsx
import React from "react";

const FAQ_ITEMS = [
  {
    q: "Who will be handling my tax and compliance work?",
    a: "All assignments are supervised by experienced Chartered Accountants. Routine work is managed by our trained team, but final review and key decisions are always done by a CA."
  },
  {
    q: "How much time does it take to register a new company or firm?",
    a: "Subject to availability of name and document readiness, proprietorships and partnerships can be set up within a few days. Private limited companies and LLPs generally take 7–10 working days once KYC and signatures are complete."
  },
  {
    q: "Can you also manage GST, TDS and ROC on a monthly basis?",
    a: "Yes. Many clients engage us as their virtual finance and compliance team. We handle monthly accounting, GST and TDS returns, ROC filings and coordination with your internal staff or accountant."
  },
  {
    q: "Do you work only with large companies or also with small businesses?",
    a: "We actively work with individuals, proprietors, freelancers, professionals, MSMEs, startups and growing companies. Engagements are customised based on the size and complexity of your business."
  },
  {
    q: "What documents are generally required to get started?",
    a: "Basic KYC (PAN, Aadhaar, address proof), business details, previous returns (if any) and bank statements are usually enough to start. For specific services like company incorporation or loans, we share a detailed checklist."
  },
  {
    q: "How do you charge for your services?",
    a: "For one-time work like registration, clean-up or a project report, we follow task-based pricing. For ongoing compliance, we usually recommend a fixed monthly/annual retainer so you have clarity on cost and scope."
  }
];

export default function HomeFAQ() {
  return (
    <section className="home-faq">
      <div className="container section-inner">
        <div className="section-header section-header-centered">
          <div>
            <div className="section-title">Frequently asked questions</div>
            <div className="section-kicker">
              Answers to some of the common questions business owners ask us
              before coming on board.
            </div>
          </div>
        </div>

        <div className="faq-list">
          {FAQ_ITEMS.map((item, idx) => (
            <details
              key={idx}
              className="faq-item"
              open={idx === 0} // first one open by default
            >
              <summary className="faq-summary">
                <span>{item.q}</span>
                <span className="faq-icon">⌄</span>
              </summary>
              <div className="faq-body">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
