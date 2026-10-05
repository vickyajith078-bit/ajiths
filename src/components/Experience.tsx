import { ArrowUpRight, Check, Circle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const responsibilities = [
  "Maintain existing .NET applications and implement client-requested enhancements.",
  "Investigate production issues, perform root-cause analysis, and support reliable resolution.",
  "Debug frontend, backend, API, and database issues by tracing complete application workflows.",
  "Work with SQL Server, troubleshoot queries and stored procedures, and test API integrations.",
  "Collaborate with API and database teams to understand business requirements and deliver fixes.",
];

export default function Experience() {
  return <section className="section experience-section" id="experience" aria-labelledby="experience-title"><div className="page-shell"><div className="experience-heading-row"><SectionHeading title="Experience" titleId="experience-title" description="Focused on dependable delivery and the details that keep software working." /><div className="experience-count"><strong>3+</strong><span>YEARS IN<br />SOFTWARE DEVELOPMENT</span></div></div><div className="timeline-entry"><div className="timeline-rail"><Circle size={12} fill="currentColor" /><span /></div><article className="experience-card"><div className="experience-card-top"><div><p className="experience-kicker">SOFTWARE DEVELOPMENT</p><h3>Software Developer <span>/ .NET Developer</span></h3></div><span className="experience-current"><span /> PROFESSIONAL EXPERIENCE</span></div><p className="experience-summary">Supporting and enhancing business applications through thoughtful implementation, systematic troubleshooting, and close collaboration.</p><ul className="responsibility-list">{responsibilities.map((responsibility) => <li key={responsibility}><Check size={14} aria-hidden="true" />{responsibility}</li>)}</ul><a className="text-link experience-link" href="#contact">Discuss an opportunity <ArrowUpRight size={15} /></a></article></div></div></section>;
}