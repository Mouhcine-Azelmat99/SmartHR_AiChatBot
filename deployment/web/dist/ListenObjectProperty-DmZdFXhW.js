import { LogManager, asProperty, toFriendlyId, fromComputation$, available, unavailable, getByGuid, getData, onlineData, ensure } from './index-B-pQLZz2.js';
import { fromObjectProperty$ } from './CkBXggmw-CEa7-Kz-.js';

const logger = LogManager.get().getLogger(), ListenObjectProperty = asProperty((config, store, widgetId) => {
  const friendlyId = toFriendlyId(widgetId), [selection$] = store.useSlot(config.listenTo, "selection"), guid$ = fromComputation$(`Selected object for widget ${friendlyId}`, () => {
    const selection = selection$.dependOn(), guid = Array.isArray(selection) ? selection[selection.length - 1] : selection;
    return guid ? available(guid) : unavailable();
  });
  return fromObjectProperty$(config, store, widgetId, guid$, (guid) => {
    if (mx.isOffline())
      return logFetchStart(guid), getByGuid(guid).then((mxObject) => (logFetchEnd(mxObject, []), mxObject ? available(mxObject) : unavailable()));
    const cachedObject = getData().getCachedObject(guid);
    return cachedObject ? (function(guid2) {
      logger.debug(`Using selected object '${guid2}' for widget ${friendlyId}`);
    }(guid), cachedObject.isUnavailable() ? unavailable() : available(cachedObject)) : (logFetchStart(guid), onlineData().retrieveByPath(guid, ensure(config.operationId)).then(({ mxObjects, extra }) => {
      const mxObject = mxObjects.length ? mxObjects[0] : void 0;
      return logFetchEnd(mxObject, extra), mxObject ? available(mxObject) : unavailable();
    }));
  });
  function logFetchStart(guid) {
    logger.debug(config.operationId ? `Fetching selected object '${guid}' with operationId '${config.operationId}' for widget ${friendlyId}` : `Fetching selected object '${guid}' for widget ${friendlyId}`);
  }
  function logFetchEnd(mxObject, extra) {
    const guid = mxObject?.getGuid();
    logger.debug(guid ? `Received selected object '${guid}' and ${extra.length} objects over schema for widget ${friendlyId}` : `Received no selected object for widget ${friendlyId}`, "extra ids:", extra.map((o) => o.getGuid()));
  }
});

export { ListenObjectProperty };
