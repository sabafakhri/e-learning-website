interface DescriptionProps {
  variant?: "default" | "toggle";
  title?: string;
  description?: string;
  li?: string[];
}

export default function Description({
  variant = "default",
  title = "",
  description = "",
  li = [],
}: DescriptionProps) {
  return (
    <div className="flex flex-col gap-3.75">
      <h4 className="text-24-100 font-semibold">{title}</h4>
      {variant === "default" && (
        <p className="text-16-24 text-gray-600">{description}</p>
      )}
      {variant === "toggle" && (
        <ul className="text-14-30 flex flex-col">
          {li.map((item) => (
            <li className="relative pl-7 before:absolute before:-top-[8px] before:left-0 before:text-4xl before:text-orange-500 before:content-['•']">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
