import { reactExports, asPluginWidgets, Fragment, selectTranslation } from '../index-BgmvTcvh.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Cb4MO343.js';
import { ActionButton, ActionProperty } from '../ActionButton-7BeRw6Eb.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-ALaVt2gM.js';
import { AssociationProperty } from '../AssociationProperty-BQ-xenUM.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-Cmtbu3ww.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-Bivq5vCz.js';
import { ListExpressionProperty } from '../ListExpressionProperty-CLcrpJsE.js';
import { MicroflowObjectListProperty } from '../MicroflowObjectListProperty-BR95nzdd.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-V0FBuqFr.js';
import { TextProperty } from '../TextProperty-BV2oKBbq.js';
import { FormGroup, ValidationProperty } from '../FormGroup-Clh5YKWK.js';
import { WebIconProperty } from '../WebIconProperty-MLEi2sc0.js';
import { ComboboxWidgetModule } from '../Combobox-kwA1_Kpz.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-D6sB2G5T.js';
import { Container } from '../Container-LyamVXag.js';
import { DataView } from '../DataView-BlzHzMI2.js';
import { Div } from '../Div-DznaFJxI.js';
import '../Fragment-C-45CGtT.js';
import { ListView } from '../ListView-hken1fZ0.js';
import { Text } from '../Text-mON8QAZM.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-CdvE1MzX.js';
import '../CkBXggmw-DpOc9R4C.js';
import '../UeptbR6O-BTpvn_SV.js';
import '../uEIG9e6s-BfLfin4i.js';
import '../CTQxk13g-Cpo2G8Em.js';
import '../CxoxYXlg-DglkwELR.js';
import '../CTcC6PjV-DYXKqvux.js';
import '../BMuJrVqQ-CCtMHjkn.js';
import '../CxMFexew-Djrc9cTX.js';
import '../bdxqAC6d-DXeZKQMd.js';
import '../InlineText-D4EmJMFt.js';
import '../ScrollContainer-U0HrQ4Hh.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const { $Div, $DataView, $Container, $Text, $Fragment, $FormGroup, $Combobox, $ConditionalVisibilityWrapper, $ActionButton, $ListView } = asPluginWidgets({ Div, DataView, Container, Text, Fragment, FormGroup, Combobox, ConditionalVisibilityWrapper, ActionButton, ListView });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.AgentCommons.Version_Overview.layoutGrid1",
      $widgetId: "p.AgentCommons.Version_Overview.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.AgentCommons.Version_Overview.layoutGrid1$row0",
            $widgetId: "p.AgentCommons.Version_Overview.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.AgentCommons.Version_Overview.layoutGrid1$row0$column0",
                  $widgetId: "p.AgentCommons.Version_Overview.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.AgentCommons.Version_Overview.dataView1",
                        $widgetId: "p.AgentCommons.Version_Overview.dataView1",
                        class: "mx-name-dataView1 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.18",
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
                              key: "p.AgentCommons.Version_Overview.container3",
                              $widgetId: "p.AgentCommons.Version_Overview.container3",
                              class: "mx-name-container3 spacing-outer-bottom-medium",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.AgentCommons.Version_Overview.text3",
                                    $widgetId: "p.AgentCommons.Version_Overview.text3",
                                    class: "mx-name-text3 text-detail",
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
                              key: "p.AgentCommons.Version_Overview.container4",
                              $widgetId: "p.AgentCommons.Version_Overview.container4",
                              class: "mx-name-container4 align-flex-end row-left spacing-outer-bottom-large",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $DataView,
                                  {
                                    key: "p.AgentCommons.Version_Overview.dataView2",
                                    $widgetId: "p.AgentCommons.Version_Overview.dataView2",
                                    class: "mx-name-dataView2 width--40-percent form-vertical",
                                    style: void 0,
                                    tabIndex: void 0,
                                    object: AssociationObjectProperty({
                                      "dataSourceId": "p.27",
                                      "scope": "$Version_InUse_Current",
                                      "editable": true
                                    }),
                                    emptyMessage: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    body: [
                                      /* @__PURE__ */ React.createElement(
                                        $Fragment,
                                        {
                                          key: "p.AgentCommons.Version_Overview.snippetCall1",
                                          $widgetId: "p.AgentCommons.Version_Overview.snippetCall1",
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
                                                        "entity": "AgentCommons.Version",
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
                                                        "operationId": "mQpqps6xRVOf+q8P7yJYoQ"
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
                                    hideFooter: false,
                                    footer: void 0
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.AgentCommons.Version_Overview.actionButton5$visibility",
                                    $widgetId: "p.AgentCommons.Version_Overview.actionButton5$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.AgentCommons.Version_Overview.actionButton5",
                                          $widgetId: "p.AgentCommons.Version_Overview.actionButton5",
                                          buttonId: "p.AgentCommons.Version_Overview.actionButton5",
                                          class: "mx-name-actionButton5 spacing-outer-left-medium",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-primary",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: void 0,
                                          action: ActionProperty({
                                            "action": { "type": "callMicroflow", "argMap": { "Agent": { "widget": "$Agent", "source": "object" }, "PageHelper": { "widget": "$PageHelper", "source": "object" } }, "config": { "operationId": "YygIHWoFkFCUwRJdToXHMw", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.AgentCommons.Version_Overview.container43",
                              $widgetId: "p.AgentCommons.Version_Overview.container43",
                              class: "mx-name-container43 version-table table-header",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.AgentCommons.Version_Overview.text51",
                                    $widgetId: "p.AgentCommons.Version_Overview.text51",
                                    class: "mx-name-text51 version-grid-item text-semibold",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Version" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.AgentCommons.Version_Overview.text52",
                                    $widgetId: "p.AgentCommons.Version_Overview.text52",
                                    class: "mx-name-text52 text-title text-semibold",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Title" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.AgentCommons.Version_Overview.text53",
                                    $widgetId: "p.AgentCommons.Version_Overview.text53",
                                    class: "mx-name-text53 text-in-use text-semibold",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "In use" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.AgentCommons.Version_Overview.text54",
                                    $widgetId: "p.AgentCommons.Version_Overview.text54",
                                    class: "mx-name-text54 version-grid-item text-semibold",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Owner" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.AgentCommons.Version_Overview.text58",
                                    $widgetId: "p.AgentCommons.Version_Overview.text58",
                                    class: "mx-name-text58 version-grid-item text-semibold",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Last edited by" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.AgentCommons.Version_Overview.text55",
                                    $widgetId: "p.AgentCommons.Version_Overview.text55",
                                    class: "mx-name-text55 version-grid-item text-semibold",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Last edited" }, "args": {} }
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
                            $ListView,
                            {
                              key: "p.AgentCommons.Version_Overview.listView3",
                              $widgetId: "p.AgentCommons.Version_Overview.listView3",
                              class: "mx-name-listView3 listview-stylingless",
                              style: void 0,
                              listValue: DatabaseObjectListProperty({
                                "dataSourceId": "p.3",
                                "entity": "AgentCommons.Version",
                                "scope": "p.AgentCommons.Version_Overview.dataView1",
                                "operationId": "vjheheUWglamlc6iUqLKrg",
                                "sort": [],
                                "arguments": {
                                  "currentObject": [
                                    "$Agent"
                                  ]
                                },
                                "constraints": { "type": "function", "name": "and", "parameters": [{ "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "AgentCommons.Version_Agent", "context": "AgentCommons.Version", "attributeType": "ObjectReference" }, { "type": "variable", "name": "currentObject" }] }, { "type": "function", "name": "not", "parameters": [{ "type": "attribute", "attribute": "IsDraftVersion", "context": "AgentCommons.Version", "attributeType": "Boolean" }] }] }
                              }),
                              itemTemplate: TemplatedWidgetProperty({
                                "dataSourceId": "p.3",
                                "editable": false,
                                "children": () => [
                                  /* @__PURE__ */ React.createElement(
                                    $Container,
                                    {
                                      key: "p.AgentCommons.Version_Overview.container48",
                                      $widgetId: "p.AgentCommons.Version_Overview.container48",
                                      class: "mx-name-container48 version-table spacing-outer-top-medium",
                                      style: void 0,
                                      renderMode: "div",
                                      onClick: void 0,
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Text,
                                          {
                                            key: "p.AgentCommons.Version_Overview.text56",
                                            $widgetId: "p.AgentCommons.Version_Overview.text56",
                                            class: "mx-name-text56 version-grid-item text-semibold",
                                            style: void 0,
                                            caption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "v" }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "VersionNumber" }, { "type": "literal", "value": "{}" }] }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_Overview.listView3", "source": "object" } } }
                                              })
                                            ]),
                                            renderMode: "span"
                                          }
                                        ),
                                        /* @__PURE__ */ React.createElement(
                                          $Text,
                                          {
                                            key: "p.AgentCommons.Version_Overview.text57",
                                            $widgetId: "p.AgentCommons.Version_Overview.text57",
                                            class: "mx-name-text57 version-grid-item",
                                            style: void 0,
                                            caption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_Overview.listView3", "source": "object" } } }
                                              })
                                            ]),
                                            renderMode: "span"
                                          }
                                        ),
                                        /* @__PURE__ */ React.createElement(
                                          $Container,
                                          {
                                            key: "p.AgentCommons.Version_Overview.container6",
                                            $widgetId: "p.AgentCommons.Version_Overview.container6",
                                            class: "mx-name-container6 version-grid-item",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $ConditionalVisibilityWrapper,
                                                {
                                                  key: "p.AgentCommons.Version_Overview.text1$visibility",
                                                  $widgetId: "p.AgentCommons.Version_Overview.text1$visibility",
                                                  visible: ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "Version_InUse_Current" }, { "type": "variable", "variable": "currentObject" }] }, "args": { "Version_InUse_Current": { "widget": "$Version_InUse_Current", "source": "object" }, "currentObject": { "widget": "p.AgentCommons.Version_Overview.listView3", "source": "object" } } }
                                                  }),
                                                  contents: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Text,
                                                      {
                                                        key: "p.AgentCommons.Version_Overview.text1",
                                                        $widgetId: "p.AgentCommons.Version_Overview.text1",
                                                        class: "mx-name-text1",
                                                        style: void 0,
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": " " }, "args": {} }
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
                                                  key: "p.AgentCommons.Version_Overview.container1$visibility",
                                                  $widgetId: "p.AgentCommons.Version_Overview.container1$visibility",
                                                  visible: ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Version_InUse_Current" }, { "type": "variable", "variable": "currentObject" }] }, "args": { "Version_InUse_Current": { "widget": "$Version_InUse_Current", "source": "object" }, "currentObject": { "widget": "p.AgentCommons.Version_Overview.listView3", "source": "object" } } }
                                                  }),
                                                  contents: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Container,
                                                      {
                                                        key: "p.AgentCommons.Version_Overview.container1",
                                                        $widgetId: "p.AgentCommons.Version_Overview.container1",
                                                        class: "mx-name-container1",
                                                        style: void 0,
                                                        renderMode: "div",
                                                        onClick: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Container,
                                                            {
                                                              key: "p.AgentCommons.Version_Overview.container2",
                                                              $widgetId: "p.AgentCommons.Version_Overview.container2",
                                                              class: "mx-name-container2 badge--in-use",
                                                              style: void 0,
                                                              renderMode: "div",
                                                              onClick: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.AgentCommons.Version_Overview.text2",
                                                                    $widgetId: "p.AgentCommons.Version_Overview.text2",
                                                                    class: "mx-name-text2 badge-text text-small",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "In use" }, "args": {} }
                                                                      })
                                                                    ]),
                                                                    renderMode: "span"
                                                                  }
                                                                )
                                                              ],
                                                              ariaHidden: false
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
                                        ),
                                        /* @__PURE__ */ React.createElement(
                                          $Text,
                                          {
                                            key: "p.AgentCommons.Version_Overview.text59",
                                            $widgetId: "p.AgentCommons.Version_Overview.text59",
                                            class: "mx-name-text59 version-grid-item",
                                            style: void 0,
                                            caption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "VersionOwner" }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_Overview.listView3", "source": "object" } } }
                                              })
                                            ]),
                                            renderMode: "span"
                                          }
                                        ),
                                        /* @__PURE__ */ React.createElement(
                                          $Text,
                                          {
                                            key: "p.AgentCommons.Version_Overview.text60",
                                            $widgetId: "p.AgentCommons.Version_Overview.text60",
                                            class: "mx-name-text60 version-grid-item",
                                            style: void 0,
                                            caption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "LastChangedBy" }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_Overview.listView3", "source": "object" } } }
                                              })
                                            ]),
                                            renderMode: "span"
                                          }
                                        ),
                                        /* @__PURE__ */ React.createElement(
                                          $Text,
                                          {
                                            key: "p.AgentCommons.Version_Overview.text61",
                                            $widgetId: "p.AgentCommons.Version_Overview.text61",
                                            class: "mx-name-text61 version-grid-item",
                                            style: void 0,
                                            caption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "VersionChangedDate" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_Overview.listView3", "source": "object" } } }
                                              })
                                            ]),
                                            renderMode: "span"
                                          }
                                        ),
                                        /* @__PURE__ */ React.createElement(
                                          $Container,
                                          {
                                            key: "p.AgentCommons.Version_Overview.container5",
                                            $widgetId: "p.AgentCommons.Version_Overview.container5",
                                            class: "mx-name-container5 version-grid-item",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $ConditionalVisibilityWrapper,
                                                {
                                                  key: "p.AgentCommons.Version_Overview.actionButton1$visibility",
                                                  $widgetId: "p.AgentCommons.Version_Overview.actionButton1$visibility",
                                                  visible: ExpressionProperty({
                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "dataView1", "path": "AgentCommons.Agent_Version_InUse" }, { "type": "variable", "variable": "currentObject" }] }, "else": { "type": "literal", "value": false } }, "args": { "dataView1": { "widget": "p.AgentCommons.Version_Overview.dataView1", "source": "object" }, "currentObject": { "widget": "p.AgentCommons.Version_Overview.listView3", "source": "object" } } }
                                                  }),
                                                  contents: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $ActionButton,
                                                      {
                                                        key: "p.AgentCommons.Version_Overview.actionButton1",
                                                        $widgetId: "p.AgentCommons.Version_Overview.actionButton1",
                                                        buttonId: "p.AgentCommons.Version_Overview.actionButton1",
                                                        class: "mx-name-actionButton1 delete-icon",
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
                                                          "icon": { "type": "glyph", "iconClass": "glyphicon-trash" }
                                                        }),
                                                        action: ActionProperty({
                                                          "action": { "type": "callMicroflow", "argMap": { "Version": { "widget": "p.AgentCommons.Version_Overview.listView3", "source": "object" }, "Agent": { "widget": "$Agent", "source": "object" }, "PageHelper": { "widget": "$PageHelper", "source": "object" } }, "config": { "operationId": "DLgPNrkNZVGctgA/rmyH7w", "validate": "view", "confirmation": { "question": selectTranslation(["Are you sure?"]), "proceed": selectTranslation(["Proceed"]), "cancel": selectTranslation(["Cancel"]) }, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                  key: "p.AgentCommons.Version_Overview.actionButton3$visibility",
                                                  $widgetId: "p.AgentCommons.Version_Overview.actionButton3$visibility",
                                                  visible: ExpressionProperty({
                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "dataView1", "path": "AgentCommons.Agent_Version_InUse" }, { "type": "variable", "variable": "currentObject" }] }, "else": { "type": "literal", "value": false } }, "args": { "dataView1": { "widget": "p.AgentCommons.Version_Overview.dataView1", "source": "object" }, "currentObject": { "widget": "p.AgentCommons.Version_Overview.listView3", "source": "object" } } }
                                                  }),
                                                  contents: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $ActionButton,
                                                      {
                                                        key: "p.AgentCommons.Version_Overview.actionButton3",
                                                        $widgetId: "p.AgentCommons.Version_Overview.actionButton3",
                                                        buttonId: "p.AgentCommons.Version_Overview.actionButton3",
                                                        class: "mx-name-actionButton3 delete-icon disabled",
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
                                                          "icon": { "type": "glyph", "iconClass": "glyphicon-trash" }
                                                        }),
                                                        action: ActionProperty({
                                                          "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                      ],
                                      ariaHidden: false
                                    }
                                  )
                                ]
                              }),
                              onClick: void 0,
                              pageSize: 10
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.AgentCommons.Version_Overview.actionButton2",
                              $widgetId: "p.AgentCommons.Version_Overview.actionButton2",
                              buttonId: "p.AgentCommons.Version_Overview.actionButton2",
                              class: "mx-name-actionButton2 pull-right",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-primary",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Close" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: void 0,
                              action: ActionProperty({
                                "action": { "type": "closePage", "argMap": {}, "config": {}, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
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
  "Manage versions"
]);
const classes = "popup-mid-size";
const cancelChangesOperationId = "mRYJg1qlW12xUIPO3/gBvg";
const closeButton = "p.AgentCommons.Version_Overview.actionButton2";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
