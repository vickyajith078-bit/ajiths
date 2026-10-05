import { ArrowUpRight, Braces, Bug, Database, Layers3 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const focusAreas = [
  { icon: Layers3, title: ".NET application development", text: "Maintaining and enhancing existing applications." },
  { icon: Bug, title: "Debugging & root-cause analysis", text: "Tracing issues across frontend, APIs, and databases." },
  { icon: Database, title: "Reliable production support", text: "Resolving production issues and troubleshooting SQL Server." },
  { icon: Braces, title: "Modern frontend learning", text: "Building fluency with React and current frontend practices." },
];
const stats = [{ value: "3+", label: "Years of experience" }, { value: ".NET", label: "Core development" }, { value: "API", label: "Integration & support" }, { value: "React", label: "Growing frontend skills" }];

export default function About() {
  return <section className="section about-section" id="about" aria-labelledby="about-title"><div className="page-shell"><div className="about-layout">
    <div className="about-intro"><SectionHeading title="About Me" titleId="about-title" /><p className="about-lead">I build dependable software by understanding the problem behind the ticket.</p><p className="about-body">I&apos;m a Software Developer with approximately 3 years of professional experience working with .NET applications. My day-to-day work spans client requirements, application maintenance, debugging, production issue resolution, API integration, and database troubleshooting.</p><p className="about-body">I enjoy following a problem through the full application flow, collaborating with API and database teams, and turning a clear understanding of the business need into a practical, reliable solution. Alongside my .NET experience, I&apos;m developing my frontend skills with React, Next.js, and vibe coding.</p><a className="text-link" href="#experience">Explore my experience <ArrowUpRight size={15} /></a></div>
    <div className="about-detail"><div className="focus-list">{focusAreas.map(({ icon: Icon, title, text }, index) => <div className="focus-item" key={title}><span className="focus-number">0{index + 1}</span><span className="focus-icon"><Icon size={18} strokeWidth={1.7} /></span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div><div className="stats-grid">{stats.map((stat) => <div className="stat-item" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></div>
  </div></div></section>;
}