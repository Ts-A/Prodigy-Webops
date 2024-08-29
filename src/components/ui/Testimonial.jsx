import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    gender: "male",
    id: 1,
  },
  {
    id: 2,
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    gender: "female",
  },
  {
    id: 3,
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    gender: "female",
  },
  {
    id: 4,
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    gender: "female",
  },
  {
    id: 5,
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    gender: "male",
  },
  {
    id: 6,
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    gender: "male",
  },
  {
    id: 7,
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    gender: "female",
  },
  {
    id: 8,
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    gender: "male",
  },
  {
    id: 9,
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    gender: "male",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

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
    <div className="bg-pr-s text-pr-p">
      <div className="text-center text-[40px] font-semibold my-5">
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
