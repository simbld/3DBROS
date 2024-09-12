import type { LoaderProps } from "@interfaces/commonTypes";

const Loader: React.FC<LoaderProps> = ({
  barCount = 9,
  color = "rgba(500, 500, 500, 0.529)",
}: LoaderProps): JSX.Element => {
  const bars = Array.from({ length: barCount });

  return (
    <div className="loader" role="status">
      <span className="sr-only">Chargement...</span>
      {bars.map((_, index) => (
        <span
          key={index}
          className="loader-bar"
          style={{ backgroundColor: color }}
        ></span>
      ))}
    </div>
  );
};

export default Loader;
