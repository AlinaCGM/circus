
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Restaurant from './pages/restaurant/Restaurant';

function App() {
  return (
    <div className="App">
       <Router>
       <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/restaurant" element={<Restaurant/>} />
       </Routes>
       </Router>
      CIRCUS
    </div>
  );
}

export default App;
