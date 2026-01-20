import { asProperty, fromConstant$, ensureAssociationId, registerAssociationType, registerFilterAttribute, reactExports, asPluginWidgets, selectTranslation } from '../index-B-pQLZz2.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-C1uYYDJ5.js';
import { ActionButton, ActionProperty } from '../ActionButton-C47bDiwH.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-Dk1DF3Sc.js';
import { ListActionProperty } from '../ListActionProperty-CTAwa0C2.js';
import { ListAttributeProperty } from '../ListAttributeProperty-CJPrRUfN.js';
import { ListExpressionProperty } from '../ListExpressionProperty-Blkk1P49.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-viDAZSOp.js';
import { TextProperty } from '../TextProperty-ukMsrrP8.js';
import { WebIconProperty } from '../WebIconProperty-B4eQIHHv.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-C-2xhd5O.js';
import { Container } from '../Container-CTbE-yQS.js';
import { DatagridWidgetModule } from '../Datagrid-BYP0BNeL.js';
import { DatagridDateFilterWidgetModule } from '../DatagridDateFilter-6IC1Vhe7.js';
import { DatagridDropdownFilterWidgetModule } from '../DatagridDropdownFilter-BZ5hPH9S.js';
import { DatagridTextFilterWidgetModule } from '../DatagridTextFilter-CMo3F3oP.js';
import { Div } from '../Div-C2k8MuH7.js';
import { TabContainer } from '../TabContainer-DBKDNiai.js';
import { Text } from '../Text-5NmEA291.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-C6LAOzGy.js';
import '../UeptbR6O-9Cnv5Sxb.js';
import '../uEIG9e6s-CoI72Q4o.js';
import '../CkBXggmw-CEa7-Kz-.js';
import '../CTcC6PjV-CLE6jBCq.js';
import '../CxoxYXlg-rXnL4f6K.js';
import '../CTQxk13g-BDTc581w.js';
import '../index-CgEeXS6W.js';
import '../bdxqAC6d-ISZWqfJE.js';
import '../D7vCi_Rn-Dtbqkh4B.js';
import '../D2Vzasyw-shqqrM0Q.js';
import '../InlineText-CcVi-f0x.js';
import '../WebStaticImageProperty-D6HpETLo.js';
import '../Fragment-C3M8OT7J.js';
import '../Image-CwuIpbpH.js';
import '../SidebarToggle-U7U0qqOC.js';
import '../CGlz0zm4-CawGDyow.js';
import '../ScrollContainer-B-pXvHDA.js';

const AssociationMetaDataProperty = asProperty((config) => {
  const { id, filterable } = listAssociationMetaData(config);
  return fromConstant$({ id, filterable });
});
function listAssociationMetaData(config) {
  const endPointPath = `${config.attribute}/${config.endpointEntity}`, associationPath = config.path ? `${config.path}/${endPointPath}` : endPointPath, id = ensureAssociationId(associationPath, config.dataSourceId, config.selectableObjectsId), filterable = config.filterable && !(mx.isOffline() && config.path);
  return registerAssociationType(id, config.type), registerFilterAttribute(id, filterable), { id, filterable, associationPath };
}

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const DatagridDateFilter = Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "DatagridDateFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "default")?.value;
const DatagridDropdownFilter = Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "DatagridDropdownFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "default")?.value;
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;
const { $Container, $Div, $Text, $TabContainer, $Datagrid, $DatagridTextFilter, $DatagridDropdownFilter, $DatagridDateFilter, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Container, Div, Text, TabContainer, Datagrid, DatagridTextFilter, DatagridDropdownFilter, DatagridDateFilter, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Container,
    {
      key: "p.Administration.Account_Overview.container1",
      $widgetId: "p.Administration.Account_Overview.container1",
      class: "mx-name-container1 pageheader pageheader-fullwidth",
      style: void 0,
      renderMode: "div",
      onClick: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.Administration.Account_Overview.layoutGrid1",
            $widgetId: "p.Administration.Account_Overview.layoutGrid1",
            class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.Administration.Account_Overview.layoutGrid1$row0",
                  $widgetId: "p.Administration.Account_Overview.layoutGrid1$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.Administration.Account_Overview.layoutGrid1$row0$column0",
                        $widgetId: "p.Administration.Account_Overview.layoutGrid1$row0$column0",
                        class: "col-lg-12 col-md-12 col-12",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.Administration.Account_Overview.label1",
                              $widgetId: "p.Administration.Account_Overview.label1",
                              class: "mx-name-label1 pageheader-title",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Account Overview" }, "args": {} }
                                })
                              ]),
                              renderMode: "h2"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.Administration.Account_Overview.label2",
                              $widgetId: "p.Administration.Account_Overview.label2",
                              class: "mx-name-label2 pageheader-subtitle",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "These are the local users of your app. Please note that only these users should be managed in this app. MendixSSO users are provisioned by the MendixSSO module and should be managed from the App User Management screen (Developer Portal > General Settings > Manage App Users)." }, "args": {} }
                                })
                              ]),
                              renderMode: "h4"
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ],
      ariaHidden: false
    }
  ),
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.Administration.Account_Overview.layoutGrid4",
      $widgetId: "p.Administration.Account_Overview.layoutGrid4",
      class: "mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.Administration.Account_Overview.layoutGrid4$row0",
            $widgetId: "p.Administration.Account_Overview.layoutGrid4$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.Administration.Account_Overview.layoutGrid4$row0$column0",
                  $widgetId: "p.Administration.Account_Overview.layoutGrid4$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $TabContainer,
                      {
                        key: "p.Administration.Account_Overview.tabControl",
                        $widgetId: "p.Administration.Account_Overview.tabControl",
                        class: "mx-name-tabControl tabsfullwidth",
                        style: void 0,
                        tabIndex: void 0,
                        widgetId: "p.Administration.Account_Overview.tabControl",
                        defaultTab: 0,
                        tabs: [
                          {
                            "name": "tabPage2",
                            "caption": TextProperty({
                              "value": selectTranslation([
                                "Local Users"
                              ])
                            }),
                            "isDelayed": false,
                            "refreshOnShow": false,
                            "content": [
                              /* @__PURE__ */ React.createElement(
                                $Datagrid,
                                {
                                  key: "p.Administration.Account_Overview.dataGrid21",
                                  $widgetId: "p.Administration.Account_Overview.dataGrid21",
                                  datasource: DatabaseObjectListProperty({
                                    "dataSourceId": "p.14",
                                    "entity": "Administration.Account",
                                    "operationId": "DuUXPTC6fl+XSvzLSXTDFQ",
                                    "sort": [
                                      [
                                        "FullName",
                                        "asc"
                                      ]
                                    ],
                                    "constraints": { "type": "function", "name": "and", "parameters": [{ "type": "function", "name": "or", "parameters": [{ "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "Administration.Account", "attributeType": "ObjectReference" }, "rightEntity": "System.UserRole", "rightEntityAlias": "System.UserRole", "right": { "type": "attribute", "attribute": "System.UserRoles", "context": "System.UserRole", "attributeType": "ObjectReference" }, "next": { "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "System.UserRole", "attributeType": "ObjectReference" }, "rightEntity": "System.UserRole", "rightEntityAlias": "System.UserRole1", "right": { "type": "attribute", "attribute": "System.grantableRoles", "context": "System.UserRole1", "attributeType": "ObjectReference" }, "next": { "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "System.UserRole1", "attributeType": "ObjectReference" }, "rightEntity": "System.User", "rightEntityAlias": "System.User", "right": { "type": "attribute", "attribute": "System.UserRoles", "context": "System.User", "attributeType": "ObjectReference" }, "next": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "id", "context": "System.User", "attributeType": "ObjectReference" }, { "type": "token", "name": "currentUser" }] } } } }, { "type": "function", "name": "not", "parameters": [{ "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "Administration.Account", "attributeType": "ObjectReference" }, "rightEntity": "System.UserRole", "rightEntityAlias": "System.UserRole2", "right": { "type": "attribute", "attribute": "System.UserRoles", "context": "System.UserRole2", "attributeType": "ObjectReference" }, "next": { "type": "attribute", "attribute": "id", "context": "System.UserRole2", "attributeType": "ObjectReference" } }] }] }, { "type": "function", "name": "!=", "parameters": [{ "type": "attribute", "attribute": "Name", "context": "Administration.Account", "attributeType": "String" }, { "type": "literal", "value": null }] }] }
                                  }),
                                  refreshInterval: 0,
                                  itemSelectionMethod: "checkbox",
                                  showSelectAllToggle: true,
                                  columns: [
                                    {
                                      "showContentAs": "attribute",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "FullName",
                                        "attributeType": "String",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p.14",
                                        "isList": false
                                      }),
                                      "content": void 0,
                                      "dynamicText": selectTranslation([
                                        void 0
                                      ]),
                                      "header": selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "Full name" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridTextFilter,
                                          {
                                            key: "p.Administration.Account_Overview.textFilter1",
                                            $widgetId: "p.Administration.Account_Overview.textFilter1",
                                            defaultValue: void 0,
                                            defaultFilter: "contains",
                                            placeholder: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            adjustable: true,
                                            delay: 500,
                                            onChange: void 0,
                                            screenReaderButtonCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            screenReaderInputCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            attrChoice: "auto",
                                            linkedDs: void 0,
                                            attributes: [],
                                            class: "mx-name-textFilter1",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": true,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": selectTranslation([
                                        void 0
                                      ]),
                                      "allowEventPropagation": true
                                    },
                                    {
                                      "showContentAs": "attribute",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "Name",
                                        "attributeType": "String",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p.14",
                                        "isList": false
                                      }),
                                      "content": void 0,
                                      "dynamicText": selectTranslation([
                                        void 0
                                      ]),
                                      "header": selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "Login" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridTextFilter,
                                          {
                                            key: "p.Administration.Account_Overview.textFilter2",
                                            $widgetId: "p.Administration.Account_Overview.textFilter2",
                                            defaultValue: void 0,
                                            defaultFilter: "contains",
                                            placeholder: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            adjustable: true,
                                            delay: 500,
                                            onChange: void 0,
                                            screenReaderButtonCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            screenReaderInputCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            attrChoice: "auto",
                                            linkedDs: void 0,
                                            attributes: [],
                                            class: "mx-name-textFilter2",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": true,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": selectTranslation([
                                        void 0
                                      ]),
                                      "allowEventPropagation": true
                                    },
                                    {
                                      "showContentAs": "attribute",
                                      "attribute": ListAttributeProperty({
                                        "path": "System.UserRoles/System.UserRole",
                                        "entity": "System.UserRole",
                                        "attribute": "Name",
                                        "attributeType": "String",
                                        "sortable": false,
                                        "filterable": true,
                                        "dataSourceId": "p.14",
                                        "isList": true
                                      }),
                                      "content": void 0,
                                      "dynamicText": selectTranslation([
                                        void 0
                                      ]),
                                      "header": selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "Roles" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridDropdownFilter,
                                          {
                                            key: "p.Administration.Account_Overview.drop_downFilter1",
                                            $widgetId: "p.Administration.Account_Overview.drop_downFilter1",
                                            auto: true,
                                            defaultValue: void 0,
                                            filterOptions: [],
                                            emptyOptionCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "None" }, "args": {} }
                                              })
                                            ]),
                                            multiSelect: true,
                                            onChange: void 0,
                                            ariaLabel: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            filterable: false,
                                            clearable: true,
                                            selectedItemsStyle: "text",
                                            selectionMethod: "checkbox",
                                            baseType: "ref",
                                            linkedDs: void 0,
                                            attrChoice: "auto",
                                            refEntity: AssociationMetaDataProperty({
                                              "type": "ReferenceSet",
                                              "entity": void 0,
                                              "path": "",
                                              "attribute": "System.UserRoles",
                                              "endpointEntity": "System.UserRole",
                                              "selectableObjectsId": "p.15",
                                              "filterable": true,
                                              "dataSourceId": "p.14"
                                            }),
                                            refOptions: DatabaseObjectListProperty({
                                              "dataSourceId": "p.15",
                                              "entity": "System.UserRole",
                                              "operationId": "jQDnqJquOVuhBSRocXyadA",
                                              "sort": []
                                            }),
                                            refCaptionSource: "exp",
                                            refCaptionExp: ListExpressionProperty({
                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.Administration.Account_Overview.drop_downFilter1", "source": "object" } } },
                                              "dataSourceId": "p.15"
                                            }),
                                            fetchOptionsLazy: true,
                                            emptySelectionCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Select" }, "args": {} }
                                              })
                                            ]),
                                            filterInputPlaceholderCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                              })
                                            ]),
                                            class: "mx-name-drop_downFilter1",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": false,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": selectTranslation([
                                        void 0
                                      ]),
                                      "allowEventPropagation": true
                                    },
                                    {
                                      "showContentAs": "dynamicText",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "LastLogin",
                                        "attributeType": "DateTime",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p.14",
                                        "isList": false
                                      }),
                                      "content": void 0,
                                      "dynamicText": selectTranslation([
                                        ListExpressionProperty({
                                          "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "LastLogin" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "currentObject": { "widget": "p.Administration.Account_Overview.dataGrid21", "source": "object" } } },
                                          "dataSourceId": "p.14"
                                        })
                                      ]),
                                      "header": selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "Last login" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridDateFilter,
                                          {
                                            key: "p.Administration.Account_Overview.dateFilter1",
                                            $widgetId: "p.Administration.Account_Overview.dateFilter1",
                                            defaultValue: void 0,
                                            defaultStartDate: void 0,
                                            defaultEndDate: void 0,
                                            defaultFilter: "equal",
                                            placeholder: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            adjustable: true,
                                            onChange: void 0,
                                            screenReaderButtonCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            screenReaderCalendarCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            screenReaderInputCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            attrChoice: "auto",
                                            linkedDs: void 0,
                                            attributes: [],
                                            class: "mx-name-dateFilter1",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": true,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": selectTranslation([
                                        void 0
                                      ]),
                                      "allowEventPropagation": true
                                    },
                                    {
                                      "showContentAs": "customContent",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "Active",
                                        "attributeType": "Boolean",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p.14",
                                        "isList": false
                                      }),
                                      "content": TemplatedWidgetProperty({
                                        "dataSourceId": "p.14",
                                        "editable": false,
                                        "children": () => [
                                          /* @__PURE__ */ React.createElement(
                                            $ConditionalVisibilityWrapper,
                                            {
                                              key: "p.Administration.Account_Overview.text2$visibility",
                                              $widgetId: "p.Administration.Account_Overview.text2$visibility",
                                              visible: ExpressionProperty({
                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Active" }, "args": { "currentObject": { "widget": "p.Administration.Account_Overview.dataGrid21", "source": "object" } } }
                                              }),
                                              contents: [
                                                /* @__PURE__ */ React.createElement(
                                                  $Text,
                                                  {
                                                    key: "p.Administration.Account_Overview.text2",
                                                    $widgetId: "p.Administration.Account_Overview.text2",
                                                    class: "mx-name-text2 badge label-success",
                                                    style: void 0,
                                                    caption: selectTranslation([
                                                      ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Active" }, "args": {} }
                                                      })
                                                    ]),
                                                    renderMode: "span"
                                                  }
                                                )
                                              ]
                                            }
                                          ),
                                          /* @__PURE__ */ React.createElement(
                                            $ConditionalVisibilityWrapper,
                                            {
                                              key: "p.Administration.Account_Overview.text3$visibility",
                                              $widgetId: "p.Administration.Account_Overview.text3$visibility",
                                              visible: ExpressionProperty({
                                                "expression": { "expr": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Active" }] }, "args": { "currentObject": { "widget": "p.Administration.Account_Overview.dataGrid21", "source": "object" } } }
                                              }),
                                              contents: [
                                                /* @__PURE__ */ React.createElement(
                                                  $Text,
                                                  {
                                                    key: "p.Administration.Account_Overview.text3",
                                                    $widgetId: "p.Administration.Account_Overview.text3",
                                                    class: "mx-name-text3 badge label-secondary",
                                                    style: void 0,
                                                    caption: selectTranslation([
                                                      ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Inactive" }, "args": {} }
                                                      })
                                                    ]),
                                                    renderMode: "span"
                                                  }
                                                )
                                              ]
                                            }
                                          )
                                        ]
                                      }),
                                      "dynamicText": selectTranslation([
                                        void 0
                                      ]),
                                      "header": selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "Active" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridDropdownFilter,
                                          {
                                            key: "p.Administration.Account_Overview.drop_downFilter2",
                                            $widgetId: "p.Administration.Account_Overview.drop_downFilter2",
                                            auto: true,
                                            defaultValue: void 0,
                                            filterOptions: [],
                                            emptyOptionCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            multiSelect: false,
                                            onChange: void 0,
                                            ariaLabel: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            filterable: false,
                                            clearable: true,
                                            selectedItemsStyle: "text",
                                            selectionMethod: "checkbox",
                                            baseType: "attr",
                                            linkedDs: void 0,
                                            attrChoice: "auto",
                                            refOptions: void 0,
                                            refCaptionSource: "attr",
                                            fetchOptionsLazy: false,
                                            emptySelectionCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Select" }, "args": {} }
                                              })
                                            ]),
                                            filterInputPlaceholderCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                              })
                                            ]),
                                            class: "mx-name-drop_downFilter2",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": true,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": selectTranslation([
                                        void 0
                                      ]),
                                      "allowEventPropagation": true
                                    },
                                    {
                                      "showContentAs": "attribute",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "WebServiceUser",
                                        "attributeType": "Boolean",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p.14",
                                        "isList": false
                                      }),
                                      "content": void 0,
                                      "dynamicText": selectTranslation([
                                        void 0
                                      ]),
                                      "header": selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "Web service user" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridDropdownFilter,
                                          {
                                            key: "p.Administration.Account_Overview.drop_downFilter3",
                                            $widgetId: "p.Administration.Account_Overview.drop_downFilter3",
                                            auto: true,
                                            defaultValue: void 0,
                                            filterOptions: [],
                                            emptyOptionCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            multiSelect: false,
                                            onChange: void 0,
                                            ariaLabel: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            filterable: false,
                                            clearable: true,
                                            selectedItemsStyle: "text",
                                            selectionMethod: "checkbox",
                                            baseType: "attr",
                                            linkedDs: void 0,
                                            attrChoice: "auto",
                                            refOptions: void 0,
                                            refCaptionSource: "attr",
                                            fetchOptionsLazy: false,
                                            emptySelectionCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Select" }, "args": {} }
                                              })
                                            ]),
                                            filterInputPlaceholderCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                              })
                                            ]),
                                            class: "mx-name-drop_downFilter3",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": true,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": selectTranslation([
                                        void 0
                                      ]),
                                      "allowEventPropagation": true
                                    },
                                    {
                                      "showContentAs": "attribute",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "IsLocalUser",
                                        "attributeType": "Boolean",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p.14",
                                        "isList": false
                                      }),
                                      "content": void 0,
                                      "dynamicText": selectTranslation([
                                        void 0
                                      ]),
                                      "header": selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "Local" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridDropdownFilter,
                                          {
                                            key: "p.Administration.Account_Overview.drop_downFilter4",
                                            $widgetId: "p.Administration.Account_Overview.drop_downFilter4",
                                            auto: true,
                                            defaultValue: void 0,
                                            filterOptions: [],
                                            emptyOptionCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            multiSelect: false,
                                            onChange: void 0,
                                            ariaLabel: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            filterable: false,
                                            clearable: true,
                                            selectedItemsStyle: "text",
                                            selectionMethod: "checkbox",
                                            baseType: "attr",
                                            linkedDs: void 0,
                                            attrChoice: "auto",
                                            refOptions: void 0,
                                            refCaptionSource: "attr",
                                            fetchOptionsLazy: false,
                                            emptySelectionCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Select" }, "args": {} }
                                              })
                                            ]),
                                            filterInputPlaceholderCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                              })
                                            ]),
                                            class: "mx-name-drop_downFilter4",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": true,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": selectTranslation([
                                        void 0
                                      ]),
                                      "allowEventPropagation": true
                                    },
                                    {
                                      "showContentAs": "customContent",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "FullName",
                                        "attributeType": "String",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p.14",
                                        "isList": false
                                      }),
                                      "content": TemplatedWidgetProperty({
                                        "dataSourceId": "p.14",
                                        "editable": false,
                                        "children": () => [
                                          /* @__PURE__ */ React.createElement(
                                            $ConditionalVisibilityWrapper,
                                            {
                                              key: "p.Administration.Account_Overview.actionButton3$visibility",
                                              $widgetId: "p.Administration.Account_Overview.actionButton3$visibility",
                                              visible: ExpressionProperty({
                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                              }),
                                              contents: [
                                                /* @__PURE__ */ React.createElement(
                                                  $ActionButton,
                                                  {
                                                    key: "p.Administration.Account_Overview.actionButton3",
                                                    $widgetId: "p.Administration.Account_Overview.actionButton3",
                                                    buttonId: "p.Administration.Account_Overview.actionButton3",
                                                    class: "mx-name-actionButton3 btn-lg",
                                                    style: void 0,
                                                    tabIndex: void 0,
                                                    renderType: "link",
                                                    role: "button",
                                                    buttonClass: "btn-default",
                                                    caption: selectTranslation([
                                                      ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                      })
                                                    ]),
                                                    tooltip: TextProperty({
                                                      "value": selectTranslation([
                                                        ""
                                                      ])
                                                    }),
                                                    icon: WebIconProperty({
                                                      "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-pencil" }
                                                    }),
                                                    action: ActionProperty({
                                                      "action": { "type": "openPage", "argMap": { "param$Account": { "widget": "p.Administration.Account_Overview.dataGrid21", "source": "object" } }, "config": { "name": "Administration/Account_Edit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                      "abortOnServerValidation": true
                                                    })
                                                  }
                                                )
                                              ]
                                            }
                                          ),
                                          /* @__PURE__ */ React.createElement(
                                            $ConditionalVisibilityWrapper,
                                            {
                                              key: "p.Administration.Account_Overview.actionButton4$visibility",
                                              $widgetId: "p.Administration.Account_Overview.actionButton4$visibility",
                                              visible: ExpressionProperty({
                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                              }),
                                              contents: [
                                                /* @__PURE__ */ React.createElement(
                                                  $ActionButton,
                                                  {
                                                    key: "p.Administration.Account_Overview.actionButton4",
                                                    $widgetId: "p.Administration.Account_Overview.actionButton4",
                                                    buttonId: "p.Administration.Account_Overview.actionButton4",
                                                    class: "mx-name-actionButton4 btn-lg spacing-outer-left-medium",
                                                    style: void 0,
                                                    tabIndex: void 0,
                                                    renderType: "link",
                                                    role: "button",
                                                    buttonClass: "btn-default",
                                                    caption: selectTranslation([
                                                      ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                      })
                                                    ]),
                                                    tooltip: TextProperty({
                                                      "value": selectTranslation([
                                                        ""
                                                      ])
                                                    }),
                                                    icon: WebIconProperty({
                                                      "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-trash-can" }
                                                    }),
                                                    action: ActionProperty({
                                                      "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p.Administration.Account_Overview.dataGrid21", "source": "object" } }, "config": { "closePage": false, "operationId": "FnHyL1FyDly70LvcFYfLQA" }, "disabledDuringExecution": true },
                                                      "abortOnServerValidation": true
                                                    })
                                                  }
                                                )
                                              ]
                                            }
                                          )
                                        ]
                                      }),
                                      "dynamicText": selectTranslation([
                                        void 0
                                      ]),
                                      "header": selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": " " }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": void 0,
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": false,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "no",
                                      "width": "autoFit",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": selectTranslation([
                                        void 0
                                      ]),
                                      "allowEventPropagation": true
                                    }
                                  ],
                                  columnsFilterable: true,
                                  pageSize: 20,
                                  pagination: "buttons",
                                  pagingPosition: "bottom",
                                  showPagingButtons: "always",
                                  showEmptyPlaceholder: "none",
                                  emptyPlaceholder: void 0,
                                  rowClass: void 0,
                                  onClick: ListActionProperty({
                                    "action": { "type": "openPage", "argMap": { "param$Account": { "widget": "p.Administration.Account_Overview.dataGrid21", "source": "object" } }, "config": { "name": "Administration/Account_Edit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                    "abortOnServerValidation": false,
                                    "dataSourceId": "p.14",
                                    "argumentTypes": {}
                                  }),
                                  onSelectionChange: void 0,
                                  columnsSortable: true,
                                  columnsResizable: true,
                                  columnsDraggable: true,
                                  columnsHidable: true,
                                  filtersPlaceholder: [
                                    /* @__PURE__ */ React.createElement(
                                      $ConditionalVisibilityWrapper,
                                      {
                                        key: "p.Administration.Account_Overview.actionButton1$visibility",
                                        $widgetId: "p.Administration.Account_Overview.actionButton1$visibility",
                                        visible: ExpressionProperty({
                                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                        }),
                                        contents: [
                                          /* @__PURE__ */ React.createElement(
                                            $ActionButton,
                                            {
                                              key: "p.Administration.Account_Overview.actionButton1",
                                              $widgetId: "p.Administration.Account_Overview.actionButton1",
                                              buttonId: "p.Administration.Account_Overview.actionButton1",
                                              class: "mx-name-actionButton1 spacing-outer-bottom",
                                              style: void 0,
                                              tabIndex: void 0,
                                              renderType: "button",
                                              role: void 0,
                                              buttonClass: "btn-success",
                                              caption: selectTranslation([
                                                ExpressionProperty({
                                                  "expression": { "expr": { "type": "literal", "value": "New local user" }, "args": {} }
                                                })
                                              ]),
                                              tooltip: TextProperty({
                                                "value": selectTranslation([
                                                  ""
                                                ])
                                              }),
                                              icon: void 0,
                                              action: ActionProperty({
                                                "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "WXkBEh1VllC3gxrr9P+Hxg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                "abortOnServerValidation": true
                                              })
                                            }
                                          )
                                        ]
                                      }
                                    ),
                                    /* @__PURE__ */ React.createElement(
                                      $ConditionalVisibilityWrapper,
                                      {
                                        key: "p.Administration.Account_Overview.actionButton2$visibility",
                                        $widgetId: "p.Administration.Account_Overview.actionButton2$visibility",
                                        visible: ExpressionProperty({
                                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                        }),
                                        contents: [
                                          /* @__PURE__ */ React.createElement(
                                            $ActionButton,
                                            {
                                              key: "p.Administration.Account_Overview.actionButton2",
                                              $widgetId: "p.Administration.Account_Overview.actionButton2",
                                              buttonId: "p.Administration.Account_Overview.actionButton2",
                                              class: "mx-name-actionButton2 spacing-outer-left spacing-outer-bottom",
                                              style: void 0,
                                              tabIndex: void 0,
                                              renderType: "button",
                                              role: void 0,
                                              buttonClass: "btn-default",
                                              caption: selectTranslation([
                                                ExpressionProperty({
                                                  "expression": { "expr": { "type": "literal", "value": "New web service user" }, "args": {} }
                                                })
                                              ]),
                                              tooltip: TextProperty({
                                                "value": selectTranslation([
                                                  ""
                                                ])
                                              }),
                                              icon: void 0,
                                              action: ActionProperty({
                                                "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "crjWV16G2F2NWg8uatc+2Q", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                "abortOnServerValidation": true
                                              })
                                            }
                                          )
                                        ]
                                      }
                                    )
                                  ],
                                  filterSectionTitle: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  exportDialogLabel: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Export progress" }, "args": {} }
                                    })
                                  ]),
                                  cancelExportLabel: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Cancel data export" }, "args": {} }
                                    })
                                  ]),
                                  selectRowLabel: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Select row" }, "args": {} }
                                    })
                                  ]),
                                  onClickTrigger: "double",
                                  itemSelectionMode: "clear",
                                  loadingType: "spinner",
                                  showNumberOfRows: false,
                                  loadMoreButtonCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                                    })
                                  ]),
                                  configurationStorageType: "attribute",
                                  storeFiltersInPersonalization: true,
                                  selectAllRowsLabel: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Select all rows" }, "args": {} }
                                    })
                                  ]),
                                  keepSelection: false,
                                  refreshIndicator: false,
                                  selectedCountTemplateSingular: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  selectedCountTemplatePlural: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  enableSelectAll: false,
                                  selectionCounterPosition: "bottom",
                                  selectingAllLabel: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Selecting all items..." }, "args": {} }
                                    })
                                  ]),
                                  cancelSelectionLabel: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Cancel selection" }, "args": {} }
                                    })
                                  ]),
                                  selectAllText: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Select all rows in the data source" }, "args": {} }
                                    })
                                  ]),
                                  selectAllTemplate: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Select all %d rows in the data source" }, "args": {} }
                                    })
                                  ]),
                                  allSelectedText: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "All %d rows selected." }, "args": {} }
                                    })
                                  ]),
                                  clearSelectionButtonLabel: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                    })
                                  ]),
                                  class: "mx-name-dataGrid21 table-hover",
                                  style: void 0,
                                  tabIndex: void 0
                                }
                              )
                            ]
                          }
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "Accounts"
]);
const classes = "layout-atlas layout-atlas-responsive-default page-tabs page-tabs-fullwidth";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { classes, content, style, title };
