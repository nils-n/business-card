import React from "react";
import ReactDOM from "react-dom";
import { About } from "./components/About.js";
import { Footer } from "./components/Footer.js";
import { Interests } from "./components/Interests.js";
import { Info } from "./components/Info.js";

const page = (
  <div className="main--wrapper">
    <Info />
    <About />
    <Interests />
    <Footer />
  </div>
);

ReactDOM.render(page, document.getElementById("root"));
