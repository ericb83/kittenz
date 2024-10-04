import React from "react";

const KittenCard = ({
  kitten,
  cardOne,
  setCardOne,
  cardTwo,
  setCardTwo,
  solvedKittensArray,
  setSolvedKittensArray,
}) => {
  const handleClick = () => {
    if (cardOne === null) {
      setCardOne(kitten);
      return;
    }
    if (cardTwo === null) {
      setCardTwo(kitten);
      return;
    }
  };

  return (
    <div className="flex h-80 w-80 items-center justify-center bg-secondary rounded-lg">
      {/*Click Me*/}
      <img src={kitten.url} className="object-cover w-full h-full rounded-lg" />
    </div>
  );
};

export default KittenCard;
