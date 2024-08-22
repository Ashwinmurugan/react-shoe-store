import React from "react";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg != imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    // Dynamic classname for seleted image to have border
    <div
      className={`border-2 rounded-xl
    ${bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"}
    cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
        <div className="flex justify-center items-center bg-card bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img src={imgURL.thumbnail} alt="shoe collections"
            width={127}
            height={105}
            className="object-contain" />
        </div>
    </div>
  );
};

export default ShoeCard;
