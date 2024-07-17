import RbModal from "../components/Bootstrap_5.3.3/RbModal";
import RbModalBody from "../components/Bootstrap_5.3.3/RbModalBody";
import RbModalButton from "../components/Bootstrap_5.3.3/RbModalButton";
import RbModalHeader from "../components/Bootstrap_5.3.3/RbModalHeader";

function ModalHeaderRoute() {
  return (
    <>
      <h2>ModalHeader</h2>
      <h3>Варианты использования</h3>
      <RbModalButton targetId="modal-01" className="btn-primary me-3 mb-3">
        Без пропов
      </RbModalButton>
      <RbModal id="modal-01" header>
        Хедер без пропов
      </RbModal>
      <RbModalButton targetId="modal-02" className="btn-primary me-3 mb-3">
        С текстом заголовка
      </RbModalButton>
      <RbModal
        id="modal-02"
        header
        title="Стандартный заголовок модального окна Bootstrap"
      >
        Содержимое модального окна
      </RbModal>
      <RbModalButton targetId="modal-03" className="btn-primary me-3 mb-3">
        Без кнопки закрытия
      </RbModalButton>
      <RbModal id="modal-03" header title="Нет кнопки -->" noCloseButton>
        Содержимое модального окна
      </RbModal>
      <RbModalButton targetId="modal-04" className="btn-primary me-3 mb-3">
        Кастомный заголовок
      </RbModalButton>
      <RbModal id="modal-04" custom>
        <RbModalHeader noTitle>
          <i>
            Кастомные <b>теги</b> заголовка
          </i>
        </RbModalHeader>
        <RbModalBody>Содержимое модального окна</RbModalBody>
      </RbModal>
    </>
  );
}

export default ModalHeaderRoute;
