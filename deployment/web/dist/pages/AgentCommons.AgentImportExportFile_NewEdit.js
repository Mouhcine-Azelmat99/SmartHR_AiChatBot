import { reactExports, asPluginWidgets, selectTranslation } from '../index-C4WMXW3y.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-BoF30MPe.js';
import { ActionButton, ActionProperty } from '../ActionButton-B8GWmPwn.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-iFOPmzlY.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-DirRMZIL.js';
import { FileManager, FileUploadProperty } from '../FileManager-LK0jKgWi.js';
import { TextProperty } from '../TextProperty-C-8HEWcn.js';
import { FormGroup, ValidationProperty } from '../FormGroup-bFu0BNb6.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BilSZaU4.js';
import { Container } from '../Container-PSi6m2QL.js';
import { DataView } from '../DataView-RrZIPNzV.js';
import { Div } from '../Div-DnhZCXw4.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-B5WEKHCX.js';
import '../CkBXggmw-D1iecObi.js';
import '../uEIG9e6s-VBk3qU43.js';
import '../B7_8A3ct-PtP2BrDi.js';
import '../bdxqAC6d-BooPaEdW.js';
import '../ScrollContainer-DO1bE89X.js';

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $Container, $FormGroup, $FileManager, $ActionButton, $ConditionalVisibilityWrapper } = asPluginWidgets({ Div, DataView, Container, FormGroup, FileManager, ActionButton, ConditionalVisibilityWrapper });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.AgentCommons.AgentImportExportFile_NewEdit.layoutGrid1",
      $widgetId: "p.AgentCommons.AgentImportExportFile_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.AgentCommons.AgentImportExportFile_NewEdit.layoutGrid1$row0",
            $widgetId: "p.AgentCommons.AgentImportExportFile_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.AgentCommons.AgentImportExportFile_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p.AgentCommons.AgentImportExportFile_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.AgentCommons.AgentImportExportFile_NewEdit.dataView6",
                        $widgetId: "p.AgentCommons.AgentImportExportFile_NewEdit.dataView6",
                        class: "mx-name-dataView6 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.12",
                          "scope": "$AgentImportExportFile",
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
                              key: "p.AgentCommons.AgentImportExportFile_NewEdit.container2",
                              $widgetId: "p.AgentCommons.AgentImportExportFile_NewEdit.container2",
                              class: "mx-name-container2 spacing-inner-bottom-medium",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.AgentCommons.AgentImportExportFile_NewEdit.fileManager1$formGroup",
                                    $widgetId: "p.AgentCommons.AgentImportExportFile_NewEdit.fileManager1$formGroup",
                                    class: "mx-fileinput mx-name-fileManager1 spacing-outer-bottom-none mx-filemanager",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $FileManager,
                                        {
                                          key: "p.AgentCommons.AgentImportExportFile_NewEdit.fileManager1",
                                          $widgetId: "p.AgentCommons.AgentImportExportFile_NewEdit.fileManager1",
                                          upload: FileUploadProperty({
                                            "scope": "p.AgentCommons.AgentImportExportFile_NewEdit.dataView6"
                                          }),
                                          showInBrowser: false,
                                          maxFileSize: 5,
                                          extensions: ".json",
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.AgentImportExportFile_NewEdit.fileManager1"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "File" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.AgentCommons.AgentImportExportFile_NewEdit.fileManager1"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.AgentCommons.AgentImportExportFile_NewEdit.fileManager1"
                                    })
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
                              key: "p.AgentCommons.AgentImportExportFile_NewEdit.container1",
                              $widgetId: "p.AgentCommons.AgentImportExportFile_NewEdit.container1",
                              class: "mx-name-container1 row-right",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.AgentCommons.AgentImportExportFile_NewEdit.actionButton2",
                                    $widgetId: "p.AgentCommons.AgentImportExportFile_NewEdit.actionButton2",
                                    buttonId: "p.AgentCommons.AgentImportExportFile_NewEdit.actionButton2",
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
                                      "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "ZzioSy2hrFuIOvV0dYIS6Q", "closePage": true }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.AgentCommons.AgentImportExportFile_NewEdit.actionButton1$visibility",
                                    $widgetId: "p.AgentCommons.AgentImportExportFile_NewEdit.actionButton1$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.AgentCommons.AgentImportExportFile_NewEdit.actionButton1",
                                          $widgetId: "p.AgentCommons.AgentImportExportFile_NewEdit.actionButton1",
                                          buttonId: "p.AgentCommons.AgentImportExportFile_NewEdit.actionButton1",
                                          class: "mx-name-actionButton1",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-primary",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Import" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: void 0,
                                          action: ActionProperty({
                                            "action": { "type": "callMicroflow", "argMap": { "AgentImportExportFile": { "widget": "$AgentImportExportFile", "source": "object" } }, "config": { "operationId": "jo1gksrV1Fmu1tv3T5v0cg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
  "Import Agent With File"
]);
const classes = "";
const cancelChangesOperationId = "vhI9xsHhd1yCHXGXZMZDvg";
const closeButton = "p.AgentCommons.AgentImportExportFile_NewEdit.actionButton2";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
