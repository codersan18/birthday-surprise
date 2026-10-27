import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";

import birthdayMusic from "../assets/music/happybirthdaytheme.mp3";

export default function Home() {
    const navigate = useNavigate();
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;

        if (audio) {
            audio.volume = 0.5;

            audio.play().catch(() => {
                console.log("Browser blocked autoplay.");
            });
        }
    }, []);

    return (
        <div className="birthday-page">

            {/* Background Music */}
            <audio
                ref={audioRef}
                src={birthdayMusic}
                loop
                preload="auto"
            />

            {/* Floating hearts */}
            <div className="heart heart-1">🩵</div>
            <div className="heart heart-2">🩵</div>
            <div className="heart heart-3">🩵</div>
            <div className="heart heart-4">🩵</div>
            <div className="heart heart-5">🩵</div>
            <div className="heart heart-6">🩵</div>

            <div className="birthday-card">

                {/* Top Actions (Letter & Music) */}
                <div className="top-actions">
                    <button
                        className="birthday-letter-icon"
                        onClick={() => navigate("/letter")}
                        aria-label="Open your letter"
                    >
                        💌
                    </button>

                    <span className="letter-sparkle sparkle-one">
                        ✦
                    </span>

                    <span className="letter-sparkle sparkle-two">
                        ✦
                    </span>

                    <button
                        className="birthday-music-icon"
                        onClick={() => navigate("/music")}
                        aria-label="Play your song"
                        title="A song for you"
                    >
                        🎵
                    </button>
                </div>

                <div className="cake">
                    🎂
                </div>

                <h1>
                    Happy Birthday
                </h1>

                <h2>
                    🩵 Idiot 🩵
                </h2>

                <div className="divider">
                    ✨✨✨✨
                </div>

                <p className="birthday-message">
                    Happy Birthday to the most special person
                    in my life.
                </p>

                <p className="birthday-message">
                    I hope your day is filled with happiness,
                    beautiful moments, and lots of smiles.
                </p>

                <p className="birthday-message">
                    You deserve all the happiness in the world.
                </p>

                <button
                    className="memory-button"
                    onClick={() => navigate("/memories")}
                >
                    Visit Gallery 📸
                </button>

                <p className="signature">
                    Made with 🩵 by San
                </p>

            </div>
        </div>
    );
}