import RbModal from "../components/Bootstrap_5.3.3/RbModal";
import RbModalButton from "../components/Bootstrap_5.3.3/RbModalButton";

function ModalBodyRoute() {
  return (
    <>
      <h2>ModalBody</h2>
      <h3>Варианты использования</h3>
      <RbModalButton targetId="modal-01" className="btn-primary">
        Простейшее модальное окно
      </RbModalButton>
      <RbModal id="modal-01">Простой слот без параметров</RbModal>
    </>
  );
}

export default ModalBodyRoute;
