export const Arrow = ({
  size = 24,
  className = "",
  onClick,
  direction = "left",
}) => {
  const rotate = {
    left: "rotate-[0deg]",
    top: "rotate-[90deg]",
    right: "rotate-[180deg]",
    bottom: "rotate-[270deg]",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className} ${
        rotate[direction]
      }`}
    >
      <path
        stroke="color(display-p3 .0902 .0902 .0902)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m3 12 5 5m-5-5 5-5m-5 5h18"
      />
    </svg>
  );
};
