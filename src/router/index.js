import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "../pages/Explore/Explore";
import Detail from "../pages/Detail/Detail";
import Favorite from "../pages/Favorite/Favorite";
import Home from "../pages/Layout";
import Swap from "../pages/Swap/Swap";
import Setting from "../pages/Setting/Setting";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Explore />} />
          <Route path="explore" element={<Explore />} />
          <Route path="detail" element={<Detail />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="swap" element={<Swap />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
