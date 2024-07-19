// Версия 1.01 от 18.05.2024

import React from "react";
import RbOffcanvasHeader from "./RbOffcanvasHeader";
import RbOffcanvasBody from "./RbOffcanvasBody";
import "./RbOffcanvas.scss";

function RbOffcanvas({
  children,
  custom,
  id,
  title,
  noCloseButton,
  noBackdrop,
  noKeyboard,
  staticBackdrop,
  theme,
  openedWidth,
  closedWidth,
  noEffectPoint,
}) {
  let offcanvasContent;
  if (custom) {
    offcanvasContent = children;
  } else {
    offcanvasContent = (
      <>
        {title || !noCloseButton ? (
          <RbOffcanvasHeader id={id} noCloseButton={noCloseButton}>
            {title}
          </RbOffcanvasHeader>
        ) : null}
        <RbOffcanvasBody>{children}</RbOffcanvasBody>
      </>
    );
  }
  let backdrop;
  if (noBackdrop) {
    backdrop = "false";
  } else if (staticBackdrop) {
    backdrop = "static";
  }
  return (
    <div
      className="offcanvas offcanvas-start"
      id={id}
      tabIndex="-1"
      aria-labelledby={id + "Label"}
      data-bs-backdrop={backdrop}
      data-bs-keyboard={noKeyboard ? "false" : null}
    >
      {offcanvasContent}
    </div>
  );
}

export default RbOffcanvas;
