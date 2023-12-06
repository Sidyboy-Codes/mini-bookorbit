"use client"

import { useState } from "react";

const AddBtns = ({props}) => {
    const [isDisabled, setIsDisabled] = useState(false);
    

  const handleClick = () => {
    setIsDisabled(true);
    // Add your other logic here
  };
  return (
    <div className="add_btns">
      <button className="add_to_cart_btn">Add to cart</button>
      <button className="add_to_wish_btn" disabled={isDisabled} onClick={handleClick} >
        + Wish list
      </button>
    </div>
  );
};

export default AddBtns;
