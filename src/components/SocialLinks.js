import React from "react";
import { socials } from "../data/profile";

// Icon-only links are invisible to screen readers without a label, so every
// anchor carries the network name.
function SocialLinks({ className = "", linkClassName = "", style }) {
  return (
    <ul className={className}>
      {socials.map(({ name, href, icon: Icon }) => (
        <li className="social-icons" key={name}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} profile`}
            className={linkClassName}
            style={style}
          >
            <Icon aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
