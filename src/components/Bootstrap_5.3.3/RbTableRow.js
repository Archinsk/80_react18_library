import React from "react";

function RbTableRow({ children, className, tag }) {
  const Container = ["thead", "tfoot"].includes(tag) ? tag : null;
  if (Container) {
    return (
      <Container>
        <tr className={className || null}>{children}</tr>
      </Container>
    );
  } else {
    return <tr className={className || null}>{children}</tr>;
  }
}

export default RbTableRow;
