import React from "react";
import RbTable from "../components/Bootstrap_5.3.3/RbTable";
import RbTableCell from "../components/Bootstrap_5.3.3/RbTableCell";
import RbTableRow from "../components/Bootstrap_5.3.3/RbTableRow";

function TableRoute() {
  const defaultTable = {
    itemsList: [
      [
        { tag: "th", content: "Заголовок_1", scope: "col" },
        { tag: "th", content: "Заголовок_2", scope: "col" },
        { tag: "th", content: "Заголовок_3", scope: "col" },
        { tag: "th", content: "Заголовок_4", scope: "col" },
      ],
      [
        { content: "Ячейка_5" },
        { content: "Ячейка_6", colspan: "2" },
        { content: "Ячейка_8" },
      ],
      [
        { content: "Ячейка_9", rowspan: 2 },
        { content: "Ячейка_10" },
        { content: "Ячейка_11" },
        { content: "Ячейка_12" },
      ],
      [
        { content: "Ячейка_14" },
        { content: "Ячейка_15" },
        {
          content: (
            <>
              <div>Ячейка с html-тегами</div>
              <img src="images/default.jpg" />
            </>
          ),
        },
      ],
    ],
  };

  return (
    <>
      <h2>Table</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">
        Пользовательская (только проп "custom", остальное пробрасывается в слот)
      </div>
      <RbTable custom>
        <tbody>
          <RbTableRow>
            <RbTableCell>Ячейка_1</RbTableCell>
            <RbTableCell>Ячейка_2</RbTableCell>
            <RbTableCell>Ячейка_3</RbTableCell>
            <RbTableCell>Ячейка_4</RbTableCell>
          </RbTableRow>
          <RbTableRow>
            <RbTableCell>Ячейка_5</RbTableCell>
            <RbTableCell>Ячейка_6</RbTableCell>
            <RbTableCell>Ячейка_7</RbTableCell>
            <RbTableCell>Ячейка_8</RbTableCell>
          </RbTableRow>
          <RbTableRow>
            <RbTableCell>Ячейка_9</RbTableCell>
            <RbTableCell>Ячейка_10</RbTableCell>
            <RbTableCell>Ячейка_11</RbTableCell>
            <RbTableCell>Ячейка_12</RbTableCell>
          </RbTableRow>
          <RbTableRow>
            <RbTableCell>Ячейка_13</RbTableCell>
            <RbTableCell>Ячейка_14</RbTableCell>
            <RbTableCell>Ячейка_15</RbTableCell>
            <RbTableCell>Ячейка_16</RbTableCell>
          </RbTableRow>
        </tbody>
      </RbTable>
      <div className="use-case-title">Пользовательская с контурами ячеек</div>
      <RbTable custom bordered>
        <tbody>
          <RbTableRow>
            <RbTableCell>Ячейка_1</RbTableCell>
            <RbTableCell>Ячейка_2</RbTableCell>
            <RbTableCell>Ячейка_3</RbTableCell>
            <RbTableCell>Ячейка_4</RbTableCell>
          </RbTableRow>
          <RbTableRow>
            <RbTableCell>Ячейка_5</RbTableCell>
            <RbTableCell>Ячейка_6</RbTableCell>
            <RbTableCell>Ячейка_7</RbTableCell>
            <RbTableCell>Ячейка_8</RbTableCell>
          </RbTableRow>
          <RbTableRow>
            <RbTableCell>Ячейка_9</RbTableCell>
            <RbTableCell>Ячейка_10</RbTableCell>
            <RbTableCell>Ячейка_11</RbTableCell>
            <RbTableCell>Ячейка_12</RbTableCell>
          </RbTableRow>
          <RbTableRow>
            <RbTableCell>Ячейка_13</RbTableCell>
            <RbTableCell>Ячейка_14</RbTableCell>
            <RbTableCell>Ячейка_15</RbTableCell>
            <RbTableCell>Ячейка_16</RbTableCell>
          </RbTableRow>
        </tbody>
      </RbTable>
      <div className="use-case-title">Пользовательская "полосатая"</div>
      <RbTable custom striped>
        <tbody>
          <RbTableRow>
            <RbTableCell>Ячейка_1</RbTableCell>
            <RbTableCell>Ячейка_2</RbTableCell>
            <RbTableCell>Ячейка_3</RbTableCell>
            <RbTableCell>Ячейка_4</RbTableCell>
          </RbTableRow>
          <RbTableRow>
            <RbTableCell>Ячейка_5</RbTableCell>
            <RbTableCell>Ячейка_6</RbTableCell>
            <RbTableCell>Ячейка_7</RbTableCell>
            <RbTableCell>Ячейка_8</RbTableCell>
          </RbTableRow>
          <RbTableRow>
            <RbTableCell>Ячейка_9</RbTableCell>
            <RbTableCell>Ячейка_10</RbTableCell>
            <RbTableCell>Ячейка_11</RbTableCell>
            <RbTableCell>Ячейка_12</RbTableCell>
          </RbTableRow>
          <RbTableRow>
            <RbTableCell>Ячейка_13</RbTableCell>
            <RbTableCell>Ячейка_14</RbTableCell>
            <RbTableCell>Ячейка_15</RbTableCell>
            <RbTableCell>Ячейка_16</RbTableCell>
          </RbTableRow>
        </tbody>
      </RbTable>
      <div className="use-case-title">
        Пользовательская, подсветка строк при наведении
      </div>
      <RbTable custom hover>
        <tbody>
          <RbTableRow>
            <RbTableCell>Ячейка_1</RbTableCell>
            <RbTableCell>Ячейка_2</RbTableCell>
            <RbTableCell>Ячейка_3</RbTableCell>
            <RbTableCell>Ячейка_4</RbTableCell>
          </RbTableRow>
          <RbTableRow>
            <RbTableCell>Ячейка_5</RbTableCell>
            <RbTableCell>Ячейка_6</RbTableCell>
            <RbTableCell>Ячейка_7</RbTableCell>
            <RbTableCell>Ячейка_8</RbTableCell>
          </RbTableRow>
          <RbTableRow>
            <RbTableCell>Ячейка_9</RbTableCell>
            <RbTableCell>Ячейка_10</RbTableCell>
            <RbTableCell>Ячейка_11</RbTableCell>
            <RbTableCell>Ячейка_12</RbTableCell>
          </RbTableRow>
          <RbTableRow>
            <RbTableCell>Ячейка_13</RbTableCell>
            <RbTableCell>Ячейка_14</RbTableCell>
            <RbTableCell>Ячейка_15</RbTableCell>
            <RbTableCell>Ячейка_16</RbTableCell>
          </RbTableRow>
        </tbody>
      </RbTable>
      <div className="use-case-title">C данными, переданными через проп</div>
      <RbTable tableData={defaultTable.itemsList} bordered />
      <div className="use-case-title">Стилизованная через классы</div>
      <RbTable
        tableData={defaultTable.itemsList}
        className="table-dark table-borderless table-sm align-middle text-center"
      />
    </>
  );
}

export default TableRoute;
