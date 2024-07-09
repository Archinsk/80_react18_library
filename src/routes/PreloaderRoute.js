import RbPreloader from "../components/Bootstrap_5.3.3/RbPreloader";

function PreloaderRoute() {
  return (
    <>
      <h2>Preloader</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">Без пропов</div>
      <RbPreloader />
      <div className="use-case-title">С темой</div>
      <RbPreloader theme="primary" />
      <div className="use-case-title">С темой и задним фоном</div>
      <RbPreloader theme="danger" backdrop-colored />
      <div className="use-case-title">Тип "grow"</div>
      <RbPreloader type="grow" />
      <div className="use-case-title">С комментарием</div>
      <RbPreloader comment="Загрузка приложения" />
      <div className="use-case-title">
        С комментарием, цветом темы и цветом комментария
      </div>
      <RbPreloader
        comment="Загрузка приложения"
        theme="info"
        comment-color="danger"
      />
      <div className="use-case-title">size="sm"</div>
      <RbPreloader size="sm" />
      <div className="use-case-title">
        Поверх содержимого родителя (position: absolute)
      </div>
      <div
        className="p-3 position-relative"
        style={{ width: "500px", height: "200px", backgroundColor: "aqua" }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
          veniam?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          facilis nisi nulla? Adipisci amet consequuntur dolores officiis optio
          sint sit!
        </p>
        <RbPreloader comment="Загрузка..." theme="primary" absolute />
      </div>
      <div className="use-case-title">Поверх содержимого родителя, с фоном</div>
      <div
        className="p-3 position-relative"
        style={{
          width: "500px",
          height: "200px",
          backgroundColor: "aquamarine",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
          veniam?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          facilis nisi nulla? Adipisci amet consequuntur dolores officiis optio
          sint sit!
        </p>
        <RbPreloader
          comment="Загрузка..."
          theme="primary"
          absolute
          backdrop-colored
        />
      </div>
      <div>Поверх содержимого родителя, с размытием нижележащего контента</div>
      <div
        className="p-3 position-relative"
        style={{ width: "500px", height: "200px", backgroundColor: "aqua" }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
          veniam?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          facilis nisi nulla? Adipisci amet consequuntur dolores officiis optio
          sint sit!
        </p>
        <RbPreloader
          comment="Загрузка..."
          theme="dark"
          absolute
          backdrop-blurred
        />
      </div>
      <div>
        Поверх содержимого родителя, тонированный фон с размытием нижележащего
        контента
      </div>
      <div
        className="p-3 position-relative"
        style={{
          width: "500px",
          height: "200px",
          backgroundColor: "aquamarine",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
          veniam?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          facilis nisi nulla? Adipisci amet consequuntur dolores officiis optio
          sint sit!
        </p>
        <RbPreloader
          comment="Загрузка..."
          theme="light"
          absolute
          backdrop-colored
          backdrop-blurred
        />
      </div>
    </>
  );
}

export default PreloaderRoute;
