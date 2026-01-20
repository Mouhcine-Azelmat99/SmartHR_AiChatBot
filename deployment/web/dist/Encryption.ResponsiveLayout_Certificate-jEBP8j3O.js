import { reactExports, jsxRuntimeExports, classNames, reactDomExports, asPluginWidgets, selectTranslation, PlaceholderProperty } from './index-B-pQLZz2.js';
import { Placeholder, ExpressionProperty } from './Placeholder-C1uYYDJ5.js';
import { ActionButton, ActionProperty } from './ActionButton-C47bDiwH.js';
import { DerivedUniqueIdProperty } from './DerivedUniqueIdProperty-QeaM9GtQ.js';
import { TextProperty } from './TextProperty-ukMsrrP8.js';
import { WebIconProperty } from './WebIconProperty-B4eQIHHv.js';
import { WebStaticImageProperty } from './WebStaticImageProperty-D6HpETLo.js';
import { ConditionalVisibilityWrapper } from './ConditionalVisibilityWrapper-C-2xhd5O.js';
import { Label } from './Label-DMkcf93j.js';
import { MenuBar } from './MenuBar-rOfPUVLa.js';
import { ScrollContainer } from './ScrollContainer-B-pXvHDA.js';

const Image = (props) => {
  const [enlarged, setEnlarged] = reactExports.useState(false), image = props.source.value ?? props.placeholder?.value;
  if (!image)
    return jsxRuntimeExports.jsx("img", { style: { display: "none" } });
  const tabIndex = props.alternativeText?.value ?? props.onClick ? { tabIndex: props.tabIndex ?? 0 } : {}, a11yProps = { ...props.alternativeText?.value ? { alt: props.alternativeText.value } : { role: "presentation" }, ...props.onClick ?? props.onClickEnlarge ? { role: "button" } : {}, ...tabIndex }, useMaxSize = props.width && props.height && isInPx(props.width) && isInPx(props.height), onClickHandler = props.onClickEnlarge ? () => setEnlarged(true) : props.onClick?.canExecute ? () => props.onClick?.canExecute && props.onClick.execute() : void 0;
  return jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [jsxRuntimeExports.jsx("img", { className: classNames("mx-image", props.class, { "img-responsive": props.responsive }), src: image.uri, onClick: onClickHandler, ...a11yProps, style: { ...props.style, cursor: onClickHandler ? "pointer" : void 0, maxHeight: useMaxSize ? props.height : void 0, maxWidth: useMaxSize ? props.width : void 0, height: useMaxSize ? void 0 : props.height, width: useMaxSize ? void 0 : props.width } }), enlarged ? reactDomExports.createPortal(jsxRuntimeExports.jsx(ImageZoom, { src: image.uri, alt: props.alternativeText?.value ?? void 0, onClick: () => setEnlarged(false) }), document.body) : null] });
};
function isInPx(value) {
  return value.endsWith("px");
}
const ImageZoom = ({ src, alt, onClick }) => (reactExports.useEffect(() => {
  const pageYOffset = window.pageYOffset;
  return document.getElementById("content").style.display = "none", () => {
    document.getElementById("content").style.display = "", setTimeout(() => window.scrollTo(0, pageYOffset), 0);
  };
}, []), jsxRuntimeExports.jsx("div", { className: "mx-imagezoom", onClick, role: "button", tabIndex: 0, children: jsxRuntimeExports.jsx("div", { className: "mx-imagezoom-wrapper", children: jsxRuntimeExports.jsx("img", { className: "mx-imagezoom-image", src, alt }) }) }));

const React$1 = { createElement: reactExports.createElement };
const { $ScrollContainer, $ConditionalVisibilityWrapper, $Image, $ActionButton, $MenuBar, $Label, $Placeholder: $Placeholder$1 } = asPluginWidgets({ ScrollContainer, ConditionalVisibilityWrapper, Image, ActionButton, MenuBar, Label, Placeholder });
const region$Main$1 = [
  /* @__PURE__ */ React$1.createElement(
    $ScrollContainer,
    {
      key: "l.Encryption.EncryptionDesktopLayout.layoutContainer",
      $widgetId: "l.Encryption.EncryptionDesktopLayout.layoutContainer",
      class: "mx-name-layoutContainer",
      style: void 0,
      scrollPerRegion: true,
      layoutMode: "headline",
      top: {
        "enabled": true,
        "content": [
          /* @__PURE__ */ React$1.createElement(
            $ScrollContainer,
            {
              key: "l.Encryption.EncryptionDesktopLayout.layoutContainer2",
              $widgetId: "l.Encryption.EncryptionDesktopLayout.layoutContainer2",
              class: "mx-name-layoutContainer2",
              style: void 0,
              scrollPerRegion: false,
              layoutMode: "headline",
              top: {
                "enabled": false
              },
              bottom: {
                "enabled": false
              },
              left: {
                "enabled": true,
                "content": [
                  /* @__PURE__ */ React$1.createElement(
                    $ConditionalVisibilityWrapper,
                    {
                      key: "l.Encryption.EncryptionDesktopLayout.staticImageViewer$visibility",
                      $widgetId: "l.Encryption.EncryptionDesktopLayout.staticImageViewer$visibility",
                      visible: ExpressionProperty({
                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                      }),
                      contents: [
                        /* @__PURE__ */ React$1.createElement(
                          $Image,
                          {
                            key: "l.Encryption.EncryptionDesktopLayout.staticImageViewer",
                            $widgetId: "l.Encryption.EncryptionDesktopLayout.staticImageViewer",
                            class: "mx-name-staticImageViewer",
                            style: void 0,
                            tabIndex: void 0,
                            alternativeText: selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                              })
                            ]),
                            height: void 0,
                            width: void 0,
                            responsive: false,
                            source: WebStaticImageProperty({
                              "image": { "uri": "img/Encryption$Images$logo.png" }
                            }),
                            onClick: ActionProperty({
                              "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "6gRpGH0sVVeoAbKoIjyfJA", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false }
                            })
                          }
                        )
                      ]
                    }
                  )
                ],
                "sizeMode": "pixels",
                "sizeValue": 180,
                "class": "",
                "toggleMode": "none",
                "initiallyOpen": false
              },
              right: {
                "enabled": true,
                "content": [
                  /* @__PURE__ */ React$1.createElement(
                    $ConditionalVisibilityWrapper,
                    {
                      key: "l.Encryption.EncryptionDesktopLayout.signOutButton$visibility",
                      $widgetId: "l.Encryption.EncryptionDesktopLayout.signOutButton$visibility",
                      visible: ExpressionProperty({
                        "expression": { "expr": { "type": "function", "name": "_isNamedUser", "parameters": [] }, "args": {} }
                      }),
                      contents: [
                        /* @__PURE__ */ React$1.createElement(
                          $ActionButton,
                          {
                            key: "l.Encryption.EncryptionDesktopLayout.signOutButton",
                            $widgetId: "l.Encryption.EncryptionDesktopLayout.signOutButton",
                            buttonId: "l.Encryption.EncryptionDesktopLayout.signOutButton",
                            class: "mx-name-signOutButton",
                            style: void 0,
                            tabIndex: -1,
                            renderType: "button",
                            role: void 0,
                            buttonClass: "btn-default",
                            caption: selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Sign out" }, "args": {} }
                              })
                            ]),
                            tooltip: TextProperty({
                              "value": selectTranslation([
                                ""
                              ])
                            }),
                            icon: void 0,
                            action: ActionProperty({
                              "action": { "type": "signOut", "argMap": {}, "config": { "namedUser": true }, "disabledDuringExecution": true },
                              "abortOnServerValidation": true
                            })
                          }
                        )
                      ]
                    }
                  )
                ],
                "sizeMode": "pixels",
                "sizeValue": 180,
                "class": "",
                "style": {
                  "textAlign": "right"
                },
                "toggleMode": "none",
                "initiallyOpen": false
              },
              center: {
                "content": [
                  /* @__PURE__ */ React$1.createElement(
                    $MenuBar,
                    {
                      key: "l.Encryption.EncryptionDesktopLayout.menuBar",
                      $widgetId: "l.Encryption.EncryptionDesktopLayout.menuBar",
                      class: "mx-name-menuBar",
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
                "class": ""
              }
            }
          )
        ],
        "sizeMode": "auto",
        "class": "",
        "style": {
          "padding": "10px"
        }
      },
      bottom: {
        "enabled": true,
        "content": [
          /* @__PURE__ */ React$1.createElement(
            $Label,
            {
              key: "l.Encryption.EncryptionDesktopLayout.label",
              $widgetId: "l.Encryption.EncryptionDesktopLayout.label",
              class: "mx-name-label",
              style: void 0,
              id: DerivedUniqueIdProperty({
                "widgetId": "l.Encryption.EncryptionDesktopLayout.label"
              }),
              caption: TextProperty({
                "value": selectTranslation([
                  "Powered by Mendix\u2122"
                ])
              })
            }
          )
        ],
        "sizeMode": "auto",
        "class": ""
      },
      left: {
        "enabled": false
      },
      right: {
        "enabled": false
      },
      center: {
        "content": [
          /* @__PURE__ */ React$1.createElement(
            $Placeholder$1,
            {
              key: "l.Encryption.EncryptionDesktopLayout.Main",
              $widgetId: "l.Encryption.EncryptionDesktopLayout.Main",
              content: PlaceholderProperty({
                "id": "Encryption.EncryptionDesktopLayout.Main"
              })
            }
          )
        ],
        "class": ""
      }
    }
  )
];
const content$1 = {
  "Main": region$Main$1
};

const React = { createElement: reactExports.createElement };
const { $Placeholder } = asPluginWidgets({ Placeholder });
const region$Main = [
  /* @__PURE__ */ React.createElement(
    $Placeholder,
    {
      key: "l.Encryption.ResponsiveLayout_Certificate.Main",
      $widgetId: "l.Encryption.ResponsiveLayout_Certificate.Main",
      content: PlaceholderProperty({
        "id": "Encryption.ResponsiveLayout_Certificate.Main"
      })
    }
  )
];
const content = {
  ...content$1,
  "Encryption.EncryptionDesktopLayout.Main": region$Main
};

export { content };
