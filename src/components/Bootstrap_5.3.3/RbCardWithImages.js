import React from "react";
import RbCardBody from "./RbCardBody";

function RbCardWithImages({
  children,
  className,
  imageFull,
  imageStart,
  imageEnd,
  horizontal,
  imageStartCols,
  imageEndCols,
}) {
  let cardClass = "card";
  if (className) {
    cardClass += ` ${className}`;
  }

  if (horizontal) {
    let imageStartContainer;
    let bodyContent;
    let imageEndContainer;
    let imageStartContainerClass;
    let imageEndContainerClass;

    if (children.length === 3) {
      imageStartContainerClass = imageStartCols
        ? `col-${imageStartCols}`
        : "col-4";
      let firstImage = addClassNamesToChildComponent(
        children[0],
        "img-fluid rounded-start w-100"
      );
      imageStartContainer = (
        <div className={imageStartContainerClass}>{firstImage}</div>
      );
      bodyContent = children[1];
      imageEndContainerClass = imageStartCols ? `col-${imageEndCols}` : "col-4";
      let secondImage = addClassNamesToChildComponent(
        children[2],
        "img-fluid rounded-end w-100"
      );
      imageEndContainer = (
        <div className={imageEndContainerClass}>{secondImage}</div>
      );
    } else if (children.length === 2) {
      if (imageStart && !imageEnd) {
        imageStartContainerClass = imageStartCols
          ? `col-${imageStartCols}`
          : "col-4";
        let firstImage = addClassNamesToChildComponent(
          children[0],
          "img-fluid rounded-start w-100"
        );
        imageStartContainer = (
          <div className={imageStartContainerClass}>{firstImage}</div>
        );
        bodyContent = children[1];
      } else if (imageEnd && !imageStart) {
        bodyContent = children[0];
        imageEndContainerClass = imageStartCols
          ? `col-${imageEndCols}`
          : "col-4";
        let secondImage = addClassNamesToChildComponent(
          children[1],
          "img-fluid rounded-end w-100"
        );
        imageEndContainer = (
          <div className={imageEndContainerClass}>{secondImage}</div>
        );
      } else {
        bodyContent = children;
      }
    } else {
      bodyContent = children;
    }

    return (
      <div className={cardClass}>
        <div className="row g-0">
          {imageStart ? imageStartContainer : null}
          <div className="col">
            <RbCardBody>{bodyContent}</RbCardBody>
          </div>
          {imageEnd ? imageEndContainer : null}
        </div>
      </div>
    );
  } else if (imageFull) {
    let image = addClassNamesToChildComponent(children[0], "card-img");
    let content;
    if (children.length > 1) {
      content = children.slice(1);
    }

    return (
      <div className={cardClass}>
        {image}
        <div className="card-img-overlay">{content}</div>
      </div>
    );
  } else {
    let imageStartContainer;
    let bodyContent;
    let imageEndContainer;

    if (imageStart && imageEnd && children.length === 3) {
      imageStartContainer = children[0];
      bodyContent = children[1];
      imageEndContainer = children[2];
    } else if (children.length === 2) {
      if (imageStart && !imageEnd) {
        imageStartContainer = children[0];
        bodyContent = children[1];
      } else if (imageEnd && !imageStart) {
        bodyContent = children[0];
        imageEndContainer = children[1];
      } else {
        bodyContent = children;
      }
    } else {
      bodyContent = children;
    }

    if (imageStartContainer) {
      imageStartContainer = addClassNamesToChildComponent(
        imageStartContainer,
        "card-img-top"
      );
      console.log(imageStartContainer);
    }
    if (imageEndContainer) {
      imageEndContainer = addClassNamesToChildComponent(
        imageEndContainer,
        "card-img-bottom"
      );
    }

    return (
      <div className={cardClass}>
        {imageStart ? imageStartContainer : null}
        <RbCardBody>{bodyContent}</RbCardBody>
        {imageEnd ? imageEndContainer : null}
      </div>
    );
  }

  function addClassNamesToChildComponent(childComponent, additionalClasses) {
    if (childComponent && additionalClasses) {
      return React.cloneElement(childComponent, {
        className: childComponent.className
          ? childComponent.className + " " + additionalClasses
          : additionalClasses,
      });
    }
  }
}

export default RbCardWithImages;
