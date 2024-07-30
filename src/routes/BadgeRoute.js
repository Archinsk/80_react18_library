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
          className: "ms-2",
          text: 25,
        },
      },
    ],
  };

  const defaultBadge = {
    theme: "danger",
    className:
      "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger",
    text: 25,
  };

  return (
    <>
      <h2>Badge</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">Без пропов</div>
      <RbBadge>Важно!</RbBadge>
      <div className="use-case-title">С темой</div>
      <RbBadge theme="info">Важно!</RbBadge>
      <div className="use-case-title">C темой, скругленный через классы</div>
      <RbBadge theme="warning" className="rounded-pill">
        Внимание
      </RbBadge>
      <div className="use-case-title">Внутри пункта навигации</div>
      <RbNav
        tag="ul"
        className="navbar-nav bg-dark-subtle"
        itemsList={defaultNav.itemsList}
      />
      <div className="use-case-title">Внутри кнопки</div>
      <RbButton theme="secondary" badge={defaultBadge}>
        Сообщения
      </RbButton>
      <div className="use-case-title">Стилизованный через классы</div>
      <RbBadge className="bg-dark-subtle border-start border-5 border-danger rounded-0">
        Важно!
      </RbBadge>
    </>
  );
}

export default BadgeRoute;
