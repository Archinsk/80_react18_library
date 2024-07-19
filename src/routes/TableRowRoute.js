import RbTable from "../components/Bootstrap_5.3.3/RbTable";
import RbTableCell from "../components/Bootstrap_5.3.3/RbTableCell";
import RbTableRow from "../components/Bootstrap_5.3.3/RbTableRow";

function TableRowRoute() {
  return (
    <>
      <h2>TableRow</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">Без пропов</div>
      <RbTable custom bordered>
        <tbody>
          <RbTableRow>
            <RbTableCell>Ячейка_1</RbTableCell>
            <RbTableCell>Ячейка_2</RbTableCell>
            <RbTableCell>Ячейка_3</RbTableCell>
          </RbTableRow>
          <RbTableRow>
            <RbTableCell>Ячейка_4</RbTableCell>
            <RbTableCell>Ячейка_5</RbTableCell>
            <RbTableCell>Ячейка_6</RbTableCell>
          </RbTableRow>
        </tbody>
      </RbTable>
      <div className="use-case-title">
        С указанием тега строки (thead или tfoot)
      </div>
      <RbTable custom bordered>
        <RbTableRow tag="thead">
          <RbTableCell>Ячейка_1</RbTableCell>
          <RbTableCell>Ячейка_2</RbTableCell>
          <RbTableCell>Ячейка_3</RbTableCell>
        </RbTableRow>
        <tbody>
          <RbTableRow>
            <RbTableCell>Ячейка_4</RbTableCell>
            <RbTableCell>Ячейка_5</RbTableCell>
            <RbTableCell>Ячейка_6</RbTableCell>
          </RbTableRow>
        </tbody>
      </RbTable>
    </>
  );
}

export default TableRowRoute;
