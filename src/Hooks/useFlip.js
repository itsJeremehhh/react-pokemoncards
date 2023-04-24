import React, {useState} from "react";

    const useFlip = () => {
        const [flipCard, setFlipCard] = useState(true)
        const setIsFacingUp = () => {
        setFlipCard(isUp => !isUp);
        }
        return [flipCard, setIsFacingUp];
}

export default useFlip;