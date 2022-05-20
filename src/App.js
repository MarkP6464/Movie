import "./App.css";
import Header from "./Components/Header/Header";
import "./output.css";
import { Routes, Route, Link } from "react-router-dom";
import darkPic from "./imgs/bg-dark.png";
import lightPic from "./imgs/bg-light.png";
import Body from "./Components/Body/Body";
import { useEffect, useState } from "react";
import Home from "./Components/pages/Home/Home";
import LayoutPage from "./Components/LayoutPage/LayoutPage";
import FilterPage from "./Components/pages/Filter/FilterPage";
import Detail from "./Components/pages/DetailPage/DetailPage";

function App() {
  return (
    <div id="__next" data-reactroot="">
      <div class="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
        <div class="w-[108rem] flex-none flex justify-end">
          <picture>
            <img
              src={darkPic}
              alt=""
              class="w-[71.75rem] flex-none max-w-none dark:hidden"
            />
          </picture>
          <picture>
            <img
              src={lightPic}
              alt=""
              class="w-[90rem] flex-none max-w-none hidden dark:block"
            />
          </picture>
        </div>
      </div>
      <Routes>
        <Route path={""} element={<LayoutPage />}>
          <Route path={""} element={<Home />} />
          <Route path={":movieSlug"} element={<Detail />} />
          <Route path={"sort"} element={<FilterPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
