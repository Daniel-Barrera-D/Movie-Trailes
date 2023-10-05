import React from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const Confeti = () => {
    const { width, height } = useWindowSize();
    return(
        <Confetti
            width={width-20}
            height={height-20} 
        />
    )
}

export default Confeti;