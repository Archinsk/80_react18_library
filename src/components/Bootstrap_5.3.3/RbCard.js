import React from "react";
import RbCardHeader from "./RbCardHeader";
import RbCardBody from "./RbCardBody";
import RbCardFooter from "./RbCardFooter";

function RbCard({
  children,
  className,
  header,
  footer,
  noBody,
  imageFull,
  imageTop,
  imageBottom,
  horizontal,
  custom,
}) {
  let cardClass = "card";
  if (className) {
    cardClass += ` ${className}`;
  }

  let customCard;
  let horizontalCard;
  let defaultCard;

  if (custom) {
    customCard = <div class={cardClass}>{children}</div>;
  } else if (horizontal) {
  } else {
    console.log("children in card");
    console.log(children);
    if (imageFull) {
    } else {
      defaultCard = (
        <div class={cardClass}>
          {header ? <RbCardHeader>Хедер</RbCardHeader> : null}
          {imageTop ? <img src="images/default.jpg" /> : null}
          {!noBody ? <RbCardBody>Боди</RbCardBody> : null}
          {imageBottom ? <img src="images/default.jpg" /> : null}
          {footer ? <RbCardFooter>Футер</RbCardFooter> : null}
        </div>
      );
    }
  }

  return customCard || horizontalCard || defaultCard;
}

export default RbCard;
