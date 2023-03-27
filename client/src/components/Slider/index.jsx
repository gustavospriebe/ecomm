import { useState, useEffect, useRef } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { SliderComponent } from "./styles";

const delay = 6000;
const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

export function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();

        timeoutRef.current = setTimeout(
            () => setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1),
            delay
        );
        return () => {
            resetTimeout();
        };
    }, [currentSlide]);

    function prevSlide() {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    }

    function nextSlide() {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    }

    return (
        <SliderComponent>
            <div
                className="container"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map((slide, index) => (
                    <img src={slide} key={index} alt="photo" />
                ))}
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>
        </SliderComponent>
    );
}
