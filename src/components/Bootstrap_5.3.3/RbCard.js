import React from "react";
import RbCardHeader from "./RbCardHeader";
import RbCardBody from "./RbCardBody";
import RbCardFooter from "./RbCardFooter";
import RbCardWithImages from "./RbCardWithImages";

function RbCard({
  children,
  className,
  header,
  footer,
  noBody,
  imageFull,
  imageStart,
  imageEnd,
  horizontal,
  imageStartCols,
  imageEndCols,
  custom,
}) {
  let cardClass = "card";
  if (className) {
    cardClass += ` ${className}`;
  }

  if (custom) {
    return <div className={cardClass}>{children}</div>;
  } else if (imageFull || imageStart || imageEnd || horizontal) {
    return (
      <RbCardWithImages
        className={className}
        imageFull={imageFull}
        imageStart={imageStart}
        imageEnd={imageEnd}
        horizontal={horizontal}
        imageStartCols={imageStartCols}
        imageEndCols={imageEndCols}
      >
        {children}
      </RbCardWithImages>
    );
  } else {
    let headerContent;
    let bodyContent = children;
    let footerContent;

    if (header && footer && !noBody && children.length === 3) {
      [headerContent, bodyContent, footerContent] = children;
    } else if (children.length === 2) {
      if (header && !noBody && !footer) {
        [headerContent, bodyContent] = children;
      } else if (!header && !noBody && footer) {
        [bodyContent, footerContent] = children;
      }
    }

    return (
      <div className={cardClass}>
        {header ? <RbCardHeader>{headerContent}</RbCardHeader> : null}
        {!noBody ? <RbCardBody>{bodyContent}</RbCardBody> : null}
        {footer ? <RbCardFooter>{footerContent}</RbCardFooter> : null}
      </div>
    );
  }
}

export default RbCard;
