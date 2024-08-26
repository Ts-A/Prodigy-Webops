import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Team = () => {
  const members = [
    {
      id: 4,
      imageUrl: "",
      firstName: "Thanigai",
      lastName: "Selvan",
      linkedInUrl: "",
      designation: "Chairperson",
    },
    {
      id: 2,
      imageUrl: "",
      firstName: "Ketki",
      lastName: "Singh",
      linkedInUrl: "",
      designation: "Secretary",
    },
    {
      id: 3,
      imageUrl: "",
      firstName: "Yuvaraja",
      lastName: "K",
      linkedInUrl: "",
      designation: "Treasury",
    },
    {
      id: 1,
      imageUrl: "",
      firstName: "Ajeet",
      lastName: "T S",
      linkedInUrl: "",
      designation: "Head of WebOps",
    },
  ];

  return (
    <div className="p-10 grid grid-cols-2 gap-8 bg-indigo-500 container mx-auto">
      {members.map((member) => (
        <Card key={member.id} className="hover:scale-110 place-center">
          <CardHeader className="p-0 m-0">
            <img
              className="object-cover rounded-md border border-sky-500 divide-y h-32 min-w-full"
              src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg"
              alt="image"
            />
          </CardHeader>
          <CardContent className="mt-5 px-3">
            <div>
              <span className="font-semibold text-lg">
                {member.firstName + " " + member.lastName}
              </span>
              <span className="float-right">
                <img
                  src="/assets/icons/linkedin.svg"
                  width={32}
                  alt="linkedin"
                />
              </span>
            </div>
            <div>{member.designation}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Team;
