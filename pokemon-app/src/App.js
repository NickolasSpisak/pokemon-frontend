import { useState, useEffect } from "react";
import Main from "./componants/main";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import { response } from "express";

export default function App() {
  const [mons, getMons] = useState("");

  useEffect(() => {
    getAllMons();
  }, []);

  const getAllMons = () => {
    axios
      .get("https://nickspisak-pokemon-api.herokuapp.com/pokemon")
      .then((response) => {
        const allMons = response.data.mons.allMons;
        getMons(allMons);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  return (
    <div className="App">
      <Main mons={mons} />
    </div>
  );
}
