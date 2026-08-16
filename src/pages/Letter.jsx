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
                                Happy Birthday Idiot✨
                            </p>

                             <p>
                                I hope this birthday brings you lots of
                                happiness, good memories and everything
                                you've been wishing for.
                            </p>


                            {/* <p>
                                I don't really know where to start
                                because there are so many things I
                                wanted to say but it's hard to put them into words.
                            </p> */}

                            <p>
                                I just want you to know
                                how happy I'm that I got to meet you
                                and share so many good moments with you.
                            </p>

                            <p>
                               Sometimes I think the universe somehow knew that we were meant to cross paths
                               and I'm really glad it did. ✨
                            </p>

                            <p>
                                Hopefully if your universe allows it, we could create
                                many more memories together in future.
                            </p>

                            <p className="final-line">   
                               Remember, as long as I exist, you will always be loved. 
                               <br></br>
                               No matter where life takes us, you'll always have a special place in my
                                little universe. 🩵🌌
                                <br></br>
                                Happy Birthday once again,<del>My</del> Idiot. ✨🩵
                            </p>

                        </div>

                        <div className="signature">

                            {/* <p>
                                With love,
                            </p> */}

                            <h2>
                                -San : )✍️
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