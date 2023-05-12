import { useState } from "react";
import LoginEmail from "./pages/loginEmail/loginEmail";
import RequestOtp from "./pages/requestOtp/requestOtp.";

function App() {
  const [emailCompleted, setEmailComplete] = useState(false);
  const onEmailComplete = () => {
    setEmailComplete(true);
  };
  return (
    <div>
      {emailCompleted ? (
        <RequestOtp />
      ) : (
        <LoginEmail onEmailComplete={onEmailComplete} />
      )}
    </div>
  );
}

export default App;
