import React from "react";
import RbPaginationButton from "./RbPaginationButton";

function RbPaginationPageSelector({
  className,
  pages,
  activePage,
  islandButton,
}) {
  let buttonClass = "page-item";
  if (islandButton) {
    buttonClass += " island-button";
  }
  if (islandButton) {
    buttonClass += " island-button";
  }

  let button3;
  if (activePage > 3) {
    if (activePage > 4) {
      button3 = (
        <RbPaginationButton className={buttonClass}>
          <span aria-hidden="true">&#8230;</span>
        </RbPaginationButton>
      );
    } else {
      button3 = (
        <RbPaginationButton className={buttonClass}>2</RbPaginationButton>
      );
    }
  }

  let buttonsNums = [];
  for (let page = 1; page <= pages; page++) {
    if (page >= activePage - 1 && page <= activePage + 1) {
      buttonsNums.push(
        <RbPaginationButton
          key={page}
          className={
            page === activePage ? buttonClass + " active" : buttonClass
          }
        >
          {page}
        </RbPaginationButton>
      );
    }
  }

  let button5;
  if (activePage < pages - 2) {
    if (activePage < pages - 3) {
      button3 = (
        <RbPaginationButton className={buttonClass + " disabled"}>
          <span aria-hidden="true">&#8230;</span>
        </RbPaginationButton>
      );
    } else {
      button3 = (
        <RbPaginationButton className={buttonClass}>
          {pages - 1}
        </RbPaginationButton>
      );
    }
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination mb-0">
        {activePage > 1 ? (
          <RbPaginationButton className={buttonClass}>
            <span aria-hidden="true">&laquo;</span>
          </RbPaginationButton>
        ) : null}

        {activePage > 2 ? (
          <RbPaginationButton className={buttonClass}>1</RbPaginationButton>
        ) : null}

        {button3 || null}

        {buttonsNums.length ? buttonsNums : null}

        {button5 || null}

        {activePage < pages - 1 ? (
          <RbPaginationButton className={buttonClass}>
            {pages}
          </RbPaginationButton>
        ) : null}

        {activePage < pages ? (
          <RbPaginationButton className={buttonClass}>
            <span aria-hidden="true">&raquo;</span>
          </RbPaginationButton>
        ) : null}
      </ul>
    </nav>
  );
}

export default RbPaginationPageSelector;
