import React from "react";
import BlurIn from "./magicui/blur-in";

const Hero = () => {
  return (
    <div className="border rounded-md mx-10 my-20 py-5">
      <div>
        <BlurIn word="PRODIGY'23" className={"py-5"} />
      </div>
      <div>
        <div className={"text-lg italic text-center"}>
          where innovation meets excellence
        </div>
      </div>
    </div>
  );
};

export default Hero;
