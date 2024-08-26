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
      label: "Testimonial",
      url: "",
    },
    {
      id: 7,
      label: "Organizing Team",
      url: "",
    },
    {
      id: 8,
      label: "Contact Us",
      url: "",
    },
  ];

  return (
    <ul className="list-style-none bg-indigo-200 flex flex-col justify-start h-full pt-20 items-end pr-10 text-2xl font-semibold gap-5">
      {sidebarItems.map((item) => (
        <li
          className="transition hover:scale-110 hover:underline cursor-pointer"
          key={item.id}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
