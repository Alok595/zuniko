"use client";

import { useState } from "react";
import { CONFIG, SERVICES, instagramUrl, whatsappUrl } from "@/content/site";

export function Contact() {
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [service, setService] = useState(SERVICES[0]?.title || "Mobile apps");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [msgError, setMsgError] = useState("");

  const [isDone, setIsDone] = useState(false);
  const [preparedMessage, setPreparedMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONFIG.email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(preparedMessage).then(() => {
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2000);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedMsg = message.trim();

    let hasError = false;
    if (!trimmedName) {
      setNameError("Please add your name.");
      hasError = true;
    } else {
      setNameError("");
    }

    if (!trimmedMsg) {
      setMsgError("Tell us a little about what you need.");
      hasError = true;
    } else {
      setMsgError("");
    }

    if (hasError) return;

    const fullMessage =
      `Hi ${CONFIG.studio}, I'm ${trimmedName}.\nI'm looking for: ${service}.\n\n${trimmedMsg}` +
      (contactInfo.trim() ? `\n\nReach me on: ${contactInfo.trim()}` : "");

    setPreparedMessage(fullMessage);
    setIsDone(true);
  };

  return (
    <section className="band contact" id="contact">
      <div className="wrap cgrid">
        <div className="info">
          <p className="label reveal in">Contact</p>
          <h2 className="title reveal in" style={{ "--rd": "0.08s" } as React.CSSProperties}>
            Tell us what you need built.
          </h2>
          <p className="sub reveal in" style={{ "--rd": "0.14s" } as React.CSSProperties}>
            Share a few lines about your idea. We reply within one working day with questions or a first estimate.
          </p>

          <ul className="ways reveal in" style={{ "--rd": "0.2s" } as React.CSSProperties}>
            <li>
              <small>WhatsApp</small>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={whatsappUrl("Hi " + CONFIG.studio + ", I would like to talk about a project.")}
              >
                {CONFIG.whatsappLabel}
              </a>
            </li>
            <li>
              <small>Instagram</small>
              <a target="_blank" rel="noopener noreferrer" href={instagramUrl}>
                @{CONFIG.instagram}
              </a>
            </li>
            <li>
              <small>Email</small>
              <div className="em-row">
                <span className="val" id="emailVal">
                  {CONFIG.email}
                </span>
                <button
                  className="copy"
                  id="copyEmail"
                  type="button"
                  onClick={handleCopyEmail}
                >
                  {copiedEmail ? "Copied" : "Copy"}
                </button>
              </div>
            </li>
          </ul>
        </div>

        <div className="formcard reveal in" style={{ "--rd": "0.12s" } as React.CSSProperties}>
          {!isDone ? (
            <form id="form" noValidate onSubmit={handleSubmit}>
              <h3>Start a project</h3>
              <p className="hint">Fill this in and we prepare your message, ready to send on WhatsApp.</p>

              <div className="field">
                <label htmlFor="f-name">Your name</label>
                <input
                  id="f-name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (nameError) setNameError("");
                  }}
                  required
                />
                <div className="err" id="e-name" aria-live="polite">
                  {nameError}
                </div>
              </div>

              <div className="field">
                <label htmlFor="f-contact">Phone or email</label>
                <input
                  id="f-contact"
                  name="contact"
                  autoComplete="email"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                />
              </div>

              <div className="field">
                <label htmlFor="f-service">What do you need?</label>
                <select
                  id="f-service"
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  {SERVICES.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Something else">Something else</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="f-msg">Tell us about it</label>
                <textarea
                  id="f-msg"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (msgError) setMsgError("");
                  }}
                  required
                />
                <div className="err" id="e-msg" aria-live="polite">
                  {msgError}
                </div>
              </div>

              <button className="btn btn-blue" type="submit">
                Prepare my message
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                  <path d="M3 10h13M11 4l6 6-6 6" />
                </svg>
              </button>
            </form>
          ) : (
            <div className="done" id="done">
              <h3>Your message is ready</h3>
              <p className="hint">Open WhatsApp to send it to us, or copy it and send it any way you like.</p>
              <div className="preview" id="preview">
                {preparedMessage}
              </div>
              <div className="row">
                <a
                  className="btn btn-blue"
                  id="sendWa"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={whatsappUrl(preparedMessage)}
                >
                  Open WhatsApp
                </a>
                <button className="btn" id="copyMsg" type="button" onClick={handleCopyMessage}>
                  {copiedMessage ? "Copied" : "Copy message"}
                </button>
              </div>
              <button
                className="linkbtn"
                id="editMsg"
                type="button"
                onClick={() => setIsDone(false)}
              >
                Edit my message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
