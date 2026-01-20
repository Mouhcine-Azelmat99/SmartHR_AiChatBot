import { asProperty, asDynamicValue$, getFormExpressionResultFromStore$, toFriendlyId, fromComputation$ } from './index-B-pQLZz2.js';

const DynamicClassProperty = asProperty((config, store, widgetId) => {
  const dynamicClasses$ = asDynamicValue$(getFormExpressionResultFromStore$(`Dynamic classes of ${toFriendlyId(widgetId)}`, config.dynamicClasses, store));
  return fromComputation$(`Dynamic class property of ${widgetId}`, () => {
    const dynamicClasses = dynamicClasses$.dependOn().value;
    return `${config.staticClasses} ${dynamicClasses ?? ""}`.trim();
  });
});

export { DynamicClassProperty };
