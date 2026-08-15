import { useState } from "react";
import "../css/Memories.css";
import { useNavigate } from "react-router-dom";

import memory1 from "../assets/memories/glibliimage1.png";
import memory2 from "../assets/memories/glibliimage2.png";
import memory3 from "../assets/memories/glibliimage3.png";
import memory4 from "../assets/memories/glibliimage4.png";
import memory5 from "../assets/memories/glibliimage5.png";
import memory6 from "../assets/memories/glibliimage6.png";
import memory7 from "../assets/memories/glibliimage7.png";


const memories = [
    {
        image: memory1,
        title: "The beginning ❤️",
        message: "Look how it all started."
    },
    {
        image: memory2,
        title: "Just us",
        message: "One of those days we had a lot of fun."
    },
    {
        image: memory3,
        title: "Good times",
        message: "A simple moment, but definitely worth remembering."
    },
    {
        image: memory4,
        title: "Another one",
        message: "Adding another memory to our collection."
    },
    {
        image: memory5,
        title: "That day 💕",
        message: "Still one of the pictures I really like."
    },
    {
        image: memory6,
        title: "Good memories",
        message: "Some moments are just better when they're captured."
    },
    {
        image: memory7,
        title: "To be continued...",
        message: "This is just the beginning. More memories coming soon."
    }
];


function Memories() {

    const navigate = useNavigate();

    const [current, setCurrent] = useState(0);


    const nextMemory = () => {

        setCurrent((prev) =>
            prev === memories.length - 1
                ? 0
                : prev + 1
        );

    };


    const previousMemory = () => {

        setCurrent((prev) =>
            prev === 0
                ? memories.length - 1
                : prev - 1
        );

    };


    const selectMemory = (index) => {

        setCurrent(index);

    };


    const memory = memories[current];

    const isLastMemory =
        current === memories.length - 1;


    return (

        <div className="memories-page">


            {/* =========================
                Background Hearts
            ========================= */}

            <div className="memory-heart heart-one">
                ♥
            </div>

            <div className="memory-heart heart-two">
                ♥
            </div>

            <div className="memory-heart heart-three">
                ♥
            </div>

            <div className="memory-heart heart-four">
                ♥
            </div>


            {/* =========================
                Main Container
            ========================= */}

            <div className="memories-container">


                {/* =========================
                    Header
                ========================= */}

                <div className="memories-header">

                    <span>✨</span>

                    <h1>
                        Our Memories
                    </h1>

                    <span>✨</span>

                </div>


                {/* =========================
                    Photo Section
                ========================= */}

                <div className="memory-photo-wrapper">


                    {/* Previous */}

                    <button
                        className="arrow left-arrow"    
                        onClick={previousMemory}
                        aria-label="Previous memory"
                    >
                        ‹
                    </button>


                    {/* Image */}

                    <div className="memory-photo-container">

                        <img
                            key={memory.image}
                            src={memory.image}
                            alt={memory.title}
                            className="memory-photo"
                        />

                    </div>


                    {/* Next */}

                    <button
                        className="arrow right-arrow"
                        onClick={nextMemory}
                        aria-label="Next memory"
                    >
                        ›
                    </button>

                </div>


                {/* =========================
                    Memory Information
                ========================= */}

                <div
                    className={`memory-info ${
                        isLastMemory
                            ? "last-memory"
                            : ""
                    }`}
                >

                    {/* Number */}

                    <div className="memory-number">

                        {String(current + 1).padStart(2, "0")}

                        <span>
                            {" "} / {String(memories.length).padStart(2, "0")}
                        </span>

                    </div>


                    {/* Title */}

                    <h2>
                        {memory.title}
                    </h2>


                    {/* Message */}

                    <p>
                        {memory.message}
                    </p>

                </div>


                {/* =========================
                    Dots
                ========================= */}

                <div className="memory-dots">

                    {memories.map((_, index) => (

                        <button
                            key={index}
                            className={
                                current === index
                                    ? "dot active"
                                    : "dot"
                            }
                            onClick={() => selectMemory(index)}
                            aria-label={`View memory ${index + 1}`}
                        />

                    ))}

                </div>


                {/* =========================
                    Last Memory → Letter
                ========================= */}

                {isLastMemory && (

                    <div className="last-memory-section">

                        <div className="last-memory-line"></div>
                    </div>

                )}


            </div>

        </div>

    );

}


export default Memories;