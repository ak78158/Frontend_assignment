import { useState } from "react";
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
        // <LoginEmail onEmailComplete={onEmailComplete} />
        <RequestOtp />
      )}
    </div>
  );
}

export default App;
