import RbNavBarBrand from "../components/Bootstrap_5.3.3/RbNavBarBrand";

function NavBarBrandRoute() {
  return (
    <>
      NavBarBrand Route
      <h3>Варианты использования</h3>
      <div>Только лого</div>
      <RbNavBarBrand type="router-link" imageSrc="images/iss_logo.svg" />
      <div>Одноцветное лого</div>
      <RbNavBarBrand
        type="router-link"
        imageSrc="images/iss_logo.svg"
        monochrome
      />
      <div>Одноцветное светлое лого</div>
      <RbNavBarBrand
        type="router-link"
        imageSrc="images/iss_logo.svg"
        monochrome
        light
      />
      <div>Только наименование</div>
      <RbNavBarBrand type="router-link" name="Viewer Studio" />
      <div>Лого и наименование</div>
      <RbNavBarBrand
        type="router-link"
        name="Viewer Studio"
        imageSrc="images/viewer-logo.svg"
      />
      <div>Ссылка на определенную страницу</div>
      <RbNavBarBrand
        type="router-link"
        name="Viewer Studio"
        imageSrc="images/viewer-logo.svg"
        href="/navbar"
      />
    </>
  );
}

export default NavBarBrandRoute;
