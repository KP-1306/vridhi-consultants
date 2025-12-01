import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container section-inner">
        <div className="section-header">
          <div>
            <div className="section-title">
              Let&apos;s talk about your requirements
            </div>
            <div className="section-kicker">
              Share a few details and our team will connect with you.
            </div>
          </div>
          <div className="section-pill">Response within 1 business day</div>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>Reach us</h3>
            <p>
              Whether you are starting a new business, regularising past
              compliances or planning for growth, we can help.
            </p>
            <dl>
              <dt>Phone / WhatsApp</dt>
              <dd>+91-9458107394</dd>

              <dt>Email</dt>
              <dd>info@vridhiconsultants.com</dd>

              <dt>Office</dt>
              <dd>Haldwani, Uttrakhand</dd>
            </dl>
            <p
              style={{
                marginTop: "0.6rem",
                color: "#9ca3af",
              }}
            >
              Prefer email? Write to us with a brief on your requirement and
              we&apos;ll schedule a call.
            </p>
          </div>

          {/* Netlify form */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div style={{ display: "none" }}>
              <label>
                Don&apos;t fill this if you&apos;re human:
                <input name="bot-field" />
              </label>
            </div>

            <div className="form-field">
              <label htmlFor="name">Full name*</label>
              <input id="name" name="name" required />
            </div>

            <div className="form-field">
              <label htmlFor="phone">Mobile / WhatsApp*</label>
              <input id="phone" name="phone" required />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" />
            </div>

            <div className="form-field">
              <label htmlFor="service">Service required</label>
              <select id="service" name="service">
                <option value="">Select</option>
                <option>Business Setup / New Registration</option>
                <option>GST Registration &amp; Returns</option>
                <option>Income Tax &amp; ITR Filing</option>
                <option>Accounting &amp; Bookkeeping</option>
                <option>Audit &amp; Assurance</option>
                <option>ROC / MCA Compliance</option>
                <option>Payroll &amp; Labour Compliance</option>
                <option>Business Advisory / Loans</option>
                <option>Multiple / Not sure</option>
              </select>
            </div>

            <div className="form-field form-field-full">
              <label htmlFor="message">
                Brief about your requirement*
              </label>
              <textarea id="message" name="message" required></textarea>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn">
                Submit enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
