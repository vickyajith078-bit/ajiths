type SectionHeadingProps = { eyebrow?: string; title: string; description?: string; align?: "left" | "center"; titleId?: string };

export default function SectionHeading({ eyebrow, title, description, align = "left", titleId }: SectionHeadingProps) {
  return <div className={`section-heading section-heading-${align}`}>{eyebrow ? <p className="eyebrow section-eyebrow"><span />{eyebrow}</p> : null}<h2 id={titleId}>{title}</h2>{description ? <p className="section-description">{description}</p> : null}</div>;
}