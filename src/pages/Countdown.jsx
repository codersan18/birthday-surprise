import CountdownTimer from "../components/CountdownTimer";
import "../index.css";

export default function Countdown() {
  return (
    <div className="container">
      <div className="card">

      <h1 className="title">
            <span>💙</span>
            <span>A Little Surprise For You</span>
            <span>💙</span>
            </h1>

        <p className="subtitle">
          Every second brings me closer to celebrating the most
          favorite person in my life : )    
        </p>

        <CountdownTimer />

        <div className="footer">
          Crafted especially for you
        </div>

      </div>
    </div>
  );
}