import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return <footer className="site-footer"><div className="page-shell footer-inner"><a className="footer-brand" href="#home">AJITH <span>S</span></a><p>© 2026 Ajith S. All rights reserved.</p><div className="footer-links"><a href="mailto:ajithssoftwareengineer@gmail.com">Email <ArrowUpRight size={13} /></a><a href="https://wa.me/918056673453" target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={13} /></a><a href="#home" className="back-to-top-link">Back to top ↑</a></div></div></footer>;
}