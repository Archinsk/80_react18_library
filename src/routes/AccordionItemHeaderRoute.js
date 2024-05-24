import { Link } from "react-router-dom";

function AccordionItemHeaderRoute() {
  return (
    <>
      <h2>AccordionItemHeader</h2>
      <h3>Варианты использования</h3>
      <div>
        См. <Link to="/accordion">Accordion</Link>
      </div>
    </>
  );
}

export default AccordionItemHeaderRoute;
