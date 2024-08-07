import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import AlertRoute from "./routes/AlertRoute";
import IconRoute from "./routes/IconRoute";
import BadgeRoute from "./routes/BadgeRoute";
import DropdownItemRoute from "./routes/DropdownItemRoute";
import ButtonLinkRoute from "./routes/ButtonLinkRoute";
import ButtonRoute from "./routes/ButtonRoute";
import CollapseRoute from "./routes/CollapseRoute";
import CollapseButtonRoute from "./routes/CollapseButtonRoute";
import AccordionRoute from "./routes/AccordionRoute";
import AccordionItemRoute from "./routes/AccordionItemRoute";
import AccordionItemHeaderRoute from "./routes/AccordionItemHeaderRoute";
import AccordionItemBodyRoute from "./routes/AccordionItemBodyRoute";
import NavBarBrandRoute from "./routes/NavBarBrandRoute";
import NavBarRoute from "./routes/NavBarRoute";
import ModalButtonRoute from "./routes/ModalButtonRoute";
import NavLinkRoute from "./routes/NavLinkRoute";
import NavItemRoute from "./routes/NavItemRoute";
import NavRoute from "./routes/NavRoute";
import OffcanvasButtonRoute from "./routes/OffcanvasButtonRoute";
import OffcanvasRoute from "./routes/OffcanvasRoute";
import OffcanvasHeaderRoute from "./routes/OffcanvasHeaderRoute";
import OffcanvasBodyRoute from "./routes/OffcanvasBodyRoute";
import HeaderRoute from "./routes/HeaderRoute";
import ModalRoute from "./routes/ModalRoute";
import ModalHeaderRoute from "./routes/ModalHeaderRoute";
import ModalBodyRoute from "./routes/ModalBodyRoute";
import ModalFooterRoute from "./routes/ModalFooterRoute";
import RbHeader from "./components/Bootstrap_5.3.3/RbHeader";
import RbModal from "./components/Bootstrap_5.3.3/RbModal";
import TabPaneRoute from "./routes/TabPaneRoute";
import TabContentRoute from "./routes/TabContentRoute";
import NavTabLinkRoute from "./routes/NavTabLinkRoute";
import NavTabsRoute from "./routes/NavTabsRoute";
import TabsRoute from "./routes/TabsRoute";
import PaginationRoute from "./routes/PaginationRoute";
import PaginationItemsPerPageRoute from "./routes/PaginationItemsPerPageRoute";
import PaginationPageSelectorRoute from "./routes/PaginationPageSelectorRoute";
import PaginationButtonRoute from "./routes/PaginationButtonRoute";
import PreloaderRoute from "./routes/PreloaderRoute";
import CardRoute from "./routes/CardRoute";
import CardBodyRoute from "./routes/CardBodyRoute";
import CardHeaderRoute from "./routes/CardHeaderRoute";
import CardFooterRoute from "./routes/CardFooterRoute";
import CardWithImagesRoute from "./routes/CardWithImagesRoute";
import DropdownMenuRoute from "./routes/DropdownMenuRoute";
import TableRoute from "./routes/TableRoute";
import TableRowRoute from "./routes/TableRowRoute";
import TableCellRoute from "./routes/TableCellRoute";
import GridRoute from "./routes/GridRoute";
import VarsRoute from "./routes/VarsRoute";

function App() {
  const headerData = {
    brand: {
      type: "router-link",
      href: "/",
      name: "Viewer Studio",
      imageSrc: "images/viewer-logo.svg",
    },
    nav: {
      itemsList: [
        {
          id: "nav-link-home",
          name: "Home",
          type: "router-link",
          href: "/",
          active: false,
          disabled: false,
          icon: "home",
          badge: {
            className: "rounded-pill ms-2",
            theme: "danger",
            text: "25",
          },
        },
        {
          id: "nav-link-alert",
          name: "Alert",
          type: "router-link",
          href: "/alert",
          active: false,
          disabled: false,
          icon: "verified",
        },
        {
          id: "nav-link-badge",
          name: "Badge",
          type: "router-link",
          href: "/badge",
          active: false,
          disabled: false,
          icon: "verified",
        },
        {
          id: "nav-link-button",
          name: "Button",
          type: "router-link",
          href: "#",
          active: false,
          disabled: false,
          icon: "done",
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-button",
              name: "Button",
              type: "router-link",
              href: "/button",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-button-link",
              name: "ButtonLink",
              type: "router-link",
              href: "/buttonlink",
              active: false,
              disabled: false,
              icon: "done",
            },
          ],
        },
        {
          id: "nav-link-card",
          name: "Card",
          type: "router-link",
          href: "#",
          active: false,
          disabled: false,
          icon: "verified",
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-card",
              name: "Card",
              type: "router-link",
              href: "/card",
              active: false,
              disabled: false,
              icon: "verified",
            },
            {
              id: "dropdown-link-card-with-images",
              name: "CardWithImages",
              type: "router-link",
              href: "/cardwithimages",
              active: false,
              disabled: false,
              icon: "verified",
            },
            {
              id: "dropdown-link-card-header",
              name: "CardHeader",
              type: "router-link",
              href: "/cardheader",
              active: false,
              disabled: false,
              icon: "verified",
            },
            {
              id: "dropdown-link-card-body",
              name: "CardBody",
              type: "router-link",
              href: "/cardbody",
              active: false,
              disabled: false,
              icon: "verified",
            },
            {
              id: "dropdown-link-card-footer",
              name: "CardFooter",
              type: "router-link",
              href: "/cardfooter",
              active: false,
              disabled: false,
              icon: "verified",
            },
          ],
        },
        {
          id: "nav-link-collapse",
          name: "Collapse",
          type: "router-link",
          href: "#",
          active: false,
          disabled: false,
          icon: "done",
          badge: {
            className: "rounded-pill ms-2",
            theme: "danger",
            text: "25",
          },
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-collapse",
              name: "Collapse",
              type: "router-link",
              href: "/collapse",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-collapse-button",
              name: "CollapseButton",
              type: "router-link",
              href: "/collapsebutton",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-accordion",
              name: "Accordion",
              type: "router-link",
              href: "/accordion",
              active: false,
              disabled: false,
              icon: "done",
              badge: {
                classname: "rounded-pill ms-2",
                theme: "danger",
                text: "25",
              },
            },
            {
              id: "dropdown-link-accordion-item",
              name: "AccordionItem",
              type: "router-link",
              href: "/accordionitem",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-accordion-item-header",
              name: "AccordionItemHeader",
              type: "router-link",
              href: "/accordionitemheader",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-accordion-item-body",
              name: "AccordionItemBody",
              type: "router-link",
              href: "/accordionitembody",
              active: false,
              disabled: false,
              icon: "done",
            },
          ],
        },
        {
          id: "nav-link-filter",
          name: "Filter",
          type: "router-link",
          href: "/filter",
          active: false,
          disabled: true,
        },
        {
          id: "nav-link-form",
          name: "Form",
          type: "router-link",
          href: "/form",
          active: false,
          disabled: true,
        },
        {
          id: "nav-link-form-components",
          name: "FormComponents",
          type: "router-link",
          href: "#",
          active: false,
          disabled: true,
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-select",
              name: "Select",
              type: "router-link",
              href: "/select",
              active: false,
              disabled: false,
            },
            {
              id: "dropdown-link-checkbox",
              name: "Checkbox",
              type: "router-link",
              href: "/checkbox",
              active: false,
              disabled: false,
            },
            {
              id: "dropdown-link-checkboxes-group",
              name: "CheckboxesGroup",
              type: "router-link",
              href: "/checkboxesgroup",
              active: false,
              disabled: false,
            },
            {
              id: "dropdown-link-radio-group",
              name: "RadioGroup",
              type: "router-link",
              href: "/radiogroup",
              active: false,
              disabled: false,
            },
            {
              id: "dropdown-link-date-range",
              name: "DateRange",
              type: "router-link",
              href: "/daterange",
              active: false,
              disabled: false,
            },
            /*{
              id: "nav-link-form-components3",
              name: "TestLevel3",
              type: "router-link",
              href: "#",
              active: false,
              disabled: false,
              icon: "folder",
              badge: {
                className: "rounded-pill ms-2",
                theme: "danger",
                text: "25",
              },
              dropdown: true,
              dropdownItemsList: [
                {
                  id: "dropdown-link-input",
                  name: "Input",
                  type: "router-link",
                  href: "/input",
                  active: false,
                  disabled: false,
                },
                {
                  id: "dropdown-link-textarea",
                  name: "Textarea",
                  type: "router-link",
                  href: "/textarea",
                  active: false,
                  disabled: false,
                },
              ],
            },*/
          ],
        },
        {
          id: "nav-link-grid",
          name: "Grid",
          type: "router-link",
          href: "/grid",
          active: false,
          disabled: false,
          icon: "done",
        },
        {
          id: "nav-link-header",
          name: "Header",
          type: "router-link",
          href: "/header",
          active: false,
          disabled: false,
          icon: "done",
        },
        {
          id: "nav-link-icon",
          name: "Icon",
          type: "router-link",
          href: "/icon",
          active: false,
          disabled: false,
          icon: "verified",
        },
        {
          id: "nav-link-items-list",
          name: "ItemsList",
          type: "router-link",
          href: "/itemslist",
          active: false,
          disabled: true,
        },
        {
          id: "nav-link-modal",
          name: "Modal",
          type: "router-link",
          href: "#",
          active: false,
          disabled: false,
          icon: "done",
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-modal",
              name: "Modal",
              type: "router-link",
              href: "/modal",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-modal-header",
              name: "ModalHeader",
              type: "router-link",
              href: "/modalheader",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-modal-body",
              name: "ModalBody",
              type: "router-link",
              href: "/modalbody",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-modal-footer",
              name: "ModalFooter",
              type: "router-link",
              href: "/modalfooter",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-modal-button",
              name: "ModalButton",
              type: "router-link",
              href: "/modalbutton",
              active: false,
              disabled: false,
              icon: "done",
            },
          ],
        },
        {
          id: "nav-link-nav",
          name: "Nav",
          type: "router-link",
          href: "#",
          active: false,
          disabled: false,
          icon: "done",
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-nav",
              name: "Nav",
              type: "router-link",
              href: "/nav",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-nav-item",
              name: "NavItem",
              type: "router-link",
              href: "/navitem",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-nav-link",
              name: "NavLink",
              type: "router-link",
              href: "/navlink",
              active: false,
              disabled: false,
              icon: "verified",
            },
            {
              id: "dropdown-link-dropdown-menu",
              name: "DropdownMenu",
              type: "router-link",
              href: "/dropdownmenu",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-dropdown-item",
              name: "DropdownItem",
              type: "router-link",
              href: "/dropdownitem",
              active: false,
              disabled: false,
              icon: "done",
            },
          ],
        },
        {
          id: "nav-link-nav-bar",
          name: "NavBar",
          type: "router-link",
          href: "#",
          active: false,
          disabled: false,
          icon: "done",
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-nav-bar",
              name: "NavBar",
              type: "router-link",
              href: "/navbar",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-nav-bar-brand",
              name: "NavBarBrand",
              type: "router-link",
              href: "/navbarbrand",
              active: false,
              disabled: false,
              icon: "done",
            },
          ],
        },
        {
          id: "nav-link-offcanvas",
          name: "Offcanvas",
          type: "router-link",
          href: "#",
          active: false,
          disabled: false,
          icon: "done",
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-offcanvas",
              name: "Offcanvas",
              type: "router-link",
              href: "/offcanvas",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-offcanvas-header",
              name: "OffcanvasHeader",
              type: "router-link",
              href: "/offcanvasheader",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-offcanvas-body",
              name: "OffcanvasBody",
              type: "router-link",
              href: "/offcanvasbody",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-offcanvas-button",
              name: "OffcanvasButton",
              type: "router-link",
              href: "/offcanvasbutton",
              active: false,
              disabled: false,
              icon: "done",
            },
          ],
        },
        {
          id: "nav-link-pagination",
          name: "Pagination",
          type: "router-link",
          href: "#",
          active: false,
          disabled: false,
          icon: "done",
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-pagination",
              name: "Pagination",
              type: "router-link",
              href: "/pagination",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-pagination-items-per-page",
              name: "PaginationItemsPerPage",
              type: "router-link",
              href: "/paginationitemsperpage",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-pagination-page-selector",
              name: "PaginationPageSelector",
              type: "router-link",
              href: "/paginationpageselector",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-pagination-button",
              name: "PaginationButton",
              type: "router-link",
              href: "/paginationbutton",
              active: false,
              disabled: false,
              icon: "done",
            },
          ],
        },
        {
          id: "nav-link-preloader",
          name: "Preloader",
          type: "router-link",
          href: "/preloader",
          active: false,
          disabled: false,
          icon: "verified",
        },
        {
          id: "table-link-card",
          name: "Table",
          type: "router-link",
          href: "#",
          active: false,
          disabled: false,
          icon: "verified",
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-table",
              name: "Table",
              type: "router-link",
              href: "/table",
              active: false,
              disabled: false,
              icon: "verified",
            },
            {
              id: "dropdown-link-table-row",
              name: "TableRow",
              type: "router-link",
              href: "/tablerow",
              active: false,
              disabled: false,
              icon: "verified",
            },
            {
              id: "dropdown-link-table-cell",
              name: "TableCell",
              type: "router-link",
              href: "/tablecell",
              active: false,
              disabled: false,
              icon: "verified",
            },
          ],
        },
        {
          id: "nav-link-tabs",
          name: "Tabs",
          type: "router-link",
          href: "#",
          active: false,
          disabled: false,
          icon: "done",
          dropdown: true,
          dropdownItemsList: [
            {
              id: "dropdown-link-tabs",
              name: "Tabs",
              type: "router-link",
              href: "/tabs",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-nav-tabs",
              name: "NavTabs",
              type: "router-link",
              href: "/navtabs",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-nav-tab-link",
              name: "NavTabLink",
              type: "router-link",
              href: "/navtablink",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-tab-content",
              name: "TabContent",
              type: "router-link",
              href: "/tabcontent",
              active: false,
              disabled: false,
              icon: "done",
            },
            {
              id: "dropdown-link-tab-pane",
              name: "TabPane",
              type: "router-link",
              href: "/tabpane",
              active: false,
              disabled: false,
              icon: "done",
            },
          ],
        },
        {
          id: "nav-link-test-modal",
          name: "Test Modal",
          type: "modal-link",
          href: "modal-test",
          icon: "star",
          active: false,
          disabled: false,
        },
        {
          id: "nav-link-test-icon",
          name: "Test Icon",
          type: "modal-link",
          href: "modal-test",
          active: false,
          disabled: false,
          icon: "favorite",
          additionalClasses: {
            navItem: null,
            navLink: "btn-square-xl btn-outline-light",
          },
        },
        {
          id: "nav-link-test-badge",
          name: "Test Badge",
          type: "modal-link",
          href: "modal-test",
          active: false,
          disabled: false,
          icon: "mail",
          additionalClasses: {
            navItem: null,
            navLink: "btn-square-xl btn-outline-light",
          },
          badge: {
            className: "rounded-pill ms-2",
            theme: "danger",
            text: 25,
          },
        },
        {
          id: "nav-link-test-badge",
          name: "Vars-test",
          type: "router-link",
          href: "/vars",
          active: false,
          disabled: false,
        },
      ],
    },
  };

  return (
    <div className="App">
      <RbHeader
        id="header"
        brand={headerData.brand}
        nav={headerData.nav}
        theme="secondary"
        dark
        monochrome
        justifyContent="between"
        container
        hidden
        hiddenSize="xl"
        offcanvas
      />
      <RbModal id="modal-test">Тестовое модальное окно</RbModal>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/alert" element={<AlertRoute />} />
          <Route path="/card" element={<CardRoute />} />
          <Route path="/cardwithimages" element={<CardWithImagesRoute />} />
          <Route path="/cardheader" element={<CardHeaderRoute />} />
          <Route path="/cardbody" element={<CardBodyRoute />} />
          <Route path="/cardfooter" element={<CardFooterRoute />} />
          <Route path="/icon" element={<IconRoute />} />
          <Route path="/badge" element={<BadgeRoute />} />
          <Route path="/dropdownitem" element={<DropdownItemRoute />} />
          <Route path="/dropdownmenu" element={<DropdownMenuRoute />} />
          <Route path="/buttonlink" element={<ButtonLinkRoute />} />
          <Route path="/button" element={<ButtonRoute />} />
          <Route path="/collapse" element={<CollapseRoute />} />
          <Route path="/collapsebutton" element={<CollapseButtonRoute />} />
          <Route path="/accordion" element={<AccordionRoute />} />
          <Route path="/accordionitem" element={<AccordionItemRoute />} />
          <Route
            path="/accordionitemheader"
            element={<AccordionItemHeaderRoute />}
          />
          <Route
            path="/accordionitembody"
            element={<AccordionItemBodyRoute />}
          />
          <Route path="/navbarbrand" element={<NavBarBrandRoute />} />
          <Route path="/navbar" element={<NavBarRoute />} />
          <Route path="/modalbutton" element={<ModalButtonRoute />} />
          <Route path="/navlink" element={<NavLinkRoute />} />
          <Route path="/navitem" element={<NavItemRoute />} />
          <Route path="/nav" element={<NavRoute />} />
          <Route path="/pagination" element={<PaginationRoute />} />
          <Route
            path="/paginationitemsperpage"
            element={<PaginationItemsPerPageRoute />}
          />
          <Route
            path="/paginationpageselector"
            element={<PaginationPageSelectorRoute />}
          />
          <Route path="/paginationbutton" element={<PaginationButtonRoute />} />
          <Route path="/preloader" element={<PreloaderRoute />} />
          <Route path="/tabs" element={<TabsRoute />} />
          <Route path="/navtabs" element={<NavTabsRoute />} />
          <Route path="/navtablink" element={<NavTabLinkRoute />} />
          <Route path="/tabcontent" element={<TabContentRoute />} />
          <Route path="/tabpane" element={<TabPaneRoute />} />
          <Route path="/offcanvasbutton" element={<OffcanvasButtonRoute />} />
          <Route path="/offcanvas" element={<OffcanvasRoute />} />
          <Route path="/offcanvasheader" element={<OffcanvasHeaderRoute />} />
          <Route path="/offcanvasbody" element={<OffcanvasBodyRoute />} />
          <Route path="/header" element={<HeaderRoute />} />
          <Route path="/modal" element={<ModalRoute />} />
          <Route path="/modalheader" element={<ModalHeaderRoute />} />
          <Route path="/modalbody" element={<ModalBodyRoute />} />
          <Route path="/modalfooter" element={<ModalFooterRoute />} />
          <Route path="/table" element={<TableRoute />} />
          <Route path="/tablerow" element={<TableRowRoute />} />
          <Route path="/tablecell" element={<TableCellRoute />} />
          <Route path="/grid" element={<GridRoute />} />
          <Route path="/vars" element={<VarsRoute />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
