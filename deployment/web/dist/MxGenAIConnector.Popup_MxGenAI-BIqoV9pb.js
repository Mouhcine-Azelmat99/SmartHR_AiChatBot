import { reactExports, asPluginWidgets, PlaceholderProperty } from './index-B-pQLZz2.js';
import { Placeholder } from './Placeholder-C1uYYDJ5.js';
import { ScrollContainer } from './ScrollContainer-B-pXvHDA.js';

const React = { createElement: reactExports.createElement };
const { $ScrollContainer, $Placeholder } = asPluginWidgets({ ScrollContainer, Placeholder });
const region$Main = [
  /* @__PURE__ */ React.createElement(
    $ScrollContainer,
    {
      key: "l.MxGenAIConnector.Popup_MxGenAI.scrollContainer1",
      $widgetId: "l.MxGenAIConnector.Popup_MxGenAI.scrollContainer1",
      class: "mx-name-scrollContainer1",
      style: void 0,
      scrollPerRegion: true,
      layoutMode: "headline",
      top: {
        "enabled": false
      },
      bottom: {
        "enabled": false
      },
      left: {
        "enabled": false
      },
      right: {
        "enabled": false
      },
      center: {
        "content": [
          /* @__PURE__ */ React.createElement(
            $Placeholder,
            {
              key: "l.MxGenAIConnector.Popup_MxGenAI.Main",
              $widgetId: "l.MxGenAIConnector.Popup_MxGenAI.Main",
              content: PlaceholderProperty({
                "id": "MxGenAIConnector.Popup_MxGenAI.Main"
              })
            }
          )
        ],
        "class": ""
      }
    }
  )
];
const content = {
  "Main": region$Main
};

export { content };
