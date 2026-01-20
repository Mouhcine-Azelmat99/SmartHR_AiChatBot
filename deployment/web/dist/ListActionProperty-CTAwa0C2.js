import { asProperty, fromConstant$ } from './index-B-pQLZz2.js';
import { listItemProperty } from './CTcC6PjV-CLE6jBCq.js';
import { computeAction } from './ActionButton-C47bDiwH.js';
import './uEIG9e6s-CoI72Q4o.js';
import './TextProperty-ukMsrrP8.js';

const ListActionProperty = asProperty((config, store, widgetId, propertyPath) => listItemProperty((object) => {
  const predefinedArguments = fromConstant$({ [widgetId]: { object: { object } } });
  return computeAction(config, store, widgetId, predefinedArguments, true);
}, `List action "${widgetId}/${propertyPath}"`, config.dataSourceId));

export { ListActionProperty };
