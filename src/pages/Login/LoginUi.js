import "./LoginUi.css";
import profile from "../../image/userimg.png";
import user from "../../image/user.png";
import pass from "../../image/pass.png";

function LoginUi() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={user} alt="username" className="username" />
              <input type="text" placeholder="Username" className="name" />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="pass" />
              <input type="password" placeholder="Password" className="name" />
            </div>
            <div className="login-button">
              <button>Login</button>
            </div>

            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUi;
