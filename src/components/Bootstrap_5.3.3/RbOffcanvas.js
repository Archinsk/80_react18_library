import React from "react";
import RbOffcanvasHeader from "./RbOffcanvasHeader";
import RbOffcanvasBody from "./RbOffcanvasBody";
//import "./RbOffcanvas.scss";

function RbOffcanvas() {
  return (
    <div
      class="offcanvas offcanvas-start show"
      tabindex="-1"
      id="offcanvas-01"
      aria-labelledby="offcanvasLabel"
    >
      <RbOffcanvasHeader />
      <RbOffcanvasBody />
    </div>
  );
}

export default RbOffcanvas;
