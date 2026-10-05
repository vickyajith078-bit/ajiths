import { Braces, Bug, Code2, Database, GitBranch, Layers3, Workflow } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const groups = [
  { title: "Backend", icon: Braces, code: "01", skills: ["C#", ".NET", "ASP.NET", "Web API"] },
  { title: "Frontend", icon: Code2, code: "02", skills: ["JavaScript", "React", "Angular", "AngularJS", "HTML", "CSS", "Next.js"] },
  { title: "Database", icon: Database, code: "03", skills: ["Microsoft SQL Server", "SQL", "Stored Procedures"] },
  { title: "Development & tools", icon: GitBranch, code: "04", skills: ["Git", "GitHub", "Visual Studio", "VS Code", "Postman", "Cursor"] },
  { title: "Problem solving", icon: Bug, code: "05", skills: ["Root Cause Analysis", "Debugging", "Bug Fixing", "Defect Triage"] },
  { title: "Delivery & collaboration", icon: Workflow, code: "06", skills: ["Production Support", "API Integration Testing", "Agile / Scrum"] },
];

export default function Skills() {
  return <section className="section skills-section" id="skills" aria-labelledby="skills-title"><div className="page-shell"><div className="skills-heading-row"><SectionHeading title="Skills & technologies" titleId="skills-title" description="A practical toolkit for building, supporting, and improving web applications." /><p className="skills-aside"><Layers3 size={15} /> CONTINUOUSLY LEARNING</p></div><div className="skills-grid">{groups.map(({ title, icon: Icon, code, skills }) => <article className="skill-group" key={title}><div className="skill-group-heading"><span className="skill-category-icon"><Icon size={19} strokeWidth={1.7} /></span><h3>{title}</h3><span className="skill-code">{code}</span></div><div className="skill-tags">{skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div><span className="skill-group-line" /></article>)}</div></div></section>;
}