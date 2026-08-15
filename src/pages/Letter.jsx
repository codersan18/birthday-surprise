import { useState } from "react";
import "../css/Letter.css";

function Letter() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="letter-page">

            <div className="letter-card">

                {!isOpen ? (
                    <div className="envelope-section">

                        <div className="letter-icon">
                            💌
                        </div>

                        <p className="small-text">
                            One more thing for you...
                        </p>

                        <h1>
                            A Little Letter
                        </h1>

                        <p className="intro-text">
                            I wanted to write something just for you.
                        </p>

                        <button
                            className="open-letter-btn"
                            onClick={() => setIsOpen(true)}
                        >
                            Open My Letter 💌
                        </button>

                    </div>
                ) : (

                    <div className="letter-content">

                        <div className="letter-top">
                            💌
                        </div>

                        {/* <p className="letter-date">
                            On your special day
                        </p> */}

                        {/* <h1>
                            Dear You ❤️
                        </h1> */}

                        <div className="letter-body">

                            <p>
                                Happy Birthday! 🎂
                            </p>

                            <p>
                                I don't really know where to start,
                                because there are so many things I
                                could say.
                            </p>

                            <p>
                                But today, I just want you to know
                                how happy I am that I got to meet you
                                and share so many good moments with you.
                            </p>

                            <p>
                                From the random conversations to the
                                silly moments, the laughs, the little
                                arguments and everything in between —
                                every moment has become a part of our story.
                            </p>

                            <p>
                                I hope this birthday brings you lots of
                                happiness, good memories and everything
                                you've been wishing for.
                            </p>

                            <p>
                                And hopefully, we get to create
                                many more memories together.
                            </p>

                            <p className="final-line">
                                Stay the same amazing person you are. ❤️
                            </p>

                        </div>

                        <div className="signature">

                            {/* <p>
                                With love,
                            </p> */}

                            <h2>
                                -San ✍️
                            </h2>

                        </div>

                        <button
                            className="back-memories-btn"
                            onClick={() => setIsOpen(false)}
                        >
                            Close Letter
                        </button>

                    </div>

                )}

            </div>

        </div>
    );
}

export default Letter;