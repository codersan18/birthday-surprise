import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CountdownTimer() {

    const navigate = useNavigate();

    const birthday = new Date("2026-11-01T00:00:00");

    const getTimeRemaining = () => {

        const diff = birthday - new Date();

        if (diff <= 0) {

            navigate("/login");

            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return {

            days: Math.floor(diff / (1000 * 60 * 60 * 24)),

            hours: Math.floor(
                (diff / (1000 * 60 * 60)) % 24
            ),

            minutes: Math.floor(
                (diff / (1000 * 60)) % 60
            ),

            seconds: Math.floor(
                (diff / 1000) % 60
            ),
        };
    };

    const [time, setTime] = useState(getTimeRemaining());

    useEffect(() => {

        const interval = setInterval(() => {

            setTime(getTimeRemaining());

        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return (

        <div className="timer">

            <TimeBox
                value={time.days}
                label="Days"
            />

            <TimeBox
                value={time.hours}
                label="Hours"
            />

            <TimeBox
                value={time.minutes}
                label="Minutes"
            />

            <TimeBox
                value={time.seconds}
                label="Seconds"
            />

        </div>

    );

}

function TimeBox({ value, label }) {

    return (

        <div className="box">

            <h2>
                {String(value).padStart(2, "0")}
            </h2>

            <p>
                {label}
            </p>

        </div>

    );

}