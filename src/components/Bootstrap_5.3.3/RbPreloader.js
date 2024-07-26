import React from "react";
import "./RbPreloader.scss";

function RbPreloader({
  children,
  className,
  text,
  theme,
  textColor,
  type,
  size,
  absolute,
  backdropColored,
  backdropBlurred,
}) {
  let containerClass = "preloader-container";
  if (className) {
    containerClass += ` ${className}`;
  }
  if (backdropBlurred) {
    containerClass += " backdrop-blurred";
  }
  if (backdropColored) {
    containerClass += " backdrop-colored";
  }
  if (absolute) {
    containerClass += " preloader-absolute";
  }
  let preloaderClass = "";
  if (type === "grow") {
    preloaderClass += "spinner-grow";
  } else {
    preloaderClass += "spinner-border";
  }
  if (theme) {
    preloaderClass += ` text-${theme}`;
  }
  if (size === "sm") {
    if (type === "grow") {
      preloaderClass += " spinner-grow-sm";
    } else {
      preloaderClass += " spinner-border-sm";
    }
  }
  let textClass = "";
  if (textColor) {
    textClass = `text-${textColor}`;
  } else if (theme) {
    textClass = `text-${theme}`;
  }
  return (
    <div className={containerClass}>
      <div className={preloaderClass} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      {children ? <div className={textClass}>{children}</div> : null}
    </div>
  );
}

export default RbPreloader;
