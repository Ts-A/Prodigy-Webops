const Navbar = () => {
  return (
    <div className="h-[70px] flex px-20 items-center mb-[70px] bg-pr-t">
      <div className="grow text-2xl cursor-pointer">Prodigy</div>
      <div className="flex gap-7">
        <nav className="cursor-pointer">Schedule</nav>
        <nav className="cursor-pointer">Contact</nav>
      </div>
    </div>
  );
};

export default Navbar;
