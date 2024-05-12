import React from "react";
import RbNavBarBrand from "./RbNavBarBrand";
//import "./RbNavBar.scss";

function RbNavBar({children, id, dark, theme, scroll, monochromeBrandImage, expand, expandSize, brand, withoutToggler, justifyContent}) {
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
    if (
      ["start", "center", "end", "between", "around"].includes(
        justifyContent
      )
    ) {
      navbarClass += ` justify-content-${justifyContent}`;
    }

    return (
        <nav id={id} className={navbarClass} data-bs-theme={dark ? "dark" : ""} >
            {brand ? <RbNavBarBrand 
              type={brand.type}
              href={brand.href}
              name={brand.name}
              imageSrc={brand.imageSrc}
              monochrome={monochromeBrandImage}
              light={dark}
              action={brand.action}/> : null}
            {children}
        </nav>
    )
}

export default RbNavBar;
