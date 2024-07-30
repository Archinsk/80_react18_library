import { Link } from "react-router-dom";
import RbCard from "../components/Bootstrap_5.3.3/RbCard";
import RbCardBody from "../components/Bootstrap_5.3.3/RbCardBody";
import RbCardFooter from "../components/Bootstrap_5.3.3/RbCardFooter";
import RbCardHeader from "../components/Bootstrap_5.3.3/RbCardHeader";

function CardRoute() {
  return (
    <>
      <h2>Card</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">Без пропов</div>
      <RbCard>Содержимое карточки</RbCard>
      <div className="use-case-title">
        С хедером (принимает 2 дочерних элемента)
      </div>
      <RbCard header>
        <>Содержимое хедера карточки</>
        <>Содержимое тела карточки</>
      </RbCard>
      <div className="use-case-title">
        С футером (принимает 2 дочерних элемента)
      </div>
      <RbCard footer>
        <>Содержимое тела карточки</>
        <>Содержимое футера карточки</>
      </RbCard>
      <div className="use-case-title">
        С хедером и футером (принимает 3 дочерних элемента)
      </div>
      <RbCard header footer>
        <>Содержимое хедера карточки</>
        <>Содержимое тела карточки</>
        <>Содержимое футера карточки</>
      </RbCard>
      <div className="use-case-title">Кастомная, с хедером и футером</div>
      <RbCard custom>
        <RbCardHeader>Содержимое хедера карточки</RbCardHeader>
        <RbCardBody>
          <h5 className="card-title">Заголовок карточки</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Подзаголовок карточки
          </h6>
          <p className="card-title">Первый абзац тела карточки</p>
          <p className="card-title">Второй абзац тела карточки</p>
          <p className="card-title">Третий абзац тела карточки</p>
          <a href="#" className="card-link">
            Ссылка карточки 1
          </a>
          <a href="#" className="card-link">
            Ссылка карточки 2
          </a>
        </RbCardBody>
        <RbCardFooter>Содержимое футера карточки</RbCardFooter>
      </RbCard>
      <div className="use-case-title">
        Кастомная, стилизованная через классы
      </div>
      <RbCard
        custom
        className="w-50 text-center rounded-4 bg-warning-subtle shadow"
      >
        <RbCardHeader className="rounded-top-4 bg-info-subtle">
          Содержимое хедера карточки
        </RbCardHeader>
        <RbCardBody>
          <h5 className="card-title">Заголовок карточки</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Подзаголовок карточки
          </h6>
          <p className="card-title">Первый абзац тела карточки</p>
          <p className="card-title">Второй абзац тела карточки</p>
          <p className="card-title">Третий абзац тела карточки</p>
          <a href="#" className="card-link">
            Ссылка карточки 1
          </a>
          <a href="#" className="card-link">
            Ссылка карточки 2
          </a>
        </RbCardBody>
        <RbCardFooter className="rounded-bottom-4 bg-dark text-white">
          Содержимое футера карточки
        </RbCardFooter>
      </RbCard>
      <div className="use-case-title">
        Карточка с изображениями (в том числе горизонтальая)
      </div>
      <div>
        См. <Link to="/cardwithimages">CardWithImages</Link>
      </div>
    </>
  );
}

export default CardRoute;
