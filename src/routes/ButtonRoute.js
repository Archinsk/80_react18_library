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
      Button Route
      <h3>Варианты использования</h3>
      <div>Без пропов</div>
      <RbButton>Простая</RbButton>
      <div>Типизированная</div>
      <RbButton type="submit">Submit</RbButton>
      <div>Тематическая</div>
      <RbButton theme="danger">Danger</RbButton>
      <div>С указанием размера (только "sm" и "lg")</div>
      <RbButton theme="secondary" size="sm" class="mr-3">
        Маленькая
      </RbButton>
      <RbButton theme="secondary" class="mr-3">
        Обычная
      </RbButton>
      <RbButton theme="secondary" size="lg">
        Большая
      </RbButton>
      <div>Блочная</div>
      <RbButton theme="primary" block>
        На всю ширину
      </RbButton>
      <div>С иконкой</div>
      <RbButton theme="primary" icon="star" size="sm" class="mr-3">
        В избранное
      </RbButton>
      <RbButton theme="primary" icon="star" class="mr-3">
        В избранное
      </RbButton>
      <RbButton theme="primary" icon="star" size="lg">
        В избранное
      </RbButton>
      <div>Квадратная</div>
      <RbButton theme="warning" square size="sm" class="mr-3">
        Ш
      </RbButton>
      <RbButton theme="warning" square class="mr-3">
        Ш
      </RbButton>
      <RbButton theme="warning" square size="lg">
        Ш
      </RbButton>
      <div>Квадратная с иконкой</div>
      <RbButton theme="danger" icon="favorite" square size="sm" class="mr-3" />
      <RbButton theme="danger" icon="favorite" square class="mr-3" />
      <RbButton theme="danger" icon="favorite" square size="lg" />
      <div>С бэйджем</div>
      <RbButton theme="secondary" size="sm" class="mr-3" badge={defaultBadge}>
        Маленькая
      </RbButton>
      <RbButton theme="secondary" class="mr-3" badge={defaultBadge}>
        Обычная
      </RbButton>
      <RbButton theme="secondary" size="lg" badge={defaultBadge}>
        Большая
      </RbButton>
      <div>
        Кнопка с текстом и иконкой, на экранах шире 768px становящаяся
        квадратной кнопкой с иконкой
      </div>
      <RbButton theme="primary" icon="home" additional-classes="btn-square-md">
        Button
      </RbButton>
    </>
  );
}

export default ButtonRoute;
