import { reactExports, asPluginWidgets, selectTranslation } from '../index-B-pQLZz2.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-C1uYYDJ5.js';
import { ActionButton, ActionProperty } from '../ActionButton-C47bDiwH.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-BrlLyOx6.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-QeaM9GtQ.js';
import { FileManager, FileUploadProperty } from '../FileManager-Bs1r0vAC.js';
import { TextProperty } from '../TextProperty-ukMsrrP8.js';
import { FormGroup, ValidationProperty } from '../FormGroup-yCagykDW.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-C-2xhd5O.js';
import { Container } from '../Container-CTbE-yQS.js';
import { DataView } from '../DataView-DtIsQy7l.js';
import { Div } from '../Div-C2k8MuH7.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-D5lHkh-a.js';
import '../CkBXggmw-CEa7-Kz-.js';
import '../uEIG9e6s-CoI72Q4o.js';
import '../B7_8A3ct-CdkfAVjR.js';
import '../bdxqAC6d-ISZWqfJE.js';
import '../ScrollContainer-B-pXvHDA.js';

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
