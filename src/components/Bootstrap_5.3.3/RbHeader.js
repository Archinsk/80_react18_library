import React from "react";
import RbNavBar from "./RbNavBar";
import RbNav from "./RbNav";
//import RbOffcanvas from "./RbOffcanvas";
//import RbOffcanvasButton from "./RbOffcanvasButton";

function RbHeader({
  id,
  brand,
  nav,
  theme,
  dark,
  monochrome,
  justifyContent,
  container,
  hidden,
  hiddenSize,
  offcanvas,
  noScroll,
}) {
  let headerNav;
  let headerNavBar;
  let headerContent;

  if (nav) {
    headerNav = (
      <RbNav
        scroll={!noScroll && !offcanvas}
        scrollSize={!noScroll && !offcanvas && hiddenSize ? hiddenSize : null}
        tag="ul"
        className="navbar-nav"
        itemsList={nav.itemsList}
      />
    );
  }
  if (brand || nav) {
    headerNavBar = (
      <RbNavBar
        id={id ? id + "-navbar" : "header-navbar"}
        brand={brand}
        theme={theme}
        dark={dark}
        monochromeBrandImage={monochrome}
        hidden={hidden}
        hiddenSize={hiddenSize}
        justifyContent={justifyContent}
        offcanvas={offcanvas}
      >
        {headerNav || null}
      </RbNavBar>
    );
  }

  if (container) {
    headerContent = <div className="container">{headerNavBar}</div>;
  } else {
    headerContent = headerNavBar;
  }

  return (
    <header
      className={theme ? "bg-" + theme : null}
      style={brand || nav ? null : { height: "3.5rem" }}
    >
      {headerContent}
    </header>
  );
}

export default RbHeader;
