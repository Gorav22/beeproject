import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
import SubmitData from "./pages/SubmitData";
import ShowData from "./pages/ShowData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SubmitData />} />
        <Route path="/show" element={<ShowData />} />
      </Routes>
    </Router>
  );
}

export default App;