import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppV2 from "./App-v2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppV2 />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} color="red" className="test" defaultRating={2} />

    <Test /> */}
  </React.StrictMode>
);
