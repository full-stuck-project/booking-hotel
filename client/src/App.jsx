import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { PriceFillter } from "./components/Fillters/PriceFillter/PriceFillter";
import { Fillters } from "./components/Fillters/Fillters/Fillters";
import { RatingFillter } from "./components/Fillters/RatingFillter/RatingFillter";
import { SignUp } from "./components/SignUp/SignUp";
import { SignIn } from "./components/SignIn/SignIn";
import { HotelCard } from "./components/HotelCard/HotelCard";
import Navbar from "./components/Navbar/NavBar";
import { Rooms } from "./components/Rooms/Rooms";
import { OrderConfirmationCard } from "./components/OrderConfirmationCard/OrderConfirmationCard";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confirm" element={<OrderConfirmationCard />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/cards" element={<HotelCard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pricefilter" element={<PriceFillter />} />
        <Route path="/filters" element={<Fillters />} />
        <Route path="/ratingfilter" element={<RatingFillter />} />
        {/* <Route path="/footer" element={<Footer />} /> */}
      </Routes>
    </div>
  );
}

export default App;
