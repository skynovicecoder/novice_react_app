import './App.css';
import InputTypeComponent from './components/InputTypeComponent';
import Counter from './components/CounterComponent';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav style={{ margin: "10px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/input-type" style={{ marginRight: "10px" }}>InputTypeComponent</Link>
        <Link to="/counter" style={{ marginRight: "10px" }}>Countersss</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/input-type" element={<InputTypeComponent />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;
