const Layout = ({ top, bottom, children }) => {
  return (
    <div className="h-[805px] flex flex-col noscroll">
      {top}
      <main className="h-full noscroll">{children}</main>
      {bottom}
    </div>
  );
};

export default Layout;
