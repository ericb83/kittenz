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
    <button
      onClick={handleClick}
      disabled={cardOne && cardTwo}
      className="flex h-80 w-80 items-center justify-center bg-secondary rounded-lg"
    >
      <p
        className={`${
          (cardOne === kitten ||
            cardTwo === kitten ||
            solvedKittensArray.includes(kitten.url)) &&
          "hidden"
        }`}
      >
        Click me
      </p>
      <img
        className={`${
          cardOne != kitten &&
          cardTwo != kitten &&
          !solvedKittensArray.includes(kitten.url) &&
          "hidden"
        } object-cover w-full h-full rounded-lg`}
        src={kitten.url}
      />
    </button>
  );
};

export default KittenCard;
