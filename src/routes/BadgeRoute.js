import RbBadge from "../components/Bootstrap_5.3.3/RbBadge";

function BadgeRoute() {
  return (
    <>
      Badge Route
      <h3>Варианты использования</h3>
      <div>Без value, с темой</div>
      <RbBadge theme="info">Важно!</RbBadge>
      <div>Скруглённый, с темой</div>
      <RbBadge theme="warning" pill>
        Внимание
      </RbBadge>
      <div>Со значением</div>
      <RbBadge value="10" />
      <div>С указанием максимального значения и его превышением</div>
      <RbBadge value="120" theme="danger" max="99" />
      <div>С отображением нулевого значения</div>
      <RbBadge value="0" theme="danger" />
      <div>Без отображения нулевого значения</div>
      <RbBadge value="0" theme="danger" notNullDisplay />
      {/* <div>Внутри BS46NavLink</div>
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
      </vb-nav>
      <div>Внутри BS46Button</div>
      <vb-button theme="secondary" :badge="defaultBadge">Сообщения</vb-button> */}
    </>
  );
}

export default BadgeRoute;
