import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
