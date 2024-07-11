import React, { useState } from "react";
import InnerFilter from "./InnerFilter";
import Modal from "react-modal";

const FilterPart = ({ setSelectedArea }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      borderRadius: "10px",
      border: "2px solid #ccc",
      width: "90%",
      maxWidth: "600px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  const [selectedArea, setSelectedAreaState] = useState("indian");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleAreaChange = (event) => {
    const area = event.target.value;
    setSelectedAreaState(area);
    setSelectedArea(area); // Assuming this is a prop function to set the selected area in a parent component
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const showDifferentFilter = (id1, id2, id3, id4, id5) => {
    if (id1 === "area") {
      document.getElementById(id2).classList.remove("bg-orange-500", "text-white");
      document.getElementById(id3).classList.remove("bg-orange-500", "text-white");
      document.getElementById(id4).classList.remove("bg-orange-500", "text-white");
      document.getElementById(id5).classList.remove("bg-orange-500", "text-white");
      document.getElementById(id1).classList.add("text-white", "bg-orange-500");
      document.getElementById("displayNothing").classList.add("hidden");
      document.getElementById("displayLocations").classList.remove("hidden");
    } else {
      document.getElementById(id2).classList.remove("bg-orange-500", "text-white");
      document.getElementById(id3).classList.remove("bg-orange-500", "text-white");
      document.getElementById(id4).classList.remove("bg-orange-500", "text-white");
      document.getElementById(id5).classList.remove("bg-orange-500", "text-white");
      document.getElementById(id1).classList.add("bg-orange-500", "text-white");
      document.getElementById("displayLocations").classList.add("hidden");
      document.getElementById("displayNothing").classList.remove("hidden");
    }
  };

  return (
    <div className="md:px-20 px-7 py-3">
      <div className="pb-5">
        <p className="text-xl font-bold">
          Restaurants with online food delivery in Kalaburagi
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4 pb-5 md:pl-5">
        <button
          onClick={openModal}
          className="rounded-full text-base font-normal border px-3 py-1 flex items-center gap-x-2 hover:shadow"
        >
          Filter
          <i className="text-sm fa-solid fa-sliders"></i>
        </button>
        <InnerFilter />
      </div>

      {/* MODAL */}
      <div className="md:w-1/2">
        <Modal
          style={customStyles}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <div className="">
            <div className="h-full" id="filterByArea">
              <div className="flex items-center justify-between py-1 px-3">
                <p className="text-2xl font-semibold text-gray-600">Filters</p>
                <button
                  onClick={closeModal}
                  className="text-4xl text-gray-300 font-semibold hover:text-orange-500"
                >
                  &times;
                </button>
              </div>
              <div className="grid md:grid-cols-4 grid-cols-7 w-full h-full">
                <div className="md:col-span-1 col-span-3">
                  <div className="h-full">
                    <div
                      className="bg-orange-500 border-b border-r border-t text-white inActive flex justify-center"
                      id="area"
                      onClick={() => showDifferentFilter("area", "rating", "veg", "offer", "price")}
                    >
                      <span className="py-2 md:text-lg text-sm font-normal">
                        Area
                      </span>
                    </div>
                    <div
                      className="border-b border-r inActive flex justify-center"
                      id="rating"
                      onClick={() => showDifferentFilter("rating", "area", "veg", "offer", "price")}
                    >
                      <span className="py-2 md:text-lg text-sm font-normal">
                        Rating
                      </span>
                    </div>
                    <div
                      className="border-b border-r inActive flex justify-center"
                      id="veg"
                      onClick={() => showDifferentFilter("veg", "area", "rating", "offer", "price")}
                    >
                      <span className="py-2 md:text-lg text-sm font-normal">
                        Veg/Non-Veg
                      </span>
                    </div>
                    <div
                      className="border-b border-r inActive flex justify-center"
                      id="offer"
                      onClick={() => showDifferentFilter("offer", "area", "rating", "veg", "price")}
                    >
                      <span className="py-2 md:text-lg text-sm font-normal">
                        Offers
                      </span>
                    </div>
                    <div
                      className="border-r flex inActive justify-center"
                      id="price"
                      onClick={() => showDifferentFilter("price", "area", "rating", "veg", "offer")}
                    >
                      <span className="py-2 md:text-lg text-sm font-normal">
                        Pricing
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3 col-span-4 border-t w-full">
                  <div id="displayLocations">
                    <p className="text-base font-medium md:pl-5 pl-2 pt-3">
                      Filter By Area
                    </p>
                    <div className="flex flex-col justify-center md:pl-10 pl-5 gap-3 pt-4">
                      <div className="flex gap-x-2 items-center">
                        <input
                          onClick={handleAreaChange}
                          type="radio"
                          value="indian"
                          className="areaName"
                          id="india"
                          checked={selectedArea === "indian"}
                          name="area"
                        />
                        <label
                          className="md:text-lg text-base font-medium "
                          htmlFor="india"
                        >
                          India
                        </label>
                      </div>
                      <div className="flex gap-x-2 items-center">
                        <input
                          onClick={handleAreaChange}
                          type="radio"
                          value="chinese"
                          className="areaName"
                          id="china"
                          checked={selectedArea === "chinese"}
                          name="area"
                        />
                        <label
                          className="md:text-lg text-base font-medium "
                          htmlFor="china"
                        >
                          China
                        </label>
                      </div>
                      <div className="flex gap-x-2 items-center">
                        <input
                          onClick={handleAreaChange}
                          type="radio"
                          value="american"
                          className="areaName"
                          id="america"
                          checked={selectedArea === "american"}
                          name="area"
                        />
                        <label
                          className="md:text-lg text-base font-medium "
                          htmlFor="america"
                        >
                          America
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    id="displayNothing"
                    className="flex hidden items-center justify-center"
                  >
                    <p className="md:text-3xl text-gray-300 font-medium pt-20">
                      Sorry, No filter available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default FilterPart;
