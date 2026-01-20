import { reactExports, WidgetIdContext, useStoreBackendValue, pageScope, fromComputation$, ensure, useDependableValue, jsxRuntimeExports, classNames } from './index-B-pQLZz2.js';
import { Icon } from './ActionButton-C47bDiwH.js';
import { usePersistentState } from './D7vCi_Rn-Dtbqkh4B.js';
import { SidebarToggleContext } from './ScrollContainer-B-pXvHDA.js';

function useHistoryFrameId() {
  const description = `useCurrentFormId(${reactExports.useContext(WidgetIdContext)})`;
  reactExports.useDebugValue(description);
  const [form$] = useStoreBackendValue(pageScope, "form"), formId$ = reactExports.useMemo(() => fromComputation$(description, () => ensure(form$.dependOn())[0].getHistoryId()), []);
  return useDependableValue(formId$);
}

function preProcessMenus(menus) {
  return identifyMenus(menus, "").flatMap(filterMenu);
}
function identifyMenus(menus, idPrefix) {
  return menus.map((menu, index) => {
    const stableId = `${idPrefix}${index}`;
    return { stableId, caption: menu.caption, icon: menu.icon, altCaption: menu.altCaption, action: menu.action, items: menu.items ? identifyMenus(menu.items, `${stableId}-`) : void 0 };
  });
}
function filterMenu(menu) {
  if (menu.action && !menu.action.isAuthorized)
    return [];
  if (menu.items) {
    const filteredItems = menu.items.flatMap(filterMenu);
    return filteredItems.length ? [{ ...menu, items: filteredItems }] : [];
  }
  return [menu];
}
function createAnchor(widgetName, menuItem, expanded, activate, props = {}) {
  const caption = menuItem.caption?.value ?? "", hasChildren = menuItem.items?.length;
  return jsxRuntimeExports.jsxs("a", { ...props, className: classNames(`mx-name-${widgetName}-${menuItem.stableId}`, props.className), href: "#", role: "menuitem", title: caption, onClick: (e) => {
    e.preventDefault(), e.stopPropagation(), activate(menuItem);
  }, onKeyDown: (e) => {
    "Enter" !== e.key && " " !== e.key || (e.preventDefault(), e.stopPropagation(), activate(menuItem));
  }, "aria-haspopup": !!hasChildren || void 0, "aria-expanded": hasChildren ? expanded : void 0, children: [menuItem.icon ? jsxRuntimeExports.jsx(Icon, { icon: menuItem.icon.value, altText: menuItem.caption?.value ? void 0 : menuItem.altCaption?.value }) : null, " " + caption, props.children] });
}
function useMenuActiveItem() {
  const [activeItemId, setActiveItemId] = useNavigationActiveItem(), { resetSidebar } = reactExports.useContext(SidebarToggleContext);
  return [activeItemId, reactExports.useCallback((menuItem) => {
    (void 0 === menuItem.action || menuItem.action.canExecute && (!menuItem.action.disabledDuringExecution || !menuItem.action.isExecuting)) && (menuItem.action?.execute(), setActiveItemId(menuItem.stableId), resetSidebar());
  }, [])];
}
function useNavigationActiveItem() {
  const currentFormId = useHistoryFrameId(), [formToItemIdMapping, setFormToItemIdMapping] = usePersistentState("activeItem", () => ({ [currentFormId]: null })), [activeItemId, setActiveItemId] = reactExports.useState(formToItemIdMapping[currentFormId] ?? void 0), previousFormId = reactExports.useRef(currentFormId);
  return previousFormId.current !== currentFormId && (currentFormId in formToItemIdMapping ? setActiveItemId(formToItemIdMapping[currentFormId] ?? void 0) : setFormToItemIdMapping({ ...formToItemIdMapping, [currentFormId]: activeItemId ?? null }), previousFormId.current = currentFormId), [activeItemId, setActiveItemId];
}

export { createAnchor, preProcessMenus, useMenuActiveItem };
