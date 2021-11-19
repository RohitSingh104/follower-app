import React from "react";
import "./deleteFollower.css";

const DeleteFollowers = ({ list, checkedElement, listSetter }) => {
  const deleteSelectedElement = () => {
    const result = list.filter((currElement, index) => {
      return !checkedElement.includes(currElement.id);
    });
    listSetter(result);
  };

  const handleNext = () => {
    const result = list.filter((currElement, index) => {
      return checkedElement.includes(currElement.id);
    });
    listSetter(result);
  };

  return (
    <div className="deleteFollower">
      <div>
        <button onClick={deleteSelectedElement} className="button delete">
          Delete Selected
        </button>
      </div>
      <div>
        <button className="button next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default DeleteFollowers;
