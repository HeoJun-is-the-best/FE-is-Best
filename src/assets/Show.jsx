export const Show = ({ size = 24, className = "", onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className} `}
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3.587 13.779c1.78 1.769 4.883 4.22 8.413 4.22 3.53 0 6.634-2.451 8.413-4.22.47-.467.705-.7.854-1.159.107-.327.107-.913 0-1.24-.15-.458-.385-.692-.854-1.159C18.633 8.452 15.531 6 12 6c-3.53 0-6.634 2.452-8.413 4.221-.47.467-.705.7-.854 1.159-.107.327-.107.913 0 1.24.15.458.384.692.854 1.159Z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
      />
    </svg>
  );
};
