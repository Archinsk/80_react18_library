import RbModal from "../components/Bootstrap_5.3.3/RbModal";
import RbModalButton from "../components/Bootstrap_5.3.3/RbModalButton";

function ModalRoute() {
  return (
    <div>
      Modal Route
      <h3>Варианты использования</h3>
      <RbModalButton targetId="modal01" class="btn-primary mr-3 mb-3">
        Без пропов
      </RbModalButton>
      <RbModal id="modal01">Содержимое модального окна</RbModal>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <RbModalButton target-id="modal02" class="btn-primary mr-3 mb-3">
        С хедером и футером
      </RbModalButton>
      <RbModal id="modal02" header footer>
        <template v-slot:modal-header>Заголовок</template>
        Содержимое модального окна
        <template v-slot:modal-footer>Футер</template>
      </RbModal>
      <RbModalButton target-id="modal03" class="btn-primary mr-3 mb-3">
        Маленькое
      </RbModalButton>
      <RbModal id="modal03" header size="sm">
        <template v-slot:modal-header>Маленькое окно</template>Содержимое
        модального окна
      </RbModal>
      <RbModalButton target-id="modal04" class="btn-primary mr-3 mb-3">
        Центрированное вертикально
      </RbModalButton>
      <RbModal id="modal04" vertical-center>
        Содержимое модального окна
      </RbModal>
      <RbModalButton target-id="modal05" class="btn-primary mr-3 mb-3">
        Прокручиваемое
      </RbModalButton>
      <RbModal id="modal05" header size="sm" scrollable>
        <template v-slot:modal-header>Прокручиваемое окно</template>Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Aperiam, beatae ducimus
        eaque eligendi harum ipsum maiores quasi quod quos reprehenderit. Autem
        blanditiis corporis dicta dignissimos, eius expedita hic id ipsa natus
        nihil nulla odit, pariatur porro quia quibusdam rerum velit! Ab cum
        magni numquam! Asperiores aut dicta error ex facilis, ipsum minima nihil
        provident quo sequi! A alias aliquam animi asperiores aspernatur at
        atque cumque debitis deleniti dolore dolores dolorum eius est ex fugit
        illo iste iusto labore magnam, molestias necessitatibus, nesciunt, odio
        omnis possimus quaerat quia ratione rem reprehenderit sit totam vel
        veritatis vero voluptates? Alias at doloremque iste laborum, neque nobis
        possimus? A ab aperiam aut debitis dicta eos error et hic illum, labore
        omnis perspiciatis quae qui, sed sint sunt unde. Debitis dolore ducimus
        iste, minus nemo nobis officiis repellendus similique. Accusamus amet,
        aperiam aspernatur at atque culpa dolorem eius, eos eum fugiat ipsum
        iste itaque laborum nisi quas ratione tempore unde ut vero vitae. Cumque
        excepturi iusto nihil odio omnis provident reiciendis? Aliquam corporis
        eaque eveniet facere porro, quaerat repellendus sit veniam voluptas
        voluptate. Debitis doloribus impedit laboriosam praesentium veniam?
        Accusamus consectetur earum fugiat in ipsa magnam, maxime nemo quam rem
        sed sit tempora ut voluptatem! Minima mollitia quam suscipit? Ad debitis
        deleniti eos est explicabo fugiat ipsa iure nemo placeat, totam. A
        accusamus beatae consequuntur deserunt dicta dolore, dolorem ea eum
        excepturi expedita facere fugit ipsam iure laborum, minus neque nisi
        obcaecati officiis omnis pariatur quam quisquam tempora tempore
        veritatis vero vitae voluptatibus! Dolores, porro.
      </RbModal>
      <RbModalButton target-id="modal06" class="btn-primary mr-3 mb-3">
        Без дефолтного заголовка
      </RbModalButton>
      <RbModal id="modal06" header no-title>
        <template v-slot:modal-header>
          <i>
            Кастомные <b>теги</b> заголовка
          </i>
        </template>
        Содержимое модального окна
      </RbModal>
      <RbModalButton target-id="modal07" class="btn-primary mr-3 mb-3">
        Без кнопки закрытия
      </RbModalButton>
      <RbModal id="modal07" header no-close-button>
        <template v-slot:modal-header>Нет кнопки --></template>Содержимое
        модального окна
      </RbModal>
      <RbModalButton target-id="modal08" class="btn-primary mr-3 mb-3">
        Без фона
      </RbModalButton>
      <RbModal id="modal08" header no-backdrop>
        <template v-slot:modal-header>Фон отсутствует</template>Содержимое
        модального окна
      </RbModal>
      <RbModalButton target-id="modal09" class="btn-primary mr-3 mb-3">
        Без клавиатурного закрытия
      </RbModalButton>
      <RbModal id="modal09" header no-keyboard>
        <template v-slot:modal-header>Без клавиатурного закрытия</template>Нажми
        "Esc"
      </RbModal>
      <RbModalButton target-id="modal10" class="btn-primary mr-3 mb-3">
        Не кликабельный фон
      </RbModalButton>
      <RbModal id="modal10" header static-backdrop>
        <template v-slot:modal-header>Не кликабельный фон</template>Клавиатурное
        закрытие (Esc) тоже выключено
      </RbModal> */}
    </div>
  );
}

export default ModalRoute;
