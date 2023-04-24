import React from "react";
import backOfCard from "./back.png";
import useFlip from "./Hooks/useFlip";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  // const [isFacingUp, setIsFacingUp] = useState(true);
  const [isFacingUp, tooggleFace] = useFlip()
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={tooggleFace}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
