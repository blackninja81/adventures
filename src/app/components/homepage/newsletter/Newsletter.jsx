"use client";
import React from "react";
import "./newsletter.scss";

const Newsletter = () => {
  return (
    <section className="news-container">
      {/* Background Overlay for better contrast */}
      <div className="dark-overlay"></div>
      
      <div className="subscribe-card">
        <h2 className="subscribe__title">Let us keep in touch</h2>
        <p className="subscribe__copy">
          Subscribe to keep up with fresh news and exciting updates. 
          We promise not to spam you!
        </p>
        
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            className="form__email"
            placeholder="Enter your email address"
            required
          />
          <button type="submit" className="form__button">
            Subscribe Now
          </button>
        </form>
        
        <div className="notice">
          <label className="notice__label">
            <input type="checkbox" className="custom-checkbox" required />
            <span className="notice__text">
              I agree to my email address being stored and used to receive the monthly newsletter.
            </span>
          </label>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;