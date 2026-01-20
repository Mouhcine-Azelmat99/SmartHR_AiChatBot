import { reactExports, asPluginWidgets, PlaceholderProperty } from './index-B-pQLZz2.js';
import { Placeholder } from './Placeholder-C1uYYDJ5.js';
import { content as content$1 } from './Atlas_Core.Atlas_TopBar-Cl1SnfwM.js';

const React = { createElement: reactExports.createElement };
const { $Placeholder } = asPluginWidgets({ Placeholder });
const region$Main = [
  /* @__PURE__ */ React.createElement(
    $Placeholder,
    {
      key: "l.ConversationalUI.Layout_MasterBase.Main",
      $widgetId: "l.ConversationalUI.Layout_MasterBase.Main",
      content: PlaceholderProperty({
        "id": "ConversationalUI.Layout_MasterBase.Main"
      })
    }
  )
];
const content = {
  ...content$1,
  "Atlas_Core.Atlas_TopBar.Main": region$Main
};

export { content };
