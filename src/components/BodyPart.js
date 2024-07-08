import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";

const BodyPart = ({ selectedArea }) => {
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
      maxWidth: "700px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  const [areaData, setAreaData] = useState(null);
  const [specificDish, setSpecificDish] = useState(null);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (id) => {
    setModalIsOpen(true);
    specific(id);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSpecificDish(null); // Reset specificDish when closing modal
  };

  useEffect(() => {
    const getAreaDetails = () => {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedArea}`)
        .then((response) => setAreaData(response.data))
        .catch((error) => setError(error));
    };
    getAreaDetails();
  }, [selectedArea]);

  const specific = (id) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => setSpecificDish(response.data.meals[0]))
      .catch((error) => setError(error));
  };

  return (
    <div className="md:px-20 px-7">
      <div>
        <Modal
          style={customStyles}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <div>
            <div className="h-full" id="filterByArea">
              <div className="flex items-center justify-end py-1 px-3">
                <button
                  onClick={closeModal}
                  className="text-4xl text-gray-300 font-semibold hover:text-orange-500"
                >
                  &times;
                </button>
              </div>
              {specificDish ? (
                <div className="grid grid-cols-7 flex items-start gap-5 p-3">
                  <div className="md:col-span-3 col-span-7">
                    <div className="flex items-center justify-center">
                      <img
                        src={specificDish.strMealThumb} className="md:w-auto w-1/2"
                        alt={specificDish.strMeal}
                      />
                    </div>
                  </div>
                  <div className="md:col-span-4 col-span-7">
                    <div className="flex flex-col gap-y-1">
                      <p className="md:text-xl text-lg font-medium">
                        {specificDish.strMeal}
                      </p>
                      <p className="md:text-base text-xs font-normal">
                        It is
                        <span> {specificDish.strArea}</span> Dish
                      </p>
                      <p className="md:text-base text-xs font-normal">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                      </p>

                      {specificDish.strYoutube ? (
                        <p className="md:text-base text-xs font-normal">
                          <a href={specificDish.strYoutube} target="_blank" rel="noopener noreferrer" role="button" className="text-lg font-semibold text-blue-500">
                            Click here 
                          </a>  to watch the making of {specificDish.strMeal}
                        </p>
                      ) : (
                        <p className="md:text-base text-xs font-normal text-red-500">
                          Sorry, we don't have the YouTube video link
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </Modal>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 items-center gap-5">
        {areaData && areaData.meals ? (
          areaData.meals.map((meal) => (
            <a
              key={meal.idMeal}
              className="flex flex-col md:px-5 hover:px-7"
              onClick={() => openModal(meal.idMeal)}
            >
              <div className="relative">
                <img
                  className="rounded-xl w-full"
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                />
                <p className="text-white font-extrabold text-xl pl-2 absolute bottom-0">
                  50% OFF UPTO ₹200
                </p>
              </div>
              <div className="py-3 flex flex-col gap-y-1">
                <p className="text-lg font-bold foodItemName">{meal.strMeal}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-2">
                    <i className="fa-solid fa-star text-xs font-bold text-yellow-500" />
                    <p className="text-sm font-medium">4.2</p>
                  </div>
                  <p className="text-xs font-bold">{meal.idMeal}</p>
                </div>
                <p className="text-sm text-justify pr-7">
                  This is just a dummy data it has nothing to do with the above food item
                </p>
              </div>
            </a>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default BodyPart;
