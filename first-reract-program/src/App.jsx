import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import VideoClipper from "./Component/VideoClipper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <VideoClipper></VideoClipper>
    </div>
  );
}

export default App;
