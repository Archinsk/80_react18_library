//import React from "react";
import RbDropdownItem from "../components/Bootstrap_5.3.3/RbDropdownItem";
import RbDropdownMenu from "../components/Bootstrap_5.3.3/RbDropdownMenu";

function DropdownItemRoute() {
  return (
    <>
      <h2>DropdownItem</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">
        Базовые типы (ссылка, ссылка-роутер, активная, отключенная, с иконкой)
      </div>
      <RbDropdownMenu custom className="show position-static">
        <RbDropdownItem type="a" href="https://ya.ru">
          Обычная ссылка
        </RbDropdownItem>
        <RbDropdownItem href="/icon">Ссылка-роутер</RbDropdownItem>
        <RbDropdownItem href="/dropdownitem" active>
          Активная
        </RbDropdownItem>
        <RbDropdownItem href="/nav" disabled>
          Отключенная
        </RbDropdownItem>
        <RbDropdownItem
          href="/icon"
          icon="star"
          badge={{ className: "ms-2", theme: "success", text: "Значок" }}
        >
          С иконкой и значком
        </RbDropdownItem>
      </RbDropdownMenu>
      <div className="use-case-title">Стилизованный через классы</div>
      <RbDropdownMenu custom className="show position-static">
        <RbDropdownItem type="a" href="https://ya.ru">
          Обычная
        </RbDropdownItem>
        <RbDropdownItem href="/dropdownitem" className="bg-info text-white">
          Стилизация 1
        </RbDropdownItem>
        <RbDropdownItem
          href="/nav"
          className="bg-warning rounded-end border border-danger border-3"
        >
          Стилизация 2
        </RbDropdownItem>
      </RbDropdownMenu>
    </>
  );
}

export default DropdownItemRoute;
