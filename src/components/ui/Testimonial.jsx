import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Abhishek R",
    username: "@Abhishek",
    body: "Amazing event. Had great fun.",
    gender: "male",
    id: 1,
  },
  {
    id: 2,
    name: "Madhav Jain",
    username: "@madhav",
    body: "I don't know what to say. I'm speechless. This was amazing.",
    gender: "male",
  },
  {
    id: 3,
    name: "Anushka",
    username: "@Anushka",
    body: "Wonderful time with all participants",
    gender: "female",
  },
  {
    id: 4,
    name: "Divya",
    username: "@Divya",
    body: "Superb event. Loved interacting with all the fellow participants and co-ordinators.",
    gender: "female",
  },
  {
    id: 5,
    name: "Pooja",
    username: "@jenny",
    body: "Must attend event! Kudoos team.",
    gender: "female",
  },
  {
    id: 6,
    name: "James",
    username: "@james",
    body: "One word: FANTASTIC",
    gender: "male",
  },
  {
    id: 7,
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    gender: "female",
  },
];

const firstRow = reviews;
const secondRow = reviews;

const ReviewCard = ({ name, username, body, gender }) => {
  return (
    <figure
      className={cn(
        "bg-pr-s text-pr-p relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] hover:bg-pr-p hover:text-pr-s"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt="avatar"
          src={
            "https://avatar.iran.liara.run/public/" +
            (gender === "male"
              ? "boy?username=" + username
              : "girl?username=" + username)
          }
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-white text-sm">{body}</blockquote>
    </figure>
  );
};

const Testimomial = () => {
  return (
    <div className="bg-pr-s text-pr-p my-10">
      <div className="text-center text-[40px] bungee-regular font-semibold my-5 bg-pr-p text-pr-s">
        Hear what they say
      </div>
      <div className="border border-pr-p relative flex w-9/12 mx-auto px-10 flex-col items-center justify-center overflow-hidden bg-pr-t">
        <Marquee pauseOnHover className="my-5 [--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="my-5 [--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Testimomial;
