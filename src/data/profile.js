import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// First month of professional experience — the Unihyr Labs internship.
// Everything that shows "N+ years" derives from this, so there is a single
// place to keep it honest.
export const CAREER_START = new Date(2018, 2); // March 2018

export function yearsOfExperience(now = new Date()) {
  const months =
    (now.getFullYear() - CAREER_START.getFullYear()) * 12 +
    (now.getMonth() - CAREER_START.getMonth());
  return Math.floor(months / 12);
}

const profile = {
  name: "Ankur Gupta",
  role: "Senior Full Stack Engineer",
  tagline: "Ruby on Rails | Golang | ReactJS",
  location: "Lucknow, UP, India",
  email: "ankur11.kmr@gmail.com",
  siteUrl: "https://ankurgupta.netlify.app",
  resume: "/resume.pdf",
};

export const socials = [
  {
    name: "GitHub",
    href: "https://github.com/mr-ankur",
    icon: AiFillGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/its-ankur-gupta/",
    icon: FaLinkedinIn,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/its_ankur_gupta",
    icon: AiOutlineTwitter,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/meankurgupta",
    icon: AiFillFacebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/its_ankur_gupta/",
    icon: AiFillInstagram,
  },
];

export default profile;
