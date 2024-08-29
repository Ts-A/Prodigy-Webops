const Team = () => {
  const members = [
    {
      id: 1,
      name: "ketki singh",
      image: "/assets/contacts/1.jpg",
      role: "secretary",
      linkedin: "https://www.linkedin.com/in/ketki-singh/",
    },
    {
      id: 2,
      name: "thanikai sathiyan",
      image: "/assets/contacts/2.jpg",
      role: "chairperson",
      linkedin: "https://www.linkedin.com/in/thanikai-sathiyan-s/",
    },
    {
      id: 3,
      name: "yuvarja thayanidhi",
      image: "/assets/contacts/3.jpg",
      role: "treasury",
      linkedin: "https://www.linkedin.com/in/yuvaraja-thayanidhi/",
    },
    {
      id: 4,
      name: "ajeet t s",
      image: "/assets/contacts/4.jpg",
      role: "head of webops",
      linkedin: "https://www.linkedin.com/in/ajeet-t-s/",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-pr-s">
      <div className="bg-pr-p text-pr-s font-bold text-[40px] px-10">
        The Team
      </div>
      <div className="flex flex-row flex-wrap">
        {members.map((member) => {
          return (
            <div key={member.id} className="w-full md:w-1/2">
              <div className="w-3/4 mx-auto my-5">
                <img
                  src={member.image}
                  className="w-full h-48 object-cover"
                  alt={member.name}
                />
                <div className="px-5 py-2 flex justify-between text-pr-s bg-pr-p">
                  <span className="flex flex-col">
                    <span className="capitalize font-semibold">
                      {member.name}
                    </span>
                    <span className="capitalize">{member.role}</span>
                  </span>
                  <span>
                    <a href={member.linkedin} rel="noopener" target="_blank">
                      <img src="/assets/icons/linkedin.svg" alt="linkedin" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
