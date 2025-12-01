// src/components/HomeFAQ.jsx
import React from "react";

const FAQ_ITEMS = [
  {
    question: "Who will be handling my returns and filings?",
    answer:
      "All core work is done or reviewed by a qualified Chartered Accountant. Our team handles data collation and preparation, but final returns and important submissions go out only after CA review."
  },
  {
    question: "How much time is needed to set up a private limited company?",
    answer:
      "In most cases, a new private limited company can be incorporated within 7–10 working days after receiving all documents, name approval and DSCs. We will share a checklist and keep you updated on each step."
  },
  {
    question: "Which entity structure is most suitable for a startup?",
    answer:
      "It depends on your funding, risk and tax plan. Many startups prefer a Private Limited Company or LLP. During our first call, we walk you through pros and cons for proprietorship, partnership, LLP and company before you decide."
  },
  {
    question: "What are the benefits under the Presumptive Taxation Scheme?",
    answer:
      "Presumptive schemes like 44ADA / 44AD can reduce record-keeping burden and simplify tax for eligible small businesses and professionals. We check your turnover, expense pattern and future plans before recommending it."
  },
  {
    question: "Can I obtain two DINs for my two companies?",
    answer:
      "No. As per MCA rules, every individual can have only one DIN which can be used across multiple directorships. We help you link the same DIN to all the companies where you are a director."
  },
  {
    question:
      "Is it mandatory to maintain detailed records of all financial transactions?",
    answer:
      "Yes. Proper invoices, vouchers and bank records are essential for GST, income tax and audit. We can design a simple, practical system for you so that your books stay clean and future assessments are easier to handle."
  }
];

export default function HomeFAQ() {
  return (
    <section className="home-faq">
      <div className="container section-inner">
        <div className="section-header section-header-center">
          <div>
            <div className="section-title">Frequently asked questions</div>
            <div className="section-kicker">
              Short answers to common queries. For anything specific, we are one
              call away.
            </div>
          </div>
        </div>

        <div className="faq-list">
          {FAQ_ITEMS.map((faq, idx) => (
            <details key={idx} className="faq-item">
              <summary>
                <span>{faq.question}</span>
                <span className="faq-icon">▾</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
