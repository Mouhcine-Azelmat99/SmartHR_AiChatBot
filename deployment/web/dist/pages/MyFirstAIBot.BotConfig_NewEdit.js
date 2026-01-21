import { reactExports, asPluginWidgets, addEnumerations, selectTranslation } from '../index-C4WMXW3y.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-BoF30MPe.js';
import { ActionButton, ActionProperty } from '../ActionButton-B8GWmPwn.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-iFOPmzlY.js';
import { AssociationProperty } from '../AssociationProperty-vuO-mMD-.js';
import '../AttributeProperty-DPm6A02S.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-BEIxbT2n.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-DirRMZIL.js';
import { ListAttributeProperty } from '../ListAttributeProperty-dWq-nfHX.js';
import { MicroflowObjectListProperty } from '../MicroflowObjectListProperty-Bn_uSbc6.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-CgBaKmKA.js';
import { TextProperty } from '../TextProperty-C-8HEWcn.js';
import { FormGroup, ValidationProperty } from '../FormGroup-bFu0BNb6.js';
import { WebStaticImageProperty } from '../WebStaticImageProperty-B3bpPygB.js';
import { ComboboxWidgetModule } from '../Combobox-BIE6CPmt.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BilSZaU4.js';
import { Container } from '../Container-PSi6m2QL.js';
import { DataView } from '../DataView-RrZIPNzV.js';
import { Div } from '../Div-DnhZCXw4.js';
import { ImageWidgetModule } from '../Image-Cid1Yr5n.js';
import { RadioButtonGroup } from '../RadioButtonGroup-Bum-qRf7.js';
import { Text } from '../Text-Ct6rfb-k.js';
import { TextBox } from '../TextBox-CWp8bmf4.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-B5WEKHCX.js';
import { AttributeProperty } from '../CTQxk13g-CU8g3epp.js';
import '../CkBXggmw-D1iecObi.js';
import '../UeptbR6O-Dse5KB9T.js';
import '../uEIG9e6s-VBk3qU43.js';
import '../CxoxYXlg-BJ3P5g_E.js';
import '../CTcC6PjV-eX91G0mv.js';
import '../BMuJrVqQ-CWJgr9IB.js';
import '../CxMFexew-CFDhnrRu.js';
import '../bdxqAC6d-BooPaEdW.js';
import '../index-BP8nYpIk.js';
import '../B7_8A3ct-PtP2BrDi.js';
import '../F-L0MxFU-CBWLJP8y.js';
import '../DxNyuBBG-C1dI5rNR.js';
import '../InlineText-f914ePRH.js';
import '../B6nacfjo-DRlmgVxc.js';
import '../ScrollContainer-DO1bE89X.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const { $Div, $DataView, $Container, $FormGroup, $TextBox, $RadioButtonGroup, $Combobox, $ConditionalVisibilityWrapper, $Image, $Text, $ActionButton } = asPluginWidgets({ Div, DataView, Container, FormGroup, TextBox, RadioButtonGroup, Combobox, ConditionalVisibilityWrapper, Image, Text, ActionButton });
addEnumerations({
  "MyFirstAIBot.ENUM_ActionMicroflowSelection": [
    [
      "ChatContext_ChatWithHistory_ActionMicroflow",
      selectTranslation([
        "ChatContext_ChatWithHistory_ActionMicroflow"
      ])
    ],
    [
      "ChatContext_BedrockRetrieveAndGenerate_ActionMicroflow",
      selectTranslation([
        "ChatContext_BedrockRetrieveAndGenerate_ActionMicroflow"
      ])
    ]
  ]
});
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid1",
      $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid1$row0",
            $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.MyFirstAIBot.BotConfig_NewEdit.dataView1",
                        $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.dataView1",
                        class: "mx-name-dataView1 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.22",
                          "scope": "$BotConfig",
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
                              key: "p.MyFirstAIBot.BotConfig_NewEdit.container1",
                              $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.container1",
                              class: "mx-name-container1",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.MyFirstAIBot.BotConfig_NewEdit.textBox3$formGroup",
                                    $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.textBox3$formGroup",
                                    class: "mx-name-textBox3 mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p.MyFirstAIBot.BotConfig_NewEdit.textBox3",
                                          $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.textBox3",
                                          inputValue: AttributeProperty({
                                            "scope": "p.MyFirstAIBot.BotConfig_NewEdit.dataView1",
                                            "path": "",
                                            "entity": "MyFirstAIBot.BotConfig",
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
                                            "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.textBox3"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Display name" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.textBox3"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.MyFirstAIBot.BotConfig_NewEdit.textBox3"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.MyFirstAIBot.BotConfig_NewEdit.radioButtons2$formGroup",
                                    $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.radioButtons2$formGroup",
                                    class: "mx-name-radioButtons2 mx-radiobuttons inline",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $RadioButtonGroup,
                                        {
                                          key: "p.MyFirstAIBot.BotConfig_NewEdit.radioButtons2",
                                          $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.radioButtons2",
                                          value: AttributeProperty({
                                            "scope": "p.MyFirstAIBot.BotConfig_NewEdit.dataView1",
                                            "path": "",
                                            "entity": "MyFirstAIBot.BotConfig",
                                            "attribute": "IsSelectable",
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
                                            "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.radioButtons2"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Is selectable in UI" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.radioButtons2"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.MyFirstAIBot.BotConfig_NewEdit.radioButtons2"
                                    })
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.MyFirstAIBot.BotConfig_NewEdit.comboBox8$formGroup",
                              $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.comboBox8$formGroup",
                              class: "mx-name-comboBox8 combobox-model-selection",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $Combobox,
                                  {
                                    key: "p.MyFirstAIBot.BotConfig_NewEdit.comboBox8",
                                    $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.comboBox8",
                                    source: "context",
                                    optionsSourceType: "association",
                                    optionsSourceDatabaseDataSource: void 0,
                                    optionsSourceDatabaseCaptionType: "attribute",
                                    optionsSourceDatabaseDefaultValue: void 0,
                                    attributeAssociation: AssociationProperty({
                                      "type": "Reference",
                                      "entity": "MyFirstAIBot.BotConfig",
                                      "path": "",
                                      "attribute": "ConversationalUI.ProviderConfig_DeployedModel",
                                      "endpointEntity": "GenAICommons.DeployedModel",
                                      "selectableObjectsId": "p.0",
                                      "scope": "p.MyFirstAIBot.BotConfig_NewEdit.dataView1",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                    }),
                                    optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                      "dataSourceId": "p.0",
                                      "entity": "GenAICommons.DeployedModel",
                                      "scope": "p.MyFirstAIBot.BotConfig_NewEdit.dataView1",
                                      "operationId": "KzoUBQr7+lWi9Z7gFe61QQ",
                                      "sort": [
                                        [
                                          "Architecture",
                                          "asc"
                                        ],
                                        [
                                          "DisplayName",
                                          "asc"
                                        ]
                                      ],
                                      "constraints": { "type": "function", "name": "and", "parameters": [{ "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "OutputModality", "context": "GenAICommons.DeployedModel", "attributeType": "#GenAICommons.ENUM_ModelModality" }, { "type": "literal", "value": "Text" }] }, { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "SupportsConversationsWithHistory", "context": "GenAICommons.DeployedModel", "attributeType": "#GenAICommons.ENUM_ModelSupport" }, { "type": "literal", "value": "_True" }] }, { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "SupportsSystemPrompt", "context": "GenAICommons.DeployedModel", "attributeType": "#GenAICommons.ENUM_ModelSupport" }, { "type": "literal", "value": "_True" }] }, { "type": "attribute", "attribute": "IsActive", "context": "GenAICommons.DeployedModel", "attributeType": "Boolean" }] }
                                    }),
                                    optionsSourceAssociationCaptionType: "attribute",
                                    optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                      "path": "",
                                      "entity": "GenAICommons.DeployedModel",
                                      "attribute": "DisplayName",
                                      "attributeType": "String",
                                      "sortable": true,
                                      "filterable": true,
                                      "dataSourceId": "p.0",
                                      "isList": false
                                    }),
                                    optionsSourceAssociationCaptionExpression: void 0,
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
                                            key: "p.MyFirstAIBot.BotConfig_NewEdit.container14",
                                            $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.container14",
                                            class: "mx-name-container14 model-selection",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $ConditionalVisibilityWrapper,
                                                {
                                                  key: "p.MyFirstAIBot.BotConfig_NewEdit.image1$visibility",
                                                  $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.image1$visibility",
                                                  visible: ExpressionProperty({
                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "not", "parameters": [{ "type": "function", "name": "contains", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }] }, { "type": "literal", "value": "OpenAI" }] }] }, "then": { "type": "function", "name": "not", "parameters": [{ "type": "function", "name": "contains", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }] }, { "type": "literal", "value": "Mistral" }] }] }, "else": { "type": "literal", "value": false } }, "then": { "type": "function", "name": "not", "parameters": [{ "type": "function", "name": "contains", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }] }, { "type": "literal", "value": "Amazon" }] }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox8", "source": "object" } } }
                                                  }),
                                                  contents: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Image,
                                                      {
                                                        key: "p.MyFirstAIBot.BotConfig_NewEdit.image1",
                                                        $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.image1",
                                                        datasource: "image",
                                                        imageObject: WebStaticImageProperty({
                                                          "image": { "uri": "img/ConversationalUI$Image_collection$mxcloud.svg" }
                                                        }),
                                                        defaultImageDynamic: void 0,
                                                        imageUrl: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                          })
                                                        ]),
                                                        imageIcon: void 0,
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
                                                        iconSize: 14,
                                                        displayAs: "fullImage",
                                                        responsive: true,
                                                        class: "mx-name-image1 img--22-22",
                                                        style: void 0,
                                                        tabIndex: void 0
                                                      }
                                                    )
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $ConditionalVisibilityWrapper,
                                                {
                                                  key: "p.MyFirstAIBot.BotConfig_NewEdit.image2$visibility",
                                                  $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.image2$visibility",
                                                  visible: ExpressionProperty({
                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "contains", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }] }, { "type": "literal", "value": "OpenAI" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "contains", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }] }, { "type": "literal", "value": "Azure" }] }, { "type": "literal", "value": false }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox8", "source": "object" } } }
                                                  }),
                                                  contents: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Image,
                                                      {
                                                        key: "p.MyFirstAIBot.BotConfig_NewEdit.image2",
                                                        $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.image2",
                                                        datasource: "image",
                                                        imageObject: WebStaticImageProperty({
                                                          "image": { "uri": "img/ConversationalUI$Image_collection$openai.svg" }
                                                        }),
                                                        defaultImageDynamic: void 0,
                                                        imageUrl: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                          })
                                                        ]),
                                                        imageIcon: void 0,
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
                                                        iconSize: 14,
                                                        displayAs: "fullImage",
                                                        responsive: true,
                                                        class: "mx-name-image2 img--22-22",
                                                        style: void 0,
                                                        tabIndex: void 0
                                                      }
                                                    )
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $ConditionalVisibilityWrapper,
                                                {
                                                  key: "p.MyFirstAIBot.BotConfig_NewEdit.image3$visibility",
                                                  $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.image3$visibility",
                                                  visible: ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }] }, { "type": "literal", "value": "Azure" }] }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox8", "source": "object" } } }
                                                  }),
                                                  contents: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Image,
                                                      {
                                                        key: "p.MyFirstAIBot.BotConfig_NewEdit.image3",
                                                        $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.image3",
                                                        datasource: "image",
                                                        imageObject: WebStaticImageProperty({
                                                          "image": { "uri": "img/ConversationalUI$Image_collection$azure.svg" }
                                                        }),
                                                        defaultImageDynamic: void 0,
                                                        imageUrl: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                          })
                                                        ]),
                                                        imageIcon: void 0,
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
                                                        iconSize: 14,
                                                        displayAs: "fullImage",
                                                        responsive: true,
                                                        class: "mx-name-image3 img--22-22",
                                                        style: void 0,
                                                        tabIndex: void 0
                                                      }
                                                    )
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $ConditionalVisibilityWrapper,
                                                {
                                                  key: "p.MyFirstAIBot.BotConfig_NewEdit.image4$visibility",
                                                  $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.image4$visibility",
                                                  visible: ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }] }, { "type": "literal", "value": "Amazon" }] }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox8", "source": "object" } } }
                                                  }),
                                                  contents: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Image,
                                                      {
                                                        key: "p.MyFirstAIBot.BotConfig_NewEdit.image4",
                                                        $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.image4",
                                                        datasource: "image",
                                                        imageObject: WebStaticImageProperty({
                                                          "image": { "uri": "img/ConversationalUI$Image_collection$bedrock.svg" }
                                                        }),
                                                        defaultImageDynamic: void 0,
                                                        imageUrl: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                          })
                                                        ]),
                                                        imageIcon: void 0,
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
                                                        iconSize: 14,
                                                        displayAs: "fullImage",
                                                        responsive: true,
                                                        class: "mx-name-image4 img--22-22",
                                                        style: void 0,
                                                        tabIndex: void 0
                                                      }
                                                    )
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $ConditionalVisibilityWrapper,
                                                {
                                                  key: "p.MyFirstAIBot.BotConfig_NewEdit.image5$visibility",
                                                  $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.image5$visibility",
                                                  visible: ExpressionProperty({
                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "contains", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }] }, { "type": "literal", "value": "Mistral" }] }, "then": { "type": "function", "name": "not", "parameters": [{ "type": "function", "name": "contains", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }] }, { "type": "literal", "value": "Amazon" }] }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox8", "source": "object" } } }
                                                  }),
                                                  contents: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Image,
                                                      {
                                                        key: "p.MyFirstAIBot.BotConfig_NewEdit.image5",
                                                        $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.image5",
                                                        datasource: "image",
                                                        imageObject: WebStaticImageProperty({
                                                          "image": { "uri": "img/ConversationalUI$Image_collection$mistral.png" }
                                                        }),
                                                        defaultImageDynamic: void 0,
                                                        imageUrl: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                          })
                                                        ]),
                                                        imageIcon: void 0,
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
                                                        iconSize: 14,
                                                        displayAs: "fullImage",
                                                        responsive: true,
                                                        class: "mx-name-image5 img--22-22",
                                                        style: void 0,
                                                        tabIndex: void 0
                                                      }
                                                    )
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Text,
                                                {
                                                  key: "p.MyFirstAIBot.BotConfig_NewEdit.text5",
                                                  $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.text5",
                                                  class: "mx-name-text5",
                                                  style: void 0,
                                                  caption: selectTranslation([
                                                    ExpressionProperty({
                                                      "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "DisplayName" }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox8", "source": "object" } } }
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
                                    }),
                                    optionsSourceDatabaseCustomContentType: "no",
                                    staticDataSourceCustomContentType: "no",
                                    showFooter: false,
                                    menuFooterContent: void 0,
                                    selectionMethod: "checkbox",
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
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox8"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Model" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox8"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox8"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $DataView,
                            {
                              key: "p.MyFirstAIBot.BotConfig_NewEdit.dataView2",
                              $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.dataView2",
                              class: "mx-name-dataView2 form-vertical",
                              style: void 0,
                              tabIndex: void 0,
                              object: AssociationObjectProperty({
                                "dataSourceId": "p.55",
                                "scope": "$BotConfig",
                                "editable": true,
                                "path": "ConversationalUI.ProviderConfig_DeployedModel/AmazonBedrockConnector.BedrockDeployedModel",
                                "operationId": "zkYuDNgiI1O7bfwxXKxm2A"
                              }),
                              emptyMessage: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              body: [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.MyFirstAIBot.BotConfig_NewEdit.container3$visibility",
                                    $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.container3$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.BotConfig_NewEdit.dataView2", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.MyFirstAIBot.BotConfig_NewEdit.container3",
                                          $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.container3",
                                          class: "mx-name-container3",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.MyFirstAIBot.BotConfig_NewEdit.container9$visibility",
                                                $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.container9$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "BotConfig", "path": "ActionMicroflowSelection" }, { "type": "literal", "value": "ChatContext_BedrockRetrieveAndGenerate_ActionMicroflow" }] }, "args": { "BotConfig": { "widget": "$BotConfig", "source": "object" } } }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.MyFirstAIBot.BotConfig_NewEdit.container9",
                                                      $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.container9",
                                                      class: "mx-name-container9 spacing-outer-top-medium spacing-outer-bottom-medium",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.MyFirstAIBot.BotConfig_NewEdit.container10",
                                                            $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.container10",
                                                            class: "mx-name-container10 alert alert-primary spacing-inner-top-medium spacing-inner-right-medium spacing-inner-bottom-medium spacing-inner-left-medium",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Div,
                                                                {
                                                                  key: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid4",
                                                                  $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid4",
                                                                  class: "mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid",
                                                                  style: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Div,
                                                                      {
                                                                        key: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid4$row0",
                                                                        $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid4$row0",
                                                                        class: "row",
                                                                        style: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Div,
                                                                            {
                                                                              key: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid4$row0$column0",
                                                                              $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid4$row0$column0",
                                                                              class: "col-lg-auto col-md-auto col-auto align-self-start",
                                                                              style: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Container,
                                                                                  {
                                                                                    key: "p.MyFirstAIBot.BotConfig_NewEdit.container11",
                                                                                    $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.container11",
                                                                                    class: "mx-name-container11 alert-icon mx-icon mx-icon-filled mx-icon-info-circle",
                                                                                    style: void 0,
                                                                                    renderMode: "div",
                                                                                    onClick: void 0,
                                                                                    content: void 0,
                                                                                    ariaHidden: false
                                                                                  }
                                                                                )
                                                                              ]
                                                                            }
                                                                          ),
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Div,
                                                                            {
                                                                              key: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid4$row0$column1",
                                                                              $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid4$row0$column1",
                                                                              class: "col-lg col-md col align-self-center",
                                                                              style: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Text,
                                                                                  {
                                                                                    key: "p.MyFirstAIBot.BotConfig_NewEdit.text28",
                                                                                    $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.text28",
                                                                                    class: "mx-name-text28 alert-title text-bold spacing-outer-bottom-none",
                                                                                    style: void 0,
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Model Information" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    renderMode: "h5"
                                                                                  }
                                                                                ),
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Text,
                                                                                  {
                                                                                    key: "p.MyFirstAIBot.BotConfig_NewEdit.text32",
                                                                                    $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.text32",
                                                                                    class: "mx-name-text32 alert-description spacing-outer-bottom-none",
                                                                                    style: void 0,
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "The Model dropdown has a list of currently active models available on Bedrock for on-demand throughput.\r\nYou can find an overview here:" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    renderMode: "p"
                                                                                  }
                                                                                ),
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Div,
                                                                                  {
                                                                                    key: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid5",
                                                                                    $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid5",
                                                                                    class: "mx-name-layoutGrid5 mx-layoutgrid mx-layoutgrid-fluid",
                                                                                    style: void 0,
                                                                                    content: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Div,
                                                                                        {
                                                                                          key: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid5$row0",
                                                                                          $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid5$row0",
                                                                                          class: "row",
                                                                                          style: void 0,
                                                                                          content: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $Div,
                                                                                              {
                                                                                                key: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid5$row0$column0",
                                                                                                $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid5$row0$column0",
                                                                                                class: "col-lg col-md col",
                                                                                                style: void 0,
                                                                                                content: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Container,
                                                                                                    {
                                                                                                      key: "p.MyFirstAIBot.BotConfig_NewEdit.container12",
                                                                                                      $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.container12",
                                                                                                      class: "mx-name-container12 row-left spacing-outer-top-medium spacing-inner-bottom-medium",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Text,
                                                                                                          {
                                                                                                            key: "p.MyFirstAIBot.BotConfig_NewEdit.text3",
                                                                                                            $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.text3",
                                                                                                            class: "mx-name-text3 spacing-inner-right",
                                                                                                            style: void 0,
                                                                                                            caption: selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "- " }, "args": {} }
                                                                                                              })
                                                                                                            ]),
                                                                                                            renderMode: "span"
                                                                                                          }
                                                                                                        ),
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $ActionButton,
                                                                                                          {
                                                                                                            key: "p.MyFirstAIBot.BotConfig_NewEdit.actionButton5",
                                                                                                            $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.actionButton5",
                                                                                                            buttonId: "p.MyFirstAIBot.BotConfig_NewEdit.actionButton5",
                                                                                                            class: "mx-name-actionButton5",
                                                                                                            style: void 0,
                                                                                                            tabIndex: void 0,
                                                                                                            renderType: "link",
                                                                                                            role: "button",
                                                                                                            buttonClass: "btn-default",
                                                                                                            caption: selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "Amazon Bedrock Model ID's" }, "args": {} }
                                                                                                              })
                                                                                                            ]),
                                                                                                            tooltip: TextProperty({
                                                                                                              "value": selectTranslation([
                                                                                                                ""
                                                                                                              ])
                                                                                                            }),
                                                                                                            icon: void 0,
                                                                                                            action: ActionProperty({
                                                                                                              "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html#model-ids-arnshttps://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html#model-ids-arns" }, "disabledDuringExecution": true },
                                                                                                              "abortOnServerValidation": true
                                                                                                            })
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
                                                                                ),
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Text,
                                                                                  {
                                                                                    key: "p.MyFirstAIBot.BotConfig_NewEdit.text33",
                                                                                    $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.text33",
                                                                                    class: "mx-name-text33 alert-description spacing-outer-bottom-none text-semibold",
                                                                                    style: void 0,
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "For convenience, models that don't support system prompts or conversations are excluded.\r\nIf you want to include them you can do so by changing the Model combobox on this page (BotConfig_NewEdit)." }, "args": {} }
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
                                                key: "p.MyFirstAIBot.BotConfig_NewEdit.container5$visibility",
                                                $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.container5$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "BotConfig", "path": "ActionMicroflowSelection" }, { "type": "literal", "value": "ChatContext_BedrockRetrieveAndGenerate_ActionMicroflow" }] }, "args": { "BotConfig": { "widget": "$BotConfig", "source": "object" } } }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.MyFirstAIBot.BotConfig_NewEdit.container5",
                                                      $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.container5",
                                                      class: "mx-name-container5 spacing-outer-top-medium spacing-outer-bottom-medium",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.MyFirstAIBot.BotConfig_NewEdit.container7",
                                                            $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.container7",
                                                            class: "mx-name-container7 alert alert-primary spacing-inner-top-medium spacing-inner-right-medium spacing-inner-bottom-medium spacing-inner-left-medium",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Div,
                                                                {
                                                                  key: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid2",
                                                                  $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid2",
                                                                  class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                                  style: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Div,
                                                                      {
                                                                        key: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid2$row0",
                                                                        $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid2$row0",
                                                                        class: "row",
                                                                        style: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Div,
                                                                            {
                                                                              key: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid2$row0$column0",
                                                                              $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid2$row0$column0",
                                                                              class: "col-lg-auto col-md-auto col-auto align-self-start",
                                                                              style: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Container,
                                                                                  {
                                                                                    key: "p.MyFirstAIBot.BotConfig_NewEdit.container4",
                                                                                    $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.container4",
                                                                                    class: "mx-name-container4 alert-icon mx-icon mx-icon-filled mx-icon-info-circle",
                                                                                    style: void 0,
                                                                                    renderMode: "div",
                                                                                    onClick: void 0,
                                                                                    content: void 0,
                                                                                    ariaHidden: false
                                                                                  }
                                                                                )
                                                                              ]
                                                                            }
                                                                          ),
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Div,
                                                                            {
                                                                              key: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid2$row0$column1",
                                                                              $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid2$row0$column1",
                                                                              class: "col-lg col-md col align-self-center",
                                                                              style: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Text,
                                                                                  {
                                                                                    key: "p.MyFirstAIBot.BotConfig_NewEdit.text27",
                                                                                    $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.text27",
                                                                                    class: "mx-name-text27 alert-title text-bold spacing-outer-bottom-none",
                                                                                    style: void 0,
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Knowledge Base Information" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    renderMode: "h5"
                                                                                  }
                                                                                ),
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Text,
                                                                                  {
                                                                                    key: "p.MyFirstAIBot.BotConfig_NewEdit.text30",
                                                                                    $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.text30",
                                                                                    class: "mx-name-text30 alert-description spacing-outer-bottom-none",
                                                                                    style: void 0,
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "For additional details regarding the supported models and regions when using Amazon Bedrock\u2019s Knowledge Bases, please refer to the official documentation:" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    renderMode: "p"
                                                                                  }
                                                                                ),
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Div,
                                                                                  {
                                                                                    key: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid3",
                                                                                    $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid3",
                                                                                    class: "mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid",
                                                                                    style: void 0,
                                                                                    content: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Div,
                                                                                        {
                                                                                          key: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid3$row0",
                                                                                          $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid3$row0",
                                                                                          class: "row",
                                                                                          style: void 0,
                                                                                          content: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $Div,
                                                                                              {
                                                                                                key: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid3$row0$column0",
                                                                                                $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid3$row0$column0",
                                                                                                class: "col-lg col-md col",
                                                                                                style: void 0,
                                                                                                content: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Container,
                                                                                                    {
                                                                                                      key: "p.MyFirstAIBot.BotConfig_NewEdit.container6",
                                                                                                      $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.container6",
                                                                                                      class: "mx-name-container6 row-left spacing-outer-top-medium",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Text,
                                                                                                          {
                                                                                                            key: "p.MyFirstAIBot.BotConfig_NewEdit.text1",
                                                                                                            $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.text1",
                                                                                                            class: "mx-name-text1 spacing-inner-right",
                                                                                                            style: void 0,
                                                                                                            caption: selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "- " }, "args": {} }
                                                                                                              })
                                                                                                            ]),
                                                                                                            renderMode: "span"
                                                                                                          }
                                                                                                        ),
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $ActionButton,
                                                                                                          {
                                                                                                            key: "p.MyFirstAIBot.BotConfig_NewEdit.actionButton3",
                                                                                                            $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.actionButton3",
                                                                                                            buttonId: "p.MyFirstAIBot.BotConfig_NewEdit.actionButton3",
                                                                                                            class: "mx-name-actionButton3",
                                                                                                            style: void 0,
                                                                                                            tabIndex: void 0,
                                                                                                            renderType: "link",
                                                                                                            role: "button",
                                                                                                            buttonClass: "btn-default",
                                                                                                            caption: selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "Supported AWS Regions" }, "args": {} }
                                                                                                              })
                                                                                                            ]),
                                                                                                            tooltip: TextProperty({
                                                                                                              "value": selectTranslation([
                                                                                                                ""
                                                                                                              ])
                                                                                                            }),
                                                                                                            icon: void 0,
                                                                                                            action: ActionProperty({
                                                                                                              "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock-regions.html" }, "disabledDuringExecution": true },
                                                                                                              "abortOnServerValidation": true
                                                                                                            })
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
                                                                                      ),
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Div,
                                                                                        {
                                                                                          key: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid3$row1",
                                                                                          $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid3$row1",
                                                                                          class: "row",
                                                                                          style: void 0,
                                                                                          content: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $Div,
                                                                                              {
                                                                                                key: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid3$row1$column0",
                                                                                                $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid3$row1$column0",
                                                                                                class: "col-lg col-md col",
                                                                                                style: void 0,
                                                                                                content: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Container,
                                                                                                    {
                                                                                                      key: "p.MyFirstAIBot.BotConfig_NewEdit.container8",
                                                                                                      $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.container8",
                                                                                                      class: "mx-name-container8 row-left spacing-outer-top-none spacing-inner-bottom-medium",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Text,
                                                                                                          {
                                                                                                            key: "p.MyFirstAIBot.BotConfig_NewEdit.text2",
                                                                                                            $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.text2",
                                                                                                            class: "mx-name-text2 spacing-inner-right",
                                                                                                            style: void 0,
                                                                                                            caption: selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "- " }, "args": {} }
                                                                                                              })
                                                                                                            ]),
                                                                                                            renderMode: "span"
                                                                                                          }
                                                                                                        ),
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $ActionButton,
                                                                                                          {
                                                                                                            key: "p.MyFirstAIBot.BotConfig_NewEdit.actionButton4",
                                                                                                            $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.actionButton4",
                                                                                                            buttonId: "p.MyFirstAIBot.BotConfig_NewEdit.actionButton4",
                                                                                                            class: "mx-name-actionButton4",
                                                                                                            style: void 0,
                                                                                                            tabIndex: void 0,
                                                                                                            renderType: "link",
                                                                                                            role: "button",
                                                                                                            buttonClass: "btn-default",
                                                                                                            caption: selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "Model support by feature" }, "args": {} }
                                                                                                              })
                                                                                                            ]),
                                                                                                            tooltip: TextProperty({
                                                                                                              "value": selectTranslation([
                                                                                                                ""
                                                                                                              ])
                                                                                                            }),
                                                                                                            icon: void 0,
                                                                                                            action: ActionProperty({
                                                                                                              "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.aws.amazon.com/bedrock/latest/userguide/models-features.html" }, "disabledDuringExecution": true },
                                                                                                              "abortOnServerValidation": true
                                                                                                            })
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
                                                                                ),
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Text,
                                                                                  {
                                                                                    key: "p.MyFirstAIBot.BotConfig_NewEdit.text31",
                                                                                    $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.text31",
                                                                                    class: "mx-name-text31 alert-description spacing-outer-bottom-none text-semibold",
                                                                                    style: void 0,
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "A list of available knowledge bases can only be displayed if the environment variables are valid and set accordingly." }, "args": {} }
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
                                                      ],
                                                      ariaHidden: false
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $FormGroup,
                                              {
                                                key: "p.MyFirstAIBot.BotConfig_NewEdit.dropDown3$formGroup",
                                                $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.dropDown3$formGroup",
                                                class: "mx-name-dropDown3",
                                                style: void 0,
                                                control: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Combobox,
                                                    {
                                                      key: "p.MyFirstAIBot.BotConfig_NewEdit.dropDown3",
                                                      $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.dropDown3",
                                                      source: "static",
                                                      optionsSourceType: "association",
                                                      optionsSourceDatabaseDataSource: void 0,
                                                      optionsSourceDatabaseCaptionType: "attribute",
                                                      optionsSourceDatabaseDefaultValue: void 0,
                                                      optionsSourceAssociationDataSource: void 0,
                                                      optionsSourceAssociationCaptionType: "attribute",
                                                      staticAttribute: AttributeProperty({
                                                        "scope": "$BotConfig",
                                                        "path": "",
                                                        "entity": "MyFirstAIBot.BotConfig",
                                                        "attribute": "ActionMicroflowSelection",
                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                        "isList": false
                                                      }),
                                                      optionsSourceStaticDataSource: [
                                                        {
                                                          "staticDataSourceValue": ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "ChatContext_ChatWithHistory_ActionMicroflow" }, "args": {} }
                                                          }),
                                                          "staticDataSourceCustomContent": void 0,
                                                          "staticDataSourceCaption": selectTranslation([
                                                            ExpressionProperty({
                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "literal", "value": "ChatContext_ChatWithHistory_ActionMicroflow" }, { "type": "literal", "value": "MyFirstAIBot.ENUM_ActionMicroflowSelection" }] }, "args": {} }
                                                            })
                                                          ])
                                                        },
                                                        {
                                                          "staticDataSourceValue": ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "ChatContext_BedrockRetrieveAndGenerate_ActionMicroflow" }, "args": {} }
                                                          }),
                                                          "staticDataSourceCustomContent": void 0,
                                                          "staticDataSourceCaption": selectTranslation([
                                                            ExpressionProperty({
                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "literal", "value": "ChatContext_BedrockRetrieveAndGenerate_ActionMicroflow" }, { "type": "literal", "value": "MyFirstAIBot.ENUM_ActionMicroflowSelection" }] }, "args": {} }
                                                            })
                                                          ])
                                                        }
                                                      ],
                                                      emptyOptionText: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })
                                                      ]),
                                                      filterType: "contains",
                                                      noOptionsText: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })
                                                      ]),
                                                      clearable: true,
                                                      optionsSourceAssociationCustomContentType: "no",
                                                      optionsSourceDatabaseCustomContentType: "no",
                                                      staticDataSourceCustomContentType: "no",
                                                      showFooter: false,
                                                      menuFooterContent: void 0,
                                                      selectionMethod: "checkbox",
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
                                                      tabIndex: void 0,
                                                      id: DerivedUniqueIdProperty({
                                                        "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.dropDown3"
                                                      })
                                                    }
                                                  )
                                                ],
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Action Microflow" }, "args": {} }
                                                  })
                                                ]),
                                                labelFor: DerivedUniqueIdProperty({
                                                  "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.dropDown3"
                                                }),
                                                width: void 0,
                                                orientation: "vertical",
                                                hasError: ValidationProperty({
                                                  "inputWidgetId": "p.MyFirstAIBot.BotConfig_NewEdit.dropDown3"
                                                })
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.MyFirstAIBot.BotConfig_NewEdit.comboBox3$formGroup$visibility",
                                                $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.comboBox3$formGroup$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "BotConfig", "path": "ActionMicroflowSelection" }, { "type": "literal", "value": "ChatContext_BedrockRetrieveAndGenerate_ActionMicroflow" }] }, "args": { "BotConfig": { "widget": "$BotConfig", "source": "object" } } }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $FormGroup,
                                                    {
                                                      key: "p.MyFirstAIBot.BotConfig_NewEdit.comboBox3$formGroup",
                                                      $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.comboBox3$formGroup",
                                                      class: "mx-name-comboBox3",
                                                      style: void 0,
                                                      control: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Combobox,
                                                          {
                                                            key: "p.MyFirstAIBot.BotConfig_NewEdit.comboBox3",
                                                            $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.comboBox3",
                                                            source: "context",
                                                            optionsSourceType: "association",
                                                            optionsSourceDatabaseDataSource: void 0,
                                                            optionsSourceDatabaseCaptionType: "attribute",
                                                            optionsSourceDatabaseDefaultValue: void 0,
                                                            attributeAssociation: AssociationProperty({
                                                              "type": "Reference",
                                                              "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                              "path": "",
                                                              "attribute": "MyFirstAIBot.BotConfig_AmazonBedrockKnowledgeBase",
                                                              "endpointEntity": "AmazonBedrockConnector.AmazonBedrockKnowledgeBase",
                                                              "selectableObjectsId": "p.7",
                                                              "scope": "$BotConfig",
                                                              "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                            }),
                                                            optionsSourceAssociationDataSource: MicroflowObjectListProperty({
                                                              "argMap": {},
                                                              "dataSourceId": "p.7",
                                                              "entity": "AmazonBedrockConnector.AmazonBedrockKnowledgeBase",
                                                              "scope": "p.MyFirstAIBot.BotConfig_NewEdit.dataView2",
                                                              "operationId": "EENIGv4/xlqTWBgrK7+nfA"
                                                            }),
                                                            optionsSourceAssociationCaptionType: "attribute",
                                                            optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                                              "path": "",
                                                              "entity": "AmazonBedrockConnector.AmazonBedrockKnowledgeBase",
                                                              "attribute": "Name",
                                                              "attributeType": "String",
                                                              "sortable": true,
                                                              "filterable": true,
                                                              "dataSourceId": "p.7",
                                                              "isList": false
                                                            }),
                                                            optionsSourceAssociationCaptionExpression: void 0,
                                                            optionsSourceStaticDataSource: [],
                                                            emptyOptionText: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                              })
                                                            ]),
                                                            filterType: "contains",
                                                            noOptionsText: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Create a Bedrock configuration and click 'Save & Sync' to see available knowledge bases." }, "args": {} }
                                                              })
                                                            ]),
                                                            clearable: true,
                                                            optionsSourceAssociationCustomContentType: "no",
                                                            optionsSourceAssociationCustomContent: void 0,
                                                            optionsSourceDatabaseCustomContentType: "no",
                                                            staticDataSourceCustomContentType: "no",
                                                            showFooter: false,
                                                            menuFooterContent: void 0,
                                                            selectionMethod: "checkbox",
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
                                                            tabIndex: void 0,
                                                            id: DerivedUniqueIdProperty({
                                                              "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox3"
                                                            })
                                                          }
                                                        )
                                                      ],
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Knowledge base" }, "args": {} }
                                                        })
                                                      ]),
                                                      labelFor: DerivedUniqueIdProperty({
                                                        "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox3"
                                                      }),
                                                      width: void 0,
                                                      orientation: "vertical",
                                                      hasError: ValidationProperty({
                                                        "inputWidgetId": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox3"
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
                              ],
                              hideFooter: false,
                              footer: void 0
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $DataView,
                            {
                              key: "p.MyFirstAIBot.BotConfig_NewEdit.dataView6",
                              $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.dataView6",
                              class: "mx-name-dataView6 form-vertical",
                              style: void 0,
                              tabIndex: void 0,
                              object: AssociationObjectProperty({
                                "dataSourceId": "p.138",
                                "scope": "$BotConfig",
                                "editable": true,
                                "path": "ConversationalUI.ProviderConfig_DeployedModel/OpenAIConnector.OpenAIDeployedModel",
                                "operationId": "tSSPw/PSxF66pP4TL8Rl7g"
                              }),
                              emptyMessage: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              body: [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.MyFirstAIBot.BotConfig_NewEdit.container2$visibility",
                                    $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.container2$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.BotConfig_NewEdit.dataView6", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.MyFirstAIBot.BotConfig_NewEdit.container2",
                                          $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.container2",
                                          class: "mx-name-container2",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $FormGroup,
                                              {
                                                key: "p.MyFirstAIBot.BotConfig_NewEdit.dropDown4$formGroup",
                                                $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.dropDown4$formGroup",
                                                class: "mx-name-dropDown4",
                                                style: void 0,
                                                control: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Combobox,
                                                    {
                                                      key: "p.MyFirstAIBot.BotConfig_NewEdit.dropDown4",
                                                      $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.dropDown4",
                                                      source: "static",
                                                      optionsSourceType: "association",
                                                      optionsSourceDatabaseDataSource: void 0,
                                                      optionsSourceDatabaseCaptionType: "attribute",
                                                      optionsSourceDatabaseDefaultValue: void 0,
                                                      optionsSourceAssociationDataSource: void 0,
                                                      optionsSourceAssociationCaptionType: "attribute",
                                                      staticAttribute: AttributeProperty({
                                                        "scope": "$BotConfig",
                                                        "path": "",
                                                        "entity": "MyFirstAIBot.BotConfig",
                                                        "attribute": "ActionMicroflowSelection",
                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                        "isList": false
                                                      }),
                                                      optionsSourceStaticDataSource: [
                                                        {
                                                          "staticDataSourceValue": ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "ChatContext_ChatWithHistory_ActionMicroflow" }, "args": {} }
                                                          }),
                                                          "staticDataSourceCustomContent": void 0,
                                                          "staticDataSourceCaption": selectTranslation([
                                                            ExpressionProperty({
                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "literal", "value": "ChatContext_ChatWithHistory_ActionMicroflow" }, { "type": "literal", "value": "MyFirstAIBot.ENUM_ActionMicroflowSelection" }] }, "args": {} }
                                                            })
                                                          ])
                                                        }
                                                      ],
                                                      emptyOptionText: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })
                                                      ]),
                                                      filterType: "contains",
                                                      noOptionsText: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })
                                                      ]),
                                                      clearable: true,
                                                      optionsSourceAssociationCustomContentType: "no",
                                                      optionsSourceDatabaseCustomContentType: "no",
                                                      staticDataSourceCustomContentType: "no",
                                                      showFooter: false,
                                                      menuFooterContent: void 0,
                                                      selectionMethod: "checkbox",
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
                                                      tabIndex: void 0,
                                                      id: DerivedUniqueIdProperty({
                                                        "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.dropDown4"
                                                      })
                                                    }
                                                  )
                                                ],
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Action Microflow" }, "args": {} }
                                                  })
                                                ]),
                                                labelFor: DerivedUniqueIdProperty({
                                                  "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.dropDown4"
                                                }),
                                                width: void 0,
                                                orientation: "vertical",
                                                hasError: ValidationProperty({
                                                  "inputWidgetId": "p.MyFirstAIBot.BotConfig_NewEdit.dropDown4"
                                                })
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
                          ),
                          /* @__PURE__ */ React.createElement(
                            $DataView,
                            {
                              key: "p.MyFirstAIBot.BotConfig_NewEdit.dataView7",
                              $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.dataView7",
                              class: "mx-name-dataView7 form-vertical",
                              style: void 0,
                              tabIndex: void 0,
                              object: AssociationObjectProperty({
                                "dataSourceId": "p.147",
                                "scope": "$BotConfig",
                                "editable": true,
                                "path": "ConversationalUI.ProviderConfig_DeployedModel/MxGenAIConnector.MxCloudDeployedModel",
                                "operationId": "7jWWqblqT1CeJOj/uLE+1w"
                              }),
                              emptyMessage: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              body: [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.MyFirstAIBot.BotConfig_NewEdit.container13$visibility",
                                    $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.container13$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.BotConfig_NewEdit.dataView7", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.MyFirstAIBot.BotConfig_NewEdit.container13",
                                          $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.container13",
                                          class: "mx-name-container13",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $FormGroup,
                                              {
                                                key: "p.MyFirstAIBot.BotConfig_NewEdit.dropDown5$formGroup",
                                                $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.dropDown5$formGroup",
                                                class: "mx-name-dropDown5",
                                                style: void 0,
                                                control: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Combobox,
                                                    {
                                                      key: "p.MyFirstAIBot.BotConfig_NewEdit.dropDown5",
                                                      $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.dropDown5",
                                                      source: "static",
                                                      optionsSourceType: "association",
                                                      optionsSourceDatabaseDataSource: void 0,
                                                      optionsSourceDatabaseCaptionType: "attribute",
                                                      optionsSourceDatabaseDefaultValue: void 0,
                                                      optionsSourceAssociationDataSource: void 0,
                                                      optionsSourceAssociationCaptionType: "attribute",
                                                      staticAttribute: AttributeProperty({
                                                        "scope": "$BotConfig",
                                                        "path": "",
                                                        "entity": "MyFirstAIBot.BotConfig",
                                                        "attribute": "ActionMicroflowSelection",
                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                        "isList": false
                                                      }),
                                                      optionsSourceStaticDataSource: [
                                                        {
                                                          "staticDataSourceValue": ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "ChatContext_ChatWithHistory_ActionMicroflow" }, "args": {} }
                                                          }),
                                                          "staticDataSourceCustomContent": void 0,
                                                          "staticDataSourceCaption": selectTranslation([
                                                            ExpressionProperty({
                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "literal", "value": "ChatContext_ChatWithHistory_ActionMicroflow" }, { "type": "literal", "value": "MyFirstAIBot.ENUM_ActionMicroflowSelection" }] }, "args": {} }
                                                            })
                                                          ])
                                                        }
                                                      ],
                                                      emptyOptionText: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })
                                                      ]),
                                                      filterType: "contains",
                                                      noOptionsText: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })
                                                      ]),
                                                      clearable: true,
                                                      optionsSourceAssociationCustomContentType: "no",
                                                      optionsSourceDatabaseCustomContentType: "no",
                                                      staticDataSourceCustomContentType: "no",
                                                      showFooter: false,
                                                      menuFooterContent: void 0,
                                                      selectionMethod: "checkbox",
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
                                                      tabIndex: void 0,
                                                      id: DerivedUniqueIdProperty({
                                                        "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.dropDown5"
                                                      })
                                                    }
                                                  )
                                                ],
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Action Microflow" }, "args": {} }
                                                  })
                                                ]),
                                                labelFor: DerivedUniqueIdProperty({
                                                  "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.dropDown5"
                                                }),
                                                width: void 0,
                                                orientation: "vertical",
                                                hasError: ValidationProperty({
                                                  "inputWidgetId": "p.MyFirstAIBot.BotConfig_NewEdit.dropDown5"
                                                })
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
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.MyFirstAIBot.BotConfig_NewEdit.comboBox2$formGroup",
                              $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.comboBox2$formGroup",
                              class: "mx-name-comboBox2",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $Combobox,
                                  {
                                    key: "p.MyFirstAIBot.BotConfig_NewEdit.comboBox2",
                                    $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.comboBox2",
                                    source: "context",
                                    optionsSourceType: "association",
                                    optionsSourceDatabaseDataSource: void 0,
                                    optionsSourceDatabaseCaptionType: "attribute",
                                    optionsSourceDatabaseDefaultValue: void 0,
                                    attributeAssociation: AssociationProperty({
                                      "type": "Reference",
                                      "entity": "MyFirstAIBot.BotConfig",
                                      "path": "",
                                      "attribute": "MyFirstAIBot.BotConfig_EmbeddingDeployedModel",
                                      "endpointEntity": "GenAICommons.DeployedModel",
                                      "selectableObjectsId": "p.8",
                                      "scope": "p.MyFirstAIBot.BotConfig_NewEdit.dataView1",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                    }),
                                    optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                      "dataSourceId": "p.8",
                                      "entity": "GenAICommons.DeployedModel",
                                      "scope": "p.MyFirstAIBot.BotConfig_NewEdit.dataView1",
                                      "operationId": "y2kQzmrp9F+lzbaxeZ4vIQ",
                                      "sort": []
                                    }),
                                    optionsSourceAssociationCaptionType: "attribute",
                                    optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                      "path": "",
                                      "entity": "GenAICommons.DeployedModel",
                                      "attribute": "DisplayName",
                                      "attributeType": "String",
                                      "sortable": true,
                                      "filterable": true,
                                      "dataSourceId": "p.8",
                                      "isList": false
                                    }),
                                    optionsSourceAssociationCaptionExpression: void 0,
                                    optionsSourceStaticDataSource: [],
                                    emptyOptionText: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    filterType: "contains",
                                    noOptionsText: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    clearable: true,
                                    optionsSourceAssociationCustomContentType: "no",
                                    optionsSourceAssociationCustomContent: void 0,
                                    optionsSourceDatabaseCustomContentType: "no",
                                    staticDataSourceCustomContentType: "no",
                                    showFooter: false,
                                    menuFooterContent: void 0,
                                    selectionMethod: "checkbox",
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
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox2"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Embedding Model" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox2"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.MyFirstAIBot.BotConfig_NewEdit.comboBox1$formGroup",
                              $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.comboBox1$formGroup",
                              class: "mx-name-comboBox1",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $Combobox,
                                  {
                                    key: "p.MyFirstAIBot.BotConfig_NewEdit.comboBox1",
                                    $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.comboBox1",
                                    source: "context",
                                    optionsSourceType: "association",
                                    optionsSourceDatabaseDataSource: void 0,
                                    optionsSourceDatabaseCaptionType: "attribute",
                                    optionsSourceDatabaseDefaultValue: void 0,
                                    attributeAssociation: AssociationProperty({
                                      "type": "Reference",
                                      "entity": "MyFirstAIBot.BotConfig",
                                      "path": "",
                                      "attribute": "MyFirstAIBot.BotConfig_DatabaseConfiguration",
                                      "endpointEntity": "PgVectorKnowledgeBase.DatabaseConfiguration",
                                      "selectableObjectsId": "p.9",
                                      "scope": "p.MyFirstAIBot.BotConfig_NewEdit.dataView1",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                    }),
                                    optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                      "dataSourceId": "p.9",
                                      "entity": "PgVectorKnowledgeBase.DatabaseConfiguration",
                                      "scope": "p.MyFirstAIBot.BotConfig_NewEdit.dataView1",
                                      "operationId": "Oe43FVYJJ1CMeZjLg/fjGA",
                                      "sort": []
                                    }),
                                    optionsSourceAssociationCaptionType: "attribute",
                                    optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                      "path": "",
                                      "entity": "PgVectorKnowledgeBase.DatabaseConfiguration",
                                      "attribute": "DisplayName",
                                      "attributeType": "String",
                                      "sortable": true,
                                      "filterable": true,
                                      "dataSourceId": "p.9",
                                      "isList": false
                                    }),
                                    optionsSourceAssociationCaptionExpression: void 0,
                                    optionsSourceStaticDataSource: [],
                                    emptyOptionText: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    filterType: "contains",
                                    noOptionsText: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    clearable: true,
                                    optionsSourceAssociationCustomContentType: "no",
                                    optionsSourceAssociationCustomContent: void 0,
                                    optionsSourceDatabaseCustomContentType: "no",
                                    staticDataSourceCustomContentType: "no",
                                    showFooter: false,
                                    menuFooterContent: void 0,
                                    selectionMethod: "checkbox",
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
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "DatabaseConfiguration" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.MyFirstAIBot.BotConfig_NewEdit.textBox1$formGroup",
                              $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.textBox1$formGroup",
                              class: "mx-name-textBox1 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.MyFirstAIBot.BotConfig_NewEdit.textBox1",
                                    $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.textBox1",
                                    inputValue: AttributeProperty({
                                      "scope": "p.MyFirstAIBot.BotConfig_NewEdit.dataView1",
                                      "path": "",
                                      "entity": "MyFirstAIBot.BotConfig",
                                      "attribute": "KnowledgeBaseName",
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
                                      "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.textBox1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Knowledge base name" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.textBox1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MyFirstAIBot.BotConfig_NewEdit.textBox1"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.MyFirstAIBot.BotConfig_NewEdit.actionButton1$visibility",
                              $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.MyFirstAIBot.BotConfig_NewEdit.actionButton1",
                                    $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.actionButton1",
                                    buttonId: "p.MyFirstAIBot.BotConfig_NewEdit.actionButton1",
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
                                      "action": { "type": "callMicroflow", "argMap": { "BotConfig": { "widget": "$BotConfig", "source": "object" } }, "config": { "operationId": "/6vDFvoJQVWl+P2f49eRLg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                              key: "p.MyFirstAIBot.BotConfig_NewEdit.actionButton2$visibility",
                              $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.actionButton2$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.MyFirstAIBot.BotConfig_NewEdit.actionButton2",
                                    $widgetId: "p.MyFirstAIBot.BotConfig_NewEdit.actionButton2",
                                    buttonId: "p.MyFirstAIBot.BotConfig_NewEdit.actionButton2",
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
                                      "action": { "type": "callMicroflow", "argMap": { "BotConfig": { "widget": "$BotConfig", "source": "object" } }, "config": { "operationId": "iJIhuY1I5lOIhlh5dT0ktg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
      ]
    }
  )
]);
const title = selectTranslation([
  "Bot Configuration New edit"
]);
const classes = "";
const cancelChangesOperationId = "d60LmsD8sVyZJf/lcUPA8Q";
const closeButton = "p.MyFirstAIBot.BotConfig_NewEdit.actionButton2";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
