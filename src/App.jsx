import { BrowserRouter, Routes, Route } from "react-router-dom";

import Countdown from "./pages/Countdown";
import Login from "./pages/Login";
import Home from "./pages/Home";
// import Memories from "./pages/Memories";
// import Letter from "./pages/Letter";
// import Final from "./pages/Final";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countdown />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/memories" element={<Memories />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/final" element={<Final />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;