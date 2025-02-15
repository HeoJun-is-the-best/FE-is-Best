const HomeLayout = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-[28px] p-[18px]">
      <p className="text-lg font-semibold">{title}</p>
      <div className="flex flex-col">{children}</div>
    </div>
  );
};

export default HomeLayout;
