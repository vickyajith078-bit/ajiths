import { ArrowDownRight, Braces, Lightbulb, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const principles = [
  { number: "01", title: "Clean Code", text: "Write maintainable and structured code with a focus on readability.", icon: Braces },
  { number: "02", title: "Problem Solver", text: "Analyze issues, identify root causes, and implement practical solutions.", icon: Lightbulb },
  { number: "03", title: "Lifelong Learner", text: "Continuously improve technical skills and explore modern technologies.", icon: Sparkles },
];

export default function ProblemSolving() {
  return <section className="section principles-section" aria-labelledby="principles-title"><div className="page-shell"><div className="principles-topline"><span>HOW I THINK</span><ArrowDownRight size={19} /></div><SectionHeading eyebrow="THE WAY I WORK" title="Clean code. Better solutions." titleId="principles-title" description="Good engineering is equal parts craft, curiosity, and care for the people using the result." /><div className="principles-grid">{principles.map(({ number, title, text, icon: Icon }) => <article className="principle-item" key={title}><div className="principle-top"><span>{number}</span><Icon size={23} strokeWidth={1.6} /></div><h3>{title}</h3><p>{text}</p><span className="principle-accent" /></article>)}</div><p className="principles-quote"><span>“</span>Clean code. Better solutions.<span>— Ajith S</span></p></div></section>;
}