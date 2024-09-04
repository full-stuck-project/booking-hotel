import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { PriceFillter } from "./components/Fillters/PriceFillter/PriceFillter";
import { Fillters } from "./components/Fillters/Fillters/Fillters";
import { RatingFillter } from "./components/Fillters/RatingFillter/RatingFillter";
import { SignUp } from "./components/SignUp/SignUp";
import { SignIn } from "./components/SignIn/SignIn";
import { SearchFilter } from "./components/Fillters/SearchFillter/SearchFillter";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<SearchFilter />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pricefilter" element={<PriceFillter />} />
        <Route path="/filters" element={<Fillters />} />
        <Route path="/ratingfilter" element={<RatingFillter />} />
      </Routes>
    </Router>
  );
}

export default App;
