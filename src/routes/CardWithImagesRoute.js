import RbCardWithImages from "../components/Bootstrap_5.3.3/RbCardWithImages";

function CardWithImagesRoute() {
  return (
    <>
      <h2>CardWithImages</h2>
      <h3>Варианты использования</h3>
      {/* <div className="use-case-title">Горизонтальная с картинкой слева</div>
      <RbCardWithImages horizontal>
        <>Слот хедера карточки</>
        <>Слот тела карточки</>
        <>Слот футера карточки</>
      </RbCardWithImages>
      <div className="use-case-title">Горизонтальная с картинкой справа</div>
      <RbCardWithImages horizontal>
        <>Слот хедера карточки</>
        <>Слот тела карточки</>
        <>Слот футера карточки</>
      </RbCardWithImages>
      <div className="use-case-title">
        Горизонтальная с картинкой справа и указанием количества колонок под
        изображение
      </div>
      <div className="use-case-title">
        Горизонтальная с изображениями слева и справа
      </div>
      <RbCardWithImages imageStart imageEnd horizontal>
        <img src="images/default.jpg" />
        <>
          <p>Содержание тела карточки</p>
          <p>Продолжение содержания тела карточки</p>
        </>
        <img src="images/default.jpg" className="img-fluid rounded-end" />
      </RbCardWithImages>
      <div className="use-case-title">
        Горизонтальная с изображениями слева и справа и указанием количества
        колонок под каждое изображение
      </div>
      <RbCardWithImages horizontal>
        <>Слот хедера карточки</>
        <>Слот тела карточки</>
        <>Слот футера карточки</>
      </RbCardWithImages>
      <RbCardWithImages horizontal>
        <>Слот хедера карточки</>
        <>Слот тела карточки</>
        <>Слот футера карточки</>
      </RbCardWithImages>{" "}
      <div>С хедером и футером</div>
      <RbCardWithImages header footer>
        <template>Хедер карточки</template>
        <template>Тело карточки</template>
        <template>Футер карточки</template>
      </RbCardWithImages> */}
      <div className="use-case-title">
        Без хедера и футера, изображение сверху
      </div>
      <RbCardWithImages imageStart className="w-25">
        <img src="images/default.jpg" />
        <>Содержимое карточки</>
      </RbCardWithImages>
      <div className="use-case-title">
        Без хедера и футера, изображение снизу
      </div>
      <RbCardWithImages imageEnd className="w-25">
        <>Содержимое карточки</>
        <img src="images/default.jpg" />
      </RbCardWithImages>
      <div className="use-case-title">
        Без хедера и футера, изображение сверху и снизу
      </div>
      <RbCardWithImages imageStart imageEnd className="w-25">
        <img src="images/default.jpg" />
        <>Содержимое карточки</>
        <img src="images/default.jpg" />
      </RbCardWithImages>
      <div className="use-case-title">
        Без хедера и футера, изображение на всю карточку
      </div>
      <RbCardWithImages imageFull className="w-25">
        <img src="images/default.jpg" className="card-img" />
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p class="card-text">
          <small>Last updated 3 mins ago</small>
        </p>
      </RbCardWithImages>
    </>
  );
}

export default CardWithImagesRoute;
