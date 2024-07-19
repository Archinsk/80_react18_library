import RbGrid from "../components/Bootstrap_5.3.3/RbGrid";

function GridRoute() {
  let items = [];
  let items2 = [];
  for (let i = 1; i < 37; i++) {
    items.push(
      <div className="p-2 bg-light border border-secondary g-col-3" key={i}>
        Запись_{i}
      </div>
    );
  }
  for (let i = 1; i < 37; i++) {
    items2.push(
      <div className="p-2 bg-light border border-secondary" key={i}>
        Запись_{i}
      </div>
    );
  }

  return (
    <>
      <h2>Grid</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">
        Без пропов, столбцы указаны в переданных элементах
      </div>
      <RbGrid>{items}</RbGrid>
      <div className="use-case-title">
        С указанием количества столбцов (Рабочие значения: 1, 2, 3, 4, 6, 12)
      </div>
      <RbGrid cols="6">{items2}</RbGrid>
      <div className="use-case-title">
        С указанием количества строк (если указано кол-во колонок, то данный
        проп игнорируется)
      </div>
      <RbGrid rows="12">{items2}</RbGrid>
      <div className="use-case-title">
        С указанием общего отступа между ячейками сетки (от 0 до 5)
      </div>
      <RbGrid gap="3">{items}</RbGrid>
      <div className="use-case-title">
        С указанием отступов только между колонками сетки (от 0 до 5)
      </div>
      <RbGrid columnGap="3">{items}</RbGrid>
      <div className="use-case-title">
        С указанием отступов только между строками сетки (от 0 до 5)
      </div>
      <RbGrid rowGap="3">{items}</RbGrid>
      <div className="use-case-title">
        С указанием разных отступов между строками и колонками сетки (от 0 до 5)
      </div>
      <RbGrid columnGap="2" rowGap="4">
        {items}
      </RbGrid>
    </>
  );
}

export default GridRoute;
