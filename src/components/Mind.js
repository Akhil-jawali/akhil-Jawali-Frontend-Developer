import React from "react";
import biryani from "../assets/img/biryani.png";
import burger from "../assets/img/burger.png";
import pizza from "../assets/img/pizza.png";
import cake from "../assets/img/cake.png";
import samosa from "../assets/img/samosa.png";
import noodles from "../assets/img/noodles.png";
import dosa from "../assets/img/dosa.png";

const Mind = () => {
  const foodList = [
    {
      dish: biryani,
      name: "biryani",
    },
    {
      dish: burger,
      name: "burger",
    },
    {
      dish: pizza,
      name: "pizza",
    },
    {
      dish: cake,
      name: "cake",
    },
    {
      dish: samosa,
      name: "samosa",
    },
    {
      dish: noodles,
      name: "noodles",
    },
    {
      dish: dosa,
      name: "dosa",
    },
  ];

  return (
    <div>
      {/* WHATS ON YOUR MIND */}
      <div className="py-5 md:px-20 px-7">
        <p className="text-2xl font-bold">What's on your mind ?</p>
        <div className="py-5 flex items-center justify-between md:gap-x-10 gap-x-5 w-full md:overflow-x-hidden overflow-x-scroll scrollBar">
          {foodList.map((element, index) => (
            <div className="flex flex-col items-center gap-3 " role="button" key={index}>
              <img src={element.dish}  className="mindImg"/>
              <p className="text-xl font-medium capitalize">{element.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mind;
