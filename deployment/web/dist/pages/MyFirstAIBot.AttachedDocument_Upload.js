import { reactExports, asPluginWidgets, selectTranslation } from '../index-BgmvTcvh.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Cb4MO343.js';
import { ActionButton, ActionProperty } from '../ActionButton-7BeRw6Eb.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-ALaVt2gM.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-Bivq5vCz.js';
import { FileManager, FileUploadProperty } from '../FileManager-BoMqKBUF.js';
import { TextProperty } from '../TextProperty-BV2oKBbq.js';
import { FormGroup, ValidationProperty } from '../FormGroup-Clh5YKWK.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-D6sB2G5T.js';
import { DataView } from '../DataView-BlzHzMI2.js';
import { Div } from '../Div-DznaFJxI.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-CdvE1MzX.js';
import '../CkBXggmw-DpOc9R4C.js';
import '../uEIG9e6s-BfLfin4i.js';
import '../B7_8A3ct-D5Y5qINW.js';
import '../bdxqAC6d-DXeZKQMd.js';
import '../ScrollContainer-U0HrQ4Hh.js';

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $FormGroup, $FileManager, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, FileManager, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MyFirstAIBot.AttachedDocument_Upload.layoutGrid1",
      $widgetId: "p.MyFirstAIBot.AttachedDocument_Upload.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MyFirstAIBot.AttachedDocument_Upload.layoutGrid1$row0",
            $widgetId: "p.MyFirstAIBot.AttachedDocument_Upload.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstAIBot.AttachedDocument_Upload.layoutGrid1$row0$column0",
                  $widgetId: "p.MyFirstAIBot.AttachedDocument_Upload.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.MyFirstAIBot.AttachedDocument_Upload.dataView6",
                        $widgetId: "p.MyFirstAIBot.AttachedDocument_Upload.dataView6",
                        class: "mx-name-dataView6 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.12",
                          "scope": "$AttachedDocument",
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
                              key: "p.MyFirstAIBot.AttachedDocument_Upload.fileManager1$formGroup",
                              $widgetId: "p.MyFirstAIBot.AttachedDocument_Upload.fileManager1$formGroup",
                              class: "mx-fileinput mx-name-fileManager1 mx-filemanager",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $FileManager,
                                  {
                                    key: "p.MyFirstAIBot.AttachedDocument_Upload.fileManager1",
                                    $widgetId: "p.MyFirstAIBot.AttachedDocument_Upload.fileManager1",
                                    upload: FileUploadProperty({
                                      "scope": "p.MyFirstAIBot.AttachedDocument_Upload.dataView6"
                                    }),
                                    showInBrowser: false,
                                    maxFileSize: 5,
                                    extensions: ".pdf,.csv,.doc,.docx,.xls,.xlsx,.html,.txt,.md",
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.MyFirstAIBot.AttachedDocument_Upload.fileManager1"
                                    })
                                  }
                                )
                              ],
                              caption: void 0,
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MyFirstAIBot.AttachedDocument_Upload.fileManager1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MyFirstAIBot.AttachedDocument_Upload.fileManager1"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.MyFirstAIBot.AttachedDocument_Upload.actionButton4$visibility",
                              $widgetId: "p.MyFirstAIBot.AttachedDocument_Upload.actionButton4$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.MyFirstAIBot.AttachedDocument_Upload.actionButton4",
                                    $widgetId: "p.MyFirstAIBot.AttachedDocument_Upload.actionButton4",
                                    buttonId: "p.MyFirstAIBot.AttachedDocument_Upload.actionButton4",
                                    class: "mx-name-actionButton4",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-primary",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Add to chat" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: void 0,
                                    action: ActionProperty({
                                      "action": { "type": "callMicroflow", "argMap": { "AttachedDocument": { "widget": "$AttachedDocument", "source": "object" }, "ChatContext": { "widget": "$ChatContext", "source": "object" } }, "config": { "operationId": "B7mhg7AHMlmqTq68/0lrEw", "progress": { "message": selectTranslation(["Uploading.."]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
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
                              key: "p.MyFirstAIBot.AttachedDocument_Upload.actionButton2",
                              $widgetId: "p.MyFirstAIBot.AttachedDocument_Upload.actionButton2",
                              buttonId: "p.MyFirstAIBot.AttachedDocument_Upload.actionButton2",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "FJfM/eU3PlCrqXHHxP2P+g", "closePage": true }, "disabledDuringExecution": true },
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
  "Upload document"
]);
const classes = "";
const cancelChangesOperationId = "YjSu5vXkv1uXU/JMYwmT/w";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
