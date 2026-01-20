import { reactExports, asPluginWidgets, addEnumerations, selectTranslation } from '../index-BgmvTcvh.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Cb4MO343.js';
import { ActionButton, ActionProperty } from '../ActionButton-7BeRw6Eb.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-ALaVt2gM.js';
import '../AttributeProperty-DLZOHEVl.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-Bivq5vCz.js';
import { MicroflowObjectProperty } from '../MicroflowObjectProperty-z5djVxQ4.js';
import { TextProperty } from '../TextProperty-BV2oKBbq.js';
import { FormGroup, ValidationProperty } from '../FormGroup-Clh5YKWK.js';
import { WebIconProperty } from '../WebIconProperty-MLEi2sc0.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-D6sB2G5T.js';
import { Container } from '../Container-LyamVXag.js';
import { DataView } from '../DataView-BlzHzMI2.js';
import { Div } from '../Div-DznaFJxI.js';
import { ImageWidgetModule } from '../Image-CNc12AI2.js';
import { RadioButtonGroup } from '../RadioButtonGroup-DfkQ2jWG.js';
import { Text } from '../Text-mON8QAZM.js';
import { TextArea } from '../TextArea-CVgm5cpf.js';
import { TextBox } from '../TextBox-Fm7_ARBG.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-CdvE1MzX.js';
import { AttributeProperty } from '../CTQxk13g-Cpo2G8Em.js';
import '../CkBXggmw-DpOc9R4C.js';
import '../uEIG9e6s-BfLfin4i.js';
import '../CxoxYXlg-DglkwELR.js';
import '../BMuJrVqQ-CCtMHjkn.js';
import '../bdxqAC6d-DXeZKQMd.js';
import '../index-BuuMIVCm.js';
import '../B7_8A3ct-D5Y5qINW.js';
import '../F-L0MxFU-C_ISpEfs.js';
import '../DxNyuBBG-BPeNmzCp.js';
import '../InlineText-D4EmJMFt.js';
import '../B6nacfjo-CjNcAaDz.js';
import '../ScrollContainer-U0HrQ4Hh.js';

const ACT_Configuration_SetEndpoint_DefaultOpenAI = {
  "name": "OpenAIConnector.ACT_Configuration_SetEndpoint_DefaultOpenAI",
  "instructions": [
    {
      "type": "changeObject",
      "label": "a0947f91-f96b-419c-8742-f34089601672",
      "inputVar": "Configuration",
      "member": "Endpoint",
      "value": {
        "type": "literal",
        "value": "https://api.openai.com/v1/"
      }
    },
    {
      "type": "return",
      "label": "9fc5cd49-6d16-4b63-b1c7-87c4017eddab",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const React = { createElement: reactExports.createElement };
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const { $Div, $DataView, $FormGroup, $TextBox, $RadioButtonGroup, $TextArea, $Container, $ConditionalVisibilityWrapper, $Text, $ActionButton, $Image } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, RadioButtonGroup, TextArea, Container, ConditionalVisibilityWrapper, Text, ActionButton, Image });
addEnumerations({
  "OpenAIConnector.ENUM_ApiType": [
    [
      "AzureOpenAI",
      selectTranslation([
        "Azure OpenAI"
      ])
    ],
    [
      "OpenAI",
      selectTranslation([
        "OpenAI"
      ])
    ]
  ],
  "OpenAIConnector.ENUM_KeyType": [
    [
      "Bearer_Token",
      selectTranslation([
        "Microsoft Entra token"
      ])
    ],
    [
      "API_key",
      selectTranslation([
        "API key"
      ])
    ]
  ]
});
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.OpenAIConnector.Configuration_NewEdit.layoutGrid1",
      $widgetId: "p.OpenAIConnector.Configuration_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.OpenAIConnector.Configuration_NewEdit.layoutGrid1$row0",
            $widgetId: "p.OpenAIConnector.Configuration_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.OpenAIConnector.Configuration_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p.OpenAIConnector.Configuration_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.OpenAIConnector.Configuration_NewEdit.dataView1",
                        $widgetId: "p.OpenAIConnector.Configuration_NewEdit.dataView1",
                        class: "mx-name-dataView1 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.14",
                          "scope": "$Configuration",
                          "editable": true
                        }),
                        emptyMessage: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        body: [
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.OpenAIConnector.Configuration_NewEdit.textBox4$formGroup",
                              $widgetId: "p.OpenAIConnector.Configuration_NewEdit.textBox4$formGroup",
                              class: "mx-name-textBox4 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.OpenAIConnector.Configuration_NewEdit.textBox4",
                                    $widgetId: "p.OpenAIConnector.Configuration_NewEdit.textBox4",
                                    inputValue: AttributeProperty({
                                      "scope": "p.OpenAIConnector.Configuration_NewEdit.dataView1",
                                      "path": "",
                                      "entity": "OpenAIConnector.Configuration",
                                      "attribute": "DisplayName",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null,
                                      "formatting": {}
                                    }),
                                    isPassword: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    mask: "",
                                    readOnlyStyle: "control",
                                    maxLength: 200,
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    onEnterKeyPress: void 0,
                                    ariaLabel: void 0,
                                    autocomplete: "on",
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.OpenAIConnector.Configuration_NewEdit.textBox4"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Display name *" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.OpenAIConnector.Configuration_NewEdit.textBox4"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.OpenAIConnector.Configuration_NewEdit.textBox4"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.OpenAIConnector.Configuration_NewEdit.radioButtons1$formGroup",
                              $widgetId: "p.OpenAIConnector.Configuration_NewEdit.radioButtons1$formGroup",
                              class: "mx-name-radioButtons1 mx-radiobuttons inline",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $RadioButtonGroup,
                                  {
                                    key: "p.OpenAIConnector.Configuration_NewEdit.radioButtons1",
                                    $widgetId: "p.OpenAIConnector.Configuration_NewEdit.radioButtons1",
                                    value: AttributeProperty({
                                      "scope": "p.OpenAIConnector.Configuration_NewEdit.dataView1",
                                      "path": "",
                                      "entity": "OpenAIConnector.Configuration",
                                      "attribute": "ApiType",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null
                                    }),
                                    readOnlyStyle: "control",
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    ariaLabel: void 0,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.OpenAIConnector.Configuration_NewEdit.radioButtons1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "API type *" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.OpenAIConnector.Configuration_NewEdit.radioButtons1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.OpenAIConnector.Configuration_NewEdit.radioButtons1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.OpenAIConnector.Configuration_NewEdit.textArea1$formGroup",
                              $widgetId: "p.OpenAIConnector.Configuration_NewEdit.textArea1$formGroup",
                              class: "mx-name-textArea1 spacing-outer-bottom-none mx-textarea",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextArea,
                                  {
                                    key: "p.OpenAIConnector.Configuration_NewEdit.textArea1",
                                    $widgetId: "p.OpenAIConnector.Configuration_NewEdit.textArea1",
                                    inputValue: AttributeProperty({
                                      "scope": "p.OpenAIConnector.Configuration_NewEdit.dataView1",
                                      "path": "",
                                      "entity": "OpenAIConnector.Configuration",
                                      "attribute": "Endpoint",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null
                                    }),
                                    counterMessage: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    maxLength: 500,
                                    numberOfLines: void 0,
                                    autoGrow: true,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    readOnlyStyle: "control",
                                    textTooLongMessage: TextProperty({
                                      "value": selectTranslation([
                                        "Value too long."
                                      ])
                                    }),
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    ariaLabel: void 0,
                                    ariaRequired: void 0,
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.OpenAIConnector.Configuration_NewEdit.textArea1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Endpoint *" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.OpenAIConnector.Configuration_NewEdit.textArea1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.OpenAIConnector.Configuration_NewEdit.textArea1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.OpenAIConnector.Configuration_NewEdit.container2",
                              $widgetId: "p.OpenAIConnector.Configuration_NewEdit.container2",
                              class: "mx-name-container2 spacing-outer-bottom-medium",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.OpenAIConnector.Configuration_NewEdit.container4$visibility",
                                    $widgetId: "p.OpenAIConnector.Configuration_NewEdit.container4$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ApiType" }, { "type": "literal", "value": "AzureOpenAI" }] }, "args": { "currentObject": { "widget": "p.OpenAIConnector.Configuration_NewEdit.dataView1", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.OpenAIConnector.Configuration_NewEdit.container4",
                                          $widgetId: "p.OpenAIConnector.Configuration_NewEdit.container4",
                                          class: "mx-name-container4 row-right",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.OpenAIConnector.Configuration_NewEdit.text1",
                                                $widgetId: "p.OpenAIConnector.Configuration_NewEdit.text1",
                                                class: "mx-name-text1 text-detail text-small spacing-outer-bottom",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "e.g. https://your-resource-name.openai.azure.com/openai/deployments/" }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "p"
                                              }
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.OpenAIConnector.Configuration_NewEdit.container1$visibility",
                                    $widgetId: "p.OpenAIConnector.Configuration_NewEdit.container1$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ApiType" }, { "type": "literal", "value": "OpenAI" }] }, "args": { "currentObject": { "widget": "p.OpenAIConnector.Configuration_NewEdit.dataView1", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.OpenAIConnector.Configuration_NewEdit.container1",
                                          $widgetId: "p.OpenAIConnector.Configuration_NewEdit.container1",
                                          class: "mx-name-container1 row-right",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.OpenAIConnector.Configuration_NewEdit.text2",
                                                $widgetId: "p.OpenAIConnector.Configuration_NewEdit.text2",
                                                class: "mx-name-text2 text-detail text-small spacing-outer-bottom-none",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "e.g. https://api.openai.com/v1/" }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "span"
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.OpenAIConnector.Configuration_NewEdit.actionButton3$visibility",
                                                $widgetId: "p.OpenAIConnector.Configuration_NewEdit.actionButton3$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ActionButton,
                                                    {
                                                      key: "p.OpenAIConnector.Configuration_NewEdit.actionButton3",
                                                      $widgetId: "p.OpenAIConnector.Configuration_NewEdit.actionButton3",
                                                      buttonId: "p.OpenAIConnector.Configuration_NewEdit.actionButton3",
                                                      class: "mx-name-actionButton3 btn-sm spacing-outer-left spacing-outer-bottom-none",
                                                      style: void 0,
                                                      tabIndex: void 0,
                                                      renderType: "link",
                                                      role: "button",
                                                      buttonClass: "btn-default",
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Apply" }, "args": {} }
                                                        })
                                                      ]),
                                                      tooltip: TextProperty({
                                                        "value": selectTranslation([
                                                          ""
                                                        ])
                                                      }),
                                                      icon: void 0,
                                                      action: ActionProperty({
                                                        "action": { "type": "callNanoflow", "argMap": { "Configuration": { "widget": "$Configuration", "source": "object" } }, "config": { "nanoflow": () => ACT_Configuration_SetEndpoint_DefaultOpenAI, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.OpenAIConnector.Configuration_NewEdit.container6$visibility",
                                    $widgetId: "p.OpenAIConnector.Configuration_NewEdit.container6$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ApiType" }, { "type": "literal", "value": "AzureOpenAI" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "endsWith", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Endpoint" }, { "type": "literal", "value": "/openai/deployments/" }] }, { "type": "literal", "value": false }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.OpenAIConnector.Configuration_NewEdit.dataView1", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.OpenAIConnector.Configuration_NewEdit.container6",
                                          $widgetId: "p.OpenAIConnector.Configuration_NewEdit.container6",
                                          class: "mx-name-container6 alert alert-warning spacing-inner-top-medium spacing-inner-bottom-medium spacing-inner-left-medium spacing-inner-right-medium",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Div,
                                              {
                                                key: "p.OpenAIConnector.Configuration_NewEdit.layoutGrid4",
                                                $widgetId: "p.OpenAIConnector.Configuration_NewEdit.layoutGrid4",
                                                class: "mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid",
                                                style: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Div,
                                                    {
                                                      key: "p.OpenAIConnector.Configuration_NewEdit.layoutGrid4$row0",
                                                      $widgetId: "p.OpenAIConnector.Configuration_NewEdit.layoutGrid4$row0",
                                                      class: "row",
                                                      style: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Div,
                                                          {
                                                            key: "p.OpenAIConnector.Configuration_NewEdit.layoutGrid4$row0$column0",
                                                            $widgetId: "p.OpenAIConnector.Configuration_NewEdit.layoutGrid4$row0$column0",
                                                            class: "col-lg-auto col-md-auto col-auto align-self-start",
                                                            style: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Image,
                                                                {
                                                                  key: "p.OpenAIConnector.Configuration_NewEdit.image3",
                                                                  $widgetId: "p.OpenAIConnector.Configuration_NewEdit.image3",
                                                                  datasource: "icon",
                                                                  imageObject: void 0,
                                                                  defaultImageDynamic: void 0,
                                                                  imageUrl: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  imageIcon: WebIconProperty({
                                                                    "icon": { "type": "glyph", "iconClass": "glyphicon-warning-sign" }
                                                                  }),
                                                                  isBackgroundImage: false,
                                                                  children: void 0,
                                                                  onClickType: "action",
                                                                  onClick: void 0,
                                                                  alternativeText: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  widthUnit: "auto",
                                                                  width: 100,
                                                                  heightUnit: "auto",
                                                                  height: 100,
                                                                  iconSize: 24,
                                                                  displayAs: "fullImage",
                                                                  responsive: true,
                                                                  class: "mx-name-image3",
                                                                  style: void 0,
                                                                  tabIndex: void 0
                                                                }
                                                              )
                                                            ]
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $Div,
                                                          {
                                                            key: "p.OpenAIConnector.Configuration_NewEdit.layoutGrid4$row0$column1",
                                                            $widgetId: "p.OpenAIConnector.Configuration_NewEdit.layoutGrid4$row0$column1",
                                                            class: "col-lg col-md col align-self-center",
                                                            style: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.OpenAIConnector.Configuration_NewEdit.text27",
                                                                  $widgetId: "p.OpenAIConnector.Configuration_NewEdit.text27",
                                                                  class: "mx-name-text27 alert-title text-bold spacing-outer-bottom-none",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "Warning" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  renderMode: "h5"
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.OpenAIConnector.Configuration_NewEdit.text30",
                                                                  $widgetId: "p.OpenAIConnector.Configuration_NewEdit.text30",
                                                                  class: "mx-name-text30 alert-description spacing-outer-bottom-none",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "For configurations of type 'Azure OpenAI', the endpoint URL should usually end with '/openai/deployments/'.\r\nPlease verify that you've entered the correct endpoint URL." }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  renderMode: "p"
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
                                      )
                                    ]
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.OpenAIConnector.Configuration_NewEdit.radioButtons2$formGroup$visibility",
                              $widgetId: "p.OpenAIConnector.Configuration_NewEdit.radioButtons2$formGroup$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ApiType" }, { "type": "literal", "value": "AzureOpenAI" }] }, "args": { "currentObject": { "widget": "p.OpenAIConnector.Configuration_NewEdit.dataView1", "source": "object" } } }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.OpenAIConnector.Configuration_NewEdit.radioButtons2$formGroup",
                                    $widgetId: "p.OpenAIConnector.Configuration_NewEdit.radioButtons2$formGroup",
                                    class: "mx-name-radioButtons2 mx-radiobuttons inline",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $RadioButtonGroup,
                                        {
                                          key: "p.OpenAIConnector.Configuration_NewEdit.radioButtons2",
                                          $widgetId: "p.OpenAIConnector.Configuration_NewEdit.radioButtons2",
                                          value: AttributeProperty({
                                            "scope": "p.OpenAIConnector.Configuration_NewEdit.dataView1",
                                            "path": "",
                                            "entity": "OpenAIConnector.Configuration",
                                            "attribute": "KeyType",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false,
                                            "validation": null
                                          }),
                                          readOnlyStyle: "control",
                                          onEnter: void 0,
                                          onLeave: void 0,
                                          ariaLabel: void 0,
                                          ariaRequired: void 0,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.OpenAIConnector.Configuration_NewEdit.radioButtons2"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Azure key type *" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.OpenAIConnector.Configuration_NewEdit.radioButtons2"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.OpenAIConnector.Configuration_NewEdit.radioButtons2"
                                    })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $DataView,
                            {
                              key: "p.OpenAIConnector.Configuration_NewEdit.dataView2",
                              $widgetId: "p.OpenAIConnector.Configuration_NewEdit.dataView2",
                              class: "mx-name-dataView2 form-vertical",
                              style: void 0,
                              tabIndex: void 0,
                              object: MicroflowObjectProperty({
                                "dataSourceId": "p.60",
                                "scope": "p.OpenAIConnector.Configuration_NewEdit.dataView1",
                                "editable": true,
                                "operationId": "8+XJ0gsfUFeSvSsCUnt5Tw",
                                "argMap": { "Configuration": { "widget": "$Configuration", "source": "object" } }
                              }),
                              emptyMessage: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              body: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.OpenAIConnector.Configuration_NewEdit.textBox5$formGroup",
                                    $widgetId: "p.OpenAIConnector.Configuration_NewEdit.textBox5$formGroup",
                                    class: "mx-name-textBox5 spacing-outer-bottom-none mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p.OpenAIConnector.Configuration_NewEdit.textBox5",
                                          $widgetId: "p.OpenAIConnector.Configuration_NewEdit.textBox5",
                                          inputValue: AttributeProperty({
                                            "scope": "p.OpenAIConnector.Configuration_NewEdit.dataView2",
                                            "path": "",
                                            "entity": "OpenAIConnector.ApiKey",
                                            "attribute": "ApiKey",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false,
                                            "validation": null,
                                            "formatting": {}
                                          }),
                                          isPassword: true,
                                          placeholder: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          mask: "",
                                          readOnlyStyle: "control",
                                          maxLength: void 0,
                                          onEnter: void 0,
                                          onLeave: void 0,
                                          onEnterKeyPress: void 0,
                                          ariaLabel: void 0,
                                          autocomplete: "on",
                                          submitWhileEditing: false,
                                          submitDelay: 300,
                                          ariaRequired: void 0,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.OpenAIConnector.Configuration_NewEdit.textBox5"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "dataView1", "path": "KeyType" }, { "type": "literal", "value": "API_key" }] }, "then": { "type": "literal", "value": "API key" }, "else": { "type": "literal", "value": "Token" } }, { "type": "literal", "value": " *" }] }, "args": { "dataView1": { "widget": "p.OpenAIConnector.Configuration_NewEdit.dataView1", "source": "object" } } }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.OpenAIConnector.Configuration_NewEdit.textBox5"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.OpenAIConnector.Configuration_NewEdit.textBox5"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.OpenAIConnector.Configuration_NewEdit.container3$visibility",
                                    $widgetId: "p.OpenAIConnector.Configuration_NewEdit.container3$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "isNew", "parameters": [{ "type": "variable", "variable": "dataView1" }] }, { "type": "literal", "value": false }] }, "args": { "dataView1": { "widget": "p.OpenAIConnector.Configuration_NewEdit.dataView1", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.OpenAIConnector.Configuration_NewEdit.container3",
                                          $widgetId: "p.OpenAIConnector.Configuration_NewEdit.container3",
                                          class: "mx-name-container3 row-right",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.OpenAIConnector.Configuration_NewEdit.text3",
                                                $widgetId: "p.OpenAIConnector.Configuration_NewEdit.text3",
                                                class: "mx-name-text3 text-detail text-small spacing-outer-bottom",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "If you don't enter a new value, it will remain unchanged." }, "args": {} }
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
                              hideFooter: false,
                              footer: void 0
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.OpenAIConnector.Configuration_NewEdit.actionButton1$visibility",
                              $widgetId: "p.OpenAIConnector.Configuration_NewEdit.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.OpenAIConnector.Configuration_NewEdit.actionButton1",
                                    $widgetId: "p.OpenAIConnector.Configuration_NewEdit.actionButton1",
                                    buttonId: "p.OpenAIConnector.Configuration_NewEdit.actionButton1",
                                    class: "mx-name-actionButton1",
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
                                      "action": { "type": "callMicroflow", "argMap": { "Configuration": { "widget": "$Configuration", "source": "object" } }, "config": { "operationId": "yBFq7Yv/WFqirJ4XQn2JHA", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.OpenAIConnector.Configuration_NewEdit.actionButton2",
                              $widgetId: "p.OpenAIConnector.Configuration_NewEdit.actionButton2",
                              buttonId: "p.OpenAIConnector.Configuration_NewEdit.actionButton2",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "bKeSg6aSA1+keOmuUycdvQ", "closePage": true }, "disabledDuringExecution": true },
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
  "Edit Configuration"
]);
const classes = "";
const cancelChangesOperationId = "w3waLjTFjFqJcnHKNgLnzA";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
