import React from "react";
import { Link } from "react-router-dom";
import "./RbNavBarBrand.scss";

function RbNavBarBrand({
  type,
  href,
  name,
  imageSrc,
  monochrome,
  light,
  action,
}) {
  let navbarBrandImageClass = "";
  if (monochrome) {
    if (light) {
      navbarBrandImageClass = "navbar-brand-image-light";
    } else {
      navbarBrandImageClass = "navbar-brand-image-dark";
    }
  }

  if (type === "router-link") {
    return (
      <Link to={href || "/"} className="navbar-brand">
        {imageSrc ? (
          <img
            src={imageSrc}
            className={navbarBrandImageClass}
            alt="brand-logo"
          />
        ) : null}
        {name ? <div>{name}</div> : null}
      </Link>
    );
  }
  if (type === "action-link") {
    return (
      <a href="#" class="navbar-brand">
        {imageSrc ? (
          <img
            src={imageSrc}
            className={navbarBrandImageClass}
            alt="brand-logo"
          />
        ) : null}
        {name ? <div>{name}</div> : null}
      </a>
    );
  }
  return null;
}

export default RbNavBarBrand;
