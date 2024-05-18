import RbOffcanvas from "../components/Bootstrap_5.3.3/RbOffcanvas";
import RbOffcanvasBody from "../components/Bootstrap_5.3.3/RbOffcanvasBody";
import RbOffcanvasButton from "../components/Bootstrap_5.3.3/RbOffcanvasButton";
import RbOffcanvasHeader from "../components/Bootstrap_5.3.3/RbOffcanvasHeader";

function OffcanvasRoute() {
  return (
    <>
      <h2>Offcanvas</h2>
      <h3>Варианты использования</h3>
      <RbOffcanvasButton
        targetId="modal-01"
        theme="primary"
        className="me-3 mb-3"
      >
        Без пропов
      </RbOffcanvasButton>
      <RbOffcanvas id="modal-01">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
        beatae ducimus eaque eligendi harum ipsum maiores quasi quod quos
        reprehenderit. Autem blanditiis corporis dicta dignissimos, eius
        expedita hic id ipsa natus nihil nulla odit, pariatur porro quia
        quibusdam rerum velit! Ab cum magni numquam! Asperiores aut dicta error
        ex facilis, ipsum minima nihil provident quo sequi! A alias aliquam
        animi asperiores aspernatur at atque cumque debitis deleniti dolore
        dolores dolorum eius est ex fugit illo iste iusto labore magnam,
        molestias necessitatibus, nesciunt, odio omnis possimus quaerat quia
        ratione rem reprehenderit sit totam vel veritatis vero voluptates? Alias
        at doloremque iste laborum, neque nobis possimus? A ab aperiam aut
        debitis dicta eos error et hic illum, labore omnis perspiciatis quae
        qui, sed sint sunt unde. Debitis dolore ducimus iste, minus nemo nobis
        officiis repellendus similique. Accusamus amet, aperiam aspernatur at
        atque culpa dolorem eius, eos eum fugiat ipsum iste itaque laborum nisi
        quas ratione tempore unde ut vero vitae. Cumque excepturi iusto nihil
        odio omnis provident reiciendis? Aliquam corporis eaque eveniet facere
        porro, quaerat repellendus sit veniam voluptas voluptate. Debitis
        doloribus impedit laboriosam praesentium veniam? Accusamus consectetur
        earum fugiat in ipsa magnam, maxime nemo quam rem sed sit tempora ut
        voluptatem! Minima mollitia quam suscipit? Ad debitis deleniti eos est
        explicabo fugiat ipsa iure nemo placeat, totam. A accusamus beatae
        consequuntur deserunt dicta dolore, dolorem ea eum excepturi expedita
        facere fugit ipsam iure laborum, minus neque nisi obcaecati officiis
        omnis pariatur quam quisquam tempora tempore veritatis vero vitae
        voluptatibus! Dolores, porro.
      </RbOffcanvas>
      <RbOffcanvasButton
        targetId="modal-02"
        theme="primary"
        className="me-3 mb-3"
      >
        С заголовком хедера
      </RbOffcanvasButton>
      <RbOffcanvas id="modal-02" title="Заголовок">
        Содержимое модального окна
      </RbOffcanvas>
      <RbOffcanvasButton
        targetId="modal-03"
        theme="primary"
        className="me-3 mb-3"
      >
        Упрощённый без кнопки закрытия в хедере, с заголовком
      </RbOffcanvasButton>
      <RbOffcanvas id="modal-03" title="Нет кнопки -->" noCloseButton>
        Содержимое модального окна
      </RbOffcanvas>
      <RbOffcanvasButton
        targetId="modal-04"
        theme="primary"
        className="me-3 mb-3"
      >
        Упрощённый без хедера
      </RbOffcanvasButton>
      <RbOffcanvas id="modal-04" noCloseButton>
        Содержимое модального окна
      </RbOffcanvas>
      <RbOffcanvasButton
        targetId="modal-05"
        theme="primary"
        className="me-3 mb-3"
      >
        Кастомное модальное окно с футером и настраиваемым хедером
      </RbOffcanvasButton>
      <RbOffcanvas id="modal-05" custom>
        <RbOffcanvasHeader noTitle>
          <i>
            Кастомные <b>теги</b> заголовка
          </i>
        </RbOffcanvasHeader>
        <RbOffcanvasBody>Содержимое модального окна</RbOffcanvasBody>
      </RbOffcanvas>
      <RbOffcanvasButton
        targetId="modal-06"
        theme="primary"
        className="me-3 mb-3"
      >
        Без фона
      </RbOffcanvasButton>
      <RbOffcanvas id="modal-06" title="Фон отсутствует" noBackdrop>
        Содержимое модального окна
      </RbOffcanvas>
      <RbOffcanvasButton
        targetId="modal-07"
        theme="primary"
        className="me-3 mb-3"
      >
        Без клавиатурного закрытия
      </RbOffcanvasButton>
      <RbOffcanvas id="modal-07" title="Без клавиатурного закрытия" noKeyboard>
        Нажми "Esc"
      </RbOffcanvas>
      <RbOffcanvasButton
        targetId="modal-08"
        theme="primary"
        className="me-3 mb-3"
      >
        Не кликабельный фон
      </RbOffcanvasButton>
      <RbOffcanvas
        id="modal-08"
        title="Не кликабельный фон"
        staticBackdrop
        noKeyboard
      >
        Клавиатурное закрытие (Esc) тоже выключено
      </RbOffcanvas>
    </>
  );
}

export default OffcanvasRoute;
