import RbCard from "../components/Bootstrap_5.3.3/RbCard";

function CardRoute() {
  return (
    <>
      <h2>Card</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">Упрощенная карточка без пропов</div>
      <RbCard>Слот body</RbCard>
      <div className="use-case-title">Упрощенная карточка с хедером</div>
      <RbCard header>
        <>Слот хедера карточки</>
        <>Слот тела карточки</>
      </RbCard>
      <div className="use-case-title">Упрощенная карточка с футером</div>
      <RbCard footer>
        <>Слот тела карточки</>
        <>Слот футера карточки</>
      </RbCard>
      <div className="use-case-title">
        Упрощенная карточка с хедером и футером
      </div>
      <RbCard footer>
        <>Слот хедера карточки</>
        <>Слот тела карточки</>
        <>Слот футера карточки</>
      </RbCard>

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
