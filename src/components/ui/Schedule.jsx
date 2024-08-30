const Schedule = () => {
  const items = [
    {
      type: "banner",
      text: "Day 1",
    },
    {
      type: "event",
      title: "Factor Frenzy",
      text: "Factor Frenzy is the ultimate brain workout for math enthusiasts, where participants dive into the wild world of numbers and factors in a thrilling competition! Imagine a room buzzing with excitement as teams race against the clock to factorize increasingly complex numbers.",
    },
    {
      type: "banner",
      text: "Day 2",
    },
    {
      type: "event",
      title: "Robotics Quiz",
      text: "The Robotics Quiz Challenge is an electrifying event where tech enthusiasts and budding engineers gather to test their knowledge of robotics in a spirited competition. Picture a room filled with teams, each huddled around their tables, eagerly awaiting the next question that could range from the history of robotics to the intricacies of robot design and AI integration. ",
    },
    {
      type: "event",
      title: "Industrial Design",
      text: "The Industrial Design Workshop is an inspiring and hands-on event where creativity meets functionality. Participants, ranging from seasoned designers to curious beginners, gather in a dynamic space filled with prototypes, sketches, and cutting-edge tools. The workshop kicks off with a brief introduction to the principles of industrial design, followed by interactive sessions where participants collaborate to brainstorm and sketch their ideas.",
    },
    {
      type: "banner",
      text: "Closing Note",
    },
    {
      type: "event",
      title: "Valediction",
      text: "A Valediction Gala is a heartwarming and joyous event, where a community comes together to bid farewell to graduates or departing members with style and celebration. Imagine an evening filled with laughter, tears, and fond memories as everyone gathers in a beautifully decorated venue, dressed in their finest. The event kicks off with speeches that blend humor and sentiment, recalling the journey and accomplishments of those being honored.",
    },
  ];

  return (
    <div id="schedule" className="my-[70px] text-pr-p bg-pr-s">
      {items.map((item, index) => {
        if (item.type === "banner")
          return (
            <div
              key={index}
              className="text-pr-s bg-pr-p text-[40px] text-center bungee-regular"
            >
              {item.text}
            </div>
          );
        if (item.type === "event")
          return (
            <div key={index} className="my-10 w-1/2 lg:w-1/4 mx-auto border">
              <div className="font-bold text-center bg-pr-p text-pr-t text-[30px]">
                {item.title}
              </div>
              <p className="text-white font-light py-5 px-3">{item.text}</p>
            </div>
          );
      })}
    </div>
  );
};

export default Schedule;
