import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header";
import Body from "./body";
import Pokemon from "./pokemon";
const Main = (props) => {
  return (
    <div>
      <Header />
      <Body mons={mons} />
      <Pokemon />
    </div>
  );
};

export default Main;
