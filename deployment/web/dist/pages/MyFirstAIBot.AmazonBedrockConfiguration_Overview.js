import { jsxRuntimeExports, classNames, reactExports, asPluginWidgets, Fragment, selectTranslation } from '../index-C4WMXW3y.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-BoF30MPe.js';
import { ActionButton, ActionProperty } from '../ActionButton-B8GWmPwn.js';
import { AssociationObjectListProperty } from '../AssociationObjectListProperty-EcNik3ti.js';
import { ListAttributeProperty, AttributeMetaDataProperty } from '../ListAttributeProperty-dWq-nfHX.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-BEIxbT2n.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-DirRMZIL.js';
import { ListActionProperty } from '../ListActionProperty-CSktymVx.js';
import { ListExpressionProperty } from '../ListExpressionProperty-Cd_aouEd.js';
import { MicroflowObjectListProperty } from '../MicroflowObjectListProperty-Bn_uSbc6.js';
import { MicroflowObjectProperty } from '../MicroflowObjectProperty-D79UAin-.js';
import { SelectionProperty } from '../SelectionProperty-C9kVY2tk.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-CgBaKmKA.js';
import { TextProperty } from '../TextProperty-C-8HEWcn.js';
import { WebIconProperty } from '../WebIconProperty-I8EGGvK6.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BilSZaU4.js';
import { Container } from '../Container-PSi6m2QL.js';
import { DatagridWidgetModule } from '../Datagrid-CPOmkQcC.js';
import { DatagridTextFilterWidgetModule } from '../DatagridTextFilter-CNeyl2wT.js';
import { DataView } from '../DataView-RrZIPNzV.js';
import { Div } from '../Div-DnhZCXw4.js';
import '../Fragment-kXArd_1S.js';
import { usePersistentState } from '../D7vCi_Rn-CSXZhW_h.js';
import { InlineText } from '../InlineText-f914ePRH.js';
import { ListView } from '../ListView-CIUHgBvp.js';
import { TabContainer } from '../TabContainer-DOhqi19Q.js';
import { Text } from '../Text-Ct6rfb-k.js';
import { content as content$1 } from '../Atlas_Core.Atlas_TopBar-CLBulviL.js';
import '../BMuJrVqQ-CWJgr9IB.js';
import '../CxMFexew-CFDhnrRu.js';
import '../UeptbR6O-Dse5KB9T.js';
import '../uEIG9e6s-VBk3qU43.js';
import '../CkBXggmw-D1iecObi.js';
import '../CTcC6PjV-eX91G0mv.js';
import '../CxoxYXlg-BJ3P5g_E.js';
import '../CTQxk13g-CU8g3epp.js';
import '../index-BP8nYpIk.js';
import '../bdxqAC6d-BooPaEdW.js';
import '../D2Vzasyw-BKFXk3UP.js';
import '../WebStaticImageProperty-B3bpPygB.js';
import '../Image-Cid1Yr5n.js';
import '../SidebarToggle-CDtAU1t8.js';
import '../CGlz0zm4-D9CbusC5.js';
import '../ScrollContainer-DO1bE89X.js';
import '../MenuBar-Cfla47fm.js';

function getCollapseAttributes(bodyId, collapsed, setCollapsed) {
  return { role: "button", tabIndex: 0, "aria-expanded": !collapsed, onClick: () => setCollapsed(!collapsed), onKeyDown: (e) => {
    "Enter" !== e.key && " " !== e.key || setCollapsed(!collapsed);
  }, "aria-controls": bodyId };
}
const GroupBox = (props) => {
  const HeaderElement = props.renderMode, bodyId = `${props.id}_body`, headerId = `${props.id}_header`, collapsible = "no" !== props.collapsible, [collapsed, setCollapsed] = usePersistentState("collapsed", "yes" === props.collapsible);
  return jsxRuntimeExports.jsxs("div", { className: classNames("mx-groupbox", { "mx-groupbox-collapsible": collapsible, collapsed }, props.class), "data-focusindex": props.tabIndex ?? 0, style: props.style, children: [props.header && jsxRuntimeExports.jsxs(HeaderElement, { id: headerId, className: "mx-groupbox-header", ...collapsible ? getCollapseAttributes(bodyId, collapsed, setCollapsed) : {}, children: [collapsible && jsxRuntimeExports.jsx("i", { className: classNames("mx-icon-filled mx-groupbox-collapse-icon", { "mx-icon-substract": !collapsed, "mx-icon-add": collapsed }) }), jsxRuntimeExports.jsx(InlineText, { caption: props.header })] }), jsxRuntimeExports.jsx("div", { id: bodyId, className: "mx-groupbox-body", role: "region", "aria-labelledby": headerId, ...props.header && collapsible ? { "data-focusindex": "0" } : void 0, children: props.content })] });
};

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;
const { $Div, $Fragment, $ConditionalVisibilityWrapper, $Container, $Text, $GroupBox, $ActionButton, $DataView, $Datagrid, $TabContainer, $ListView, $DatagridTextFilter } = asPluginWidgets({ Div, Fragment, ConditionalVisibilityWrapper, Container, Text, GroupBox, ActionButton, DataView, Datagrid, TabContainer, ListView, DatagridTextFilter });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1",
      $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row0",
            $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row0$column0",
                  $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Fragment,
                      {
                        key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.snippetCall1",
                        $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.snippetCall1",
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.layoutGrid1$visibility",
                              $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.layoutGrid1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $Div,
                                  {
                                    key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.layoutGrid1",
                                    $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.layoutGrid1",
                                    class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid",
                                    style: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row0.43",
                                          $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row0.43",
                                          class: "row",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Div,
                                              {
                                                key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row0$column0.44",
                                                $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row0$column0.44",
                                                class: "col-lg col-md col",
                                                style: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.container2",
                                                      $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.container2",
                                                      class: "mx-name-container2 pageheader spacing-outer-bottom-large",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.text40",
                                                            $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.text40",
                                                            class: "mx-name-text40 pageheader-title spacing-outer-bottom",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Amazon Bedrock configuration" }, "args": {} }
                                                              })
                                                            ]),
                                                            renderMode: "h1"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.text39",
                                                            $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.text39",
                                                            class: "mx-name-text39 pageheader-subtitle text-detail spacing-outer-bottom-none",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Use this page to configure authentication settings and sync metadata to the database." }, "args": {} }
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
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row1",
                                          $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row1",
                                          class: "row",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Div,
                                              {
                                                key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row1$column0",
                                                $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row1$column0",
                                                class: "col-lg col-md col",
                                                style: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.container5",
                                                      $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.container5",
                                                      class: "mx-name-container5 alert spacing-outer-bottom spacing-inner-top-none spacing-inner-bottom-none",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $GroupBox,
                                                          {
                                                            key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.groupBox3",
                                                            $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.groupBox3",
                                                            id: DerivedUniqueIdProperty({
                                                              "widgetId": "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.groupBox3"
                                                            }),
                                                            class: "mx-name-groupBox3 groupbox-transparent spacing-outer-bottom-none",
                                                            style: void 0,
                                                            tabIndex: void 0,
                                                            header: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Why and how do I need to set this up?" }, "args": {} }
                                                              })
                                                            ]),
                                                            renderMode: "h5",
                                                            collapsible: "yes",
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Div,
                                                                {
                                                                  key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.layoutGrid4",
                                                                  $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.layoutGrid4",
                                                                  class: "mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid",
                                                                  style: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Div,
                                                                      {
                                                                        key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row0",
                                                                        $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row0",
                                                                        class: "row",
                                                                        style: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Div,
                                                                            {
                                                                              key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row0$column0",
                                                                              $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row0$column0",
                                                                              class: "col-lg col-md col",
                                                                              style: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Text,
                                                                                  {
                                                                                    key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.text9",
                                                                                    $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.text9",
                                                                                    class: "mx-name-text9",
                                                                                    style: void 0,
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "We are using the AWS authentication connector to authenticate you when accessing AWS services. You can find more information about this connector here:" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    renderMode: "span"
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
                                                                        key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row1",
                                                                        $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row1",
                                                                        class: "row",
                                                                        style: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Div,
                                                                            {
                                                                              key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row1$column0",
                                                                              $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row1$column0",
                                                                              class: "col-lg col-md col",
                                                                              style: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $ActionButton,
                                                                                  {
                                                                                    key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.actionButton5",
                                                                                    $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.actionButton5",
                                                                                    buttonId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.actionButton5",
                                                                                    class: "mx-name-actionButton5 spacing-outer-top spacing-outer-bottom-large",
                                                                                    style: void 0,
                                                                                    tabIndex: void 0,
                                                                                    renderType: "link",
                                                                                    role: "button",
                                                                                    buttonClass: "btn-default",
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "AWS Authentication" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    tooltip: TextProperty({
                                                                                      "value": selectTranslation([
                                                                                        ""
                                                                                      ])
                                                                                    }),
                                                                                    icon: WebIconProperty({
                                                                                      "icon": { "type": "glyph", "iconClass": "glyphicon-link" }
                                                                                    }),
                                                                                    action: ActionProperty({
                                                                                      "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mendix.com/appstore/connectors/aws/aws-authentication/" }, "disabledDuringExecution": true },
                                                                                      "abortOnServerValidation": true
                                                                                    })
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
                                                                        key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row2",
                                                                        $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row2",
                                                                        class: "row",
                                                                        style: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Div,
                                                                            {
                                                                              key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row2$column0",
                                                                              $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row2$column0",
                                                                              class: "col-lg col-md col",
                                                                              style: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Text,
                                                                                  {
                                                                                    key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.text14",
                                                                                    $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.text14",
                                                                                    class: "mx-name-text14 alert-description",
                                                                                    style: void 0,
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "To get in depth information on how to set up the credentials for the AWS Authentication Connector please look at the documentation here:" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    renderMode: "span"
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
                                                                        key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row3",
                                                                        $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row3",
                                                                        class: "row",
                                                                        style: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Div,
                                                                            {
                                                                              key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row3$column0",
                                                                              $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row3$column0",
                                                                              class: "col-lg col-md col",
                                                                              style: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $ActionButton,
                                                                                  {
                                                                                    key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.actionButton8",
                                                                                    $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.actionButton8",
                                                                                    buttonId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.actionButton8",
                                                                                    class: "mx-name-actionButton8 spacing-outer-top spacing-outer-bottom-large",
                                                                                    style: void 0,
                                                                                    tabIndex: void 0,
                                                                                    renderType: "link",
                                                                                    role: "button",
                                                                                    buttonClass: "btn-default",
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Configuring AWS Authentication" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    tooltip: TextProperty({
                                                                                      "value": selectTranslation([
                                                                                        ""
                                                                                      ])
                                                                                    }),
                                                                                    icon: WebIconProperty({
                                                                                      "icon": { "type": "glyph", "iconClass": "glyphicon-link" }
                                                                                    }),
                                                                                    action: ActionProperty({
                                                                                      "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mendix.com/appstore/modules/aws/amazon-bedrock/#configuring-aws-authentication" }, "disabledDuringExecution": true },
                                                                                      "abortOnServerValidation": true
                                                                                    })
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
                                                                        key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row4",
                                                                        $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row4",
                                                                        class: "row",
                                                                        style: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Div,
                                                                            {
                                                                              key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row4$column0",
                                                                              $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row4$column0",
                                                                              class: "col-lg col-md col",
                                                                              style: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Text,
                                                                                  {
                                                                                    key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.text15",
                                                                                    $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.text15",
                                                                                    class: "mx-name-text15 alert-description spacing-outer-bottom",
                                                                                    style: void 0,
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": 'After setting things up, click on the "New/Edit" button in the AWS Authentication settings section below and set an AWS region as well as the type of credentials you would like to use. \r\nClick on "Save & Sync Data" to finish configuring your Bedrock settings and sync your resources.' }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    renderMode: "span"
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
                                                                        key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row5",
                                                                        $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row5",
                                                                        class: "row",
                                                                        style: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Div,
                                                                            {
                                                                              key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row5$column0",
                                                                              $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row5$column0",
                                                                              class: "col-lg col-md col",
                                                                              style: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Text,
                                                                                  {
                                                                                    key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.text1",
                                                                                    $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.text1",
                                                                                    class: "mx-name-text1 spacing-outer-top-large",
                                                                                    style: void 0,
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Why should I persist information about models, knowledge bases and agents in my application?" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    renderMode: "h5"
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
                                                                        key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row6",
                                                                        $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row6",
                                                                        class: "row",
                                                                        style: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Div,
                                                                            {
                                                                              key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row6$column0",
                                                                              $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row6$column0",
                                                                              class: "col-lg col-md col",
                                                                              style: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Text,
                                                                                  {
                                                                                    key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.text20",
                                                                                    $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.text20",
                                                                                    class: "mx-name-text20 alert-description spacing-outer-bottom",
                                                                                    style: void 0,
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Metadata about models, knowledge bases and agents can be useful to use in other parts of the application, for example, to connect a chat bot to a specific model by choosing the model from a dropdown in the UI." }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    renderMode: "span"
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
                                          key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row2",
                                          $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row2",
                                          class: "row",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Div,
                                              {
                                                key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row2$column0",
                                                $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row2$column0",
                                                class: "col-lg col-md col",
                                                style: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Fragment,
                                                    {
                                                      key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.snippetCall1",
                                                      $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_ConfigOverview.snippetCall1",
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.container1",
                                                            $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.container1",
                                                            class: "mx-name-container1",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $DataView,
                                                                {
                                                                  key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataView1",
                                                                  $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataView1",
                                                                  class: "mx-name-dataView1 form-horizontal",
                                                                  style: void 0,
                                                                  tabIndex: void 0,
                                                                  object: MicroflowObjectProperty({
                                                                    "dataSourceId": "p.109",
                                                                    "editable": true,
                                                                    "operationId": "KpHhylYCoVWFZfQh+2+Udg",
                                                                    "argMap": {}
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
                                                                        key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.snippetCall1",
                                                                        $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.snippetCall1",
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Container,
                                                                            {
                                                                              key: "p.AmazonBedrockConnector.SNIP_Settings_Admin.container4",
                                                                              $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin.container4",
                                                                              class: "mx-name-container4 card spacing-outer-bottom-large",
                                                                              style: void 0,
                                                                              renderMode: "div",
                                                                              onClick: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Text,
                                                                                  {
                                                                                    key: "p.AmazonBedrockConnector.SNIP_Settings_Admin.text22",
                                                                                    $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin.text22",
                                                                                    class: "mx-name-text22 card-title spacing-outer-bottom-large",
                                                                                    style: void 0,
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "AWS Authentication settings" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    renderMode: "h4"
                                                                                  }
                                                                                ),
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Container,
                                                                                  {
                                                                                    key: "p.AmazonBedrockConnector.SNIP_Settings_Admin.container5",
                                                                                    $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin.container5",
                                                                                    class: "mx-name-container5 row-left spacing-outer-top-medium spacing-outer-bottom",
                                                                                    style: void 0,
                                                                                    renderMode: "div",
                                                                                    onClick: void 0,
                                                                                    content: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $ConditionalVisibilityWrapper,
                                                                                        {
                                                                                          key: "p.AmazonBedrockConnector.SNIP_Settings_Admin.actionButton2$visibility",
                                                                                          $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin.actionButton2$visibility",
                                                                                          visible: ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                                          }),
                                                                                          contents: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $ActionButton,
                                                                                              {
                                                                                                key: "p.AmazonBedrockConnector.SNIP_Settings_Admin.actionButton2",
                                                                                                $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin.actionButton2",
                                                                                                buttonId: "p.AmazonBedrockConnector.SNIP_Settings_Admin.actionButton2",
                                                                                                class: "mx-name-actionButton2",
                                                                                                style: void 0,
                                                                                                tabIndex: void 0,
                                                                                                renderType: "button",
                                                                                                role: void 0,
                                                                                                buttonClass: "btn-default",
                                                                                                caption: selectTranslation([
                                                                                                  ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "New/Edit" }, "args": {} }
                                                                                                  })
                                                                                                ]),
                                                                                                tooltip: TextProperty({
                                                                                                  "value": selectTranslation([
                                                                                                    ""
                                                                                                  ])
                                                                                                }),
                                                                                                icon: void 0,
                                                                                                action: ActionProperty({
                                                                                                  "action": { "type": "openPage", "argMap": { "param$Settings": { "widget": "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataView1", "source": "object" } }, "config": { "name": "AmazonBedrockConnector/Settings_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                          key: "p.AmazonBedrockConnector.SNIP_Settings_Admin.actionButton16$visibility",
                                                                                          $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin.actionButton16$visibility",
                                                                                          visible: ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                                          }),
                                                                                          contents: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $ActionButton,
                                                                                              {
                                                                                                key: "p.AmazonBedrockConnector.SNIP_Settings_Admin.actionButton16",
                                                                                                $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin.actionButton16",
                                                                                                buttonId: "p.AmazonBedrockConnector.SNIP_Settings_Admin.actionButton16",
                                                                                                class: "mx-name-actionButton16 spacing-outer-left-medium",
                                                                                                style: void 0,
                                                                                                tabIndex: void 0,
                                                                                                renderType: "button",
                                                                                                role: void 0,
                                                                                                buttonClass: "btn-default",
                                                                                                caption: selectTranslation([
                                                                                                  ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "Validate Settings" }, "args": {} }
                                                                                                  })
                                                                                                ]),
                                                                                                tooltip: TextProperty({
                                                                                                  "value": selectTranslation([
                                                                                                    ""
                                                                                                  ])
                                                                                                }),
                                                                                                icon: void 0,
                                                                                                action: ActionProperty({
                                                                                                  "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "eCYMPpW2g16COOCKq/+HxA", "progress": { "message": selectTranslation([""]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                  $Datagrid,
                                                                                  {
                                                                                    key: "p.AmazonBedrockConnector.SNIP_Settings_Admin.dataGrid21",
                                                                                    $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin.dataGrid21",
                                                                                    datasource: DatabaseObjectListProperty({
                                                                                      "dataSourceId": "p.8",
                                                                                      "entity": "AWSAuthentication.Settings",
                                                                                      "scope": "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataView1",
                                                                                      "operationId": "5HPNNQv0ulyAMiQH4ofPow",
                                                                                      "sort": []
                                                                                    }),
                                                                                    columns: [
                                                                                      {
                                                                                        "showContentAs": "attribute",
                                                                                        "attribute": ListAttributeProperty({
                                                                                          "path": "",
                                                                                          "entity": "AWSAuthentication.Settings",
                                                                                          "attribute": "Region",
                                                                                          "attributeType": "Enum",
                                                                                          "sortable": true,
                                                                                          "filterable": true,
                                                                                          "dataSourceId": "p.8",
                                                                                          "isList": false
                                                                                        }),
                                                                                        "content": void 0,
                                                                                        "dynamicText": selectTranslation([
                                                                                          void 0
                                                                                        ]),
                                                                                        "header": selectTranslation([
                                                                                          ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "literal", "value": "AWS Region" }, "args": {} }
                                                                                          })
                                                                                        ]),
                                                                                        "tooltip": selectTranslation([
                                                                                          void 0
                                                                                        ]),
                                                                                        "filter": void 0,
                                                                                        "sortable": true,
                                                                                        "resizable": true,
                                                                                        "draggable": true,
                                                                                        "hidable": "yes",
                                                                                        "width": "autoFill",
                                                                                        "size": 1,
                                                                                        "alignment": "left",
                                                                                        "wrapText": false,
                                                                                        "exportValue": selectTranslation([
                                                                                          void 0
                                                                                        ]),
                                                                                        "visible": ExpressionProperty({
                                                                                          "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                        }),
                                                                                        "allowEventPropagation": true,
                                                                                        "minWidth": "auto",
                                                                                        "minWidthLimit": 100
                                                                                      },
                                                                                      {
                                                                                        "showContentAs": "attribute",
                                                                                        "attribute": ListAttributeProperty({
                                                                                          "path": "",
                                                                                          "entity": "AWSAuthentication.Settings",
                                                                                          "attribute": "UseStaticCredentials",
                                                                                          "attributeType": "Boolean",
                                                                                          "sortable": true,
                                                                                          "filterable": true,
                                                                                          "dataSourceId": "p.8",
                                                                                          "isList": false
                                                                                        }),
                                                                                        "content": void 0,
                                                                                        "dynamicText": selectTranslation([
                                                                                          void 0
                                                                                        ]),
                                                                                        "header": selectTranslation([
                                                                                          ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "literal", "value": "Use static credentials?" }, "args": {} }
                                                                                          })
                                                                                        ]),
                                                                                        "tooltip": selectTranslation([
                                                                                          void 0
                                                                                        ]),
                                                                                        "filter": void 0,
                                                                                        "sortable": true,
                                                                                        "resizable": true,
                                                                                        "draggable": true,
                                                                                        "hidable": "yes",
                                                                                        "width": "autoFill",
                                                                                        "size": 1,
                                                                                        "alignment": "left",
                                                                                        "wrapText": false,
                                                                                        "exportValue": selectTranslation([
                                                                                          void 0
                                                                                        ]),
                                                                                        "visible": ExpressionProperty({
                                                                                          "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                        }),
                                                                                        "allowEventPropagation": true,
                                                                                        "minWidth": "auto",
                                                                                        "minWidthLimit": 100
                                                                                      }
                                                                                    ],
                                                                                    columnsFilterable: true,
                                                                                    pageSize: 1,
                                                                                    pagination: "virtualScrolling",
                                                                                    pagingPosition: "bottom",
                                                                                    showEmptyPlaceholder: "custom",
                                                                                    emptyPlaceholder: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Text,
                                                                                        {
                                                                                          key: "p.AmazonBedrockConnector.SNIP_Settings_Admin.text2",
                                                                                          $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin.text2",
                                                                                          class: "mx-name-text2",
                                                                                          style: void 0,
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "No AWS  Authentication settings found." }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          renderMode: "span"
                                                                                        }
                                                                                      )
                                                                                    ],
                                                                                    rowClass: void 0,
                                                                                    onClick: ListActionProperty({
                                                                                      "action": { "type": "openPage", "argMap": { "param$Settings": { "widget": "p.AmazonBedrockConnector.SNIP_Settings_Admin.dataGrid21", "source": "object" } }, "config": { "name": "AmazonBedrockConnector/Settings_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                                                      "abortOnServerValidation": false,
                                                                                      "dataSourceId": "p.8",
                                                                                      "argumentTypes": {}
                                                                                    }),
                                                                                    columnsSortable: true,
                                                                                    columnsResizable: true,
                                                                                    columnsDraggable: true,
                                                                                    columnsHidable: true,
                                                                                    filtersPlaceholder: void 0,
                                                                                    filterSectionTitle: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    refreshInterval: 0,
                                                                                    itemSelectionMethod: "checkbox",
                                                                                    itemSelectionMode: "clear",
                                                                                    showSelectAllToggle: true,
                                                                                    showPagingButtons: "always",
                                                                                    loadMoreButtonCaption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    onClickTrigger: "single",
                                                                                    onSelectionChange: void 0,
                                                                                    configurationStorageType: "attribute",
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
                                                                                    loadingType: "spinner",
                                                                                    showNumberOfRows: false,
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
                                                                                    class: "mx-name-dataGrid21",
                                                                                    style: void 0,
                                                                                    tabIndex: void 0
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
                                                                      $Container,
                                                                      {
                                                                        key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.container6",
                                                                        $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.container6",
                                                                        class: "mx-name-container6",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Container,
                                                                            {
                                                                              key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.container13",
                                                                              $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.container13",
                                                                              class: "mx-name-container13 card",
                                                                              style: void 0,
                                                                              renderMode: "div",
                                                                              onClick: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Text,
                                                                                  {
                                                                                    key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.text24",
                                                                                    $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.text24",
                                                                                    class: "mx-name-text24 card-title spacing-outer-bottom-large",
                                                                                    style: void 0,
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Amazon Bedrock Metadata Overview " }, { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Region" }, { "type": "literal", "value": null }] }, "then": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "- Active Region: " }, { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Region" }, { "type": "literal", "value": "AWSAuthentication.ENUM_Region" }] }] }, "else": { "type": "literal", "value": null } }] }, "args": { "currentObject": { "widget": "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataView1", "source": "object" } } }
                                                                                      })
                                                                                    ]),
                                                                                    renderMode: "h4"
                                                                                  }
                                                                                ),
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Div,
                                                                                  {
                                                                                    key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.layoutGrid2",
                                                                                    $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.layoutGrid2",
                                                                                    class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                                                    style: void 0,
                                                                                    content: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Div,
                                                                                        {
                                                                                          key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid2$row0",
                                                                                          $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid2$row0",
                                                                                          class: "row",
                                                                                          style: void 0,
                                                                                          content: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $Div,
                                                                                              {
                                                                                                key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid2$row0$column0",
                                                                                                $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid2$row0$column0",
                                                                                                class: "col-lg-auto col-md col",
                                                                                                style: void 0,
                                                                                                content: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $ConditionalVisibilityWrapper,
                                                                                                    {
                                                                                                      key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.container9$visibility",
                                                                                                      $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.container9$visibility",
                                                                                                      visible: ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Region" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataView1", "source": "object" } } }
                                                                                                      }),
                                                                                                      contents: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Container,
                                                                                                          {
                                                                                                            key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.container9",
                                                                                                            $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.container9",
                                                                                                            class: "mx-name-container9 alert alert-danger",
                                                                                                            style: void 0,
                                                                                                            renderMode: "div",
                                                                                                            onClick: void 0,
                                                                                                            content: [
                                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                                $Text,
                                                                                                                {
                                                                                                                  key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.text4",
                                                                                                                  $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.text4",
                                                                                                                  class: "mx-name-text4 alert-title",
                                                                                                                  style: void 0,
                                                                                                                  caption: selectTranslation([
                                                                                                                    ExpressionProperty({
                                                                                                                      "expression": { "expr": { "type": "literal", "value": "Please configure AWS Authentication settings first." }, "args": {} }
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
                                                                                                ]
                                                                                              }
                                                                                            ),
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $Div,
                                                                                              {
                                                                                                key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid2$row0$column1",
                                                                                                $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid2$row0$column1",
                                                                                                class: "col-lg col-md col",
                                                                                                style: void 0,
                                                                                                content: void 0
                                                                                              }
                                                                                            )
                                                                                          ]
                                                                                        }
                                                                                      )
                                                                                    ]
                                                                                  }
                                                                                ),
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $ConditionalVisibilityWrapper,
                                                                                  {
                                                                                    key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.container11$visibility",
                                                                                    $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.container11$visibility",
                                                                                    visible: ExpressionProperty({
                                                                                      "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Region" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataView1", "source": "object" } } }
                                                                                    }),
                                                                                    contents: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Container,
                                                                                        {
                                                                                          key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.container11",
                                                                                          $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.container11",
                                                                                          class: "mx-name-container11 row-left spacing-outer-bottom-large",
                                                                                          style: void 0,
                                                                                          renderMode: "div",
                                                                                          onClick: void 0,
                                                                                          content: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $ConditionalVisibilityWrapper,
                                                                                              {
                                                                                                key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton4$visibility",
                                                                                                $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton4$visibility",
                                                                                                visible: ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                                                }),
                                                                                                contents: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $ActionButton,
                                                                                                    {
                                                                                                      key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton4",
                                                                                                      $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton4",
                                                                                                      buttonId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton4",
                                                                                                      class: "mx-name-actionButton4",
                                                                                                      style: void 0,
                                                                                                      tabIndex: void 0,
                                                                                                      renderType: "button",
                                                                                                      role: void 0,
                                                                                                      buttonClass: "btn-primary",
                                                                                                      caption: selectTranslation([
                                                                                                        ExpressionProperty({
                                                                                                          "expression": { "expr": { "type": "literal", "value": "Sync all data in current region" }, "args": {} }
                                                                                                        })
                                                                                                      ]),
                                                                                                      tooltip: TextProperty({
                                                                                                        "value": selectTranslation([
                                                                                                          ""
                                                                                                        ])
                                                                                                      }),
                                                                                                      icon: void 0,
                                                                                                      action: ActionProperty({
                                                                                                        "action": { "type": "callMicroflow", "argMap": { "Settings": { "widget": "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataView1", "source": "object" } }, "config": { "operationId": "58KRbPS/eV2m7hSsfEvIRA", "progress": { "message": selectTranslation([""]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                                key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton15$visibility",
                                                                                                $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton15$visibility",
                                                                                                visible: ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                                                }),
                                                                                                contents: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $ActionButton,
                                                                                                    {
                                                                                                      key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton15",
                                                                                                      $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton15",
                                                                                                      buttonId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton15",
                                                                                                      class: "mx-name-actionButton15 spacing-outer-left-medium",
                                                                                                      style: void 0,
                                                                                                      tabIndex: void 0,
                                                                                                      renderType: "button",
                                                                                                      role: void 0,
                                                                                                      buttonClass: "btn-warning",
                                                                                                      caption: selectTranslation([
                                                                                                        ExpressionProperty({
                                                                                                          "expression": { "expr": { "type": "literal", "value": "Clear data" }, "args": {} }
                                                                                                        })
                                                                                                      ]),
                                                                                                      tooltip: TextProperty({
                                                                                                        "value": selectTranslation([
                                                                                                          ""
                                                                                                        ])
                                                                                                      }),
                                                                                                      icon: void 0,
                                                                                                      action: ActionProperty({
                                                                                                        "action": { "type": "callMicroflow", "argMap": { "Settings": { "widget": "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataView1", "source": "object" } }, "config": { "operationId": "YaqFKYsQzFaveiy6PzVJhQ", "validate": "view", "confirmation": { "question": selectTranslation(["Are you sure?\r\nThis will remove all (non-custom) models, knowledge bases and agents in the current region from your application.\r\nThey will NOT be removed from your AWS account."]), "proceed": selectTranslation(["Proceed"]), "cancel": selectTranslation(["Cancel"]) }, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                  $TabContainer,
                                                                                  {
                                                                                    key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.tabContainer1",
                                                                                    $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.tabContainer1",
                                                                                    class: "mx-name-tabContainer1 tab-lined",
                                                                                    style: void 0,
                                                                                    tabIndex: void 0,
                                                                                    widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.tabContainer1",
                                                                                    defaultTab: 0,
                                                                                    tabs: [
                                                                                      {
                                                                                        "name": "tabPage1",
                                                                                        "caption": TextProperty({
                                                                                          "value": selectTranslation([
                                                                                            "Models"
                                                                                          ])
                                                                                        }),
                                                                                        "isDelayed": false,
                                                                                        "refreshOnShow": false,
                                                                                        "content": [
                                                                                          /* @__PURE__ */ React.createElement(
                                                                                            $Container,
                                                                                            {
                                                                                              key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.container10",
                                                                                              $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.container10",
                                                                                              class: "mx-name-container10 alert alert-primary spacing-outer-bottom-medium",
                                                                                              style: void 0,
                                                                                              renderMode: "div",
                                                                                              onClick: void 0,
                                                                                              content: [
                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                  $Text,
                                                                                                  {
                                                                                                    key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.text5",
                                                                                                    $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.text5",
                                                                                                    class: "mx-name-text5 alert-title",
                                                                                                    style: void 0,
                                                                                                    caption: selectTranslation([
                                                                                                      ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "literal", "value": "Please confirm you have model access before using a model" }, "args": {} }
                                                                                                      })
                                                                                                    ]),
                                                                                                    renderMode: "h5"
                                                                                                  }
                                                                                                ),
                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                  $Div,
                                                                                                  {
                                                                                                    key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.layoutGrid1",
                                                                                                    $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.layoutGrid1",
                                                                                                    class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid",
                                                                                                    style: void 0,
                                                                                                    content: [
                                                                                                      /* @__PURE__ */ React.createElement(
                                                                                                        $Div,
                                                                                                        {
                                                                                                          key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row0.154",
                                                                                                          $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row0.154",
                                                                                                          class: "row",
                                                                                                          style: void 0,
                                                                                                          content: [
                                                                                                            /* @__PURE__ */ React.createElement(
                                                                                                              $Div,
                                                                                                              {
                                                                                                                key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row0$column0.155",
                                                                                                                $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row0$column0.155",
                                                                                                                class: "col-lg col-md col",
                                                                                                                style: void 0,
                                                                                                                content: [
                                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                                    $Text,
                                                                                                                    {
                                                                                                                      key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.text1",
                                                                                                                      $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.text1",
                                                                                                                      class: "mx-name-text1 alert-description",
                                                                                                                      style: void 0,
                                                                                                                      caption: selectTranslation([
                                                                                                                        ExpressionProperty({
                                                                                                                          "expression": { "expr": { "type": "literal", "value": "This list shows all publicly-available models in the specified region, even if your AWS account can't access them. You can verify and request model access via the Amazon Bedrock Console. " }, "args": {} }
                                                                                                                        })
                                                                                                                      ]),
                                                                                                                      renderMode: "span"
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
                                                                                                          key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row1.158",
                                                                                                          $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row1.158",
                                                                                                          class: "row",
                                                                                                          style: void 0,
                                                                                                          content: [
                                                                                                            /* @__PURE__ */ React.createElement(
                                                                                                              $Div,
                                                                                                              {
                                                                                                                key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row1$column0.159",
                                                                                                                $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row1$column0.159",
                                                                                                                class: "col-lg col-md col",
                                                                                                                style: void 0,
                                                                                                                content: [
                                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                                    $ActionButton,
                                                                                                                    {
                                                                                                                      key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton1",
                                                                                                                      $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton1",
                                                                                                                      buttonId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton1",
                                                                                                                      class: "mx-name-actionButton1 spacing-outer-top-medium spacing-outer-bottom-large",
                                                                                                                      style: void 0,
                                                                                                                      tabIndex: void 0,
                                                                                                                      renderType: "link",
                                                                                                                      role: "button",
                                                                                                                      buttonClass: "btn-default",
                                                                                                                      caption: selectTranslation([
                                                                                                                        ExpressionProperty({
                                                                                                                          "expression": { "expr": { "type": "literal", "value": "Amazon Bedrock | Model Access" }, "args": {} }
                                                                                                                        })
                                                                                                                      ]),
                                                                                                                      tooltip: TextProperty({
                                                                                                                        "value": selectTranslation([
                                                                                                                          ""
                                                                                                                        ])
                                                                                                                      }),
                                                                                                                      icon: WebIconProperty({
                                                                                                                        "icon": { "type": "glyph", "iconClass": "glyphicon-link" }
                                                                                                                      }),
                                                                                                                      action: ActionProperty({
                                                                                                                        "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://console.aws.amazon.com/bedrock/home?#/modelaccess" }, "disabledDuringExecution": true },
                                                                                                                        "abortOnServerValidation": true
                                                                                                                      })
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
                                                                                                          key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row2.160",
                                                                                                          $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row2.160",
                                                                                                          class: "row",
                                                                                                          style: void 0,
                                                                                                          content: [
                                                                                                            /* @__PURE__ */ React.createElement(
                                                                                                              $Div,
                                                                                                              {
                                                                                                                key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row2$column0.161",
                                                                                                                $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row2$column0.161",
                                                                                                                class: "col-lg col-md col",
                                                                                                                style: void 0,
                                                                                                                content: [
                                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                                    $Text,
                                                                                                                    {
                                                                                                                      key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.text6",
                                                                                                                      $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.text6",
                                                                                                                      class: "mx-name-text6 alert-description",
                                                                                                                      style: void 0,
                                                                                                                      caption: selectTranslation([
                                                                                                                        ExpressionProperty({
                                                                                                                          "expression": { "expr": { "type": "literal", "value": "To be able to use custom models (such as cross-region inference models), you will need to manually add them to your database via the 'Add Model' button below. You can find available inference profiles following the provided link. Before use, make sure that model access is setup correctly for them, too." }, "args": {} }
                                                                                                                        })
                                                                                                                      ]),
                                                                                                                      renderMode: "span"
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
                                                                                                          key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row3",
                                                                                                          $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row3",
                                                                                                          class: "row",
                                                                                                          style: void 0,
                                                                                                          content: [
                                                                                                            /* @__PURE__ */ React.createElement(
                                                                                                              $Div,
                                                                                                              {
                                                                                                                key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row3$column0",
                                                                                                                $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid1$row3$column0",
                                                                                                                class: "col-lg col-md col",
                                                                                                                style: void 0,
                                                                                                                content: [
                                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                                    $ActionButton,
                                                                                                                    {
                                                                                                                      key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton6",
                                                                                                                      $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton6",
                                                                                                                      buttonId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton6",
                                                                                                                      class: "mx-name-actionButton6 spacing-outer-top-medium",
                                                                                                                      style: void 0,
                                                                                                                      tabIndex: void 0,
                                                                                                                      renderType: "link",
                                                                                                                      role: "button",
                                                                                                                      buttonClass: "btn-default",
                                                                                                                      caption: selectTranslation([
                                                                                                                        ExpressionProperty({
                                                                                                                          "expression": { "expr": { "type": "literal", "value": "Amazon Bedrock | Inference Profiles" }, "args": {} }
                                                                                                                        })
                                                                                                                      ]),
                                                                                                                      tooltip: TextProperty({
                                                                                                                        "value": selectTranslation([
                                                                                                                          ""
                                                                                                                        ])
                                                                                                                      }),
                                                                                                                      icon: WebIconProperty({
                                                                                                                        "icon": { "type": "glyph", "iconClass": "glyphicon-link" }
                                                                                                                      }),
                                                                                                                      action: ActionProperty({
                                                                                                                        "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.aws.amazon.com/bedrock/latest/userguide/inference-profiles-support.html" }, "disabledDuringExecution": true },
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
                                                                                              ],
                                                                                              ariaHidden: false
                                                                                            }
                                                                                          ),
                                                                                          /* @__PURE__ */ React.createElement(
                                                                                            $Div,
                                                                                            {
                                                                                              key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.layoutGrid4",
                                                                                              $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.layoutGrid4",
                                                                                              class: "mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid",
                                                                                              style: void 0,
                                                                                              content: [
                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                  $Div,
                                                                                                  {
                                                                                                    key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row0.170",
                                                                                                    $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row0.170",
                                                                                                    class: "row",
                                                                                                    style: void 0,
                                                                                                    content: [
                                                                                                      /* @__PURE__ */ React.createElement(
                                                                                                        $Div,
                                                                                                        {
                                                                                                          key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row0$column0.171",
                                                                                                          $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row0$column0.171",
                                                                                                          class: "col-lg col-md col",
                                                                                                          style: void 0,
                                                                                                          content: [
                                                                                                            /* @__PURE__ */ React.createElement(
                                                                                                              $ConditionalVisibilityWrapper,
                                                                                                              {
                                                                                                                key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton2$visibility",
                                                                                                                $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton2$visibility",
                                                                                                                visible: ExpressionProperty({
                                                                                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                                                                }),
                                                                                                                contents: [
                                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                                    $ActionButton,
                                                                                                                    {
                                                                                                                      key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton2",
                                                                                                                      $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton2",
                                                                                                                      buttonId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton2",
                                                                                                                      class: "mx-name-actionButton2 spacing-outer-right",
                                                                                                                      style: void 0,
                                                                                                                      tabIndex: void 0,
                                                                                                                      renderType: "button",
                                                                                                                      role: void 0,
                                                                                                                      buttonClass: "btn-default",
                                                                                                                      caption: selectTranslation([
                                                                                                                        ExpressionProperty({
                                                                                                                          "expression": { "expr": { "type": "literal", "value": "Add model" }, "args": {} }
                                                                                                                        })
                                                                                                                      ]),
                                                                                                                      tooltip: TextProperty({
                                                                                                                        "value": selectTranslation([
                                                                                                                          ""
                                                                                                                        ])
                                                                                                                      }),
                                                                                                                      icon: void 0,
                                                                                                                      action: ActionProperty({
                                                                                                                        "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "eEs5a5WVJV2oJP4/Zt6NVw", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                                ),
                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                  $Div,
                                                                                                  {
                                                                                                    key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row1.173",
                                                                                                    $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row1.173",
                                                                                                    class: "row",
                                                                                                    style: void 0,
                                                                                                    content: [
                                                                                                      /* @__PURE__ */ React.createElement(
                                                                                                        $Div,
                                                                                                        {
                                                                                                          key: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row1$column0.174",
                                                                                                          $widgetId: "p.MyFirstAIBot.AmazonBedrockConfiguration_Overview.layoutGrid4$row1$column0.174",
                                                                                                          class: "col-lg col-md col",
                                                                                                          style: void 0,
                                                                                                          content: [
                                                                                                            /* @__PURE__ */ React.createElement(
                                                                                                              $Datagrid,
                                                                                                              {
                                                                                                                key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataGrid22",
                                                                                                                $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataGrid22",
                                                                                                                datasource: MicroflowObjectListProperty({
                                                                                                                  "argMap": {},
                                                                                                                  "dataSourceId": "p.23",
                                                                                                                  "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                                                                                  "scope": "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataView1",
                                                                                                                  "operationId": "/IJpbeTed1ecsMrZlJPznA"
                                                                                                                }),
                                                                                                                columns: [
                                                                                                                  {
                                                                                                                    "showContentAs": "attribute",
                                                                                                                    "attribute": ListAttributeProperty({
                                                                                                                      "path": "",
                                                                                                                      "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                                                                                      "attribute": "ProviderName",
                                                                                                                      "attributeType": "String",
                                                                                                                      "sortable": true,
                                                                                                                      "filterable": true,
                                                                                                                      "dataSourceId": "p.23",
                                                                                                                      "isList": false
                                                                                                                    }),
                                                                                                                    "content": void 0,
                                                                                                                    "dynamicText": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "header": selectTranslation([
                                                                                                                      ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Provider" }, "args": {} }
                                                                                                                      })
                                                                                                                    ]),
                                                                                                                    "tooltip": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "filter": void 0,
                                                                                                                    "sortable": true,
                                                                                                                    "resizable": true,
                                                                                                                    "draggable": true,
                                                                                                                    "hidable": "yes",
                                                                                                                    "width": "autoFill",
                                                                                                                    "size": 1,
                                                                                                                    "alignment": "left",
                                                                                                                    "wrapText": false,
                                                                                                                    "exportValue": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "visible": ExpressionProperty({
                                                                                                                      "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                                                    }),
                                                                                                                    "allowEventPropagation": true,
                                                                                                                    "minWidth": "auto",
                                                                                                                    "minWidthLimit": 100
                                                                                                                  },
                                                                                                                  {
                                                                                                                    "showContentAs": "attribute",
                                                                                                                    "attribute": ListAttributeProperty({
                                                                                                                      "path": "",
                                                                                                                      "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                                                                                      "attribute": "ModelName",
                                                                                                                      "attributeType": "String",
                                                                                                                      "sortable": true,
                                                                                                                      "filterable": true,
                                                                                                                      "dataSourceId": "p.23",
                                                                                                                      "isList": false
                                                                                                                    }),
                                                                                                                    "content": void 0,
                                                                                                                    "dynamicText": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "header": selectTranslation([
                                                                                                                      ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Model Name" }, "args": {} }
                                                                                                                      })
                                                                                                                    ]),
                                                                                                                    "tooltip": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "filter": void 0,
                                                                                                                    "sortable": true,
                                                                                                                    "resizable": true,
                                                                                                                    "draggable": true,
                                                                                                                    "hidable": "yes",
                                                                                                                    "width": "autoFill",
                                                                                                                    "size": 1,
                                                                                                                    "alignment": "left",
                                                                                                                    "wrapText": false,
                                                                                                                    "exportValue": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "visible": ExpressionProperty({
                                                                                                                      "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                                                    }),
                                                                                                                    "allowEventPropagation": true,
                                                                                                                    "minWidth": "auto",
                                                                                                                    "minWidthLimit": 100
                                                                                                                  },
                                                                                                                  {
                                                                                                                    "showContentAs": "attribute",
                                                                                                                    "attribute": ListAttributeProperty({
                                                                                                                      "path": "",
                                                                                                                      "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                                                                                      "attribute": "Model",
                                                                                                                      "attributeType": "String",
                                                                                                                      "sortable": true,
                                                                                                                      "filterable": true,
                                                                                                                      "dataSourceId": "p.23",
                                                                                                                      "isList": false
                                                                                                                    }),
                                                                                                                    "content": void 0,
                                                                                                                    "dynamicText": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "header": selectTranslation([
                                                                                                                      ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Model ID" }, "args": {} }
                                                                                                                      })
                                                                                                                    ]),
                                                                                                                    "tooltip": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "filter": void 0,
                                                                                                                    "sortable": true,
                                                                                                                    "resizable": true,
                                                                                                                    "draggable": true,
                                                                                                                    "hidable": "yes",
                                                                                                                    "width": "autoFill",
                                                                                                                    "size": 1,
                                                                                                                    "alignment": "left",
                                                                                                                    "wrapText": false,
                                                                                                                    "exportValue": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "visible": ExpressionProperty({
                                                                                                                      "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                                                    }),
                                                                                                                    "allowEventPropagation": true,
                                                                                                                    "minWidth": "auto",
                                                                                                                    "minWidthLimit": 100
                                                                                                                  },
                                                                                                                  {
                                                                                                                    "showContentAs": "attribute",
                                                                                                                    "attribute": ListAttributeProperty({
                                                                                                                      "path": "",
                                                                                                                      "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                                                                                      "attribute": "IsActive",
                                                                                                                      "attributeType": "Boolean",
                                                                                                                      "sortable": true,
                                                                                                                      "filterable": true,
                                                                                                                      "dataSourceId": "p.23",
                                                                                                                      "isList": false
                                                                                                                    }),
                                                                                                                    "content": void 0,
                                                                                                                    "dynamicText": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "exportValue": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "header": selectTranslation([
                                                                                                                      ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Is Active" }, "args": {} }
                                                                                                                      })
                                                                                                                    ]),
                                                                                                                    "tooltip": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "filter": void 0,
                                                                                                                    "visible": ExpressionProperty({
                                                                                                                      "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                                                    }),
                                                                                                                    "sortable": true,
                                                                                                                    "resizable": true,
                                                                                                                    "draggable": true,
                                                                                                                    "hidable": "yes",
                                                                                                                    "allowEventPropagation": true,
                                                                                                                    "width": "autoFill",
                                                                                                                    "minWidth": "auto",
                                                                                                                    "minWidthLimit": 100,
                                                                                                                    "size": 1,
                                                                                                                    "alignment": "left",
                                                                                                                    "wrapText": false
                                                                                                                  },
                                                                                                                  {
                                                                                                                    "showContentAs": "attribute",
                                                                                                                    "attribute": ListAttributeProperty({
                                                                                                                      "path": "",
                                                                                                                      "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                                                                                      "attribute": "OutputModality",
                                                                                                                      "attributeType": "Enum",
                                                                                                                      "sortable": true,
                                                                                                                      "filterable": true,
                                                                                                                      "dataSourceId": "p.23",
                                                                                                                      "isList": false
                                                                                                                    }),
                                                                                                                    "content": void 0,
                                                                                                                    "dynamicText": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "header": selectTranslation([
                                                                                                                      ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Output modalities" }, "args": {} }
                                                                                                                      })
                                                                                                                    ]),
                                                                                                                    "tooltip": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "filter": void 0,
                                                                                                                    "sortable": true,
                                                                                                                    "resizable": true,
                                                                                                                    "draggable": true,
                                                                                                                    "hidable": "yes",
                                                                                                                    "width": "autoFill",
                                                                                                                    "size": 1,
                                                                                                                    "alignment": "left",
                                                                                                                    "wrapText": false,
                                                                                                                    "exportValue": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "visible": ExpressionProperty({
                                                                                                                      "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                                                    }),
                                                                                                                    "allowEventPropagation": true,
                                                                                                                    "minWidth": "auto",
                                                                                                                    "minWidthLimit": 100
                                                                                                                  },
                                                                                                                  {
                                                                                                                    "showContentAs": "customContent",
                                                                                                                    "content": TemplatedWidgetProperty({
                                                                                                                      "dataSourceId": "p.23",
                                                                                                                      "editable": false,
                                                                                                                      "children": () => [
                                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                                          $ListView,
                                                                                                                          {
                                                                                                                            key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.listView1",
                                                                                                                            $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.listView1",
                                                                                                                            class: "mx-name-listView1 listview-horizontal listview-hide-on-empty listview-stylingless listview-sm",
                                                                                                                            style: void 0,
                                                                                                                            listValue: AssociationObjectListProperty({
                                                                                                                              "dataSourceId": "p.24",
                                                                                                                              "entity": "GenAICommons.InputModality",
                                                                                                                              "scope": "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataGrid22",
                                                                                                                              "operationId": "EmWMnaCzFFutVgzbgD8g1g",
                                                                                                                              "directPath": "GenAICommons.DeployedModel_InputModality/GenAICommons.InputModality"
                                                                                                                            }),
                                                                                                                            itemTemplate: TemplatedWidgetProperty({
                                                                                                                              "dataSourceId": "p.24",
                                                                                                                              "editable": false,
                                                                                                                              "children": () => [
                                                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                                                  $Text,
                                                                                                                                  {
                                                                                                                                    key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.text2",
                                                                                                                                    $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.text2",
                                                                                                                                    class: "mx-name-text2",
                                                                                                                                    style: void 0,
                                                                                                                                    caption: selectTranslation([
                                                                                                                                      ExpressionProperty({
                                                                                                                                        "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ModelModality" }, { "type": "literal", "value": "GenAICommons.ENUM_ModelModality" }] }, "args": { "currentObject": { "widget": "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.listView1", "source": "object" } } }
                                                                                                                                      })
                                                                                                                                    ]),
                                                                                                                                    renderMode: "span"
                                                                                                                                  }
                                                                                                                                )
                                                                                                                              ]
                                                                                                                            }),
                                                                                                                            onClick: void 0,
                                                                                                                            pageSize: 10
                                                                                                                          }
                                                                                                                        )
                                                                                                                      ]
                                                                                                                    }),
                                                                                                                    "dynamicText": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "header": selectTranslation([
                                                                                                                      ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Input modalities" }, "args": {} }
                                                                                                                      })
                                                                                                                    ]),
                                                                                                                    "tooltip": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "filter": void 0,
                                                                                                                    "sortable": false,
                                                                                                                    "resizable": true,
                                                                                                                    "draggable": true,
                                                                                                                    "hidable": "yes",
                                                                                                                    "width": "autoFill",
                                                                                                                    "size": 1,
                                                                                                                    "alignment": "left",
                                                                                                                    "wrapText": false,
                                                                                                                    "exportValue": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "visible": ExpressionProperty({
                                                                                                                      "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                                                    }),
                                                                                                                    "allowEventPropagation": true,
                                                                                                                    "minWidth": "auto",
                                                                                                                    "minWidthLimit": 100
                                                                                                                  },
                                                                                                                  {
                                                                                                                    "showContentAs": "customContent",
                                                                                                                    "content": TemplatedWidgetProperty({
                                                                                                                      "dataSourceId": "p.23",
                                                                                                                      "editable": false,
                                                                                                                      "children": () => [
                                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                                          $ListView,
                                                                                                                          {
                                                                                                                            key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.listView2",
                                                                                                                            $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.listView2",
                                                                                                                            class: "mx-name-listView2 listview-horizontal listview-hide-on-empty listview-stylingless listview-sm",
                                                                                                                            style: void 0,
                                                                                                                            listValue: AssociationObjectListProperty({
                                                                                                                              "dataSourceId": "p.25",
                                                                                                                              "entity": "AmazonBedrockConnector.ModelInferenceType",
                                                                                                                              "scope": "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataGrid22",
                                                                                                                              "operationId": "w1QfkamG01Wfnmnz6A9UOg",
                                                                                                                              "directPath": "AmazonBedrockConnector.BedrockDeployedModel_ModelInferenceType/AmazonBedrockConnector.ModelInferenceType"
                                                                                                                            }),
                                                                                                                            itemTemplate: TemplatedWidgetProperty({
                                                                                                                              "dataSourceId": "p.25",
                                                                                                                              "editable": false,
                                                                                                                              "children": () => [
                                                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                                                  $Text,
                                                                                                                                  {
                                                                                                                                    key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.text3",
                                                                                                                                    $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.text3",
                                                                                                                                    class: "mx-name-text3",
                                                                                                                                    style: void 0,
                                                                                                                                    caption: selectTranslation([
                                                                                                                                      ExpressionProperty({
                                                                                                                                        "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "InferenceType" }, { "type": "literal", "value": "AmazonBedrockConnector.ENUM_InferenceType" }] }, "args": { "currentObject": { "widget": "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.listView2", "source": "object" } } }
                                                                                                                                      })
                                                                                                                                    ]),
                                                                                                                                    renderMode: "span"
                                                                                                                                  }
                                                                                                                                )
                                                                                                                              ]
                                                                                                                            }),
                                                                                                                            onClick: void 0,
                                                                                                                            pageSize: 10
                                                                                                                          }
                                                                                                                        )
                                                                                                                      ]
                                                                                                                    }),
                                                                                                                    "dynamicText": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "header": selectTranslation([
                                                                                                                      ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Inference types" }, "args": {} }
                                                                                                                      })
                                                                                                                    ]),
                                                                                                                    "tooltip": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "filter": void 0,
                                                                                                                    "sortable": false,
                                                                                                                    "resizable": true,
                                                                                                                    "draggable": true,
                                                                                                                    "hidable": "yes",
                                                                                                                    "width": "autoFill",
                                                                                                                    "size": 1,
                                                                                                                    "alignment": "left",
                                                                                                                    "wrapText": false,
                                                                                                                    "exportValue": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "visible": ExpressionProperty({
                                                                                                                      "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                                                    }),
                                                                                                                    "allowEventPropagation": true,
                                                                                                                    "minWidth": "auto",
                                                                                                                    "minWidthLimit": 100
                                                                                                                  },
                                                                                                                  {
                                                                                                                    "showContentAs": "attribute",
                                                                                                                    "attribute": ListAttributeProperty({
                                                                                                                      "path": "",
                                                                                                                      "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                                                                                      "attribute": "LifecycleStatus",
                                                                                                                      "attributeType": "Enum",
                                                                                                                      "sortable": true,
                                                                                                                      "filterable": true,
                                                                                                                      "dataSourceId": "p.23",
                                                                                                                      "isList": false
                                                                                                                    }),
                                                                                                                    "content": void 0,
                                                                                                                    "dynamicText": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "header": selectTranslation([
                                                                                                                      ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Lifecycle Status" }, "args": {} }
                                                                                                                      })
                                                                                                                    ]),
                                                                                                                    "tooltip": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "filter": void 0,
                                                                                                                    "sortable": true,
                                                                                                                    "resizable": true,
                                                                                                                    "draggable": true,
                                                                                                                    "hidable": "hidden",
                                                                                                                    "width": "autoFill",
                                                                                                                    "size": 1,
                                                                                                                    "alignment": "left",
                                                                                                                    "wrapText": false,
                                                                                                                    "exportValue": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "visible": ExpressionProperty({
                                                                                                                      "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                                                    }),
                                                                                                                    "allowEventPropagation": true,
                                                                                                                    "minWidth": "auto",
                                                                                                                    "minWidthLimit": 100
                                                                                                                  },
                                                                                                                  {
                                                                                                                    "showContentAs": "attribute",
                                                                                                                    "attribute": ListAttributeProperty({
                                                                                                                      "path": "",
                                                                                                                      "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                                                                                      "attribute": "ModelARN",
                                                                                                                      "attributeType": "String",
                                                                                                                      "sortable": true,
                                                                                                                      "filterable": true,
                                                                                                                      "dataSourceId": "p.23",
                                                                                                                      "isList": false
                                                                                                                    }),
                                                                                                                    "content": void 0,
                                                                                                                    "dynamicText": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "header": selectTranslation([
                                                                                                                      ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "literal", "value": "ModelARN" }, "args": {} }
                                                                                                                      })
                                                                                                                    ]),
                                                                                                                    "tooltip": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "filter": void 0,
                                                                                                                    "sortable": true,
                                                                                                                    "resizable": true,
                                                                                                                    "draggable": true,
                                                                                                                    "hidable": "hidden",
                                                                                                                    "width": "autoFill",
                                                                                                                    "size": 1,
                                                                                                                    "alignment": "left",
                                                                                                                    "wrapText": false,
                                                                                                                    "exportValue": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "visible": ExpressionProperty({
                                                                                                                      "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                                                    }),
                                                                                                                    "allowEventPropagation": true,
                                                                                                                    "minWidth": "auto",
                                                                                                                    "minWidthLimit": 100
                                                                                                                  },
                                                                                                                  {
                                                                                                                    "showContentAs": "customContent",
                                                                                                                    "content": TemplatedWidgetProperty({
                                                                                                                      "dataSourceId": "p.23",
                                                                                                                      "editable": false,
                                                                                                                      "children": () => [
                                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                                          $ConditionalVisibilityWrapper,
                                                                                                                          {
                                                                                                                            key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton3$visibility",
                                                                                                                            $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton3$visibility",
                                                                                                                            visible: ExpressionProperty({
                                                                                                                              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                                                                            }),
                                                                                                                            contents: [
                                                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                                                $ActionButton,
                                                                                                                                {
                                                                                                                                  key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton3",
                                                                                                                                  $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton3",
                                                                                                                                  buttonId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton3",
                                                                                                                                  class: "mx-name-actionButton3 btn-lg spacing-outer-right",
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
                                                                                                                                      "Edit"
                                                                                                                                    ])
                                                                                                                                  }),
                                                                                                                                  icon: WebIconProperty({
                                                                                                                                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-pencil" }
                                                                                                                                  }),
                                                                                                                                  action: ActionProperty({
                                                                                                                                    "action": { "type": "callMicroflow", "argMap": { "BedrockDeployedModel": { "widget": "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataGrid22", "source": "object" } }, "config": { "operationId": "IC8ZJZTdUVex69zDtAdQig", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                                                            key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton5$visibility",
                                                                                                                            $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton5$visibility",
                                                                                                                            visible: ExpressionProperty({
                                                                                                                              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                                                                            }),
                                                                                                                            contents: [
                                                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                                                $ActionButton,
                                                                                                                                {
                                                                                                                                  key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton5",
                                                                                                                                  $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton5",
                                                                                                                                  buttonId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.actionButton5",
                                                                                                                                  class: "mx-name-actionButton5 btn-lg",
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
                                                                                                                                      "Delete"
                                                                                                                                    ])
                                                                                                                                  }),
                                                                                                                                  icon: WebIconProperty({
                                                                                                                                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-trash-can" }
                                                                                                                                  }),
                                                                                                                                  action: ActionProperty({
                                                                                                                                    "action": { "type": "callMicroflow", "argMap": { "BedrockDeployedModel": { "widget": "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataGrid22", "source": "object" } }, "config": { "operationId": "lu05m0SI4ludMIHMHvpuTQ", "progress": { "message": selectTranslation(["Deleting.."]), "modal": true }, "validate": "view", "confirmation": { "question": selectTranslation(["Are you sure to delete this model?\r\nAfter sync the model might be recreated."]), "proceed": selectTranslation(["Proceed"]), "cancel": selectTranslation(["Cancel"]) }, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                                                    "exportValue": selectTranslation([
                                                                                                                      void 0
                                                                                                                    ]),
                                                                                                                    "header": selectTranslation([
                                                                                                                      ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
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
                                                                                                                    "resizable": false,
                                                                                                                    "draggable": false,
                                                                                                                    "hidable": "no",
                                                                                                                    "allowEventPropagation": true,
                                                                                                                    "width": "autoFit",
                                                                                                                    "minWidth": "auto",
                                                                                                                    "minWidthLimit": 100,
                                                                                                                    "size": 1,
                                                                                                                    "alignment": "left",
                                                                                                                    "wrapText": false
                                                                                                                  }
                                                                                                                ],
                                                                                                                columnsFilterable: false,
                                                                                                                pageSize: 10,
                                                                                                                pagination: "buttons",
                                                                                                                pagingPosition: "bottom",
                                                                                                                showEmptyPlaceholder: "none",
                                                                                                                emptyPlaceholder: void 0,
                                                                                                                rowClass: void 0,
                                                                                                                onClick: ListActionProperty({
                                                                                                                  "action": { "type": "callMicroflow", "argMap": { "BedrockDeployedModel": { "widget": "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataGrid22", "source": "object" } }, "config": { "operationId": "IC8ZJZTdUVex69zDtAdQig", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                                                                                  "abortOnServerValidation": false,
                                                                                                                  "dataSourceId": "p.23",
                                                                                                                  "argumentTypes": {}
                                                                                                                }),
                                                                                                                columnsSortable: true,
                                                                                                                columnsResizable: true,
                                                                                                                columnsDraggable: true,
                                                                                                                columnsHidable: true,
                                                                                                                filtersPlaceholder: [
                                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                                    $DatagridTextFilter,
                                                                                                                    {
                                                                                                                      key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.textFilter1",
                                                                                                                      $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.textFilter1",
                                                                                                                      defaultValue: void 0,
                                                                                                                      defaultFilter: "contains",
                                                                                                                      placeholder: selectTranslation([
                                                                                                                        ExpressionProperty({
                                                                                                                          "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                                                                                                        })
                                                                                                                      ]),
                                                                                                                      adjustable: false,
                                                                                                                      delay: 500,
                                                                                                                      onChange: void 0,
                                                                                                                      screenReaderButtonCaption: selectTranslation([
                                                                                                                        ExpressionProperty({
                                                                                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                        })
                                                                                                                      ]),
                                                                                                                      screenReaderInputCaption: selectTranslation([
                                                                                                                        ExpressionProperty({
                                                                                                                          "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                                                                                                        })
                                                                                                                      ]),
                                                                                                                      attrChoice: "linked",
                                                                                                                      linkedDs: void 0,
                                                                                                                      attributes: [
                                                                                                                        {
                                                                                                                          "attribute": AttributeMetaDataProperty({
                                                                                                                            "path": "",
                                                                                                                            "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                                                                                            "attribute": "ModelARN",
                                                                                                                            "attributeType": "String",
                                                                                                                            "sortable": true,
                                                                                                                            "filterable": true,
                                                                                                                            "dataSourceId": "p.23",
                                                                                                                            "isList": false
                                                                                                                          })
                                                                                                                        },
                                                                                                                        {
                                                                                                                          "attribute": AttributeMetaDataProperty({
                                                                                                                            "path": "",
                                                                                                                            "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                                                                                            "attribute": "Model",
                                                                                                                            "attributeType": "String",
                                                                                                                            "sortable": true,
                                                                                                                            "filterable": true,
                                                                                                                            "dataSourceId": "p.23",
                                                                                                                            "isList": false
                                                                                                                          })
                                                                                                                        },
                                                                                                                        {
                                                                                                                          "attribute": AttributeMetaDataProperty({
                                                                                                                            "path": "",
                                                                                                                            "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                                                                                            "attribute": "ProviderName",
                                                                                                                            "attributeType": "String",
                                                                                                                            "sortable": true,
                                                                                                                            "filterable": true,
                                                                                                                            "dataSourceId": "p.23",
                                                                                                                            "isList": false
                                                                                                                          })
                                                                                                                        }
                                                                                                                      ],
                                                                                                                      class: "mx-name-textFilter1 spacing-outer-bottom-medium spacing-outer-top",
                                                                                                                      style: void 0,
                                                                                                                      tabIndex: void 0
                                                                                                                    }
                                                                                                                  )
                                                                                                                ],
                                                                                                                filterSectionTitle: selectTranslation([
                                                                                                                  ExpressionProperty({
                                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                  })
                                                                                                                ]),
                                                                                                                refreshInterval: 0,
                                                                                                                itemSelection: SelectionProperty({
                                                                                                                  "selectionType": "Single",
                                                                                                                  "dataSourceId": "p.23"
                                                                                                                }),
                                                                                                                itemSelectionMethod: "rowClick",
                                                                                                                itemSelectionMode: "clear",
                                                                                                                showSelectAllToggle: true,
                                                                                                                showPagingButtons: "always",
                                                                                                                loadMoreButtonCaption: selectTranslation([
                                                                                                                  ExpressionProperty({
                                                                                                                    "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                                                                                                                  })
                                                                                                                ]),
                                                                                                                onClickTrigger: "double",
                                                                                                                onSelectionChange: void 0,
                                                                                                                configurationStorageType: "attribute",
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
                                                                                                                loadingType: "spinner",
                                                                                                                showNumberOfRows: false,
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
                                                                                                                class: "mx-name-dataGrid22 table-striped table-compact",
                                                                                                                style: void 0,
                                                                                                                tabIndex: void 0
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
                                                                                      },
                                                                                      {
                                                                                        "name": "tabPage2",
                                                                                        "caption": TextProperty({
                                                                                          "value": selectTranslation([
                                                                                            "Knowledge Bases"
                                                                                          ])
                                                                                        }),
                                                                                        "isDelayed": false,
                                                                                        "refreshOnShow": false,
                                                                                        "content": [
                                                                                          /* @__PURE__ */ React.createElement(
                                                                                            $Datagrid,
                                                                                            {
                                                                                              key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataGrid23",
                                                                                              $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataGrid23",
                                                                                              datasource: DatabaseObjectListProperty({
                                                                                                "dataSourceId": "p.30",
                                                                                                "entity": "AmazonBedrockConnector.AmazonBedrockKnowledgeBase",
                                                                                                "scope": "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataView1",
                                                                                                "operationId": "9428ldtCLlKdBFdfF3sVeg",
                                                                                                "sort": [],
                                                                                                "constraints": { "type": "attribute", "attribute": "IsActive", "context": "AmazonBedrockConnector.AmazonBedrockKnowledgeBase", "attributeType": "Boolean" }
                                                                                              }),
                                                                                              columns: [
                                                                                                {
                                                                                                  "showContentAs": "attribute",
                                                                                                  "attribute": ListAttributeProperty({
                                                                                                    "path": "",
                                                                                                    "entity": "AmazonBedrockConnector.AmazonBedrockKnowledgeBase",
                                                                                                    "attribute": "KnowledgeBaseID",
                                                                                                    "attributeType": "String",
                                                                                                    "sortable": true,
                                                                                                    "filterable": true,
                                                                                                    "dataSourceId": "p.30",
                                                                                                    "isList": false
                                                                                                  }),
                                                                                                  "content": void 0,
                                                                                                  "dynamicText": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "header": selectTranslation([
                                                                                                    ExpressionProperty({
                                                                                                      "expression": { "expr": { "type": "literal", "value": "Knowledge Base ID" }, "args": {} }
                                                                                                    })
                                                                                                  ]),
                                                                                                  "tooltip": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "filter": void 0,
                                                                                                  "sortable": true,
                                                                                                  "resizable": true,
                                                                                                  "draggable": true,
                                                                                                  "hidable": "yes",
                                                                                                  "width": "autoFill",
                                                                                                  "size": 1,
                                                                                                  "alignment": "left",
                                                                                                  "wrapText": false,
                                                                                                  "exportValue": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "visible": ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                                  }),
                                                                                                  "allowEventPropagation": true,
                                                                                                  "minWidth": "auto",
                                                                                                  "minWidthLimit": 100
                                                                                                },
                                                                                                {
                                                                                                  "showContentAs": "attribute",
                                                                                                  "attribute": ListAttributeProperty({
                                                                                                    "path": "",
                                                                                                    "entity": "AmazonBedrockConnector.AmazonBedrockKnowledgeBase",
                                                                                                    "attribute": "Name",
                                                                                                    "attributeType": "String",
                                                                                                    "sortable": true,
                                                                                                    "filterable": true,
                                                                                                    "dataSourceId": "p.30",
                                                                                                    "isList": false
                                                                                                  }),
                                                                                                  "content": void 0,
                                                                                                  "dynamicText": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "header": selectTranslation([
                                                                                                    ExpressionProperty({
                                                                                                      "expression": { "expr": { "type": "literal", "value": "Name" }, "args": {} }
                                                                                                    })
                                                                                                  ]),
                                                                                                  "tooltip": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "filter": void 0,
                                                                                                  "sortable": true,
                                                                                                  "resizable": true,
                                                                                                  "draggable": true,
                                                                                                  "hidable": "yes",
                                                                                                  "width": "autoFill",
                                                                                                  "size": 1,
                                                                                                  "alignment": "left",
                                                                                                  "wrapText": false,
                                                                                                  "exportValue": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "visible": ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                                  }),
                                                                                                  "allowEventPropagation": true,
                                                                                                  "minWidth": "auto",
                                                                                                  "minWidthLimit": 100
                                                                                                },
                                                                                                {
                                                                                                  "showContentAs": "attribute",
                                                                                                  "attribute": ListAttributeProperty({
                                                                                                    "path": "",
                                                                                                    "entity": "AmazonBedrockConnector.AmazonBedrockKnowledgeBase",
                                                                                                    "attribute": "Status",
                                                                                                    "attributeType": "Enum",
                                                                                                    "sortable": true,
                                                                                                    "filterable": true,
                                                                                                    "dataSourceId": "p.30",
                                                                                                    "isList": false
                                                                                                  }),
                                                                                                  "content": void 0,
                                                                                                  "dynamicText": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "header": selectTranslation([
                                                                                                    ExpressionProperty({
                                                                                                      "expression": { "expr": { "type": "literal", "value": "Status" }, "args": {} }
                                                                                                    })
                                                                                                  ]),
                                                                                                  "tooltip": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "filter": void 0,
                                                                                                  "sortable": true,
                                                                                                  "resizable": true,
                                                                                                  "draggable": true,
                                                                                                  "hidable": "yes",
                                                                                                  "width": "autoFill",
                                                                                                  "size": 1,
                                                                                                  "alignment": "left",
                                                                                                  "wrapText": false,
                                                                                                  "exportValue": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "visible": ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                                  }),
                                                                                                  "allowEventPropagation": true,
                                                                                                  "minWidth": "auto",
                                                                                                  "minWidthLimit": 100
                                                                                                },
                                                                                                {
                                                                                                  "showContentAs": "attribute",
                                                                                                  "attribute": ListAttributeProperty({
                                                                                                    "path": "",
                                                                                                    "entity": "AmazonBedrockConnector.AmazonBedrockKnowledgeBase",
                                                                                                    "attribute": "Description",
                                                                                                    "attributeType": "String",
                                                                                                    "sortable": true,
                                                                                                    "filterable": true,
                                                                                                    "dataSourceId": "p.30",
                                                                                                    "isList": false
                                                                                                  }),
                                                                                                  "content": void 0,
                                                                                                  "dynamicText": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "header": selectTranslation([
                                                                                                    ExpressionProperty({
                                                                                                      "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
                                                                                                    })
                                                                                                  ]),
                                                                                                  "tooltip": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "filter": void 0,
                                                                                                  "sortable": true,
                                                                                                  "resizable": true,
                                                                                                  "draggable": true,
                                                                                                  "hidable": "yes",
                                                                                                  "width": "autoFill",
                                                                                                  "size": 1,
                                                                                                  "alignment": "left",
                                                                                                  "wrapText": false,
                                                                                                  "exportValue": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "visible": ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                                  }),
                                                                                                  "allowEventPropagation": true,
                                                                                                  "minWidth": "auto",
                                                                                                  "minWidthLimit": 100
                                                                                                },
                                                                                                {
                                                                                                  "showContentAs": "dynamicText",
                                                                                                  "attribute": ListAttributeProperty({
                                                                                                    "path": "",
                                                                                                    "entity": "AmazonBedrockConnector.AmazonBedrockKnowledgeBase",
                                                                                                    "attribute": "UpdatedAt",
                                                                                                    "attributeType": "DateTime",
                                                                                                    "sortable": true,
                                                                                                    "filterable": true,
                                                                                                    "dataSourceId": "p.30",
                                                                                                    "isList": false
                                                                                                  }),
                                                                                                  "content": void 0,
                                                                                                  "dynamicText": selectTranslation([
                                                                                                    ListExpressionProperty({
                                                                                                      "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "UpdatedAt" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "currentObject": { "widget": "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataGrid23", "source": "object" } } },
                                                                                                      "dataSourceId": "p.30"
                                                                                                    })
                                                                                                  ]),
                                                                                                  "header": selectTranslation([
                                                                                                    ExpressionProperty({
                                                                                                      "expression": { "expr": { "type": "literal", "value": "Updated at" }, "args": {} }
                                                                                                    })
                                                                                                  ]),
                                                                                                  "tooltip": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "filter": void 0,
                                                                                                  "sortable": true,
                                                                                                  "resizable": true,
                                                                                                  "draggable": true,
                                                                                                  "hidable": "yes",
                                                                                                  "width": "autoFill",
                                                                                                  "size": 1,
                                                                                                  "alignment": "left",
                                                                                                  "wrapText": false,
                                                                                                  "exportValue": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "visible": ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                                  }),
                                                                                                  "allowEventPropagation": true,
                                                                                                  "minWidth": "auto",
                                                                                                  "minWidthLimit": 100
                                                                                                }
                                                                                              ],
                                                                                              columnsFilterable: false,
                                                                                              pageSize: 10,
                                                                                              pagination: "buttons",
                                                                                              pagingPosition: "bottom",
                                                                                              showEmptyPlaceholder: "none",
                                                                                              emptyPlaceholder: void 0,
                                                                                              rowClass: void 0,
                                                                                              onClick: void 0,
                                                                                              columnsSortable: true,
                                                                                              columnsResizable: true,
                                                                                              columnsDraggable: true,
                                                                                              columnsHidable: true,
                                                                                              filtersPlaceholder: void 0,
                                                                                              filterSectionTitle: selectTranslation([
                                                                                                ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                })
                                                                                              ]),
                                                                                              refreshInterval: 0,
                                                                                              itemSelectionMethod: "checkbox",
                                                                                              itemSelectionMode: "clear",
                                                                                              showSelectAllToggle: true,
                                                                                              showPagingButtons: "always",
                                                                                              loadMoreButtonCaption: selectTranslation([
                                                                                                ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                                                                                                })
                                                                                              ]),
                                                                                              onClickTrigger: "single",
                                                                                              onSelectionChange: void 0,
                                                                                              configurationStorageType: "attribute",
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
                                                                                              loadingType: "spinner",
                                                                                              showNumberOfRows: false,
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
                                                                                              class: "mx-name-dataGrid23 table-compact table-striped",
                                                                                              style: void 0,
                                                                                              tabIndex: void 0
                                                                                            }
                                                                                          )
                                                                                        ]
                                                                                      },
                                                                                      {
                                                                                        "name": "tabPage3",
                                                                                        "caption": TextProperty({
                                                                                          "value": selectTranslation([
                                                                                            "Agents"
                                                                                          ])
                                                                                        }),
                                                                                        "isDelayed": false,
                                                                                        "refreshOnShow": false,
                                                                                        "content": [
                                                                                          /* @__PURE__ */ React.createElement(
                                                                                            $Datagrid,
                                                                                            {
                                                                                              key: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataGrid24",
                                                                                              $widgetId: "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataGrid24",
                                                                                              datasource: MicroflowObjectListProperty({
                                                                                                "argMap": { "Settings": { "widget": "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataView1", "source": "object" } },
                                                                                                "dataSourceId": "p.31",
                                                                                                "entity": "AmazonBedrockConnector.AmazonBedrockAgent",
                                                                                                "scope": "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataView1",
                                                                                                "operationId": "S+1Gl5T+LlyPvwM8dcwVjQ"
                                                                                              }),
                                                                                              columns: [
                                                                                                {
                                                                                                  "showContentAs": "attribute",
                                                                                                  "attribute": ListAttributeProperty({
                                                                                                    "path": "",
                                                                                                    "entity": "AmazonBedrockConnector.AmazonBedrockAgent",
                                                                                                    "attribute": "AgentID",
                                                                                                    "attributeType": "String",
                                                                                                    "sortable": true,
                                                                                                    "filterable": true,
                                                                                                    "dataSourceId": "p.31",
                                                                                                    "isList": false
                                                                                                  }),
                                                                                                  "content": void 0,
                                                                                                  "dynamicText": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "header": selectTranslation([
                                                                                                    ExpressionProperty({
                                                                                                      "expression": { "expr": { "type": "literal", "value": "Agent ID" }, "args": {} }
                                                                                                    })
                                                                                                  ]),
                                                                                                  "tooltip": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "filter": void 0,
                                                                                                  "sortable": true,
                                                                                                  "resizable": true,
                                                                                                  "draggable": true,
                                                                                                  "hidable": "yes",
                                                                                                  "width": "autoFill",
                                                                                                  "size": 1,
                                                                                                  "alignment": "left",
                                                                                                  "wrapText": false,
                                                                                                  "exportValue": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "visible": ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                                  }),
                                                                                                  "allowEventPropagation": true,
                                                                                                  "minWidth": "auto",
                                                                                                  "minWidthLimit": 100
                                                                                                },
                                                                                                {
                                                                                                  "showContentAs": "attribute",
                                                                                                  "attribute": ListAttributeProperty({
                                                                                                    "path": "",
                                                                                                    "entity": "AmazonBedrockConnector.AmazonBedrockAgent",
                                                                                                    "attribute": "AgentName",
                                                                                                    "attributeType": "String",
                                                                                                    "sortable": true,
                                                                                                    "filterable": true,
                                                                                                    "dataSourceId": "p.31",
                                                                                                    "isList": false
                                                                                                  }),
                                                                                                  "content": void 0,
                                                                                                  "dynamicText": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "header": selectTranslation([
                                                                                                    ExpressionProperty({
                                                                                                      "expression": { "expr": { "type": "literal", "value": "Name" }, "args": {} }
                                                                                                    })
                                                                                                  ]),
                                                                                                  "tooltip": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "filter": void 0,
                                                                                                  "sortable": true,
                                                                                                  "resizable": true,
                                                                                                  "draggable": true,
                                                                                                  "hidable": "yes",
                                                                                                  "width": "autoFill",
                                                                                                  "size": 1,
                                                                                                  "alignment": "left",
                                                                                                  "wrapText": false,
                                                                                                  "exportValue": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "visible": ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                                  }),
                                                                                                  "allowEventPropagation": true,
                                                                                                  "minWidth": "auto",
                                                                                                  "minWidthLimit": 100
                                                                                                },
                                                                                                {
                                                                                                  "showContentAs": "attribute",
                                                                                                  "attribute": ListAttributeProperty({
                                                                                                    "path": "",
                                                                                                    "entity": "AmazonBedrockConnector.AmazonBedrockAgent",
                                                                                                    "attribute": "AgentStatus",
                                                                                                    "attributeType": "Enum",
                                                                                                    "sortable": true,
                                                                                                    "filterable": true,
                                                                                                    "dataSourceId": "p.31",
                                                                                                    "isList": false
                                                                                                  }),
                                                                                                  "content": void 0,
                                                                                                  "dynamicText": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "header": selectTranslation([
                                                                                                    ExpressionProperty({
                                                                                                      "expression": { "expr": { "type": "literal", "value": "Status" }, "args": {} }
                                                                                                    })
                                                                                                  ]),
                                                                                                  "tooltip": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "filter": void 0,
                                                                                                  "sortable": true,
                                                                                                  "resizable": true,
                                                                                                  "draggable": true,
                                                                                                  "hidable": "yes",
                                                                                                  "width": "autoFill",
                                                                                                  "size": 1,
                                                                                                  "alignment": "left",
                                                                                                  "wrapText": false,
                                                                                                  "exportValue": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "visible": ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                                  }),
                                                                                                  "allowEventPropagation": true,
                                                                                                  "minWidth": "auto",
                                                                                                  "minWidthLimit": 100
                                                                                                },
                                                                                                {
                                                                                                  "showContentAs": "attribute",
                                                                                                  "attribute": ListAttributeProperty({
                                                                                                    "path": "",
                                                                                                    "entity": "AmazonBedrockConnector.AmazonBedrockAgent",
                                                                                                    "attribute": "Description",
                                                                                                    "attributeType": "String",
                                                                                                    "sortable": true,
                                                                                                    "filterable": true,
                                                                                                    "dataSourceId": "p.31",
                                                                                                    "isList": false
                                                                                                  }),
                                                                                                  "content": void 0,
                                                                                                  "dynamicText": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "header": selectTranslation([
                                                                                                    ExpressionProperty({
                                                                                                      "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
                                                                                                    })
                                                                                                  ]),
                                                                                                  "tooltip": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "filter": void 0,
                                                                                                  "sortable": true,
                                                                                                  "resizable": true,
                                                                                                  "draggable": true,
                                                                                                  "hidable": "yes",
                                                                                                  "width": "autoFill",
                                                                                                  "size": 1,
                                                                                                  "alignment": "left",
                                                                                                  "wrapText": false,
                                                                                                  "exportValue": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "visible": ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                                  }),
                                                                                                  "allowEventPropagation": true,
                                                                                                  "minWidth": "auto",
                                                                                                  "minWidthLimit": 100
                                                                                                },
                                                                                                {
                                                                                                  "showContentAs": "attribute",
                                                                                                  "attribute": ListAttributeProperty({
                                                                                                    "path": "",
                                                                                                    "entity": "AmazonBedrockConnector.AmazonBedrockAgent",
                                                                                                    "attribute": "LatestAgentVersion",
                                                                                                    "attributeType": "String",
                                                                                                    "sortable": true,
                                                                                                    "filterable": true,
                                                                                                    "dataSourceId": "p.31",
                                                                                                    "isList": false
                                                                                                  }),
                                                                                                  "content": void 0,
                                                                                                  "dynamicText": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "header": selectTranslation([
                                                                                                    ExpressionProperty({
                                                                                                      "expression": { "expr": { "type": "literal", "value": "Latest Version" }, "args": {} }
                                                                                                    })
                                                                                                  ]),
                                                                                                  "tooltip": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "filter": void 0,
                                                                                                  "sortable": true,
                                                                                                  "resizable": true,
                                                                                                  "draggable": true,
                                                                                                  "hidable": "yes",
                                                                                                  "width": "autoFill",
                                                                                                  "size": 1,
                                                                                                  "alignment": "left",
                                                                                                  "wrapText": false,
                                                                                                  "exportValue": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "visible": ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                                  }),
                                                                                                  "allowEventPropagation": true,
                                                                                                  "minWidth": "auto",
                                                                                                  "minWidthLimit": 100
                                                                                                },
                                                                                                {
                                                                                                  "showContentAs": "dynamicText",
                                                                                                  "attribute": ListAttributeProperty({
                                                                                                    "path": "",
                                                                                                    "entity": "AmazonBedrockConnector.AmazonBedrockAgent",
                                                                                                    "attribute": "UpdatedAt",
                                                                                                    "attributeType": "DateTime",
                                                                                                    "sortable": true,
                                                                                                    "filterable": true,
                                                                                                    "dataSourceId": "p.31",
                                                                                                    "isList": false
                                                                                                  }),
                                                                                                  "content": void 0,
                                                                                                  "dynamicText": selectTranslation([
                                                                                                    ListExpressionProperty({
                                                                                                      "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "UpdatedAt" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "currentObject": { "widget": "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataGrid24", "source": "object" } } },
                                                                                                      "dataSourceId": "p.31"
                                                                                                    })
                                                                                                  ]),
                                                                                                  "header": selectTranslation([
                                                                                                    ExpressionProperty({
                                                                                                      "expression": { "expr": { "type": "literal", "value": "Updated at" }, "args": {} }
                                                                                                    })
                                                                                                  ]),
                                                                                                  "tooltip": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "filter": void 0,
                                                                                                  "sortable": true,
                                                                                                  "resizable": true,
                                                                                                  "draggable": true,
                                                                                                  "hidable": "yes",
                                                                                                  "width": "autoFill",
                                                                                                  "size": 1,
                                                                                                  "alignment": "left",
                                                                                                  "wrapText": false,
                                                                                                  "exportValue": selectTranslation([
                                                                                                    void 0
                                                                                                  ]),
                                                                                                  "visible": ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                                  }),
                                                                                                  "allowEventPropagation": true,
                                                                                                  "minWidth": "auto",
                                                                                                  "minWidthLimit": 100
                                                                                                }
                                                                                              ],
                                                                                              columnsFilterable: false,
                                                                                              pageSize: 10,
                                                                                              pagination: "buttons",
                                                                                              pagingPosition: "bottom",
                                                                                              showEmptyPlaceholder: "none",
                                                                                              emptyPlaceholder: void 0,
                                                                                              rowClass: void 0,
                                                                                              onClick: void 0,
                                                                                              columnsSortable: true,
                                                                                              columnsResizable: true,
                                                                                              columnsDraggable: true,
                                                                                              columnsHidable: true,
                                                                                              filtersPlaceholder: void 0,
                                                                                              filterSectionTitle: selectTranslation([
                                                                                                ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                })
                                                                                              ]),
                                                                                              refreshInterval: 0,
                                                                                              itemSelectionMethod: "checkbox",
                                                                                              itemSelectionMode: "clear",
                                                                                              showSelectAllToggle: true,
                                                                                              showPagingButtons: "always",
                                                                                              loadMoreButtonCaption: selectTranslation([
                                                                                                ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                                                                                                })
                                                                                              ]),
                                                                                              onClickTrigger: "single",
                                                                                              onSelectionChange: void 0,
                                                                                              configurationStorageType: "attribute",
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
                                                                                              loadingType: "spinner",
                                                                                              showNumberOfRows: false,
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
                                                                                              class: "mx-name-dataGrid24 table-striped table-compact",
                                                                                              style: void 0,
                                                                                              tabIndex: void 0
                                                                                            }
                                                                                          )
                                                                                        ]
                                                                                      }
                                                                                    ],
                                                                                    hoistedSelections: [
                                                                                      "p.AmazonBedrockConnector.SNIP_Settings_Admin_MetaDataOverview.dataGrid22"
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
                                                                  ],
                                                                  hideFooter: false,
                                                                  footer: void 0
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
  "Amazon Bedrock Configuration"
]);
const classes = "layout-atlas layout-atlas-responsive-topbar";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_TopBar.Main": region$Main
};

export { classes, content, style, title };
