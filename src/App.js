import { useState } from "react";
import RequestOtp from "./pages/requestOtp/requestOtp.";

function App() {
  const [emailCompleted, setEmailComplete] = useState(false);

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
