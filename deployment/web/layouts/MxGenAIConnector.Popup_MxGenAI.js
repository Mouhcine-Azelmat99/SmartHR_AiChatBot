import { createElement } from "react";
const React = { createElement };

import { PlaceholderProperty } from "mendix/PlaceholderProperty";

import { Placeholder } from "mendix/widgets/web/Placeholder";
import { ScrollContainer } from "mendix/widgets/web/ScrollContainer";
import { addEnumerations, asPluginWidgets, t } from "mendix";


const { $ScrollContainer, $Placeholder } = asPluginWidgets({ ScrollContainer, Placeholder });

const region$Main = [
    <$ScrollContainer key="l.MxGenAIConnector.Popup_MxGenAI.scrollContainer1"
        $widgetId="l.MxGenAIConnector.Popup_MxGenAI.scrollContainer1"
        class={"mx-name-scrollContainer1"}
        style={undefined}
        scrollPerRegion={true}
        layoutMode={"headline"}
        top={{
            "enabled": false
        }}
        bottom={{
            "enabled": false
        }}
        left={{
            "enabled": false
        }}
        right={{
            "enabled": false
        }}
        center={{
            "content": [
                <$Placeholder key="l.MxGenAIConnector.Popup_MxGenAI.Main"
                    $widgetId="l.MxGenAIConnector.Popup_MxGenAI.Main"
                    content={PlaceholderProperty({
                        "id": "MxGenAIConnector.Popup_MxGenAI.Main"
                    })} />
            ],
            "class": ""
        }} />
];

export const content = {
    "Main": region$Main,
};
