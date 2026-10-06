import { ArrowUpRight, Check, Circle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const responsibilities = [
  "Maintain and enhance existing .NET applications to meet evolving client requirements.",
  "Investigate production issues, perform root-cause analysis, and support dependable resolutions.",
  "Trace end-to-end application workflows to debug frontend, backend, API, and database issues.",
  "Work with SQL Server to troubleshoot queries, stored procedures, and data-related defects.",
  "Validate API integrations and ensure reliable communication between distributed systems.",
  "Collaborate with API and database teams to align technical fixes with business goals.",
  "Support application reliability through proactive monitoring, testing, and issue follow-through.",
  "Document findings and implement practical solutions that reduce downtime and improve maintainability.",
  "Communicate with stakeholders to prioritize enhancements and deliver value with clarity.",
];

export default function Experience() {
  return <section className="section experience-section" id="experience" aria-labelledby="experience-title"><div className="page-shell"><div className="experience-heading-row"><SectionHeading title="Experience" titleId="experience-title" description="Focused on dependable delivery and the details that keep software working." /><div className="experience-count"><strong>3+</strong><span>YEARS IN<br />SOFTWARE DEVELOPMENT</span></div></div><div className="timeline-entry"><div className="timeline-rail"><Circle size={12} fill="currentColor" /><span /></div><article className="experience-card"><div className="experience-card-top"><div><p className="experience-kicker">SOFTWARE DEVELOPMENT</p><h3>Software Engineer</h3><p className="experience-role">Software Engineer | STT PayTech — Chennai, Tamil Nadu 2023 – Present</p></div><span className="experience-current"><span /> PROFESSIONAL EXPERIENCE</span></div><p className="experience-summary">Supporting and enhancing business applications through thoughtful implementation, systematic troubleshooting, and close collaboration.</p><ul className="responsibility-list">{responsibilities.map((responsibility) => <li key={responsibility}><Check size={14} aria-hidden="true" />{responsibility}</li>)}</ul><a className="text-link experience-link" href="#contact">Discuss an opportunity <ArrowUpRight size={15} /></a></article></div></div></section>;
}