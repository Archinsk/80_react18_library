import RbNav from "../components/Bootstrap_5.3.3/RbNav";
import RbNavLink from "../components/Bootstrap_5.3.3/RbNavLink";

function NavLinkRoute() {
  return (
    <>
      <h2>NavLink</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">
        С указанием типа (ссылка-роутер, обычная, активатор Bootstrap-действия)
      </div>
      <RbNav>
        <RbNavLink href="/nav">Ссылка-роутер</RbNavLink>
        <RbNavLink type="a" href="https://ya.ru">
          Обычная ссылка
        </RbNavLink>
        <RbNavLink href="/nav" disabled>
          Отключенная
        </RbNavLink>
        <RbNavLink href="/nav" icon="favorite">
          С иконкой
        </RbNavLink>
      </RbNav>
      <div className="use-case-title">
        С указанием Bootstrap-действия и его цели (выпадающий список, модальное
        окно, таб-вкладка)
      </div>
    </>
  );
}

export default NavLinkRoute;
