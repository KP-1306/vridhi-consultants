
// src/components/HomeFAQ.jsx

import React from "react";

const faqs = [
  {
    question: "Do you only work with companies in a specific city or state?",
    answer:
      "We work with clients across India using phone, email and online meetings. Most registrations and filings are done online, so location is rarely a limitation."
  },
  {
    question: "What documents do I need to start a new company or firm?",
    answer:
      "It depends on the chosen structure (proprietorship, partnership, LLP, company, NGO etc.). Typically we need PAN, Aadhaar, address proofs, photographs and basic business details. Once we understand your plan, we share a clear checklist."
  },
  {
    question: "Can you handle both GST and income-tax work together?",
    answer:
      "Yes. For many clients we manage end-to-end compliance – GST registration & returns, income-tax filings, TDS, accounting, audits and ROC/MCA work – so that there is one point of contact."
  },
  {
    question: "How are your fees decided?",
    answer:
      "Fees depend on the nature of work, entity type, volume and complexity. After understanding your requirement, we share a transparent proposal mentioning scope, timelines and commercials before starting any assignment."
  },
  {
    question: "Do you provide one-time clean-up services?",
    answer:
      "Yes. If your books, GST or income-tax filings are pending or not in order, we can do a one-time clean-up and regularisation, and then optionally move to an ongoing retainer model."
  }
];

export default function HomeFAQ() {
  return (
    <section>
      <div className="container section-inner">
        <div className="section-header">
          <div>
            <div className="section-title">Frequently asked questions</div>
            <div className="section-kicker">
              Quick answers to common queries before you get started with us.
            </div>
          </div>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, idx) => (
            <details key={idx} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
