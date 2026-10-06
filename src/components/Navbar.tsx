"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [["Home", "home"], ["About", "about"], ["Skills", "skills"], ["Experience", "experience"], ["Projects", "projects"], ["Contact", "contact"]] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<(typeof links)[number][1]>("home");
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const sections = links
      .map(([, id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const topInset = Math.round(window.innerHeight * 0.25);
    const bottomInset = Math.round(window.innerHeight * 0.6);
    const observer = new IntersectionObserver((entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) =>
          Math.abs(first.boundingClientRect.top - window.innerHeight * 0.4) -
          Math.abs(second.boundingClientRect.top - window.innerHeight * 0.4),
        );
      const currentSection = visibleSections[0]?.target.id;

      if (currentSection) {
        setActiveSection(currentSection as (typeof links)[number][1]);
      }
    }, {
      rootMargin: `-${topInset}px 0px -${bottomInset}px 0px`,
      threshold: 0,
    });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav className="nav-shell page-shell" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Ajith S, home"><span className="brand-mark" aria-hidden="true">AS</span><span className="brand-name">AJITH <b>S</b></span></a>
        <div className="desktop-nav">{links.map(([label, id]) => <a key={id} href={`#${id}`} className={activeSection === id ? "nav-link is-current" : "nav-link"} aria-current={activeSection === id ? "location" : undefined}>{label}</a>)}</div>
        <a className="nav-contact" href="/Ajith_S_Software_Engineer_Resume.pdf" download aria-label="Download CV">CV Download <span aria-hidden="true">↓</span></a>
        <a className="nav-contact nav-contact-secondary" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </nav>
      <div className={`mobile-nav${menuOpen ? " is-open" : ""}`} id="mobile-navigation" aria-hidden={!menuOpen}>
        {links.map(([label, id], index) => <a key={id} href={`#${id}`} className={activeSection === id ? "is-current" : undefined} aria-current={activeSection === id ? "location" : undefined} tabIndex={menuOpen ? 0 : -1} style={{ "--item-index": index } as React.CSSProperties} onClick={closeMenu}><span>0{index + 1}</span>{label}</a>)}
        <a className="mobile-nav-cv" href="/Ajith_S_Software_Engineer_Resume.pdf" download tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>CV Download <span aria-hidden="true">↓</span></a>
        <p className="mobile-nav-note">SOFTWARE DEVELOPER <span>·</span> AJITH S</p>
      </div>
    </header>
  );
}