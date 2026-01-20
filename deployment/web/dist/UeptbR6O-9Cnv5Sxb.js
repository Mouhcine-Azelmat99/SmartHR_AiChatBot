import { getAttributeInfoById, AssertionError, ensureAttributeId, ensure, getAttributeTypeById, crash, Big, deepEqual, toXpathConstraint, getAssociationInfoById, startOfDay, lessThan, literal, addDays, greaterThanOrEqual, or, and, getAssociationTypeById, isAttributeExpression, delocalizeDate, isUnlocalizedDateAttribute, fromMxSubscription$, fromTimer$, fromConstant$, useValue, action, fromComputation$, getPreviousValue$, mapL, loading, withFormSuspension$, fromMutableComputation$, scheduleSideEffect, runInAction, assertIsPositiveInteger, assertIsBoolean, readUntracked, assertValidFilterCondition, equalFilterCondition, withSideEffect$, asReloadable$ } from './index-B-pQLZz2.js';
import { scheduleAction } from './uEIG9e6s-CoI72Q4o.js';
import { getParentIsReady$ } from './CkBXggmw-CEa7-Kz-.js';

function conditionalExpression(condition, then, elseExpr) {
  return { type: "conditional", condition, then, else: elseExpr };
}
function functionExpression(name, arg1, arg2) {
  return { type: "function", name, parameters: void 0 === arg2 ? [arg1] : [arg1, arg2] };
}
function literalExpression(value) {
  return { type: "literal", value };
}
function literalNumericExpression(value) {
  return { type: "literalNumeric", value };
}
function variableExpression(variableName, attribute) {
  return void 0 !== attribute ? { type: "variable", variable: variableName, path: attribute } : { type: "variable", variable: variableName };
}
const attributeIdToSortingFlag = {};
function registerSortingAttribute(attributeId, sortable) {
  attributeIdToSortingFlag[attributeId] = sortable;
}
function ensureValidAttribute(attributeId) {
  const attributeInfo = getAttributeInfoById(attributeId), sortable = attributeIdToSortingFlag[attributeId];
  if (void 0 === attributeInfo || void 0 === sortable)
    throw new AssertionError(`Sort order item: invalid attribute id '${attributeId}'`);
  return { attributePath: attributeInfo.attributePath, sortable };
}
function convertToSortSpecs(sortInstructions) {
  return sortInstructions.map((s) => [ensureValidAttribute(s[0]).attributePath, s[1]]);
}
function convertToSortInstructions(sortSpecs, dataSourceId) {
  return sortSpecs.map((s) => {
    const attributeId = ensureAttributeId(s[0], dataSourceId);
    return registerSortingAttribute(attributeId, true), [attributeId, s[1]];
  });
}
function convertSortInstructionToExpression(sortInstruction) {
  const attributePath = ensure(getAttributeInfoById(sortInstruction[0])).attributePath, attributeType = ensure(getAttributeTypeById(sortInstruction[0])), attributePathExpression = variableExpression("currentObject", attributePath);
  return "String" === attributeType ? functionExpression("toLowerCase", attributePathExpression) : attributePathExpression;
}
function getCompareFunction(sortOrder) {
  return function(item1, item2) {
    let compareResult = 0;
    for (let i = 0; i < sortOrder.length && 0 === compareResult; i++) {
      const sortValue1 = item1.sortValues[i], sortValue2 = item2.sortValues[i], sortInstruction = ensure(sortOrder[i]), factor = "asc" === sortInstruction[1] ? 1 : -1;
      if (sortValue1 === sortValue2)
        continue;
      if (void 0 === sortValue1 || "" === sortValue1) {
        compareResult = factor;
        break;
      }
      if (void 0 === sortValue2 || "" === sortValue2) {
        compareResult = -factor;
        break;
      }
      switch (ensure(getAttributeTypeById(sortInstruction[0]))) {
        case "AutoNumber":
          compareResult = Big(sortValue1).cmp(Big(sortValue2));
          break;
        case "String":
        case "Enum":
        case "HashString":
          compareResult = sortValue1 > sortValue2 ? 1 : -1;
          break;
        case "Long":
        case "Integer":
        case "Decimal":
          sortValue1 instanceof Big && sortValue2 instanceof Big || crash(), compareResult = sortValue1.cmp(sortValue2);
          break;
        case "DateTime":
          sortValue1 instanceof Date && sortValue2 instanceof Date || crash(), compareResult = sortValue1.getTime() > sortValue2.getTime() ? 1 : -1;
          break;
        case "Boolean":
          compareResult = sortValue1 ? 1 : -1;
          break;
        default:
          crash();
      }
      compareResult *= factor;
    }
    if (0 === compareResult) {
      const factor = "asc" === ensure(sortOrder[0])[1] ? 1 : -1;
      compareResult = item1.mxObject.getGuid() > item2.mxObject.getGuid() ? factor : -factor;
    }
    return compareResult;
  };
}
function equalSortInstructions(a, b) {
  return deepEqual(a, b);
}
function assertIsValidSortOrder(options, dataSourceId) {
  if (void 0 === options)
    return true;
  if (!Array.isArray(options))
    throw new AssertionError("Sort order: must be array");
  return options.forEach((o) => function(sortItem) {
    if (!Array.isArray(sortItem) || 2 !== sortItem.length)
      throw new AssertionError("Sort order item: must be an array with 2 elements");
    const [id, dir] = sortItem;
    if (!function(id2) {
      return ensureValidAttribute(id2).sortable;
    }(id))
      throw new AssertionError(`Sort order item: attribute with id '${id}' is not sortable`);
    if (getAttributeInfoById(id).dataSourceId !== dataSourceId)
      throw new AssertionError(`Sort order item: attribute with id '${id}' is linked to a different data source`);
    if ("asc" !== dir && "desc" !== dir)
      throw new AssertionError(`Sort order item: sort direction must be 'asc' or 'desc'. Got: '${dir}'`);
  }(o)), true;
}

function convertFilterConditionToXPath(filter) {
  if (void 0 === filter)
    return "";
  const queryFilter = convertFilterExpressionToQueryFilter(filter);
  return `[${toXpathConstraint(queryFilter)}]`;
}
function convertFilterExpressionToExpression(filter) {
  switch (filter.type) {
    case "attribute":
      const attributePath = ensure(getAttributeInfoById(filter.attributeId)).attributePath;
      return variableExpression("currentObject", attributePath);
    case "literal":
      return "Numeric" === filter.valueType ? literalNumericExpression(filter.value) : literalExpression(filter.value ?? null);
    case "function":
      if ("arg" in filter)
        return functionExpression(filter.name, convertFilterExpressionToExpression(filter.arg));
      if ("arg1" in filter) {
        if (!function(filter2) {
          return filter2.name in filterFunctionsToExpressionFunctions;
        }(filter))
          return convertFilterExpressionToExpression(expandDayFilter(filter));
        const isCaseInsensitive = function(filter2) {
          switch (filter2.name) {
            case "starts-with":
            case "ends-with":
              return true;
            case "contains":
            case "=":
            case "!=":
            case ">":
            case ">=":
            case "<":
            case "<=":
              return isStringExpression(filter2.arg1) && isStringExpression(filter2.arg2);
            default:
              return false;
          }
        }(filter), transform = (e) => isCaseInsensitive ? functionExpression("toLowerCase", e) : e, arg1 = transform(convertFilterExpressionToExpression(filter.arg1)), arg2 = transform(convertFilterExpressionToExpression(filter.arg2)), fnExpr = functionExpression(filterFunctionsToExpressionFunctions[filter.name], arg1, arg2);
        return nullUnsafeFilterFunctions.includes(filter.name) ? conditionalExpression(functionExpression("=", arg1, literalExpression(null)), literalExpression(false), conditionalExpression(functionExpression("=", arg2, literalExpression(null)), literalExpression(false), fnExpr)) : fnExpr;
      }
      return filter.args.map(convertFilterExpressionToExpression).reduce((prev, curr) => "and" === filter.name ? conditionalExpression(prev, curr, literalExpression(false)) : conditionalExpression(prev, literalExpression(true), curr));
    case "association":
      const associationPath = ensure(getAssociationInfoById(filter.associationId)).associationPath;
      return variableExpression("currentObject", associationPath);
  }
}
const dayFilterFunctions = ["day:=", "day:!=", "day:>", "day:>=", "day:<", "day:<="];
function expandDayFilter(filter) {
  const filterAttribute = filter.arg1, dayValue = startOfDay(filter.arg2.value);
  switch (filter.name) {
    case "day:=":
      return and(greaterThanOrEqual(filterAttribute, literal(dayValue)), lessThan(filterAttribute, literal(addDays(dayValue, 1))));
    case "day:!=":
      return or(lessThan(filterAttribute, literal(dayValue)), greaterThanOrEqual(filterAttribute, literal(addDays(dayValue, 1))));
    case "day:>":
      return greaterThanOrEqual(filterAttribute, literal(addDays(dayValue, 1)));
    case "day:>=":
      return greaterThanOrEqual(filterAttribute, literal(dayValue));
    case "day:<":
      return lessThan(filterAttribute, literal(dayValue));
    case "day:<=":
      return lessThan(filterAttribute, literal(addDays(dayValue, 1)));
  }
}
function isStringExpression(expression) {
  switch (expression.type) {
    case "literal":
      return "string" === expression.valueType;
    case "attribute":
      return "String" === ensure(getAttributeTypeById(expression.attributeId));
    case "association":
      return false;
  }
}
const filterFunctionsToExpressionFunctions = { "=": "=", "!=": "!=", ">": ">", ">=": ">=", "<": "<", "<=": "<=", contains: "contains", "starts-with": "startsWith", "ends-with": "endsWith" }, nullUnsafeFilterFunctions = [">", ">=", "<", "<="];
function convertFilterExpressionToQueryFilter(filter, isDelocalizedDateExpression = false, expandEqualsEmpty = true) {
  switch (filter.type) {
    case "attribute":
      return { type: "attribute", attribute: ensure(getAttributeInfoById(filter.attributeId)).attributePath, attributeType: ensure(getAttributeTypeById(filter.attributeId)) };
    case "literal":
      return { type: "value", value: "DateTime" === filter.valueType && isDelocalizedDateExpression ? delocalizeDate(filter.value) : filter.value, isGuid: "Reference" === filter.valueType || "ReferenceSet" === filter.valueType };
    case "function":
      if (function(filter2) {
        return dayFilterFunctions.includes(filter2.name);
      }(filter))
        return convertFilterExpressionToQueryFilter(expandDayFilter(filter));
      if (expandEqualsEmpty && ("=" === (expr = filter).name && (isEmptyLiteral(expr.arg1) || isEmptyLiteral(expr.arg2))))
        return function(filter2) {
          const queryFilter = convertFilterExpressionToQueryFilter(filter2, false, false), attribute = [filter2.arg1, filter2.arg2].find(isAttributeExpression);
          if (attribute) {
            const pathElements = ensure(getAttributeInfoById(attribute.attributeId)).attributePath.split("/");
            if (1 === pathElements.length)
              return queryFilter;
            pathElements.pop();
            const expandedFilters = [queryFilter], emptyLiteral = { type: "value", value: void 0, isGuid: true };
            for (; pathElements.length; ) {
              const associationPath = pathElements.join("/");
              pathElements.splice(pathElements.length - 2, 2), expandedFilters.unshift({ type: "function", name: "=", parameters: [{ type: "association", associationPath, associationType: "Reference" }, emptyLiteral] });
            }
            return { type: "function", name: "or", parameters: expandedFilters };
          }
          return queryFilter;
        }(filter);
      const parameters = "arg" in filter ? [filter.arg] : "arg1" in filter ? [filter.arg1, filter.arg2] : filter.args, delocalizeDateLiterals = parameters.some(containsUnlocalizedDateAttribute);
      return { type: "function", name: filter.name, parameters: parameters.map((p) => convertFilterExpressionToQueryFilter(p, delocalizeDateLiterals)) };
    case "association":
      return { type: "association", associationPath: ensure(getAssociationInfoById(filter.associationId)).associationPath, associationType: ensure(getAssociationTypeById(filter.associationId)) };
  }
  var expr;
}
function containsUnlocalizedDateAttribute(expr) {
  return "attribute" === expr.type && isUnlocalizedDateAttribute(expr.attributeId);
}
function isEmptyLiteral(expr) {
  return "literal" === expr.type && void 0 === expr.value;
}

function objectListTrigger(config, initialSortOrder, store, widgetId, parameters$) {
  const [entityUpdate$, loadedCallback] = fromMxSubscription$(`Entity subscription of data source of ${widgetId}`, store, { entity: config.entity }), intervalRefresh$ = config.refreshTime ? fromTimer$(`Refresh of data source of ${widgetId}`, config.refreshTime) : fromConstant$(void 0), parentIsReady$ = getParentIsReady$(config.scope, store, widgetId), loadDelayed$ = function(widgetId2) {
    const [isDelayed$, setIsDelayed] = useValue(`Load delay of data source of ${widgetId2}`, true);
    return setTimeout(action(() => setIsDelayed(false)), 1), isDelayed$;
  }(widgetId), shouldLoad$ = fromComputation$(`Load breaker of ${widgetId}`, () => parentIsReady$.dependOn() && !loadDelayed$.dependOn()), [limit$, setLimit] = store.useSlot(widgetId, `${config.dataSourceId}/limit`), returnEmpty$ = fromComputation$(`Return empty of ${widgetId}`, () => (limit$.dependOn() ?? Number.POSITIVE_INFINITY) <= 0), previousParameters$ = getPreviousValue$(parameters$), [sortOrder$, setSortOrder] = store.useSlot(widgetId, `${config.dataSourceId}/sortOrder`), [filter$, setFilter] = store.useSlot(widgetId, `${config.dataSourceId}/filter`), [reload$, setReload] = useValue(`Reload ${widgetId}`, []);
  let fetchId = -1;
  const rawFetchTrigger$ = fromComputation$(`Load trigger of data source of ${widgetId}`, () => {
    if (entityUpdate$.dependOn(), intervalRefresh$.dependOn(), reload$.dependOn(), shouldLoad$.dependOn()) {
      const p = parameters$.dependOn();
      return "unavailable" === p.status && loadedCallback(), mapL(p, (parameters) => returnEmpty$.dependOn() ? { empty: true } : { empty: false, parameters, id: ++fetchId });
    }
    return loadedCallback(), loading();
  }), fetchTrigger$ = withFormSuspension$(store, widgetId, rawFetchTrigger$, loadedCallback), [offset$, setOffset] = store.useSlot(widgetId, `${config.dataSourceId}/offset`), retrieveParameters$ = fromMutableComputation$(`Retrieve parameters info of data source of ${widgetId}`, () => {
    const limit = limit$.dependOn();
    let offset = offset$.dependOn();
    const sortOrder = sortOrder$.dependOn(), filter = filter$.dependOn();
    if (shouldLoad$.dependOn()) {
      const previousParameter = previousParameters$.dependOn();
      void 0 === previousParameter || deepEqual(parameters$.dependOn(), previousParameter) || (offset = 0, scheduleSideEffect(() => silentlyResetOffset));
    }
    return { offset: offset ?? 0, limit: limit ?? Number.POSITIVE_INFINITY, sortOrder: sortOrder ?? initialSortOrder, filter };
  }), [needTotalCount$, setRequestTotalCount] = useValue(`Request total count of ${widgetId}`, false), silentlyResetOffset = () => retrieveParameters$.muted(() => setOffset(0));
  return { fetchTrigger$, retrieveParameters$, silentlyResetOffset, needTotalCount$, immediateRetrieveParametersSetters: getRetrieveParametersSetters(runInAction), delayedRetrieveParametersSetters: getRetrieveParametersSetters(scheduleAction), loadedCallback };
  function getRetrieveParametersSetters(scheduler) {
    return { setOffset(offset) {
      assertIsPositiveInteger(offset) && Number.isFinite(offset) && scheduler(() => setOffset(offset));
    }, setLimit(limit) {
      (void 0 === limit || assertIsPositiveInteger(limit)) && scheduler(() => setLimit(Number.isFinite(limit) ? limit : void 0));
    }, requestTotalCount(needTotalCount) {
      assertIsBoolean(needTotalCount) && scheduler(() => setRequestTotalCount(needTotalCount));
    }, setSortOrder: (sortOrder) => {
      assertIsValidSortOrder(sortOrder, config.dataSourceId) && scheduler(() => {
        equalSortInstructions(readUntracked(sortOrder$), sortOrder) || setSortOrder(sortOrder);
      });
    }, setFilter: (filter) => {
      assertValidFilterCondition(filter, config.dataSourceId) && scheduler(() => {
        equalFilterCondition(readUntracked(filter$), filter) || setFilter(filter);
      });
    }, reload: () => {
      scheduler(() => {
        setReload([]);
      });
    } };
  }
}
function withFirstLoadDoneSharing$(value$, store, widgetId, propertyPath) {
  const slotId = propertyPath ? `${widgetId}/${propertyPath}` : widgetId, [firstLoadDone$, setFirstLoadDone] = store.useSlot(slotId, "firstLoadDone");
  return withSideEffect$(`Share firstLoadDone state of ${slotId}`, value$, (value) => {
    readUntracked(firstLoadDone$) || setFirstLoadDone("loading" !== value.status);
  });
}
function asReloadableListValue$(value$) {
  return asReloadable$(value$, (oldValue) => {
    const { filter, sortOrder, offset, limit, items, totalCount, hasMoreItems } = oldValue;
    return { filter, sortOrder, offset, limit, items, totalCount, hasMoreItems };
  });
}
function withSetItemsStoreSideEffect$(widgetId, dataSourceId, listValue$, store) {
  const [, setDataSourceObjects] = store.useSlot(widgetId, `${dataSourceId}/items`);
  return withSideEffect$(`Published list value of data source: ${dataSourceId}`, listValue$, ({ status, items }) => setDataSourceObjects("available" === status ? { status, value: items } : { status }));
}

export { asReloadableListValue$, convertFilterConditionToXPath, convertFilterExpressionToExpression, convertFilterExpressionToQueryFilter, convertSortInstructionToExpression, convertToSortInstructions, convertToSortSpecs, equalSortInstructions, getCompareFunction, objectListTrigger, registerSortingAttribute, withFirstLoadDoneSharing$, withSetItemsStoreSideEffect$ };
