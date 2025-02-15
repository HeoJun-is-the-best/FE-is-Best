export const Notebook = ({ size = 24, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 32 32"
      className={className}
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10.667 5.333H9.6c-1.493 0-2.24 0-2.81.291-.503.256-.91.663-1.166 1.165-.29.57-.29 1.318-.29 2.811v12.8c0 1.494 0 2.24.29 2.81.256.502.663.91 1.165 1.166.57.29 1.316.29 2.807.29h1.07m0-21.333H22.4c1.494 0 2.24 0 2.81.291.502.256.91.663 1.166 1.165.29.57.29 1.316.29 2.807v12.809c0 1.49 0 2.236-.29 2.805a2.67 2.67 0 0 1-1.166 1.166c-.57.29-1.315.29-2.806.29H10.667m0-21.333v21.334m5.333-12h5.334m-5.334-4h5.334"
      />
    </svg>
  );
};
