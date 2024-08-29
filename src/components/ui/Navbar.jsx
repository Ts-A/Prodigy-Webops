const Navbar = () => {
  return (
    <div className="h-[70px] flex px-20 items-center mb-[70px] bg-pr-t">
      <div className="grow text-[40px] cursor-pointer font-bold">
        <img src="/assets/logo.png" alt="logo" />
      </div>
      <div className="flex gap-7 font-semibold">
        <nav className="cursor-pointer">Schedule</nav>
        <nav className="cursor-pointer">Contact</nav>
      </div>
    </div>
  );
};

export default Navbar;
