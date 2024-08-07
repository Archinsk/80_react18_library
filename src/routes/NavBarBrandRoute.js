import RbNavBarBrand from "../components/Bootstrap_5.3.3/RbNavBarBrand";

function NavBarBrandRoute() {
  function handleClick() {
    console.log("Действие при нажатии на лого");
  }

  return (
    <>
      <h2>RbNavBarBrand</h2>
      <h3>Варианты использования</h3>
      <div className="use-case-title">Только лого</div>
      <RbNavBarBrand imageSrc="images/iss_logo.svg" />
      <div className="use-case-title">Одноцветное лого</div>
      <RbNavBarBrand imageSrc="images/iss_logo.svg" monochrome />
      <div className="use-case-title">Одноцветное светлое лого</div>
      <RbNavBarBrand imageSrc="images/iss_logo.svg" monochrome light />
      <div className="use-case-title">Только наименование</div>
      <RbNavBarBrand name="Viewer Studio" />
      <div className="use-case-title">Лого и наименование</div>
      <RbNavBarBrand name="Viewer Studio" imageSrc="images/viewer-logo.svg" />
      <div className="use-case-title">
        Роутер-ссылка на определенную страницу
      </div>
      <RbNavBarBrand
        type="router-link"
        name="Viewer Studio"
        imageSrc="images/viewer-logo.svg"
        href="/navbar"
      />
      <div className="use-case-title">Действие по клику (см.консоль)</div>
      <RbNavBarBrand
        type="action-link"
        name="Viewer Studio"
        imageSrc="images/viewer-logo.svg"
        href="/navbar"
        action={handleClick}
      />
    </>
  );
}

export default NavBarBrandRoute;
