export const Fill_Home = ({ size = 24, className }) => {
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
        d="M22.216 11.746v10.99h-8v-5.813a2.423 2.423 0 1 0-4.845 0v5.813H1.867v-3.832l-.084-7.158c0-.682 0-1.024.083-1.341.074-.282.195-.548.359-.788.184-.272.44-.497.954-.947L9.31 3.305c.952-.833 1.428-1.25 1.964-1.408.473-.14.977-.14 1.45 0 .536.159 1.013.575 1.966 1.41l6.13 5.363c.514.45.77.675.954.947.164.24.284.506.358.788.083.317.083.659.083 1.341Z"
      />
      <path
        fill="currentColor"
        d="m1.867 18.904-.084-7.158v10.99h.084v-3.832Z"
      />
    </svg>
  );
};
