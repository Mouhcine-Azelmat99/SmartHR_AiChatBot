import { reactExports, asPluginWidgets, Fragment, selectTranslation } from '../index-C4WMXW3y.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-BoF30MPe.js';
import { ActionButton, ActionProperty } from '../ActionButton-B8GWmPwn.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-iFOPmzlY.js';
import { AssociationProperty } from '../AssociationProperty-vuO-mMD-.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-DirRMZIL.js';
import { ListExpressionProperty } from '../ListExpressionProperty-Cd_aouEd.js';
import { MicroflowObjectListProperty } from '../MicroflowObjectListProperty-Bn_uSbc6.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-CgBaKmKA.js';
import { TextProperty } from '../TextProperty-C-8HEWcn.js';
import { FormGroup, ValidationProperty } from '../FormGroup-bFu0BNb6.js';
import { ComboboxWidgetModule } from '../Combobox-BIE6CPmt.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BilSZaU4.js';
import { Container } from '../Container-PSi6m2QL.js';
import { DataView } from '../DataView-RrZIPNzV.js';
import { Div } from '../Div-DnhZCXw4.js';
import '../Fragment-kXArd_1S.js';
import { Text } from '../Text-Ct6rfb-k.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-B5WEKHCX.js';
import '../CkBXggmw-D1iecObi.js';
import '../UeptbR6O-Dse5KB9T.js';
import '../uEIG9e6s-VBk3qU43.js';
import '../CTQxk13g-CU8g3epp.js';
import '../CxoxYXlg-BJ3P5g_E.js';
import '../CTcC6PjV-eX91G0mv.js';
import '../BMuJrVqQ-CWJgr9IB.js';
import '../CxMFexew-CFDhnrRu.js';
import '../bdxqAC6d-BooPaEdW.js';
import '../InlineText-f914ePRH.js';
import '../ScrollContainer-DO1bE89X.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const { $Div, $DataView, $Container, $Text, $Fragment, $FormGroup, $Combobox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, Container, Text, Fragment, FormGroup, Combobox, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.AgentCommons.Agent_SelectVersion.layoutGrid1",
      $widgetId: "p.AgentCommons.Agent_SelectVersion.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.AgentCommons.Agent_SelectVersion.layoutGrid1$row0",
            $widgetId: "p.AgentCommons.Agent_SelectVersion.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.AgentCommons.Agent_SelectVersion.layoutGrid1$row0$column0",
                  $widgetId: "p.AgentCommons.Agent_SelectVersion.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.AgentCommons.Agent_SelectVersion.dataView2",
                        $widgetId: "p.AgentCommons.Agent_SelectVersion.dataView2",
                        class: "mx-name-dataView2 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.13",
                          "scope": "$Agent",
                          "editable": true
                        }),
                        emptyMessage: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        body: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.AgentCommons.Agent_SelectVersion.container3",
                              $widgetId: "p.AgentCommons.Agent_SelectVersion.container3",
                              class: "mx-name-container3 spacing-outer-bottom-medium",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.AgentCommons.Agent_SelectVersion.text1",
                                    $widgetId: "p.AgentCommons.Agent_SelectVersion.text1",
                                    class: "mx-name-text1 text-detail",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Select the version you want to use from the options below." }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.AgentCommons.Agent_SelectVersion.container1",
                              $widgetId: "p.AgentCommons.Agent_SelectVersion.container1",
                              class: "mx-name-container1 spacing-outer-bottom-medium",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Fragment,
                                  {
                                    key: "p.AgentCommons.Agent_SelectVersion.snippetCall1",
                                    $widgetId: "p.AgentCommons.Agent_SelectVersion.snippetCall1",
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $FormGroup,
                                        {
                                          key: "p.AgentCommons.Snippet_Agent_SelectVersion.comboBox3$formGroup",
                                          $widgetId: "p.AgentCommons.Snippet_Agent_SelectVersion.comboBox3$formGroup",
                                          class: "mx-name-comboBox3 combobox-selection spacing-outer-bottom-none",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $Combobox,
                                              {
                                                key: "p.AgentCommons.Snippet_Agent_SelectVersion.comboBox3",
                                                $widgetId: "p.AgentCommons.Snippet_Agent_SelectVersion.comboBox3",
                                                source: "context",
                                                optionsSourceType: "association",
                                                optionsSourceDatabaseDataSource: void 0,
                                                optionsSourceDatabaseCaptionType: "attribute",
                                                optionsSourceDatabaseDefaultValue: void 0,
                                                attributeAssociation: AssociationProperty({
                                                  "type": "Reference",
                                                  "entity": "AgentCommons.Agent",
                                                  "path": "",
                                                  "attribute": "AgentCommons.Agent_Version_InUse",
                                                  "endpointEntity": "AgentCommons.Version",
                                                  "selectableObjectsId": "p.0",
                                                  "scope": "$Agent",
                                                  "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                }),
                                                optionsSourceAssociationDataSource: MicroflowObjectListProperty({
                                                  "argMap": { "Agent": { "widget": "$Agent", "source": "object" } },
                                                  "dataSourceId": "p.0",
                                                  "entity": "AgentCommons.Version",
                                                  "scope": "$Version_InUse_Current",
                                                  "operationId": "eb9exQ5ZV1Gin7+JWC1Ofw"
                                                }),
                                                optionsSourceAssociationCaptionType: "expression",
                                                optionsSourceAssociationCaptionExpression: ListExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "v" }, { "type": "variable", "variable": "currentObject", "path": "VersionNumber" }] }, { "type": "literal", "value": " " }] }, { "type": "variable", "variable": "currentObject", "path": "Title" }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_SelectVersion.comboBox3", "source": "object" } } },
                                                  "dataSourceId": "p.0"
                                                }),
                                                optionsSourceStaticDataSource: [],
                                                emptyOptionText: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                filterType: "none",
                                                noOptionsText: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                clearable: true,
                                                optionsSourceAssociationCustomContentType: "yes",
                                                optionsSourceAssociationCustomContent: TemplatedWidgetProperty({
                                                  "dataSourceId": "p.0",
                                                  "editable": false,
                                                  "children": () => [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Container,
                                                      {
                                                        key: "p.AgentCommons.Snippet_Agent_SelectVersion.container31",
                                                        $widgetId: "p.AgentCommons.Snippet_Agent_SelectVersion.container31",
                                                        class: "mx-name-container31 item-selection row-left",
                                                        style: void 0,
                                                        renderMode: "div",
                                                        onClick: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Text,
                                                            {
                                                              key: "p.AgentCommons.Snippet_Agent_SelectVersion.text24",
                                                              $widgetId: "p.AgentCommons.Snippet_Agent_SelectVersion.text24",
                                                              class: "mx-name-text24 text-bold spacing-outer-right",
                                                              style: void 0,
                                                              caption: selectTranslation([
                                                                ExpressionProperty({
                                                                  "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "v" }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "VersionNumber" }, { "type": "literal", "value": "{}" }] }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_SelectVersion.comboBox3", "source": "object" } } }
                                                                })
                                                              ]),
                                                              renderMode: "span"
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Text,
                                                            {
                                                              key: "p.AgentCommons.Snippet_Agent_SelectVersion.text25",
                                                              $widgetId: "p.AgentCommons.Snippet_Agent_SelectVersion.text25",
                                                              class: "mx-name-text25",
                                                              style: void 0,
                                                              caption: selectTranslation([
                                                                ExpressionProperty({
                                                                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_SelectVersion.comboBox3", "source": "object" } } }
                                                                })
                                                              ]),
                                                              renderMode: "span"
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $ConditionalVisibilityWrapper,
                                                            {
                                                              key: "p.AgentCommons.Snippet_Agent_SelectVersion.container5$visibility",
                                                              $widgetId: "p.AgentCommons.Snippet_Agent_SelectVersion.container5$visibility",
                                                              visible: ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject" }, { "type": "variable", "variable": "Version_InUse_Current" }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_SelectVersion.comboBox3", "source": "object" }, "Version_InUse_Current": { "widget": "$Version_InUse_Current", "source": "object" } } }
                                                              }),
                                                              contents: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Container,
                                                                  {
                                                                    key: "p.AgentCommons.Snippet_Agent_SelectVersion.container5",
                                                                    $widgetId: "p.AgentCommons.Snippet_Agent_SelectVersion.container5",
                                                                    class: "mx-name-container5 badge-with-circle badge-with-circle--success",
                                                                    style: void 0,
                                                                    renderMode: "div",
                                                                    onClick: void 0,
                                                                    content: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Container,
                                                                        {
                                                                          key: "p.AgentCommons.Snippet_Agent_SelectVersion.container6",
                                                                          $widgetId: "p.AgentCommons.Snippet_Agent_SelectVersion.container6",
                                                                          class: "mx-name-container6 circle",
                                                                          style: void 0,
                                                                          renderMode: "div",
                                                                          onClick: void 0,
                                                                          content: void 0,
                                                                          ariaHidden: false
                                                                        }
                                                                      ),
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Text,
                                                                        {
                                                                          key: "p.AgentCommons.Snippet_Agent_SelectVersion.text3",
                                                                          $widgetId: "p.AgentCommons.Snippet_Agent_SelectVersion.text3",
                                                                          class: "mx-name-text3 badge-text text-small",
                                                                          style: void 0,
                                                                          caption: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "literal", "value": "Currently in use" }, "args": {} }
                                                                            })
                                                                          ]),
                                                                          renderMode: "span"
                                                                        }
                                                                      )
                                                                    ],
                                                                    ariaHidden: false
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          )
                                                        ],
                                                        ariaHidden: false
                                                      }
                                                    )
                                                  ]
                                                }),
                                                optionsSourceDatabaseCustomContentType: "no",
                                                staticDataSourceCustomContentType: "no",
                                                showFooter: false,
                                                menuFooterContent: void 0,
                                                selectionMethod: "rowclick",
                                                selectedItemsStyle: "text",
                                                selectAllButton: false,
                                                selectAllButtonCaption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                  })
                                                ]),
                                                readOnlyStyle: "text",
                                                onChangeEvent: void 0,
                                                onEnterEvent: void 0,
                                                onLeaveEvent: void 0,
                                                ariaRequired: false,
                                                clearButtonAriaLabel: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                  })
                                                ]),
                                                removeValueAriaLabel: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                                  })
                                                ]),
                                                a11ySelectedValue: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                                  })
                                                ]),
                                                a11yOptionsAvailable: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                                  })
                                                ]),
                                                a11yInstructions: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                                  })
                                                ]),
                                                lazyLoading: true,
                                                loadingType: "spinner",
                                                tabIndex: -1,
                                                id: DerivedUniqueIdProperty({
                                                  "widgetId": "p.AgentCommons.Snippet_Agent_SelectVersion.comboBox3"
                                                })
                                              }
                                            )
                                          ],
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Agent version In use" }, "args": {} }
                                            })
                                          ]),
                                          labelFor: DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.Snippet_Agent_SelectVersion.comboBox3"
                                          }),
                                          width: void 0,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p.AgentCommons.Snippet_Agent_SelectVersion.comboBox3"
                                          })
                                        }
                                      )
                                    ]
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.AgentCommons.Agent_SelectVersion.container2",
                              $widgetId: "p.AgentCommons.Agent_SelectVersion.container2",
                              class: "mx-name-container2 row-right",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.AgentCommons.Agent_SelectVersion.actionButton2",
                                    $widgetId: "p.AgentCommons.Agent_SelectVersion.actionButton2",
                                    buttonId: "p.AgentCommons.Agent_SelectVersion.actionButton2",
                                    class: "mx-name-actionButton2",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-default",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: void 0,
                                    action: ActionProperty({
                                      "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "wG5Ix6XuE1qxos9Ya6kgzA", "closePage": true }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.AgentCommons.Agent_SelectVersion.actionButton1$visibility",
                                    $widgetId: "p.AgentCommons.Agent_SelectVersion.actionButton1$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.AgentCommons.Agent_SelectVersion.actionButton1",
                                          $widgetId: "p.AgentCommons.Agent_SelectVersion.actionButton1",
                                          buttonId: "p.AgentCommons.Agent_SelectVersion.actionButton1",
                                          class: "mx-name-actionButton1",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-primary",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Select" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: void 0,
                                          action: ActionProperty({
                                            "action": { "type": "callMicroflow", "argMap": { "Agent": { "widget": "$Agent", "source": "object" } }, "config": { "operationId": "m8YizBKkGF6IxBkwxjxm/w", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                )
                              ],
                              ariaHidden: false
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
      ]
    }
  )
]);
const title = selectTranslation([
  "Select version in use"
]);
const classes = "";
const cancelChangesOperationId = "n1xHQo9lzFCXHrYPUcs/LA";
const closeButton = "p.AgentCommons.Agent_SelectVersion.actionButton2";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
