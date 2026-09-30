import { ArrowDown, ArrowUpRight, Braces, Code2, Database, Terminal } from "lucide-react";

const technologies = [{ label: ".NET", className: "tech-dotnet" }, { label: "C#", className: "tech-csharp" }, { label: "React", className: "tech-react" }, { label: "SQL", className: "tech-sql" }];

export default function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-grid page-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-light" /> SOFTWARE DEVELOPER</p>
          <h1 id="hero-title">Hi, I&apos;m <span>Ajith S</span><span className="heading-period">.</span></h1>
          <p className="hero-role">.NET Developer <span>/</span> React Developer</p>
          <p className="hero-description">Software Developer with 3 years of experience building, maintaining, debugging, and enhancing web applications. I focus on solving real-world problems, understanding application flows, and delivering reliable software solutions.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">View My Work <ArrowUpRight size={17} aria-hidden="true" /></a><a className="button button-quiet" href="#contact">Contact Me</a></div>
          <div className="hero-meta"><span className="hero-meta-line" /><p>Building scalable solutions.<br /><strong>Delivering impact.</strong></p></div>
        </div>
        <div className="hero-art" aria-label="Illustrated software development workspace">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-crosshair crosshair-one" /><div className="art-crosshair crosshair-two" />
          <div className="code-window">
            <div className="window-topbar"><div className="window-dots"><i /><i /><i /></div><div className="window-tab"><Code2 size={12} /> portfolio.cs</div><span className="window-menu">···</span></div>
            <div className="editor-content"><div className="editor-gutter" aria-hidden="true">01<br />02<br />03<br />04<br />05<br />06<br />07<br />08</div><div className="editor-code" aria-hidden="true"><p><span className="syntax-purple">public class</span> <span className="syntax-yellow">Developer</span></p><p className="code-indent">&#123;</p><p className="code-indent-two"><span className="syntax-blue">string</span> Focus <span className="syntax-muted">=</span></p><p className="code-indent-three"><span className="syntax-green">&quot;Building what matters&quot;</span>;</p><p className="code-gap">&nbsp;</p><p className="code-indent-two"><span className="syntax-purple">public void</span> <span className="syntax-yellow">Solve</span>()</p><p className="code-indent">&#123;</p><p className="code-indent-two"><span className="syntax-blue">return</span> <span className="syntax-green">ReliableSolutions</span>;</p></div></div>
            <div className="editor-status"><span><span className="status-light" /> Ready to build</span><span>UTF-8&nbsp;&nbsp; C#</span></div>
          </div>
          <div className="terminal-window"><div className="terminal-heading"><Terminal size={13} /> TERMINAL <span>− &nbsp; □ &nbsp; ×</span></div><p><span className="terminal-prompt">$</span> dotnet run <span className="terminal-cursor" /></p><p className="terminal-success">✓ Application ready</p></div>
          <div className="art-caption"><span>01</span> IDEAS INTO SOFTWARE</div>
          {technologies.map((technology) => <span key={technology.label} className={`tech-float ${technology.className}`}>{technology.label}</span>)}
          <span className="visual-symbol symbol-braces"><Braces size={18} /></span><span className="visual-symbol symbol-database"><Database size={17} /></span>
        </div>
      </div>
      <div className="hero-bottom page-shell"><p className="hero-quote"><span>“</span>Code is not just what I write, it&apos;s how I solve problems.</p><a className="scroll-cue" href="#about"><ArrowDown size={15} /> SCROLL TO EXPLORE</a></div>
      <div className="hero-index" aria-hidden="true">01 — 07</div>
    </section>
  );
}