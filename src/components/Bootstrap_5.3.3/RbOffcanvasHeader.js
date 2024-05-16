import React from "react";
//import "./RbOffcanvas.scss";

function RbOffcanvasHeader() {
  return (
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasLabel">
        Offcanvas
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default RbOffcanvasHeader;
