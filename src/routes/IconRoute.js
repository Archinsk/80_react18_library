import RbIcon from "../components/Bootstrap_5.3.3/RbIcon";

function IconRoute() {
  return (
    <>
      Icon Route
      <h3>Варианты использования</h3>
      <div>Внутри текста</div>
      <div>Lorem ipsum dolor.</div>
      <div>
        Lor
        <RbIcon name="favorite" />
        em ip
        <RbIcon name="star" />
        sum dolor.
      </div>
      <h2>Lorem ipsum dolor.</h2>
      <h2>
        Lor
        <RbIcon name="star" />
        em ip
        <RbIcon name="favorite" />
        sum dolor.
      </h2>
      {/* <div>Внутри кнопки</div>
      <vb-button theme="primary" icon="star" class="mr-3">Кнопка</vb-button>
      <vb-button theme="primary" icon="star" square class="mr-3"
        >Кнопка</vb-button
      >
      <div>Внутри пунктов меню (Navlink, ButtonLink, DropdownItem)</div>
      <vb-nav tag="ul" class="navbar-nav">
        <template v-for="navLink of defaultNav.itemsList">
          <vb-nav-item
            v-if="!navLink.dropdown"
            :key="navLink.id"
            :type="navLink.type"
            :href="navLink.href"
            :active="navLink.active"
            :disabled="navLink.disabled"
            :icon="navLink.icon"
            :badge="navLink.badge"
            :additional-classes="navLink.additionalClasses || {}"
            :window-data="windowData"
            @click="$emit('nav-link-click', navLink)"
            >{{ navLink.name }}</vb-nav-item
          >
          <vb-nav-item
            v-else
            :key="navLink.id"
            :type="navLink.type"
            :href="navLink.href"
            :active="navLink.active"
            :disabled="navLink.disabled"
            :icon="navLink.icon"
            :badge="navLink.badge"
            :additional-classes="navLink.additionalClasses || {}"
            :window-data="windowData"
            :dropdown="navLink.dropdown"
            >{{ navLink.name }}
            <template v-slot:dropdown-menu>
              <vb-dropdown-item
                v-for="dropdownItem of navLink.dropdownItemsList"
                :key="dropdownItem.id"
                :type="dropdownItem.type"
                :href="dropdownItem.href"
                :active="dropdownItem.active"
                :disabled="dropdownItem.disabled"
                :icon="dropdownItem.icon"
                :badge="navLink.badge"
                @click="$emit('nav-link-click', dropdownItem)"
                >{{ dropdownItem.name }}</vb-dropdown-item
              >
            </template>
          </vb-nav-item>
        </template>
      </vb-nav>*/}
    </>
  );
}

export default IconRoute;
