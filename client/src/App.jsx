import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { PriceFillter } from "./components/Fillters/PriceFillter/PriceFillter";
import { Fillters } from "./components/Fillters/Fillters/Fillters";
import { RatingFillter } from "./components/Fillters/RatingFillter/RatingFillter";
import { SignUp } from "./components/SignUp/SignUp";
import { SignIn } from "./components/SignIn/SignIn";
import { SearchFilter } from "./components/Fillters/SearchFillter/SearchFillter";
import { Footer } from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import { HotelPage } from "./user/pages/HotelPage/HotelPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pricefilter" element={<PriceFillter />} />
        <Route path="/filters" element={<Fillters />} />
        <Route path="/ratingfilter" element={<RatingFillter />} />
        <Route path="/hotelpage" element={<HotelPage />} />
        {/* <Route path="/footer" element={<Footer />} /> */}
      </Routes>
    </div>
  );
}

export default App;
