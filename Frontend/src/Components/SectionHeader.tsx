type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
};

const SectionHeader = ({ eyebrow, title, align = "center" }: SectionHeaderProps) => {
  const alignClass = align === "center" ? "text-center" : "";

  return (
    <div className={alignClass}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className={`section-title ${align === "center" ? "text-center" : ""}`}>
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
