import { useRef, useState } from "react";
import "./Register.scss";

const Register = () => {
    const [email, setEmail] = useState<string>();
    const [, setPassword] = useState<string>();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleStart = () => {
        if (!emailRef.current) return;
        setEmail(emailRef.current.value);
    };

    const handleFinish = () => {
        if (!passwordRef.current) return;
        setPassword(passwordRef.current.value);
    };

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src="src/assets/netflix-logo.svg" alt="" />
                    <button className="login-button">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Starts at $5.99. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                {!email ? (
                    <div className="input">
                        <input type="email" placeholder="Email address" ref={emailRef} />
                        <button className="register-button" onClick={handleStart}>
                            <span>Get Started</span>
                            <span className="icon">&#8963;</span>
                        </button>
                    </div>
                ) : (
                    <form className="input">
                        <input type="password" placeholder="Password" ref={passwordRef} />
                        <button className="register-button" onClick={handleFinish}>
                            Finish
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Register;