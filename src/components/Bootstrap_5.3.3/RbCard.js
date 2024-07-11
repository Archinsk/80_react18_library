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
  if (imageFull || imageStart || imageEnd || horizontal) {
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
    let cardClass = "card";
    if (className) {
      cardClass += ` ${className}`;
    }

    if (custom) {
      return <div className={cardClass}>{children}</div>;
    } else {
      let headerContent;
      let bodyContent;
      let footerContent;

      if (header && footer && !noBody && children.length === 3) {
        headerContent = children[0];
        bodyContent = children[1];
        footerContent = children[2];
      } else if (children.length === 2) {
        if (header && !noBody && !footer) {
          headerContent = children[0];
          bodyContent = children[1];
        } else if (footer && !noBody && !header) {
          bodyContent = children[0];
          footerContent = children[1];
        } else {
          bodyContent = children;
        }
      } else {
        bodyContent = children;
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
}

export default RbCard;
