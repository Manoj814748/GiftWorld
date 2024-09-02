import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import Header from "./components/header";
import Sample from "./components/sample";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sample" element={<Sample />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
