import { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../data/users.json";

export default function LoginForm() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const login = (e) => {
    e.preventDefault();

    const user = users.find(
        (u) =>
            u.username === username &&
            u.password === password
    );

    if (user) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", user.username);
        navigate("/home");
    } else {
        setError("Wrong nickname or password 💔");
    }
};

    return (

        <form onSubmit={login} className="login-form">

            <input
                type="text"
                placeholder="Nickname"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
            />

            <input
                type="password"
                placeholder="Secret Word"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />

            {
                error &&
                <span className="error">
                    {error}
                </span>
            }

            <button>

                {
                    loading
                    ?
                    "Checking..."
                    :
                    "Unlock the Surprise"
                }

            </button>

        </form>

    );

}