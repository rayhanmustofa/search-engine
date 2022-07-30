import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import ViewFavourites from "./views/ViewFavourites";
import ViewHome from "./views/ViewHome";
import ViewImageSearch from "./views/ViewImageSearch";
import ViewNewsSearch from "./views/ViewNewsSearch";
import ViewNormalSearch from "./views/ViewNormalSearch";



export default function App() {
  return (
    <div>
      <ViewHome />

      <div className="">
        <Routes>
          <Route path="/" element={<span />} />
          <Route path="/normal" element={<ViewNormalSearch />} />
          <Route path="/image" element={<ViewImageSearch />} />
          <Route path="/news" element={<ViewNewsSearch />} />
        </Routes>

      </div>
    </div>


  )
}

