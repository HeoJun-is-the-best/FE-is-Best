export const Timer = ({ size = 24, className }) => {
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
        d="M8 8.667V6m6-2-1.334-1.333m-6-1.334h2.667M8 14A5.333 5.333 0 1 1 8 3.333 5.333 5.333 0 0 1 8 14Z"
      />
    </svg>
  );
};
