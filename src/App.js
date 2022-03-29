import './App.css';
import Dashboard from './Dashboard';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Redirect } from "react-router"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="*"
            element={<Navigate to="/dashboard" replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;
