import RbDropdownItem from "../components/Bootstrap_5.3.3/RbDropdownItem";

function DropdownItemRoute() {
  return (
    <>
      DropdownItem Route
      <h3>Варианты использования</h3>
      <div>Обычная ссылка</div>
      <RbDropdownItem type="a" href="https://ya.ru">
        Яндекс
      </RbDropdownItem>
      <div>Ссылка-роутер</div>
      <RbDropdownItem href="/icon">Страница Icon</RbDropdownItem>
      <div>Отключенная</div>
      <RbDropdownItem href="/nav" disabled>
        Отключенная
      </RbDropdownItem>
      <div>С иконкой</div>
      <RbDropdownItem href="/icon" icon="star">
        Избранное
      </RbDropdownItem>
    </>
  );
}

export default DropdownItemRoute;
