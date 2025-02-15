export const Arrow_Chevron = ({
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
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m15 19-7-7 7-7"
      />
    </svg>
  );
};
