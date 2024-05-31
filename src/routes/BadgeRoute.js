import RbBadge from "../components/Bootstrap_5.3.3/RbBadge";
import RbNav from "../components/Bootstrap_5.3.3/RbNav";
import RbButton from "../components/Bootstrap_5.3.3/RbButton";

function BadgeRoute() {
  const defaultNav = {
    itemsList: [
      {
        id: "nav-link-home",
        name: "Home",
        type: "router-link",
        href: "/",
        active: false,
        disabled: false,
      },
      {
        id: "nav-link-alert",
        name: "NavLink",
        type: "modal-link",
        href: "/alert",
        active: false,
        disabled: false,
        badge: {
          theme: "danger",
          pill: false,
          notNullDisplay: true,
          value: 25,
          max: 99,
        },
      },
    ],
  };

  const defaultBadge = {
    theme: "danger",
    pill: false,
    notNullDisplay: true,
    value: 25,
    max: 99,
  };

  return (
    <>
      Badge Route
      <h3>Варианты использования</h3>
      <div className="use-case-title">Без value, с темой</div>
      <RbBadge theme="info">Важно!</RbBadge>
      <div className="use-case-title">Скруглённый, с темой</div>
      <RbBadge theme="warning" pill>
        Внимание
      </RbBadge>
      <div className="use-case-title">Со значением</div>
      <RbBadge value="10" />
      <div className="use-case-title">
        С указанием максимального значения и его превышением
      </div>
      <RbBadge value="120" theme="danger" max="99" />
      <div className="use-case-title">С отображением нулевого значения</div>
      <RbBadge value="0" theme="danger" />
      <div className="use-case-title">Без отображения нулевого значения</div>
      <RbBadge value="0" theme="danger" notNullDisplay />
      <div className="use-case-title">Внутри пункта навигации</div>
      <RbNav tag="ul" className="navbar-nav" itemsList={defaultNav.itemsList} />
      <div className="use-case-title">Внутри кнопки</div>
      <RbButton theme="secondary" badge={defaultBadge}>
        Сообщения
      </RbButton>
    </>
  );
}

export default BadgeRoute;
