// components/SectionHeader.tsx
interface SectionHeaderProps {
  label?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  title,
  titleHighlight,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {label && (
        <span className="text-xs font-mono font-medium tracking-widest text-cyan/70 uppercase">
          // {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
        {title}{" "}
        {titleHighlight && (
          <span className="text-gradient-cyan">{titleHighlight}</span>
        )}
      </h2>
      {description && (
        <p
          className={`text-muted leading-relaxed max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
