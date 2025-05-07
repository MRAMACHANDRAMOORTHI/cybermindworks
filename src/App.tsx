import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CreateJobPage } from "./pages/CreateJobPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-job" element={<CreateJobPage />} />
      </Routes>
    </Router>
  );
}

export default App;