import { useEffect, useState } from "react";
import "./requestOtp.scss";
import aadharLogo from "../../assets/images/1200px-Aadhaar_Logo.svg.png";
const RequestOtp = () => {
  const [showModal, setShowModal] = useState(false);
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [isAadhaarNumberValid, setIsAadhaarNumberValid] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [otp, setOTP] = useState("");
  const [isOTPValid, setIsOTPValid] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [label, setLabel] = useState("Request Otp");
  const [isIntervalActive, setIsIntervalActive] = useState(false);
  const [updateCount, setUpdateCount] = useState(0);
  const handleAadhaarNumberChange = (event) => {
    setAadhaarNumber(event.target.value);
  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  function handleTitleChange() {
    setIsIntervalActive(true);
  }

  const handleCheckAadhaarNumber = () => {
    const regex = /^\d{12}$/;
    const isValid = regex.test(aadhaarNumber);

    setIsAadhaarNumberValid(isValid);

    if (isValid) {
    } else {
      alert("Please enter a valid 12-digit Aadhaar number");
    }
  };

  const handleOTPChange = (event) => {
    setOTP(event.target.value);
  };

  const handleButtonClick = () => {
    const otpValue = otp.replace(/\D/g, "");

    if (otpValue.length === 4 && isChecked && isAadhaarNumberValid) {
      setIsOTPValid(true);
      setShowModal(false);
      handleTitleChange();
    } else {
      if (!isAadhaarNumberValid) setIsAadhaarNumberValid(false);
      if (!isChecked) setIsChecked(false);

      if (otpValue.length !== 4) setIsOTPValid(false);
    }

    setIsButtonClicked(true);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleModalClick = (event) => {
    if (event.target.classList.contains("modal")) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    let intervalId;
    if (isIntervalActive && updateCount < 2) {
      intervalId = setInterval(() => {
        setLabel((prevLabel) => {
          if (updateCount === 0) {
            return `Signing....`;
          } else {
            return `Signed In`;
          }
        });
        setUpdateCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isIntervalActive, updateCount]);

  return (
    <div className="mainContainer">
      <div className="otpContainer">
        <div className="otpHeader">
          <div className="headingMain">
            <label>{label}</label>
          </div>
          <div className="headingSecondary">Mutual Nondisclosure Agreement</div>
        </div>
      </div>
      <iframe
        title="samplePdf"
        src="https://www.africau.edu/images/default/sample.pdf"
        width="100%"
        height="500px"
      ></iframe>
      <button className="continueBtn" type="submit" onClick={handleClick}>
        Request OTP to Sign
      </button>
      {showModal && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <div className="modal-div">
              <div className="aadharHeader">Register Aadhar</div>
              <hr></hr>
              <div className="">
                <div className="aadharWithInput">
                  <img src={aadharLogo} alt="aadhar" className="aadharLogo" />
                  <input
                    type="tel"
                    id="aadhaar-number-input"
                    value={aadhaarNumber}
                    onChange={handleAadhaarNumberChange}
                    maxLength={12}
                  />
                  <button onClick={handleCheckAadhaarNumber}>Verify</button>
                </div>
                {!isAadhaarNumberValid && (
                  <span style={{ color: "red" }}>
                    Please enter a valid 12-digit Aadhaar number
                  </span>
                )}
              </div>
              <div className="checkboxWithLable">
                <input
                  type="checkbox"
                  id="checkbox-with-text"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="checkbox-with-text">
                  I agree to e-sign this KYC-Doc to get started
                </label>
                {!isChecked && (
                  <span style={{ color: "red" }}>Please check this box </span>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  id="otp-input"
                  value={otp}
                  onChange={handleOTPChange}
                  maxLength={4}
                  className="otpInput"
                />
                {isButtonClicked && !isOTPValid && (
                  <span style={{ color: "red" }}>
                    Please enter a valid 4-digit OTP
                  </span>
                )}
                {isButtonClicked && isOTPValid && (
                  <span style={{ color: "green" }}>Valid OTP</span>
                )}
                <button onClick={handleButtonClick}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestOtp;
