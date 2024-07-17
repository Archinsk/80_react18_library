//import React from "react";
import RbDropdownItem from "../components/Bootstrap_5.3.3/RbDropdownItem";
import RbDropdownMenu from "../components/Bootstrap_5.3.3/RbDropdownMenu";

function DropdownItemRoute() {
  return (
    <>
      <h2>DropdownItem</h2>
      <h3>Варианты использования</h3>
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
        <RbDropdownItem href="/icon" icon="star">
          С иконкой
        </RbDropdownItem>
      </RbDropdownMenu>
    </>
  );
}

export default DropdownItemRoute;
