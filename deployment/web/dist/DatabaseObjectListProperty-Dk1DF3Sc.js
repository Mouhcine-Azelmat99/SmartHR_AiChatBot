import { fromRequest$, available, readUntracked, equalFilterCondition, scheduleSideEffect, withObjectKeeping$, fromComputation$, toObjectItem, LogManager, asProperty, tuple, localVariableRuntimeValue$, getSubscribedObjectState$, getSubscribedAttribute$, mapValues, loading, unavailable, toQueryFilter, getOrElseL, ensure, fromConstant$, toFriendlyId, offlineData, localVariableRunTimeArgument$, mapL, flatMapL, dependOnSubscription, expressionVariableToRuntimeArgument, toRuntimeArgument, onlineData } from './index-B-pQLZz2.js';
import { objectListTrigger, equalSortInstructions, withSetItemsStoreSideEffect$, asReloadableListValue$, withFirstLoadDoneSharing$, convertToSortInstructions, convertToSortSpecs, convertFilterExpressionToQueryFilter, convertFilterConditionToXPath } from './UeptbR6O-9Cnv5Sxb.js';
import './uEIG9e6s-CoI72Q4o.js';
import './CkBXggmw-CEa7-Kz-.js';

function getServerPagedList$(config, initialSort, store, widgetId, parameters$, fetchData) {
  const { fetchTrigger$, retrieveParameters$, silentlyResetOffset, needTotalCount$, immediateRetrieveParametersSetters, delayedRetrieveParametersSetters, loadedCallback } = objectListTrigger(config, initialSort, store, widgetId, parameters$), listChunk$ = fromRequest$(`Load data of ${widgetId}`, () => {
    const trigger = fetchTrigger$.dependOn();
    if ("available" !== trigger.status)
      return trigger;
    const retrieveParameters = retrieveParameters$.dependOn();
    if (trigger.value.empty)
      return available({ offset: retrieveParameters.offset, limit: 0, sortOrder: retrieveParameters.sortOrder, filter: retrieveParameters.filter, objects: [], hasMoreItems: true, parameters: void 0, triggerId: -1, requestedTotalCount: false });
    const { parameters, id: triggerId } = trigger.value, needTotalCount = needTotalCount$.dependOn(), currentChunk = readUntracked(fixedListChunk$), { sliceToKeep, pageToFetch, loadAtEnd } = function(currentList, nextQuery) {
      if ("available" !== currentList.status)
        return {};
      if (!equalSortInstructions(currentList.value.sortOrder, nextQuery.sortOrder))
        return {};
      if (!equalFilterCondition(currentList.value.filter, nextQuery.filter))
        return {};
      const [currentStart, currentEnd] = [currentList.value.offset, currentList.value.offset + currentList.value.limit], [newStart, newEnd] = [nextQuery.offset, nextQuery.offset + nextQuery.limit], [keepStart, keepEnd] = [Math.max(currentStart, newStart), Math.min(currentEnd, newEnd)];
      if (keepStart >= keepEnd)
        return {};
      if (newStart < keepStart && newEnd > keepEnd)
        return {};
      const loadAtEnd2 = newEnd > currentEnd, pageToFetch2 = { offset: loadAtEnd2 ? keepEnd : newStart, limit: newEnd - newStart - (keepEnd - keepStart) };
      return { sliceToKeep: [keepStart - currentStart, keepEnd - currentStart], loadAtEnd: loadAtEnd2, pageToFetch: pageToFetch2.limit > 0 ? pageToFetch2 : void 0 };
    }(currentChunk, retrieveParameters);
    if ("available" !== currentChunk.status || currentChunk.value.triggerId !== triggerId || needTotalCount && !currentChunk.value.requestedTotalCount || void 0 === sliceToKeep)
      return fetchData(parameters, retrieveParameters, needTotalCount).then(({ mxObjects, totalCount, hasMoreItems }) => available({ ...retrieveParameters, parameters, triggerId, objects: mxObjects, totalCount, hasMoreItems, requestedTotalCount: needTotalCount }));
    if (void 0 === pageToFetch)
      return available({ ...currentChunk.value, ...retrieveParameters, objects: currentChunk.value.objects.slice(...sliceToKeep), hasMoreItems: !!(sliceToKeep[1] && sliceToKeep[1] < currentChunk.value.objects.length) || currentChunk.value.hasMoreItems, totalCount: needTotalCount ? currentChunk.value.totalCount : void 0, requestedTotalCount: needTotalCount });
    {
      const reusedObjects = currentChunk.value.objects.slice(...sliceToKeep);
      return [currentChunk, fetchData(parameters, { ...pageToFetch, sortOrder: retrieveParameters.sortOrder, filter: retrieveParameters.filter }, needTotalCount).then(({ mxObjects, hasMoreItems, totalCount }) => available({ ...currentChunk.value, ...retrieveParameters, objects: loadAtEnd ? reusedObjects.concat(mxObjects) : mxObjects.concat(reusedObjects), hasMoreItems: loadAtEnd ? hasMoreItems : currentChunk.value.hasMoreItems, totalCount, requestedTotalCount: needTotalCount }))];
    }
  }), fixedListChunk$ = fromRequest$(`Retry to load data of ${widgetId}`, () => {
    const loadedChunk = listChunk$.dependOn();
    if ("available" !== loadedChunk.status)
      return loadedChunk;
    if (loadedChunk.value.objects.length > 0 || 0 === loadedChunk.value.offset)
      return loadedChunk;
    if (scheduleSideEffect(silentlyResetOffset), 0 === loadedChunk.value.limit)
      return available({ ...loadedChunk.value, offset: 0 });
    const { limit, sortOrder, filter } = readUntracked(retrieveParameters$), needTotalCount = readUntracked(needTotalCount$);
    return fetchData(loadedChunk.value.parameters, { limit, offset: 0, sortOrder, filter }, needTotalCount).then(({ mxObjects, totalCount, hasMoreItems }) => available({ ...loadedChunk.value, limit, sortOrder, filter, offset: 0, objects: mxObjects, totalCount, hasMoreItems }));
  }), subscribedListChunk$ = withObjectKeeping$(widgetId, store, fixedListChunk$, (listChunk) => listChunk.objects), listValue$ = fromComputation$(`Prepare data of ${widgetId}`, () => {
    const listChunk = subscribedListChunk$.dependOn();
    let result;
    if ("available" === listChunk.status) {
      const { objects, totalCount, offset, limit, hasMoreItems, sortOrder, filter } = listChunk.value;
      result = { status: "available", offset, limit, sortOrder, filter, items: objects.map((obj) => toObjectItem(obj, config.dataSourceId)), hasMoreItems, totalCount, ...delayedRetrieveParametersSetters };
    } else
      result = { status: listChunk.status, ...readUntracked(retrieveParameters$), ...immediateRetrieveParametersSetters };
    return "loading" !== result.status && store.addUpdateCallback(loadedCallback), result;
  }), storedItemsListValue$ = withSetItemsStoreSideEffect$(widgetId, config.dataSourceId, listValue$, store);
  return asReloadableListValue$(withFirstLoadDoneSharing$(storedItemsListValue$, store, widgetId));
}

const logger$1 = LogManager.get().getLogger(), OfflineDatabaseObjectListProperty = asProperty((config, store, widgetId, propertyPath) => {
  const queryArguments$ = Object.fromEntries(Object.entries(config.arguments ?? {}).map(([runtimeName, [source, attribute, isLocalVariable]]) => tuple(runtimeName, isLocalVariable ? localVariableRuntimeValue$(runtimeName, { widget: source, source: "localvariable" }, store) : void 0 === attribute ? getSubscribedObjectState$(store, source) : getSubscribedAttribute$(store, source, attribute)))), constraints = config.constraints, fetchParameters$ = constraints ? fromComputation$(`queryFilter for ${widgetId}/${propertyPath}`, () => {
    const queryArguments = mapValues(queryArguments$, (value$) => value$.dependOn());
    return Object.values(queryArguments).some((value) => "loading" === value.status) ? loading() : Object.values(queryArguments).some((value) => "unavailable" === value.status) && config.fetchOnlyWithAllParams ? unavailable() : available(toQueryFilter(constraints, (name, attribute) => getOrElseL(ensure(queryArguments[attribute ? `${name}$${attribute}` : name]), void 0)));
  }) : fromConstant$(available(void 0));
  return getServerPagedList$(config, config.sort ? convertToSortInstructions(config.sort, config.dataSourceId) : [], store, widgetId, fetchParameters$, async function(parameter, { offset, limit, sortOrder, filter }, needTotalCount) {
    const options = { offset, ...limit !== Number.POSITIVE_INFINITY ? { amount: limit } : {}, sort: convertToSortSpecs(sortOrder) }, combinedFilter = function(filter1, filter2) {
      if (void 0 === filter2)
        return filter1;
      const queryFilter2 = convertFilterExpressionToQueryFilter(filter2);
      if (void 0 === filter1)
        return queryFilter2;
      return { type: "function", name: "and", parameters: [filter1, queryFilter2] };
    }(parameter, filter);
    logger$1.debug(`Fetching data for entity '${config.entity}' for widget ${toFriendlyId(widgetId)}`);
    const { mxObjects, count } = await offlineData().retrieve(config.entity, combinedFilter, options);
    return function(objects) {
      logger$1.debug(`Received ${objects.length} objects for widget ${toFriendlyId(widgetId)}`, "object ids:", objects.map((mxobj) => mxobj.getGuid()));
    }(mxObjects), { mxObjects, totalCount: needTotalCount ? count : void 0, hasMoreItems: offset + limit < count };
  });
});

const logger = LogManager.get().getLogger(), OnlineDatabaseObjectListProperty = asProperty((config, store, widgetId, propertyPath) => getServerPagedList$(config, config.sort ? convertToSortInstructions(config.sort, config.dataSourceId) : [], store, widgetId, function(fetchOnlyWithAllParams = false) {
  const argumentValues$ = Object.entries(config.arguments ?? {}).map(([name, [source, attribute, isLocalVariable]]) => {
    const description = `Subexpression ${name} in ${widgetId}/${propertyPath}`;
    if (isLocalVariable)
      return { name, value$: localVariableRunTimeArgument$(name, source, description, store) };
    {
      const [object$] = store.useSlot(source, "object");
      return { name, value$: fromComputation$(description, () => mapL(flatMapL(object$.dependOn() ?? loading(), (object) => object.isUnavailable() ? unavailable() : available(object)), (object) => (dependOnSubscription({ guid: object.getGuid(), tag: widgetId }, store), void 0 === attribute ? expressionVariableToRuntimeArgument(object) : (dependOnSubscription({ guid: object.getGuid(), attr: attribute, tag: widgetId }, store), toRuntimeArgument(object, attribute))))) };
    }
  });
  return fromComputation$(`Runtime arguments of ${widgetId}/${propertyPath}`, () => {
    const argumentValues = argumentValues$.map(({ name, value$ }) => ({ name, value: value$.dependOn() }));
    if (argumentValues.some(({ value }) => "loading" === value.status))
      return loading();
    if (argumentValues.some(({ value }) => "unavailable" === value.status) && fetchOnlyWithAllParams)
      return unavailable();
    const runtimeArguments = argumentValues.map(({ name, value }) => ({ name, value: getOrElseL(value, void 0) })).filter(({ value }) => void 0 !== value).map(({ name, value }) => tuple(name, ensure(value)));
    return available(Object.fromEntries(runtimeArguments));
  });
}(config.fetchOnlyWithAllParams), async function(args, { offset, limit, sortOrder, filter }, needTotalCount) {
  !function(runtimeArgs) {
    const friendlyId = toFriendlyId(widgetId);
    logger.debug(Object.values(runtimeArgs).length ? `Fetching data using XPath with arguments '${JSON.stringify(runtimeArgs)}' and operationId '${config.operationId}' for widget ${friendlyId}` : `Fetching data using XPath with operationId '${config.operationId}' for widget ${friendlyId}`);
  }(args);
  const result = await onlineData().retrieveByXPath(config.operationId, args, convertFilterConditionToXPath(filter), { offset, amount: limit, sort: convertToSortSpecs(sortOrder) }, needTotalCount);
  return function(objects) {
    logger.debug(`Received ${objects.length} objects for widget ${toFriendlyId(widgetId)}`, "object ids:", objects.map((mxobj) => mxobj.getGuid()));
  }(result.mxObjects), { mxObjects: result.mxObjects, hasMoreItems: result.hasMoreItems, totalCount: result.count };
}));

const DatabaseObjectListProperty = (config) => mx.isOffline(config.entity) ? OfflineDatabaseObjectListProperty(config) : OnlineDatabaseObjectListProperty(config);

export { DatabaseObjectListProperty };
