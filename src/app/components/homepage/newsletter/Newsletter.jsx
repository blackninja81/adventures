import React from "react";
import "./newsletter.scss";

const Newsletter = () => {
  return (
    <div className="news-container"
    style={{ backgroundImage: `url(/assets/images/peru.webp)` }}
    >
    <div className="subscribe">
      <h2 className="subscribe__title">Let's keep in touch</h2>
      <p className="subscribe__copy">
        Subscribe to keep up with fresh news and exciting updates. We promise not to spam you!
      </p>
      <div className="form">
        <input
          type="email"
          className="form__email"
          placeholder="Enter your email address"
        />
        <button className="form__button">Send</button>
      </div>
      <div className="notice">
        <span className="notice__copy">
        <input type="checkbox" />
          I agree to my email address being stored and used to receive the monthly newsletter.
        </span>
      </div>
    </div>
    </div>
  );
};

export default Newsletter;