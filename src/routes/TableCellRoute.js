import RbTable from "../components/Bootstrap_5.3.3/RbTable";
import RbTableCell from "../components/Bootstrap_5.3.3/RbTableCell";
import RbTableRow from "../components/Bootstrap_5.3.3/RbTableRow";

function TableCellRoute() {
  return (
    <>
      <h2>TableCell</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">Без пропов</div>
      <RbTable custom bordered>
        <tbody>
          <RbTableRow>
            <RbTableCell>Ячейка_1</RbTableCell>
            <RbTableCell>Ячейка_2</RbTableCell>
            <RbTableCell>Ячейка_3</RbTableCell>
          </RbTableRow>
        </tbody>
      </RbTable>
      <div className="use-case-title">Заголовок</div>
      <RbTable custom bordered>
        <tbody>
          <RbTableRow>
            <RbTableCell tag="th">Заголовок</RbTableCell>
            <RbTableCell>Ячейка_2</RbTableCell>
            <RbTableCell>Ячейка_3</RbTableCell>
          </RbTableRow>
        </tbody>
      </RbTable>
      <div className="use-case-title">Объединение ячеек по горизонтали</div>
      <RbTable custom bordered>
        <tbody>
          <RbTableRow>
            <RbTableCell>Ячейка_1</RbTableCell>
            <RbTableCell>Ячейка_2</RbTableCell>
            <RbTableCell>Ячейка_3</RbTableCell>
          </RbTableRow>
          <RbTableRow>
            <RbTableCell colspan="2">Ячейка на 2 колонки</RbTableCell>
            <RbTableCell>Ячейка_6</RbTableCell>
          </RbTableRow>
        </tbody>
      </RbTable>
      <div className="use-case-title">Объединение ячеек по вертикали</div>
      <RbTable custom bordered>
        <tbody>
          <RbTableRow>
            <RbTableCell>Ячейка_1</RbTableCell>
            <RbTableCell rowspan="2">Ячейка на 2 строки</RbTableCell>
            <RbTableCell>Ячейка_3</RbTableCell>
          </RbTableRow>
          <RbTableRow>
            <RbTableCell>Ячейка_4</RbTableCell>
            <RbTableCell>Ячейка_6</RbTableCell>
          </RbTableRow>
        </tbody>
      </RbTable>
      <div className="use-case-title">
        С указанием для чего заголовок (для строки или для столбца).
        Используется только для th
      </div>
      <RbTable custom bordered>
        <tbody>
          <RbTableRow>
            <RbTableCell tag="th" scope="col">
              Заголовок для столбца 1
            </RbTableCell>
            <RbTableCell tag="th" scope="col">
              Заголовок для столбца 2
            </RbTableCell>
            <RbTableCell tag="th" scope="col">
              Заголовок для столбца 2
            </RbTableCell>
          </RbTableRow>
          <RbTableRow>
            <RbTableCell tag="th" scope="row">
              Заголовок для строки 2
            </RbTableCell>
            <RbTableCell>Ячейка_5</RbTableCell>
            <RbTableCell>Ячейка_6</RbTableCell>
          </RbTableRow>
          <RbTableRow>
            <RbTableCell tag="th" scope="row">
              Заголовок для строки 3
            </RbTableCell>
            <RbTableCell>Ячейка_8</RbTableCell>
            <RbTableCell>Ячейка_9</RbTableCell>
          </RbTableRow>
        </tbody>
      </RbTable>
      <div className="use-case-title">Стилизованная через классы</div>
      <RbTable custom bordered>
        <tbody>
          <RbTableRow>
            <RbTableCell className="rounded-3 bg-warning-subtle w-50">
              Ячейка_1. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Omnis repellat culpa quod provident aliquam amet molestias
              ab, ipsam voluptate beatae! Sed esse ex in, beatae nulla commodi
              doloribus est iure? Obcaecati, voluptate.
            </RbTableCell>
            <RbTableCell className="border-3 border-success">
              Ячейка_2
            </RbTableCell>
            <RbTableCell className="align-middle text-center">
              Ячейка_3
            </RbTableCell>
          </RbTableRow>
          <RbTableRow>
            <RbTableCell className="fw-bold fst-italic">Ячейка_4</RbTableCell>
            <RbTableCell>Ячейка_4</RbTableCell>
            <RbTableCell>Ячейка_6</RbTableCell>
          </RbTableRow>
        </tbody>
      </RbTable>
    </>
  );
}

export default TableCellRoute;
