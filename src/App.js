import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
