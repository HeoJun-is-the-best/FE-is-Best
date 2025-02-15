const Layout = ({ top, bottom, children }) => {
  return (
    <div className="h-full flex flex-col">
      {top}
      <main className="flex-1">{children}</main>
      {bottom}
    </div>
  );
};

export default Layout;
