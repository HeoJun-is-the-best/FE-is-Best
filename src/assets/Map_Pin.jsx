export const Map_Pin = ({ size = 24, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M3.333 6.615c0 3.235 2.83 5.91 4.083 6.935.179.147.27.221.403.259a.74.74 0 0 0 .362 0c.134-.038.224-.111.404-.259 1.252-1.025 4.082-3.7 4.082-6.934A4.59 4.59 0 0 0 11.3 3.352 4.693 4.693 0 0 0 8 2a4.693 4.693 0 0 0-3.3 1.352 4.59 4.59 0 0 0-1.367 3.263Z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M6.667 6a1.333 1.333 0 1 0 2.666 0 1.333 1.333 0 0 0-2.666 0Z"
      />
    </svg>
  );
};
