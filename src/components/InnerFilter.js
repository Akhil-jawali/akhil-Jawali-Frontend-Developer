import React from "react";
export default function InnerFilter() {
  const filtersname = [
    {
      name: "Sort",
      classname: "text-sm fa-solid fa-arrow-up-a-z",
    },
    {
      name: "Rating",
      classname: "text-sm fa-solid fa-star text-yellow-300",
    },
    {
      name: "PureVeg",
      classname: "text-sm fa-solid fa-leaf text-green-500",
    },
    {
      name: "Offer",
      classname: "text-sm fa-solid fa-receipt text-orange-500",
    },
  ];

  return (
      <>
        {filtersname.map((element, index) => (
          <button
            key={index}
            className="rounded-full text-base font-normal border px-3 py-1 flex items-center gap-x-2 hover:shadow"
          >
            {element.name}
            <i className={element.classname}></i>
          </button>
        ))}
      </>
  );
}
