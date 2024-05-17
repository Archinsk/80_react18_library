// Версия 1.01 от 17.05.2024

import RbButton from "../components/Bootstrap_5.3.3/RbButton";
import RbModal from "../components/Bootstrap_5.3.3/RbModal";
import RbModalBody from "../components/Bootstrap_5.3.3/RbModalBody";
import RbModalButton from "../components/Bootstrap_5.3.3/RbModalButton";
import RbModalFooter from "../components/Bootstrap_5.3.3/RbModalFooter";

function ModalFooterRoute() {
  return (
    <>
      <h2>ModalFooter</h2>
      <h3>Варианты использования</h3>
      <RbModalButton targetId="modal-01" className="btn-primary">
        Простейшее модальное окно
      </RbModalButton>
      <RbModal id="modal-01" custom>
        <RbModalBody>Простой слот без параметров</RbModalBody>
        <RbModalFooter>
          <RbButton theme="secondary">Отмена</RbButton>
          <RbButton theme="primary">OK</RbButton>
        </RbModalFooter>
      </RbModal>
    </>
  );
}

export default ModalFooterRoute;
