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
      <RbPreloader theme="danger" backdropColored />
      <div className="use-case-title">Тип "grow"</div>
      <RbPreloader type="grow" />
      <div className="use-case-title">С текстом</div>
      <RbPreloader>Загрузка приложения</RbPreloader>
      <div className="use-case-title">
        С текстом, цветом темы и цветом текста
      </div>
      <RbPreloader theme="info" textColor="danger">
        Загрузка приложения
      </RbPreloader>
      <div className="use-case-title">Уменьшенный (используется в кнопках)</div>
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
        <RbPreloader theme="primary" absolute>
          Загрузка...
        </RbPreloader>
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
        <RbPreloader theme="primary" absolute backdropColored>
          Загрузка...
        </RbPreloader>
      </div>
      <div className="use-case-title">
        Поверх содержимого родителя, с размытием нижележащего контента
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
        <RbPreloader theme="dark" absolute backdropBlurred>
          Загрузка...
        </RbPreloader>
      </div>
      <div className="use-case-title">
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
        <RbPreloader theme="light" absolute backdropColored backdropBlurred>
          Загрузка...
        </RbPreloader>
      </div>
      <div className="use-case-title">Стилизованный через классы</div>
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
        <RbPreloader className="bg-warning-subtle opacity-75 position-absolute top-0 start-0 w-100 fw-bold text-danger">
          Загрузка...
        </RbPreloader>
      </div>
    </>
  );
}

export default PreloaderRoute;
