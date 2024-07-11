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

  let customCard;
  let horizontalCard;
  let imageCard;
  let defaultCard;

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
    horizontalCard = (
      <div className={cardClass}>
        <div className="row g-0">
          <div className="col-3">{firstImage}</div>
          <div className="col-6">
            <div className="card-body">{children[1]}</div>
          </div>
          <div className="col-3">{children[2]}</div>
        </div>
      </div>
    );
  } else if (imageFull) {
    return (
      <div className="card text-bg-dark">
        <img src="images/default.jpg" className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small>Last updated 3 mins ago</small>
          </p>
        </div>
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
    defaultCard = (
      <div className={cardClass}>
        {imageStart ? <img src="images/default.jpg" /> : null}
        {imageEnd ? <img src="images/default.jpg" /> : null}
      </div>
    );

    return (
      <div className={cardClass}>
        {imageStart ? imageStartContainer : null}
        <RbCardBody>{bodyContent}</RbCardBody>
        {imageEnd ? imageEndContainer : null}
      </div>
    );
  }
}

export default RbCardWithImages;
