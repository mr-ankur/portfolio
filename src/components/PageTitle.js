import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import profile from "../data/profile";

const titles = {
  "/": `${profile.name} | ${profile.role}`,
  "/about": `About | ${profile.name}`,
  "/project": `Projects | ${profile.name}`,
  "/resume": `Resume | ${profile.name}`,
};

// Keeps the document title in sync with the route so browser history, tabs and
// shared links are meaningful on a single-page app.
function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = titles[pathname] || `Page not found | ${profile.name}`;
  }, [pathname]);

  return null;
}

export default PageTitle;
