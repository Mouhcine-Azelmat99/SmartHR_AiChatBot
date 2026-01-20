import { createElement } from "react";
const React = { createElement };

import { PlaceholderProperty } from "mendix/PlaceholderProperty";

import { Placeholder } from "mendix/widgets/web/Placeholder";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "./Atlas_Core.Atlas_TopBar.js";

const { $Placeholder } = asPluginWidgets({ Placeholder });

const region$Main = [
    <$Placeholder key="l.ConversationalUI.Layout_MasterBase.Main"
        $widgetId="l.ConversationalUI.Layout_MasterBase.Main"
        content={PlaceholderProperty({
            "id": "ConversationalUI.Layout_MasterBase.Main"
        })} />
];

export const content = { ...parentContent,
    "Atlas_Core.Atlas_TopBar.Main": region$Main,
};
