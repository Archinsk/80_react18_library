import RbNavLink from "../components/Bootstrap_5.3.3/RbNavLink";

function NavLinkRoute() {
  return (
    <>
      <h2>NavLink</h2>
      <h3>Варианты использования</h3>
      <div>Обычная ссылка</div>
      <RbNavLink type="a" href="https://ya.ru">
        Яндекс
      </RbNavLink>
      <div>Ссылка-роутер</div>
      <RbNavLink href="/nav">Страница Nav</RbNavLink>
      <div>Отключенная</div>
      <RbNavLink href="/nav" disabled>
        Отключенная
      </RbNavLink>
      <div>Ссылка-роутер с иконкой</div>
      <RbNavLink href="/nav" icon="favorite">
        Страница Nav
      </RbNavLink>
    </>
  );
}

export default NavLinkRoute;
