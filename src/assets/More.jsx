export const More = ({ size = 24, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M11 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm0-6a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm0-6a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
      />
    </svg>
  );
};
