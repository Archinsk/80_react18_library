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
      <div className="use-case-title">Упрощенная карточка без пропов</div>
      <RbCard>Содержимое карточки</RbCard>
      <div className="use-case-title">Упрощенная карточка с хедером</div>
      <RbCard header>
        <>Содержимое хедера карточки</>
        <>Содержимое тела карточки</>
      </RbCard>
      <div className="use-case-title">Упрощенная карточка с футером</div>
      <RbCard footer>
        <>Содержимое тела карточки</>
        <>Содержимое футера карточки</>
      </RbCard>
      <div className="use-case-title">
        Упрощенная карточка с хедером и футером
      </div>
      <RbCard header footer>
        <>Содержимое хедера карточки</>
        <>Содержимое тела карточки</>
        <>Содержимое футера карточки</>
      </RbCard>
      <div className="use-case-title">
        Кастомная карточка с хедером и футером
      </div>
      <RbCard custom>
        <RbCardHeader>Содержимое хедера карточки</RbCardHeader>
        <RbCardBody>
          <p>Первый абзац тела карточки</p>
          <p>Второй абзац тела карточки</p>
          <p>Третий абзац тела карточки</p>
        </RbCardBody>
        <RbCardFooter>Содержимое футера карточки</RbCardFooter>
      </RbCard>
      <div className="use-case-title">
        Карточка с изображениями (в том числе горизонтальая)
      </div>
      <div>
        См. <Link to="/pagination">Pagination</Link>
      </div>
      {/* <div className="use-case-title">Горизонтальная с картинкой слева</div>
      <RbCard horizontal>
        <>Слот хедера карточки</>
        <>Слот тела карточки</>
        <>Слот футера карточки</>
      </RbCard>
      <div className="use-case-title">Горизонтальная с картинкой справа</div>
      <RbCard horizontal>
        <>Слот хедера карточки</>
        <>Слот тела карточки</>
        <>Слот футера карточки</>
      </RbCard>
      <div className="use-case-title">
        Горизонтальная с картинкой справа и указанием количества колонок под
        изображение
      </div> */}
      {/* <div className="use-case-title">
        Горизонтальная с изображениями слева и справа
      </div>
      <RbCard imageStart imageEnd horizontal>
        <img src="images/default.jpg" />
        <>
          <p>Содержание тела карточки</p>
          <p>Продолжение содержания тела карточки</p>
        </>
        <img src="images/default.jpg" className="img-fluid rounded-end" />
      </RbCard> */}
      {/* <div className="use-case-title">
        Горизонтальная с изображениями слева и справа и указанием количества
        колонок под каждое изображение
      </div>
      <RbCard horizontal>
        <>Слот хедера карточки</>
        <>Слот тела карточки</>
        <>Слот футера карточки</>
      </RbCard>
      <RbCard horizontal>
        <>Слот хедера карточки</>
        <>Слот тела карточки</>
        <>Слот футера карточки</>
      </RbCard> */}

      {/* <div>С хедером и футером</div>
      <RbCard header footer>
        <template>Хедер карточки</template>
        <template>Тело карточки</template>
        <template>Футер карточки</template>
      </RbCard>
      <div>Без хедера и футера, изображение сверху</div>
      <RbCard imagePosition="top">
        <template>
          <img src="images/default.jpg" style="height: calc(100% - 4rem)" />
        </template>
        <template>Тело карточки</template>
      </RbCard>
      <div>Без хедера и футера, изображение снизу</div>
      <RbCard imagePosition="bottom">
        <template>
          <img src="images/default.jpg" style="height: calc(100% - 4rem)" />
        </template>
        <template>Тело карточки</template>
      </RbCard>
      <div>Без хедера и футера, изображение на всю карточку</div>
      <RbCard no-body imagePosition="full">
        <template>
          <img src="images/default.jpg" className="card-img" />
        </template>
        <div className="card-text">Текст поверх карточки</div>
      </RbCard> */}
    </>
  );
}

export default CardRoute;