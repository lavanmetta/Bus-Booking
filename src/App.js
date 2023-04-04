import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Register from "./components/Auth/Register/Register";
import Seat from "./components/SeatSelection/Seat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/booking" element={<Seat/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
