import React from "react";
import RbNavBar from "./RbNavBar";
import RbNav from "./RbNav";
//import RbOffcanvas from "./RbOffcanvas";
//import RbOffcanvasButton from "./RbOffcanvasButton";

function RbHeader({
  id,
  offcanvas,
  expand,
  expandSize,
  theme,
  dark,
  monochrome,
  brand,
  nav,
  container,
  justifyContent,
  scroll,
  windowData,
}) {
  const isCollapseButton = !!(
    !offcanvas &&
    nav &&
    nav.itemsList &&
    nav.itemsList.length &&
    !(expand && !expandSize)
  );

  const isOffcanvasButton = !!(
    offcanvas &&
    nav &&
    nav.itemsList &&
    nav.itemsList.length &&
    !(expand && !expandSize)
  );

  console.log("nav in header");
  console.log(nav);

  if (nav || brand) {
    return (
      <header className={container && theme ? "bg-" + theme : ""}>
        <div className={container ? "container" : ""}>
          <RbNavBar
            id={id ? id + "-navbar" : ""}
            expand={offcanvas || expand}
            expandSize={expandSize && !offcanvas ? expandSize : ""}
            theme={theme}
            dark={dark}
            monochromeBrandImage={monochrome}
            brand={brand}
            withoutToggler={!isCollapseButton}
            justifyContent={justifyContent}
            className={container ? "px-0" : ""}
          >
            <RbNav
              scroll={scroll}
              tag="ul"
              className="navbar-nav"
              itemsList={nav.itemsList}
            />
          </RbNavBar>
        </div>
      </header>
    );
  } else {
    return null;
  }
}

export default RbHeader;
