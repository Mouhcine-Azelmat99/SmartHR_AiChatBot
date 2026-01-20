import { asProperty, fromComputation$, readUntracked, newId } from './index-B-pQLZz2.js';
import { runActionInComputed } from './uEIG9e6s-CoI72Q4o.js';

const DerivedUniqueIdProperty = asProperty((config, store) => {
  const [uniqueId$, setUniqueId] = store.useSlot(config.widgetId, "uniqueId");
  return fromComputation$(`Derived unique id for ${config.widgetId}`, () => {
    const existingId = readUntracked(uniqueId$);
    if (existingId)
      return existingId;
    const value = newId(config.widgetId);
    return runActionInComputed(() => setUniqueId(value)), value;
  });
});

export { DerivedUniqueIdProperty };
