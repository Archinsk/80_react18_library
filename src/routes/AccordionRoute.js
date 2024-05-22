import RbAccordion from "../components/Bootstrap_5.3.3/RbAccordion";
import RbAccordionItemBody from "../components/Bootstrap_5.3.3/RbAccordionItemBody";
import RbAccordionItemHeader from "../components/Bootstrap_5.3.3/RbAccordionItemHeader";

function AccordionRoute() {
  const defaultAccordion = {
    itemsList: [
      { title: "Запись 7", content: "Контент 7" },
      { title: "Запись 8", content: "Контент 8" },
      { title: "Запись 9", content: "Контент 9" },
    ],
  };
  return (
    <>
      <h2>Accordion</h2>
      <h3>Варианты использования</h3>
      <div>Кастомный</div>
      <RbAccordion custom id="accordion01">
        <div className="accordion-item">
          <RbAccordionItemHeader id="accordion01" index="01">
            Запись 1
          </RbAccordionItemHeader>
          <RbAccordionItemBody id="accordion01" index="01">
            Контент 1
          </RbAccordionItemBody>
        </div>
        <div className="accordion-item">
          <RbAccordionItemHeader id="accordion01" index="02">
            Запись 2
          </RbAccordionItemHeader>
          <RbAccordionItemBody id="accordion01" index="02">
            Контент 2
          </RbAccordionItemBody>
        </div>
        <div className="accordion-item">
          <RbAccordionItemHeader id="accordion01" index="03">
            Запись 3
          </RbAccordionItemHeader>
          <RbAccordionItemBody id="accordion01" index="03">
            Контент 3
          </RbAccordionItemBody>
        </div>
      </RbAccordion>
      <div>Кастомный без скруглений и контурной обводки</div>
      <RbAccordion custom id="accordion02" noBorder>
        <div className="accordion-item">
          <RbAccordionItemHeader id="accordion02" index="01">
            Запись 4
          </RbAccordionItemHeader>
          <RbAccordionItemBody id="accordion02" index="01">
            Контент 4
          </RbAccordionItemBody>
        </div>
        <div className="accordion-item">
          <RbAccordionItemHeader id="accordion02" index="02">
            Запись 5
          </RbAccordionItemHeader>
          <RbAccordionItemBody id="accordion02" index="02">
            Контент 5
          </RbAccordionItemBody>
        </div>
        <div className="accordion-item">
          <RbAccordionItemHeader id="accordion02" index="03">
            Запись 6
          </RbAccordionItemHeader>
          <RbAccordionItemBody id="accordion02" index="03">
            Контент 6
          </RbAccordionItemBody>
        </div>
      </RbAccordion>
      <div>С массивом пунктов аккордеона itemsList</div>
      <RbAccordion id="accordion03" itemsList={defaultAccordion.itemsList} />
    </>
  );
}

export default AccordionRoute;
