import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Music.css";

import birthdayMusic from "../assets/music/Azhage.mp3";
import SanCover from "../assets/images/San.jpeg";

export default function Music() {
    const navigate = useNavigate();
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.75);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        // Set the volume right before playing
        audio.volume = volume;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play()
                .then(() => setIsPlaying(true))
                .catch((err) => console.log("Playback failed:", err));
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    return (
        <div className="music-page">
            <audio
                ref={audioRef}
                src={birthdayMusic}
                loop
                preload="auto"
            />

            {/* Floating Notes */}
            <div className="music-note note-1">♫</div>
            <div className="music-note note-2">♪</div>
            <div className="music-note note-3">♫</div>
            <div className="music-note note-4">♬</div>

            <div className="music-card">
                <button 
                    className="back-button"
                    onClick={() => navigate("/home")}
                >
                    ← Back
                </button>

                {/* Album Cover */}
                <div className="album-wrapper">
                    <div className="album-glow"></div>
                    <div className="media-container">
                        {SanCover ? (
                            <div className="album-image-frame">
                                <img src={SanCover} alt="Song Cover" />
                            </div>
                        ) : (
                            <div className="vinyl-disc">
                                <div className="vinyl-grooves"></div>
                                <div className="vinyl-label">
                                    <span>🎂</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Animated Sound Wave Bars */}
                <div className={`sound-waves ${isPlaying ? "active" : ""}`}>
                    <span></span><span></span><span></span><span></span><span></span>
                </div>

                <div className="song-info">
                    <h1 className="song-title">Azhage</h1>
                    <h2 className="song-subtitle">San</h2>
                </div>

                <div className="player-controls">
                    <button className="play-pause-btn" onClick={togglePlay}>
                        {isPlaying ? "⏸ Pause Song" : "▶ Play Song"}
                    </button>
                </div>

                <div className="volume-control">
                    <span className="vol-icon">🔊</span>
                    <input 
                        type="range" 
                        min="0" 
                        max="1" 
                        step="0.01" 
                        value={volume} 
                        onChange={handleVolumeChange}
                    />
                </div>

                <br />

                 <h6 className="song-subtitle">Note : Wear headphones for the best experience!</h6>
            </div>
        </div>
    );
}