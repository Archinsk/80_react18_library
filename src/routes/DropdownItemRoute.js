//import React from "react";
import RbDropdownItem from "../components/Bootstrap_5.3.3/RbDropdownItem";

function DropdownItemRoute() {
  return (
    <>
      <h2>DropdownItem</h2>
      <h3>Варианты использования</h3>
      <div className="dropdown-menu show p-0 border-0">
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
      </div>

      <div>С иконкой</div>
      <RbDropdownItem href="/icon" icon="star">
        Избранное
      </RbDropdownItem>
    </>
  );
}

export default DropdownItemRoute;
