import { useState } from "react";
import LoginEmail from "./pages/loginEmail/loginEmail";
import RequestOtp from "./pages/requestOtp/requestOtp.";

function App() {
  const [emailCompleted, setEmailComplete] = useState(false);
  const onEmailComplete = () => {
    setEmailComplete(true);
  };
  console.log("app email c", emailCompleted);
  return (
    <div>
      {emailCompleted ? (
        <RequestOtp />
      ) : (
        // <LoginEmail onEmailComplete={onEmailComplete} />
        <RequestOtp />
      )}
    </div>
  );
}

export default App;
