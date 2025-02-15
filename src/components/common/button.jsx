const Button = ({ children, className, disabled, ...props }) => {
  return (
    <button
      className="w-full h-14 rounded-full cursor-pointer bg-[#171717] text-white disabled:bg-[#F5F5F5] disabled:text-[#171717] disabled:cursor-auto"
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
