import "./Login.scss";

const Login = () => {
    return (
        <form className="login">
            <div className="top">
                <img src="src/assets/netflix-logo.svg" alt="" />
            </div>
            <div className="login-container">
                <span className="sign-in">Sign In</span>
                <input type="email" placeholder="Email or mobile number" />
                <input type="password" placeholder="Password" />
                <button>Sign In</button>
                <span className="forgot-password">Forgot Password?</span>
                <div className="remember">
                    <input type="checkbox" id="rememberMe" name="rememberMe" value="rememberUser" />
                    <label htmlFor="rememberMe">Remember me</label>
                </div>
                <div className="sign-up">
                    <span className="new-user">New to Netflix? </span>
                    <span className="sign-up-link">Sign up now.</span>
                </div>
            </div>
        </form>
    );
};

export default Login;