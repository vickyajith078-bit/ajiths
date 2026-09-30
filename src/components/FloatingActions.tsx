"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

function WhatsAppMark() {
  return <svg viewBox="0 0 32 32" aria-hidden="true" className="whatsapp-mark"><path d="M16 3.3A12.4 12.4 0 0 0 5.4 22.1L4 28l6.1-1.4A12.4 12.4 0 1 0 16 3.3Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M12.1 10.4c-.3-.7-.7-.7-.9-.7h-.7c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.8c.2.3 2.5 4 6.2 5.4 3 .1 3.6.1 4.2-.4.7-.5 1.2-1.1 1.4-1.8.2-.6.2-1.1.1-1.3-.1-.2-.3-.3-.7-.5l-2.4-1.2c-.3-.1-.6-.2-.8.2-.3.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-.9-.8-1.5-1.9-1.7-2.3-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.6.1-.2.1-.5 0-.7l-1-2.4Z" fill="currentColor" /></svg>;
}

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const updateVisibility = () => setShowBackToTop(window.scrollY > 480);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);
  return <div className="floating-actions"><button className={`back-to-top${showBackToTop ? " is-visible" : ""}`} type="button" aria-label="Back to top" aria-hidden={!showBackToTop} tabIndex={showBackToTop ? 0 : -1} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><ArrowUp size={19} /></button><a className="whatsapp-float" href="https://wa.me/918056673453" target="_blank" rel="noopener noreferrer" aria-label="Contact Ajith on WhatsApp"><WhatsAppMark /></a></div>;
}