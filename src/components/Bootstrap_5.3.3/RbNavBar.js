import React from "react";
import RbNavBarBrand from "./RbNavBarBrand";
import RbCollapseButton from "./RbCollapseButton";
import RbCollapse from "./RbCollapse";
import RbOffcanvas from "./RbOffcanvas";
import RbOffcanvasButton from "./RbOffcanvasButton";
//import "./RbNavBar.scss";

function RbNavBar({
  children,
  id,
  dark,
  theme,
  scroll,
  monochromeBrandImage,
  expand,
  expandSize,
  brand,
  withoutToggler,
  justifyContent,
  offcanvas,
}) {
  let navbarClass = "navbar";
  if (dark) {
    navbarClass += " navbar-dark";
  } else {
    navbarClass += " navbar-light";
  }
  if (theme) {
    navbarClass += ` bg-${theme}`;
  }
  if (expand) {
    if (expandSize) {
      if (["sm", "md", "lg", "xl"].includes(expandSize)) {
        navbarClass += ` navbar-expand-${expandSize}`;
      } else {
        navbarClass += " navbar-expand-sm";
      }
    } else {
      navbarClass += " navbar-expand";
    }
  }
  let containerClass = "container-fluid";
  if (
    ["start", "center", "end", "between", "around"].includes(justifyContent)
  ) {
    containerClass += ` justify-content-${justifyContent}`;
  }

  /*let navbarNavWithToggleButton;
  if (offcanvas) {
    if (!withoutToggler) {

    }
    navbarNavWithToggleButton = (
      
    )
  } else {
    if (!withoutToggler) {

    }
  }*/

  let navBarNavToggler = null;
  if (offcanvas) {
    navBarNavToggler = (
      <RbOffcanvasButton
        ariaLabel="Toggle navigation"
        targetId={id ? id + "-offcanvas" : "navbarOffcanvasContent"}
        theme="outline-light"
        square
        icon="menu"
        className={"d-" + expandSize + "-none"}
      />
    );
  } else if (!withoutToggler) {
    navBarNavToggler = (
      <RbCollapseButton
        ariaLabel="Toggle navigation"
        targetId={id ? id + "-collapse" : "navbarCollapseContent"}
        theme="outline-light"
        square
        icon="menu"
        className={"d-" + expandSize + "-none"}
      />
    );
  }

  let navPanel = null;
  if (offcanvas) {
    navPanel = (
      <RbOffcanvas id={id ? id + "-offcanvas" : "navbarOffcanvasContent"}>
        {children}
      </RbOffcanvas>
    );
  } else {
    navPanel = (
      <RbCollapse
        className="navbar-collapse"
        id={id ? id + "-collapse" : "navbarCollapseContent"}
      >
        {children}
      </RbCollapse>
    );
  }

  return (
    <nav id={id} className={navbarClass} data-bs-theme={dark ? "dark" : ""}>
      <div className={containerClass}>
        {brand ? (
          <RbNavBarBrand
            type={brand.type}
            href={brand.href}
            name={brand.name}
            imageSrc={brand.imageSrc}
            monochrome={monochromeBrandImage}
            light={dark}
            action={brand.action}
          />
        ) : null}
        {navBarNavToggler}
        {navPanel}
      </div>
    </nav>
  );
}

export default RbNavBar;
