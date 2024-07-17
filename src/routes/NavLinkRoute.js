import RbNav from "../components/Bootstrap_5.3.3/RbNav";
import RbNavLink from "../components/Bootstrap_5.3.3/RbNavLink";

function NavLinkRoute() {
  return (
    <>
      <h2>NavLink</h2>
      <h3>Варианты использования</h3>
      <RbNav>
        <RbNavLink type="a" href="https://ya.ru">
          Обычная ссылка
        </RbNavLink>
        <RbNavLink href="/nav">Ссылка-роутер</RbNavLink>
        <RbNavLink href="/nav" disabled>
          Отключенная
        </RbNavLink>
        <RbNavLink href="/nav" icon="favorite">
          С иконкой
        </RbNavLink>
      </RbNav>
    </>
  );
}

export default NavLinkRoute;
