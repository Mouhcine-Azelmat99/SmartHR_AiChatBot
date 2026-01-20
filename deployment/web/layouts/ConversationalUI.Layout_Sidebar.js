import { createElement } from "react";
const React = { createElement };

import { PlaceholderProperty } from "mendix/PlaceholderProperty";

import { Placeholder } from "mendix/widgets/web/Placeholder";
import { addEnumerations, asPluginWidgets, t } from "mendix";


const { $Placeholder } = asPluginWidgets({ Placeholder });

const region$Main = [
    <$Placeholder key="l.ConversationalUI.Layout_Sidebar.Main"
        $widgetId="l.ConversationalUI.Layout_Sidebar.Main"
        content={PlaceholderProperty({
            "id": "ConversationalUI.Layout_Sidebar.Main"
        })} />
];

export const content = {
    "Main": region$Main,
};
