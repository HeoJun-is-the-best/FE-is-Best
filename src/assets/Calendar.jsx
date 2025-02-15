export const Calendar = ({ size = 24, className }) => {
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
        stroke="color(display-p3 .4431 .4431 .4784)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5.333 10.667h21.334m-21.334 0V22.4c0 1.494 0 2.24.291 2.81.256.502.663.91 1.165 1.166.57.29 1.316.29 2.807.29h12.808c1.49 0 2.236 0 2.806-.29a2.67 2.67 0 0 0 1.166-1.166c.29-.57.29-1.315.29-2.805V10.667m-21.332 0V9.6c0-1.493 0-2.24.29-2.81.256-.503.663-.91 1.165-1.166.57-.29 1.318-.29 2.811-.29h1.067m16 5.333V9.596c0-1.49 0-2.237-.29-2.807a2.669 2.669 0 0 0-1.167-1.165c-.57-.29-1.316-.29-2.81-.29h-1.066m0-2.667v2.666m0 0H10.667m0-2.666v2.666"
      />
    </svg>
  );
};
