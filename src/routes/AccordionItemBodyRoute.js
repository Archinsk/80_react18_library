import { Link } from "react-router-dom";

function AccordionItemBodyRoute() {
  return (
    <>
      <h2>AccordionItemBody</h2>
      <h3>Варианты использования</h3>
      <div>
        См. <Link to="/accordion">Accordion</Link>
      </div>
    </>
  );
}

export default AccordionItemBodyRoute;
