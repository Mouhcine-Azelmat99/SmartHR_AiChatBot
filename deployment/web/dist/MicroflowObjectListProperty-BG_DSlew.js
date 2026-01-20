import { LogManager, asProperty, pageScope, readUntracked, getRuntimeArguments$, toFriendlyId, onlineData, unavailable, available } from './index-B-pQLZz2.js';
import { handleDataSourceExecutionError } from './BMuJrVqQ-C_cqhczO.js';
import { getClientPagedList$ } from './CxMFexew-C1GWnP8G.js';
import './UeptbR6O-9Cnv5Sxb.js';
import './uEIG9e6s-CoI72Q4o.js';
import './CkBXggmw-CEa7-Kz-.js';

const logger = LogManager.get().getLogger(), MicroflowObjectListProperty = asProperty((config, store, widgetId) => {
  const [form$] = store.useSlot(pageScope, "form"), form = readUntracked(form$)?.[0];
  return getClientPagedList$(config, store, widgetId, getRuntimeArguments$(config.argMap, store, widgetId, config.fetchOnlyWithAllParams), async function(args) {
    let result;
    !function(args2) {
      logger.debug(`Fetching data using microflow '${config.operationId}' for widget ${toFriendlyId(widgetId)}`, "parameter mapping:", args2);
    }(args);
    try {
      result = await onlineData().retrieveByMicroflow(config.operationId, args, form);
    } catch (e) {
      return handleDataSourceExecutionError(widgetId, e, "microflow"), unavailable();
    }
    return function({ mxObjects, extra }) {
      logger.debug(`Received ${mxObjects.length} objects and ${extra.length} objects over schema for widget ${toFriendlyId(widgetId)}`, "object ids:", mxObjects.map((o) => o.getGuid()), "extra ids:", extra.map((o) => o.getGuid()));
    }(result), available({ main: result.mxObjects, extra: result.extra });
  });
});

export { MicroflowObjectListProperty };
