import LoginForm from "../components/LoginForm";
import "../css/Login.css";

export default function Login() {
    return (
        <div className="login-container">

            <div className="login-card">

                <div className="login-heart">
                    💙
                </div>

                <h1>Welcome ❤️</h1>

                <p>
                    This little surprise has been waiting
                    just for you.
                </p>

                <LoginForm />

                <span className="made">
                    Made with ❤️ by Santhosh
                </span>

            </div>

        </div>
    );
}