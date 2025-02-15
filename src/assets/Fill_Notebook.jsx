export const Fill_Notebook = ({ size = 24, className }) => {
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
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="square"
        stroke-width="2"
        d="M3 22V3h15.2c1.33 0 1.995 0 2.503.259.446.228.81.59 1.038 1.038.259.507.259 1.172.259 2.5v11.407c0 1.328 0 1.992-.259 2.5-.227.446-.592.81-1.038 1.037-.508.259-1.172.259-2.5.259H3Z"
      />
      <path
        stroke="#fff"
        stroke-linecap="square"
        stroke-width="2"
        d="M7.75 3v19m5.75-10.688h4.75M13.5 7.75h4.75"
      />
    </svg>
  );
};
