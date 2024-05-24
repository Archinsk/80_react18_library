import { Link } from "react-router-dom";

function AccordionItemRoute() {
  return (
    <>
      <h2>AccordionItem</h2>
      <h3>Варианты использования</h3>
      <div>
        См. <Link to="/accordion">Accordion</Link>
      </div>
    </>
  );
}

export default AccordionItemRoute;
