/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
"use client";

import { useState } from "react";
import Card from "./card";

const Cards = ({ images }) => {
  const [cards, setCards] = useState(() => {
    const newCards = images.map((image, index) => ({
      id: index,
      imageUrl: image,
      isFlipped: false,
      isMatched: false,
    }));
    return newCards;
  });

  const handleCardMatch = (firstCard, secondCard) => {
    const isMatch = firstCard.imageUrl === secondCard.imageUrl;
    setTimeout(() => {
      setCards((prevCards) =>
        prevCards.map((card) => {
          if (isMatch && card.imageUrl === firstCard.imageUrl) {
            return { ...card, isMatched: true };
          }
          return { ...card, isFlipped: false };
        })
      );
    }, 800);
  };

  const handleClick = (card) => {
    if (card.isFlipped || card.isMatched) return;

    setCards((prevCards) => {
      const newCards = [...prevCards];
      newCards[card.id].isFlipped = true;

      const flippedCards = newCards.filter(
        (card) => card.isFlipped && !card.isMatched
      );
      const [firstCard, secondCard] = flippedCards;

      if (flippedCards.length === 2) {
        handleCardMatch(firstCard, secondCard);
      }
      return newCards;
    });
  };

  return (
    <div className="cards-container">
      {cards.map((singleCard) => (
        <Card key={singleCard.id} cardInfo={singleCard} onClick={handleClick} />
      ))}
    </div>
  );
};

export default Cards;
