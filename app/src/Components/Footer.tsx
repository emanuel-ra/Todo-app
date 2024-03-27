import React from "react";

function Footer() {
  return (
    <div className="absolute bottom-2 text-secondary dark:text-light-grayish-blue tracking-wide transition delay-500 ease-in-out">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener"
        className="hover:text-primary"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        target="_blank"
        rel="noopener"
        href="www.linkedin.com/in/emanuelramirezabarca

"
        className="hover:text-primary"
      >
        Tomas Emanuel Ramirez Abarca
      </a>
      .
    </div>
  );
}

export default Footer;
