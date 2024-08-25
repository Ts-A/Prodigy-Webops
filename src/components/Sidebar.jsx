const Sidebar = () => {
  const sidebarItems = [
    {
      id: 1,
      label: "Prodigy",
      url: "",
    },
    {
      id: 2,
      label: "Day 1",
      url: "",
    },
    {
      id: 3,
      label: "Day 2",
      url: "",
    },
    {
      id: 4,
      label: "Valediction",
      url: "",
    },
    {
      id: 5,
      label: "Testimonials",
      url: "",
    },
    {
      id: 7,
      label: "About Us",
      url: "",
    },
    {
      id: 8,
      label: "Contact Us",
      url: "",
    },
  ];

  return (
    <ul className="list-style-none bg-indigo-200 flex flex-col justify-center h-full items-end pr-5 text-2xl font-semibold gap-5">
      {sidebarItems.map((item) => (
        <li className="hover:underline cursor-pointer" key={item.id}>
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
