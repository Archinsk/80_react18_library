import RbButton from "../components/Bootstrap_5.3.3/RbButton";

function ButtonRoute() {
  const defaultBadge = {
    theme: "danger",
    pill: false,
    notNullDisplay: true,
    value: 25,
    max: 99,
  };

  return (
    <>
      <h2>Button</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">Без пропов</div>
      <RbButton>Простая</RbButton>
      <div className="use-case-title">Типизированная (type="submit")</div>
      <RbButton type="submit">Submit</RbButton>
      <div className="use-case-title">Тематическая (theme="danger")</div>
      <RbButton theme="danger">Danger</RbButton>
      <div className="use-case-title">
        С указанием размера (только "sm" и "lg")
      </div>
      <RbButton theme="secondary" size="sm" className="me-3">
        Маленькая
      </RbButton>
      <RbButton theme="secondary" className="me-3">
        Обычная
      </RbButton>
      <RbButton theme="secondary" size="lg">
        Большая
      </RbButton>
      <div className="use-case-title">
        Блочная (на всю ширину родительского элемента)
      </div>
      <RbButton theme="primary" block>
        На всю ширину
      </RbButton>
      <div className="use-case-title">С иконкой</div>
      <RbButton theme="primary" icon="star" size="sm" className="me-3">
        В избранное
      </RbButton>
      <RbButton theme="primary" icon="star" className="me-3">
        В избранное
      </RbButton>
      <RbButton theme="primary" icon="star" size="lg">
        В избранное
      </RbButton>
      <div className="use-case-title">Квадратная</div>
      <RbButton theme="warning" square size="sm" className="me-3">
        Ш
      </RbButton>
      <RbButton theme="warning" square className="me-3">
        Ш
      </RbButton>
      <RbButton theme="warning" square size="lg">
        Ш
      </RbButton>
      <div className="use-case-title">Квадратная с иконкой</div>
      <RbButton
        theme="danger"
        icon="favorite"
        square
        size="sm"
        className="me-3"
      />
      <RbButton theme="danger" icon="favorite" square className="me-3" />
      <RbButton theme="danger" icon="favorite" square size="lg" />
      <div className="use-case-title">С бэйджем</div>
      <RbButton
        theme="secondary"
        size="sm"
        className="me-3"
        badge={defaultBadge}
      >
        Маленькая
      </RbButton>
      <RbButton theme="secondary" className="me-3" badge={defaultBadge}>
        Обычная
      </RbButton>
      <RbButton theme="secondary" size="lg" badge={defaultBadge}>
        Большая
      </RbButton>
      <div className="use-case-title">
        Кнопка с текстом и иконкой, на экранах шире 768px становящаяся
        квадратной кнопкой с иконкой
      </div>
      <RbButton theme="primary" icon="home" className="btn-square-md">
        Button
      </RbButton>
    </>
  );
}

export default ButtonRoute;
