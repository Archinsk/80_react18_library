import React from "react";

function RbGrid({ children, className, cols, rows, gap, columnGap, rowGap }) {
  // Для каждого из children должен снаружи быть установлен key!
  let gridClass = "grid";
  if (className) {
    gridClass += ` ${className}`;
  }

  let gridCols;
  let modifiedChildren;

  let gapClass;
  if (!columnGap && !rowGap) {
    if (gap) {
      gapClass = `gap-${gap}`;
    } else {
      gapClass = "gap-0";
    }
  } else if (columnGap) {
    gapClass = `column-gap-${columnGap}`;
    if (rowGap) {
      gapClass += ` row-gap-${rowGap}`;
    } else {
      gapClass += " row-gap-0";
    }
  } else if (rowGap) {
    gapClass = `row-gap-${rowGap} column-gap-0`;
  } else {
    gapClass = "gap-0";
  }

  if (cols) {
    console.log(cols);
    gridCols = 12 / Number(cols);
    modifiedChildren = React.Children.map(children, (child) => {
      return addClassNamesToChildComponent(child, `g-col-${gridCols}`);
    });
    console.log(children);
    return <div className={`${gridClass} ${gapClass}`}>{modifiedChildren}</div>;
  } else if (rows) {
    let colsInRow = children.length / Number(rows);
    gridCols = 12 / colsInRow;
    modifiedChildren = React.Children.map(children, (child, index) => {
      return addClassNamesToChildComponent(child, `g-col-${gridCols}`, index);
    });
    return <div className={`${gridClass} ${gapClass}`}>{modifiedChildren}</div>;
  }

  console.log(children);
  let childrenWithKeys = children.map((child, index) => {
    return React.cloneElement(child, {
      key: index,
    });
  });
  console.log("---childrenWithKeys---");
  console.log(childrenWithKeys);
  return <div className={`${gridClass} ${gapClass}`}>{children}</div>;

  function addClassNamesToChildComponent(
    childComponent,
    additionalClasses,
    index
  ) {
    if (childComponent && additionalClasses) {
      return React.cloneElement(childComponent, {
        className: childComponent.props.className
          ? childComponent.props.className + " " + additionalClasses
          : additionalClasses,
        key: index,
      });
    }
  }
}

export default RbGrid;
