import { LogManager, asProperty, toFriendlyId, getSubscribedObjectState$, getObjectsByPath$, fromConstant$, available, onlineData, unavailable } from './index-B-pQLZz2.js';
import { handleDataSourceExecutionError } from './BMuJrVqQ-C_cqhczO.js';
import { getClientPagedList$ } from './CxMFexew-C1GWnP8G.js';
import './UeptbR6O-9Cnv5Sxb.js';
import './uEIG9e6s-CoI72Q4o.js';
import './CkBXggmw-CEa7-Kz-.js';

const logger = LogManager.get().getLogger(), AssociationObjectListProperty = asProperty((config, store, widgetId) => {
  const friendlyId = toFriendlyId(widgetId), context$ = getSubscribedObjectState$(store, config.scope), clientSideResult$ = config.directPath ? getObjectsByPath$(context$, config.directPath, store, true) : fromConstant$(available("cacheMiss"));
  return getClientPagedList$(config, store, widgetId, context$, async function(context) {
    const clientSideResult = clientSideResult$.dependOn();
    if ("available" === clientSideResult.status && "cacheMiss" !== clientSideResult.value)
      return logFetchEnd({ mxObjects: clientSideResult.value, extra: [] }), available({ main: clientSideResult.value, extra: [] });
    let result;
    contextGuid = context.getGuid(), logger.debug(`Fetching data with context '${contextGuid}' and operationId '${config.operationId}' for widget ${friendlyId}`);
    var contextGuid;
    try {
      result = await onlineData().retrieveByPath(context.getGuid(), config.operationId);
    } catch (e) {
      return handleDataSourceExecutionError(widgetId, e, "association"), unavailable();
    }
    return logFetchEnd(result), available({ main: result.mxObjects, extra: result.extra });
  });
  function logFetchEnd({ mxObjects, extra }) {
    logger.debug(`Received ${mxObjects.length} objects and ${extra.length} objects over schema for widget ${friendlyId}`, "object ids:", mxObjects.map((o) => o.getGuid()), "extra ids:", extra.map((o) => o.getGuid()));
  }
});

export { AssociationObjectListProperty };
