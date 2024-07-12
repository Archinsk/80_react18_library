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
    if (children.length === 3) {
      console.log("children in card");
      console.log(children);
    }
    let firstImage = React.cloneElement(children[0], {
      className: className
        ? children[0].className + " img-fluid rounded-start"
        : "img-fluid rounded-start",
    });
    /* horizontalCard = (
      <div className={cardClass}>
        <div className="row g-0">
          <div className="col-3">{firstImage}</div>
          <div className="col-6">
            <div className="card-body">{children[1]}</div>
          </div>
          <div className="col-3">{children[2]}</div>
        </div>
      </div>
    ); */
    return null;
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
