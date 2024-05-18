import RbOffcanvas from "../components/Bootstrap_5.3.3/RbOffcanvas";
import RbOffcanvasBody from "../components/Bootstrap_5.3.3/RbOffcanvasBody";
import RbOffcanvasButton from "../components/Bootstrap_5.3.3/RbOffcanvasButton";
import RbOffcanvasHeader from "../components/Bootstrap_5.3.3/RbOffcanvasHeader";

function OffcanvasHeaderRoute() {
  return (
    <>
      <h2>OffcanvasHeader</h2>
      <h3>Варианты использования</h3>
      <RbOffcanvasButton
        targetId="offcanvas-01"
        className="btn-primary me-3 mb-3"
      >
        Без пропов
      </RbOffcanvasButton>
      <RbOffcanvas id="offcanvas-01">Хедер без пропов</RbOffcanvas>
      <RbOffcanvasButton
        targetId="offcanvas-02"
        className="btn-primary me-3 mb-3"
      >
        С текстом заголовка
      </RbOffcanvasButton>
      <RbOffcanvas
        id="offcanvas-02"
        header
        title="Стандартный заголовок сайдбара Bootstrap"
      >
        Содержимое модального окна
      </RbOffcanvas>
      <RbOffcanvasButton
        targetId="offcanvas-03"
        className="btn-primary me-3 mb-3"
      >
        Без кнопки закрытия
      </RbOffcanvasButton>
      <RbOffcanvas
        id="offcanvas-03"
        header
        title="Нет кнопки -->"
        noCloseButton
      >
        Содержимое модального окна
      </RbOffcanvas>
      <RbOffcanvasButton
        targetId="offcanvas-04"
        className="btn-primary me-3 mb-3"
      >
        Кастомный заголовок
      </RbOffcanvasButton>
      <RbOffcanvas id="offcanvas-04" custom>
        <RbOffcanvasHeader noTitle>
          <i>
            Кастомные <b>теги</b> заголовка
          </i>
        </RbOffcanvasHeader>
        <RbOffcanvasBody>Содержимое модального окна</RbOffcanvasBody>
      </RbOffcanvas>
    </>
  );
}

export default OffcanvasHeaderRoute;
