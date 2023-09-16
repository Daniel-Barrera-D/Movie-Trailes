import Movie from "../Movie/Movie";
import { motion } from "framer-motion";
import './slider.css';
import { useEffect, useRef, useState } from "react";

const Slider = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return(
        <motion.div ref={carousel} className="slider-container">
            <motion.div className="slider" drag='x' dragConstraints={{ right: 0, left: -width }}>
                {/* Aqui se hace el map */}
                    <Movie/>
                    <Movie/>
                    <Movie/>
                    <Movie/>
                    <Movie/>
            </motion.div>
        </motion.div>
    )
}

export default Slider;