const HomeLayout = ({ title, children, className }) => {
  return (
    <div className={`flex flex-col gap-[28px] p-[18px] ${className}`}>
      <p className="text-lg font-semibold">{title}</p>
      <div className="flex flex-col">{children}</div>
    </div>
  );
};

export default HomeLayout;
