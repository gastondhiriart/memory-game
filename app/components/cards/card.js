"use client";

import Image from "next/image";

const Card = ({ cardInfo, onClick }) => {
  const { id, imageUrl, isFlipped, isMatched } = cardInfo;
  const faceUp = isFlipped || isMatched;

  return (
    <button
      type="button"
      onClick={() => onClick(cardInfo)}
      className="card"
      disabled={isMatched}
    >
      {faceUp ? (
        <Image src={imageUrl} alt="Card Image" fill />
      ) : (
        <div id={id} className="card-cover" />
      )}
    </button>
  );
};
export default Card;
