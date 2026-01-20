import { getSubscribedObjectState$, getObjectByPath$, getAttribute$, fromComputation$, flatMapL, getData, getOrCrashL, Access, unavailable, available, asProperty, asDynamicValue$ } from './index-B-pQLZz2.js';
import { withObjectSharing$, withFirstLoadDoneSharing$ } from './CkBXggmw-CEa7-Kz-.js';

function getFileValue$(name, scope, path, store, widgetId, needsAccessToChangedDate, showAsThumbnail, shareObject) {
  const rootObject$ = getSubscribedObjectState$(store, scope), object$ = path ? getObjectByPath$(rootObject$, path, store) : rootObject$, sharedObject$ = shareObject ? withObjectSharing$(object$, store, widgetId, false) : withFirstLoadDoneSharing$(object$, store, widgetId), hasContents$ = getAttribute$(sharedObject$, "HasContents", store), contents$ = getAttribute$(sharedObject$, "Contents", store), changedDate$ = getAttribute$(sharedObject$, "changedDate", store), fileName$ = getAttribute$(sharedObject$, "Name", store);
  return fromComputation$(name, () => flatMapL(sharedObject$.dependOn(), (obj) => {
    const data = getData();
    if (obj.metaData.isRemoteFileEntity) {
      return getOrCrashL(contents$.dependOn()).access === Access.None ? unavailable() : available({ uri: data.getDocumentUrl(obj.getGuid(), "", false) });
    }
    const hasContents = getOrCrashL(hasContents$.dependOn()), changedDate = getOrCrashL(changedDate$.dependOn()), fileName = getOrCrashL(fileName$.dependOn());
    if (hasContents.access === Access.None || !hasContents.value || fileName.access === Access.None)
      return unavailable();
    if (needsAccessToChangedDate && changedDate.access === Access.None)
      return unavailable();
    const uri = data.getDocumentUrl(obj.getGuid(), (changedDate.access !== Access.None ? changedDate.value : void 0)?.getTime() ?? "", showAsThumbnail, fileName.value);
    return available({ uri, name: fileName.value });
  }));
}

const DynamicFileProperty = asProperty(({ scope, path }, store, widgetId, propertyPath) => asDynamicValue$(getFileValue$(`File property of ${widgetId}/${propertyPath}`, scope, path, store, widgetId, false, false, false)));

export { DynamicFileProperty };
