import './App.css';
import InputTypeComponent from './components/InputTypeComponent';
import Counter from './components/CounterComponent';
import ToDoList from './components/ToDoListComponent';
import InputFocus from './components/InputFocusUseRefComponent';
import ReRenderUseRef from './components/ReRenderUsingRefComponent';
import UseMemoFunction from './components/UseMemoComponent';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav style={{ margin: "10px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/input-type" style={{ marginRight: "10px" }}>InputTypeComponent</Link>
        <Link to="/counter" style={{ marginRight: "10px" }}>Countersss</Link>
        <Link to="/update-to-do" style={{ marginRight: "10px" }}>Update To Do List</Link>
        <Link to="/use-ref" style={{ marginRight: "10px" }}>Use-Ref Focus</Link>
        <Link to="/use-ref-re-render" style={{ marginRight: "10px" }}>Use-Ref ReRender</Link>
        <Link to="/use-memo" style={{ marginRight: "10px"}}>Use-Memo</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/input-type" element={<InputTypeComponent />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/update-to-do" element={<ToDoList />} />
        <Route path="/use-ref" element={<InputFocus />} />
        <Route path="/use-ref-re-render" element={<ReRenderUseRef />} />
        <Route path="/use-memo" element={< UseMemoFunction />} />
      </Routes>
    </Router>
  );
}

export default App;
