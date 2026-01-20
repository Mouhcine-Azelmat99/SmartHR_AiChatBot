import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { PlaceholderProperty } from "mendix/PlaceholderProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebIconProperty } from "mendix/WebIconProperty";
import { WebStaticImageProperty } from "mendix/WebStaticImageProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Image } from "mendix/widgets/web/Image";
import { Label } from "mendix/widgets/web/Label";
import { MenuBar } from "mendix/widgets/web/MenuBar";
import { Placeholder } from "mendix/widgets/web/Placeholder";
import { ScrollContainer } from "mendix/widgets/web/ScrollContainer";
import { addEnumerations, asPluginWidgets, t } from "mendix";


const { $ScrollContainer, $ConditionalVisibilityWrapper, $Image, $ActionButton, $MenuBar, $Label, $Placeholder } = asPluginWidgets({ ScrollContainer, ConditionalVisibilityWrapper, Image, ActionButton, MenuBar, Label, Placeholder });

const region$Main = [
    <$ScrollContainer key="l.Encryption.EncryptionDesktopLayout.layoutContainer"
        $widgetId="l.Encryption.EncryptionDesktopLayout.layoutContainer"
        class={"mx-name-layoutContainer"}
        style={undefined}
        scrollPerRegion={true}
        layoutMode={"headline"}
        top={{
            "enabled": true,
            "content": [
                <$ScrollContainer key="l.Encryption.EncryptionDesktopLayout.layoutContainer2"
                    $widgetId="l.Encryption.EncryptionDesktopLayout.layoutContainer2"
                    class={"mx-name-layoutContainer2"}
                    style={undefined}
                    scrollPerRegion={false}
                    layoutMode={"headline"}
                    top={{
                        "enabled": false
                    }}
                    bottom={{
                        "enabled": false
                    }}
                    left={{
                        "enabled": true,
                        "content": [
                            <$ConditionalVisibilityWrapper key="l.Encryption.EncryptionDesktopLayout.staticImageViewer$visibility"
                                $widgetId="l.Encryption.EncryptionDesktopLayout.staticImageViewer$visibility"
                                visible={ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                })}
                                contents={[
                                    <$Image key="l.Encryption.EncryptionDesktopLayout.staticImageViewer"
                                        $widgetId="l.Encryption.EncryptionDesktopLayout.staticImageViewer"
                                        class={"mx-name-staticImageViewer"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        alternativeText={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                        ])}
                                        height={undefined}
                                        width={undefined}
                                        responsive={false}
                                        source={WebStaticImageProperty({
                                            "image": { "uri": "img/Encryption$Images$logo.png" }
                                        })}
                                        onClick={ActionProperty({
                                            "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "6gRpGH0sVVeoAbKoIjyfJA", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": false }
                                        })} />
                                ]} />
                        ],
                        "sizeMode": "pixels",
                        "sizeValue": 180,
                        "class": "",
                        "toggleMode": "none",
                        "initiallyOpen": false
                    }}
                    right={{
                        "enabled": true,
                        "content": [
                            <$ConditionalVisibilityWrapper key="l.Encryption.EncryptionDesktopLayout.signOutButton$visibility"
                                $widgetId="l.Encryption.EncryptionDesktopLayout.signOutButton$visibility"
                                visible={ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "_isNamedUser", "parameters": [] }, "args": {} }
                                })}
                                contents={[
                                    <$ActionButton key="l.Encryption.EncryptionDesktopLayout.signOutButton"
                                        $widgetId="l.Encryption.EncryptionDesktopLayout.signOutButton"
                                        buttonId={"l.Encryption.EncryptionDesktopLayout.signOutButton"}
                                        class={"mx-name-signOutButton"}
                                        style={undefined}
                                        tabIndex={-1}
                                        renderType={"button"}
                                        role={undefined}
                                        buttonClass={"btn-default"}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Sign out" }, "args": {} }
                                            })
                                        ])}
                                        tooltip={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        icon={undefined}
                                        action={ActionProperty({
                                            "action": { "type": "signOut", "argMap": {}, "config": { "namedUser": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ],
                        "sizeMode": "pixels",
                        "sizeValue": 180,
                        "class": "",
                        "style": {
                            "textAlign": "right"
                        },
                        "toggleMode": "none",
                        "initiallyOpen": false
                    }}
                    center={{
                        "content": [
                            <$MenuBar key="l.Encryption.EncryptionDesktopLayout.menuBar"
                                $widgetId="l.Encryption.EncryptionDesktopLayout.menuBar"
                                class={"mx-name-menuBar"}
                                style={undefined}
                                menu={[
                                    {
                                        "caption": TextProperty({
                                            "value": t([
                                                "Chat"
                                            ])
                                        }),
                                        "icon": WebIconProperty({
                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-message-bubble" }
                                        }),
                                        "action": ActionProperty({
                                            "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "dNdXYulmr16GLrk/mFpECw", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                            "skipClientValidation": true
                                        })
                                    },
                                    {
                                        "caption": TextProperty({
                                            "value": t([
                                                "Instructions"
                                            ])
                                        }),
                                        "icon": WebIconProperty({
                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-browser-page-text" }
                                        }),
                                        "action": ActionProperty({
                                            "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstAIBot/Instruction_Overview.page.xml", "location": "content", "allowedRoles": [ "User" ] }, "disabledDuringExecution": false },
                                            "skipClientValidation": true
                                        })
                                    },
                                    {
                                        "caption": TextProperty({
                                            "value": t([
                                                "Administration"
                                            ])
                                        }),
                                        "icon": WebIconProperty({
                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-cog" }
                                        }),
                                        "items": [
                                            {
                                                "caption": TextProperty({
                                                    "value": t([
                                                        "Bot Configuration"
                                                    ])
                                                }),
                                                "action": ActionProperty({
                                                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstAIBot/BotConfig_Overview.page.xml", "location": "content", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                                    "skipClientValidation": true
                                                })
                                            },
                                            {
                                                "caption": TextProperty({
                                                    "value": t([
                                                        "Mendix Cloud GenAI Configuration"
                                                    ])
                                                }),
                                                "action": ActionProperty({
                                                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstAIBot/MxCloudGenAIConfiguration_Overview.page.xml", "location": "content", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                                    "skipClientValidation": true
                                                })
                                            },
                                            {
                                                "caption": TextProperty({
                                                    "value": t([
                                                        "Amazon Bedrock Configuration"
                                                    ])
                                                }),
                                                "action": ActionProperty({
                                                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstAIBot/AmazonBedrockConfiguration_Overview.page.xml", "location": "content", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                                    "skipClientValidation": true
                                                })
                                            },
                                            {
                                                "caption": TextProperty({
                                                    "value": t([
                                                        "OpenAI Configuration"
                                                    ])
                                                }),
                                                "action": ActionProperty({
                                                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstAIBot/OpenAIConfiguration_Overview.page.xml", "location": "content", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                                    "skipClientValidation": true
                                                })
                                            },
                                            {
                                                "caption": TextProperty({
                                                    "value": t([
                                                        "Mistral Configuration"
                                                    ])
                                                }),
                                                "action": ActionProperty({
                                                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstAIBot/MistralConfiguration_Overview.page.xml", "location": "content", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                                    "skipClientValidation": true
                                                })
                                            },
                                            {
                                                "caption": TextProperty({
                                                    "value": t([
                                                        "User Management"
                                                    ])
                                                }),
                                                "action": ActionProperty({
                                                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "Administration/Account_Overview.page.xml", "location": "content", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                                    "skipClientValidation": true
                                                })
                                            },
                                            {
                                                "caption": TextProperty({
                                                    "value": t([
                                                        "Instructions"
                                                    ])
                                                }),
                                                "action": ActionProperty({
                                                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstAIBot/Instruction_Overview_Admin.page.xml", "location": "content", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                                    "skipClientValidation": true
                                                })
                                            },
                                            {
                                                "caption": TextProperty({
                                                    "value": t([
                                                        "Initial User Prompts"
                                                    ])
                                                }),
                                                "action": ActionProperty({
                                                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstAIBot/InitialUserPrompt_Overview_Admin.page.xml", "location": "content", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                                    "skipClientValidation": true
                                                })
                                            },
                                            {
                                                "caption": TextProperty({
                                                    "value": t([
                                                        "Traces"
                                                    ])
                                                }),
                                                "action": ActionProperty({
                                                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "ConversationalUI/Trace_Overview.page.xml", "location": "content", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                                    "skipClientValidation": true
                                                })
                                            },
                                            {
                                                "caption": TextProperty({
                                                    "value": t([
                                                        "Token consumption monitor"
                                                    ])
                                                }),
                                                "action": ActionProperty({
                                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "CuToddsomVurVjaMkOeiPw", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                    "skipClientValidation": true
                                                })
                                            }
                                        ]
                                    },
                                    {
                                        "caption": TextProperty({
                                            "value": t([
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
                                ]} />
                        ],
                        "class": ""
                    }} />
            ],
            "sizeMode": "auto",
            "class": "",
            "style": {
                "padding": "10px"
            }
        }}
        bottom={{
            "enabled": true,
            "content": [
                <$Label key="l.Encryption.EncryptionDesktopLayout.label"
                    $widgetId="l.Encryption.EncryptionDesktopLayout.label"
                    class={"mx-name-label"}
                    style={undefined}
                    id={DerivedUniqueIdProperty({
                        "widgetId": "l.Encryption.EncryptionDesktopLayout.label"
                    })}
                    caption={TextProperty({
                        "value": t([
                            "Powered by Mendix™"
                        ])
                    })} />
            ],
            "sizeMode": "auto",
            "class": ""
        }}
        left={{
            "enabled": false
        }}
        right={{
            "enabled": false
        }}
        center={{
            "content": [
                <$Placeholder key="l.Encryption.EncryptionDesktopLayout.Main"
                    $widgetId="l.Encryption.EncryptionDesktopLayout.Main"
                    content={PlaceholderProperty({
                        "id": "Encryption.EncryptionDesktopLayout.Main"
                    })} />
            ],
            "class": ""
        }} />
];

export const content = {
    "Main": region$Main,
};
