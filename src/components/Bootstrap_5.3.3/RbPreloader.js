import React from "react";
import "./RbPreloader.scss";

function RbPreloader({
  children,
  className,
  comment,
  theme,
  commentColor,
  type,
  size,
  absolute,
  backdropColored,
  backdropBlurred,
}) {
  let containerClass =
    "h-100 d-flex flex-column justify-content-center align-items-center";
  if (absolute) {
    containerClass += " preloader-absolute";
    if (backdropBlurred) {
      containerClass += " backdrop-blurred";
    }
  }
  if (backdropColored) {
    containerClass += " backdrop-colored";
  }
  let preloaderClass = "";
  if (type) {
    preloaderClass += "spinner-" + type;
  } else {
    preloaderClass += "spinner-border";
  }
  if (theme) {
    preloaderClass += " text-" + theme;
  }
  if (size) {
    if (type) {
      preloaderClass += " spinner-" + type + size;
    } else {
      preloaderClass += " spinner-border-" + size;
    }
  }
  let commentClass = "";
  if (commentColor) {
    commentClass = `text-${commentColor}`;
  } else if (theme) {
    commentClass = `text-${theme}`;
  }
  return (
    <div className={containerClass}>
      <div className={preloaderClass} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      {comment ? <div className={commentClass}>{comment}</div> : null}
    </div>
  );
}

export default RbPreloader;
