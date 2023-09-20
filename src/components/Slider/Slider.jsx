import Movie from "../Movie/Movie";
import { motion } from "framer-motion";
import './slider.css';
import { useEffect, useRef, useState } from "react";

const Slider = (props) => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    const { movies, color } = props;

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return(
            <motion.div ref={carousel} className="slider-container">
            <motion.div className="slider" drag='x' dragConstraints={{ right: 0, left: -width }}>
                    {
                        movies.map((movie, index) => <Movie
                            data={ movie }
                            key={index}
                            color={color}
                        />)
                    }
            </motion.div>
        </motion.div>
    )
}

export default Slider;