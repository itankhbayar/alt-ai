type Props = {
  title: string;
  subtitle?: string;
  gradient?: boolean;
  centered?: boolean;
};

export function SectionHeading({
  title,
  subtitle,
  gradient = false,
  centered = true,
}: Props) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2
        className={`font-serif text-3xl font-bold md:text-5xl ${
          gradient ? "gradient-text" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
