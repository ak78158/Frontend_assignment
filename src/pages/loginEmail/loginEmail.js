import { useState } from "react";
import mainLogo from "../../assets/images/digio_logo.jpg";
import genericLogo from "../../assets/images/generic-logo-hi.png";
import "./loginEmail.scss";
const LoginEmail = ({ onEmailComplete }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleEmailChange = (e) => {
    if (!isValidEmail(e.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "") {
      onEmailComplete();
    } else {
      setError("Please enter your Email");
    }
  };
  return (
    <div className="mainContainer">
      <div className="headerContainer">
        <div className="headerText">
          <span>Sign document using</span>
          <span>sanket@digio.in</span>
        </div>
        <img src={genericLogo} alt="digio" className="genericLogo" />
      </div>
      <div>
        <div className="loginGoogle">
          <div className="googleText">
            <div>sanket@digio.in use gmail?</div>
            <div>login using google</div>
          </div>
          <button className="gplusbutton">g+ Google</button>
        </div>
        <div className="or">
          <h2>
            <span>OR</span>
          </h2>
        </div>
        <form className="emailInputFrom" onSubmit={handleSubmit}>
          <div>Proceed with your email address</div>
          <input
            type="email"
            className="emailInput"
            value={email}
            onChange={handleEmailChange}
          />
          {error && <h3 style={{ color: "red" }}>{error}</h3>}
          <div className="normalText">
            <span>
              By continuing. I confirm to the Terms and Services and privacy
              policies of digio.in
            </span>
          </div>
          <button className="continueBtn" type="submit">
            Continue
          </button>
        </form>
      </div>
      <hr />
      <div className="emailFooter">
        <div className="footerLeft">
          <img src={mainLogo} alt="digio" className="mainLogo" />
          <div>
            <div>Powered By</div>
            <div>Digio.in</div>
          </div>
        </div>
        <div className="footerRight">
          <span>1/3 step</span>
        </div>
      </div>
    </div>
  );
};

export default LoginEmail;
