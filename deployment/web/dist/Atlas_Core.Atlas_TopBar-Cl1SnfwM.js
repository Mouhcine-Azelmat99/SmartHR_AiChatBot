import { reactExports, asPluginWidgets, Fragment, selectTranslation, PlaceholderProperty } from './index-B-pQLZz2.js';
import { ActionProperty } from './ActionButton-C47bDiwH.js';
import { DatabaseObjectListProperty } from './DatabaseObjectListProperty-Dk1DF3Sc.js';
import { Placeholder, ExpressionProperty } from './Placeholder-C1uYYDJ5.js';
import { ListExpressionProperty } from './ListExpressionProperty-Blkk1P49.js';
import { TextProperty } from './TextProperty-ukMsrrP8.js';
import { WebIconProperty } from './WebIconProperty-B4eQIHHv.js';
import { WebStaticImageProperty } from './WebStaticImageProperty-D6HpETLo.js';
import { Container } from './Container-CTbE-yQS.js';
import { Div } from './Div-C2k8MuH7.js';
import './Fragment-C3M8OT7J.js';
import { ImageWidgetModule } from './Image-CwuIpbpH.js';
import { LanguageSelectorWidgetModule, SidebarToggle, NavigationTree } from './SidebarToggle-U7U0qqOC.js';
import { MenuBar } from './MenuBar-rOfPUVLa.js';
import { ScrollContainer } from './ScrollContainer-B-pXvHDA.js';

const React = { createElement: reactExports.createElement };
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const LanguageSelector = Object.getOwnPropertyDescriptor(LanguageSelectorWidgetModule, "LanguageSelector")?.value || Object.getOwnPropertyDescriptor(LanguageSelectorWidgetModule, "default")?.value;
const { $ScrollContainer, $Fragment, $Div, $Container, $SidebarToggle, $Image, $MenuBar, $LanguageSelector, $NavigationTree, $Placeholder } = asPluginWidgets({ ScrollContainer, Fragment, Div, Container, SidebarToggle, Image, MenuBar, LanguageSelector, NavigationTree, Placeholder });
const region$Main = [
  /* @__PURE__ */ React.createElement(
    $ScrollContainer,
    {
      key: "l.Atlas_Core.Atlas_TopBar.layoutContainer",
      $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutContainer",
      class: "mx-name-layoutContainer",
      style: void 0,
      scrollPerRegion: true,
      layoutMode: "sidebar",
      top: {
        "enabled": true,
        "content": [
          /* @__PURE__ */ React.createElement(
            $Fragment,
            {
              key: "l.Atlas_Core.Atlas_TopBar.snippetCall1",
              $widgetId: "l.Atlas_Core.Atlas_TopBar.snippetCall1",
              content: void 0
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Div,
            {
              key: "l.Atlas_Core.Atlas_TopBar.layoutGrid1",
              $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutGrid1",
              class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
              style: void 0,
              content: [
                /* @__PURE__ */ React.createElement(
                  $Div,
                  {
                    key: "l.Atlas_Core.Atlas_TopBar.layoutGrid1$row0",
                    $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutGrid1$row0",
                    class: "row",
                    style: void 0,
                    content: [
                      /* @__PURE__ */ React.createElement(
                        $Div,
                        {
                          key: "l.Atlas_Core.Atlas_TopBar.layoutGrid1$row0$column0",
                          $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutGrid1$row0$column0",
                          class: "col-lg-12 col-md-12 col-12",
                          style: void 0,
                          content: [
                            /* @__PURE__ */ React.createElement(
                              $Container,
                              {
                                key: "l.Atlas_Core.Atlas_TopBar.container2",
                                $widgetId: "l.Atlas_Core.Atlas_TopBar.container2",
                                class: "mx-name-container2 topbar-content",
                                style: void 0,
                                renderMode: "div",
                                onClick: void 0,
                                content: [
                                  /* @__PURE__ */ React.createElement(
                                    $SidebarToggle,
                                    {
                                      key: "l.Atlas_Core.Atlas_TopBar.sidebarToggle3",
                                      $widgetId: "l.Atlas_Core.Atlas_TopBar.sidebarToggle3",
                                      buttonId: "l.Atlas_Core.Atlas_TopBar.sidebarToggle3",
                                      renderType: "button",
                                      buttonClass: "btn-primary",
                                      caption: selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                        })
                                      ]),
                                      tooltip: TextProperty({
                                        "value": selectTranslation([
                                          "Toggle Menu"
                                        ])
                                      }),
                                      icon: WebIconProperty({
                                        "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-navigation-menu" }
                                      }),
                                      class: "mx-name-sidebarToggle3 toggle-btn",
                                      style: void 0,
                                      tabIndex: void 0
                                    }
                                  ),
                                  /* @__PURE__ */ React.createElement(
                                    $Div,
                                    {
                                      key: "l.Atlas_Core.Atlas_TopBar.layoutGrid2",
                                      $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutGrid2",
                                      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid navbar-brand",
                                      style: void 0,
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Div,
                                          {
                                            key: "l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0",
                                            $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0",
                                            class: "row align-children-center",
                                            style: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column0",
                                                  $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column0",
                                                  class: "col-lg-auto col-md-auto col-auto",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Image,
                                                      {
                                                        key: "l.Atlas_Core.Atlas_TopBar.staticImage1",
                                                        $widgetId: "l.Atlas_Core.Atlas_TopBar.staticImage1",
                                                        datasource: "image",
                                                        imageObject: WebStaticImageProperty({
                                                          "image": { "uri": "img/Atlas_Core$Layout$logo.svg" }
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
                                                        responsive: false,
                                                        class: "mx-name-staticImage1",
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
                                                  key: "l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column1",
                                                  $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column1",
                                                  class: "col-lg col-md col",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $MenuBar,
                                                      {
                                                        key: "l.Atlas_Core.Atlas_TopBar.menuBar1",
                                                        $widgetId: "l.Atlas_Core.Atlas_TopBar.menuBar1",
                                                        class: "mx-name-menuBar1 hidden-xs hide-icons",
                                                        style: void 0,
                                                        menu: [
                                                          {
                                                            "caption": TextProperty({
                                                              "value": selectTranslation([
                                                                "Chat"
                                                              ])
                                                            }),
                                                            "icon": WebIconProperty({
                                                              "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-message-bubble" }
                                                            }),
                                                            "action": ActionProperty({
                                                              "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "dNdXYulmr16GLrk/mFpECw", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                                              "skipClientValidation": true
                                                            })
                                                          },
                                                          {
                                                            "caption": TextProperty({
                                                              "value": selectTranslation([
                                                                "Instructions"
                                                              ])
                                                            }),
                                                            "icon": WebIconProperty({
                                                              "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-browser-page-text" }
                                                            }),
                                                            "action": ActionProperty({
                                                              "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstAIBot/Instruction_Overview.page.xml", "location": "content", "allowedRoles": ["User"] }, "disabledDuringExecution": false },
                                                              "skipClientValidation": true
                                                            })
                                                          },
                                                          {
                                                            "caption": TextProperty({
                                                              "value": selectTranslation([
                                                                "Administration"
                                                              ])
                                                            }),
                                                            "icon": WebIconProperty({
                                                              "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-cog" }
                                                            }),
                                                            "items": [
                                                              {
                                                                "caption": TextProperty({
                                                                  "value": selectTranslation([
                                                                    "Bot Configuration"
                                                                  ])
                                                                }),
                                                                "action": ActionProperty({
                                                                  "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstAIBot/BotConfig_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                                  "skipClientValidation": true
                                                                })
                                                              },
                                                              {
                                                                "caption": TextProperty({
                                                                  "value": selectTranslation([
                                                                    "Mendix Cloud GenAI Configuration"
                                                                  ])
                                                                }),
                                                                "action": ActionProperty({
                                                                  "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstAIBot/MxCloudGenAIConfiguration_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                                  "skipClientValidation": true
                                                                })
                                                              },
                                                              {
                                                                "caption": TextProperty({
                                                                  "value": selectTranslation([
                                                                    "Amazon Bedrock Configuration"
                                                                  ])
                                                                }),
                                                                "action": ActionProperty({
                                                                  "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstAIBot/AmazonBedrockConfiguration_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                                  "skipClientValidation": true
                                                                })
                                                              },
                                                              {
                                                                "caption": TextProperty({
                                                                  "value": selectTranslation([
                                                                    "OpenAI Configuration"
                                                                  ])
                                                                }),
                                                                "action": ActionProperty({
                                                                  "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstAIBot/OpenAIConfiguration_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                                  "skipClientValidation": true
                                                                })
                                                              },
                                                              {
                                                                "caption": TextProperty({
                                                                  "value": selectTranslation([
                                                                    "Mistral Configuration"
                                                                  ])
                                                                }),
                                                                "action": ActionProperty({
                                                                  "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstAIBot/MistralConfiguration_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                                  "skipClientValidation": true
                                                                })
                                                              },
                                                              {
                                                                "caption": TextProperty({
                                                                  "value": selectTranslation([
                                                                    "User Management"
                                                                  ])
                                                                }),
                                                                "action": ActionProperty({
                                                                  "action": { "type": "openPage", "argMap": {}, "config": { "name": "Administration/Account_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                                  "skipClientValidation": true
                                                                })
                                                              },
                                                              {
                                                                "caption": TextProperty({
                                                                  "value": selectTranslation([
                                                                    "Instructions"
                                                                  ])
                                                                }),
                                                                "action": ActionProperty({
                                                                  "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstAIBot/Instruction_Overview_Admin.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                                  "skipClientValidation": true
                                                                })
                                                              },
                                                              {
                                                                "caption": TextProperty({
                                                                  "value": selectTranslation([
                                                                    "Initial User Prompts"
                                                                  ])
                                                                }),
                                                                "action": ActionProperty({
                                                                  "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstAIBot/InitialUserPrompt_Overview_Admin.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                                  "skipClientValidation": true
                                                                })
                                                              },
                                                              {
                                                                "caption": TextProperty({
                                                                  "value": selectTranslation([
                                                                    "Traces"
                                                                  ])
                                                                }),
                                                                "action": ActionProperty({
                                                                  "action": { "type": "openPage", "argMap": {}, "config": { "name": "ConversationalUI/Trace_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                                  "skipClientValidation": true
                                                                })
                                                              },
                                                              {
                                                                "caption": TextProperty({
                                                                  "value": selectTranslation([
                                                                    "Token consumption monitor"
                                                                  ])
                                                                }),
                                                                "action": ActionProperty({
                                                                  "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "CuToddsomVurVjaMkOeiPw", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                                  "skipClientValidation": true
                                                                })
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            "caption": TextProperty({
                                                              "value": selectTranslation([
                                                                "Log out"
                                                              ])
                                                            }),
                                                            "icon": WebIconProperty({
                                                              "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-logout" }
                                                            }),
                                                            "action": ActionProperty({
                                                              "action": { "type": "signOut", "argMap": {}, "config": { "namedUser": true }, "disabledDuringExecution": false },
                                                              "skipClientValidation": true
                                                            })
                                                          }
                                                        ]
                                                      }
                                                    )
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column2",
                                                  $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column2",
                                                  class: "col-lg-auto col-md-auto col-auto",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Fragment,
                                                      {
                                                        key: "l.Atlas_Core.Atlas_TopBar.snippetCall2",
                                                        $widgetId: "l.Atlas_Core.Atlas_TopBar.snippetCall2",
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $LanguageSelector,
                                                            {
                                                              key: "l.Atlas_Core.LanguageSelectorWidget.languageSelector1",
                                                              $widgetId: "l.Atlas_Core.LanguageSelectorWidget.languageSelector1",
                                                              languageOptions: DatabaseObjectListProperty({
                                                                "dataSourceId": "l.2",
                                                                "entity": "System.Language",
                                                                "operationId": "TxmxgHrYzFaAwo2PGz2zuQ",
                                                                "sort": [
                                                                  [
                                                                    "Description",
                                                                    "asc"
                                                                  ]
                                                                ]
                                                              }),
                                                              languageCaption: ListExpressionProperty({
                                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Description" }, "args": { "currentObject": { "widget": "l.Atlas_Core.LanguageSelectorWidget.languageSelector1", "source": "object" } } },
                                                                "dataSourceId": "l.2"
                                                              }),
                                                              position: "bottom",
                                                              trigger: "click",
                                                              hideForSingle: false,
                                                              screenReaderLabelCaption: selectTranslation([
                                                                ExpressionProperty({
                                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                })
                                                              ]),
                                                              class: "mx-name-languageSelector1",
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
        ],
        "sizeMode": "auto",
        "class": "region-topbar"
      },
      bottom: {
        "enabled": false
      },
      left: {
        "enabled": true,
        "content": [
          /* @__PURE__ */ React.createElement(
            $NavigationTree,
            {
              key: "l.Atlas_Core.Atlas_TopBar.navigationTree1",
              $widgetId: "l.Atlas_Core.Atlas_TopBar.navigationTree1",
              class: "mx-name-navigationTree1",
              style: void 0,
              menu: [
                {
                  "caption": TextProperty({
                    "value": selectTranslation([
                      "Chat"
                    ])
                  }),
                  "icon": WebIconProperty({
                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-message-bubble" }
                  }),
                  "action": ActionProperty({
                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "dNdXYulmr16GLrk/mFpECw", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                    "skipClientValidation": true
                  })
                },
                {
                  "caption": TextProperty({
                    "value": selectTranslation([
                      "Instructions"
                    ])
                  }),
                  "icon": WebIconProperty({
                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-browser-page-text" }
                  }),
                  "action": ActionProperty({
                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstAIBot/Instruction_Overview.page.xml", "location": "content", "allowedRoles": ["User"] }, "disabledDuringExecution": false },
                    "skipClientValidation": true
                  })
                },
                {
                  "caption": TextProperty({
                    "value": selectTranslation([
                      "Administration"
                    ])
                  }),
                  "icon": WebIconProperty({
                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-cog" }
                  }),
                  "items": [
                    {
                      "caption": TextProperty({
                        "value": selectTranslation([
                          "Bot Configuration"
                        ])
                      }),
                      "action": ActionProperty({
                        "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstAIBot/BotConfig_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                        "skipClientValidation": true
                      })
                    },
                    {
                      "caption": TextProperty({
                        "value": selectTranslation([
                          "Mendix Cloud GenAI Configuration"
                        ])
                      }),
                      "action": ActionProperty({
                        "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstAIBot/MxCloudGenAIConfiguration_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                        "skipClientValidation": true
                      })
                    },
                    {
                      "caption": TextProperty({
                        "value": selectTranslation([
                          "Amazon Bedrock Configuration"
                        ])
                      }),
                      "action": ActionProperty({
                        "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstAIBot/AmazonBedrockConfiguration_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                        "skipClientValidation": true
                      })
                    },
                    {
                      "caption": TextProperty({
                        "value": selectTranslation([
                          "OpenAI Configuration"
                        ])
                      }),
                      "action": ActionProperty({
                        "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstAIBot/OpenAIConfiguration_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                        "skipClientValidation": true
                      })
                    },
                    {
                      "caption": TextProperty({
                        "value": selectTranslation([
                          "Mistral Configuration"
                        ])
                      }),
                      "action": ActionProperty({
                        "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstAIBot/MistralConfiguration_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                        "skipClientValidation": true
                      })
                    },
                    {
                      "caption": TextProperty({
                        "value": selectTranslation([
                          "User Management"
                        ])
                      }),
                      "action": ActionProperty({
                        "action": { "type": "openPage", "argMap": {}, "config": { "name": "Administration/Account_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                        "skipClientValidation": true
                      })
                    },
                    {
                      "caption": TextProperty({
                        "value": selectTranslation([
                          "Instructions"
                        ])
                      }),
                      "action": ActionProperty({
                        "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstAIBot/Instruction_Overview_Admin.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                        "skipClientValidation": true
                      })
                    },
                    {
                      "caption": TextProperty({
                        "value": selectTranslation([
                          "Initial User Prompts"
                        ])
                      }),
                      "action": ActionProperty({
                        "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstAIBot/InitialUserPrompt_Overview_Admin.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                        "skipClientValidation": true
                      })
                    },
                    {
                      "caption": TextProperty({
                        "value": selectTranslation([
                          "Traces"
                        ])
                      }),
                      "action": ActionProperty({
                        "action": { "type": "openPage", "argMap": {}, "config": { "name": "ConversationalUI/Trace_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                        "skipClientValidation": true
                      })
                    },
                    {
                      "caption": TextProperty({
                        "value": selectTranslation([
                          "Token consumption monitor"
                        ])
                      }),
                      "action": ActionProperty({
                        "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "CuToddsomVurVjaMkOeiPw", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                        "skipClientValidation": true
                      })
                    }
                  ]
                },
                {
                  "caption": TextProperty({
                    "value": selectTranslation([
                      "Log out"
                    ])
                  }),
                  "icon": WebIconProperty({
                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-logout" }
                  }),
                  "action": ActionProperty({
                    "action": { "type": "signOut", "argMap": {}, "config": { "namedUser": true }, "disabledDuringExecution": false },
                    "skipClientValidation": true
                  })
                }
              ]
            }
          )
        ],
        "sizeMode": "pixels",
        "sizeValue": 320,
        "class": "region-sidebar",
        "toggleMode": "push",
        "initiallyOpen": false
      },
      right: {
        "enabled": false
      },
      center: {
        "content": [
          /* @__PURE__ */ React.createElement(
            $Placeholder,
            {
              key: "l.Atlas_Core.Atlas_TopBar.Main",
              $widgetId: "l.Atlas_Core.Atlas_TopBar.Main",
              content: PlaceholderProperty({
                "id": "Atlas_Core.Atlas_TopBar.Main"
              })
            }
          )
        ],
        "class": "region-content"
      }
    }
  )
];
const content = {
  "Main": region$Main
};

export { content };
