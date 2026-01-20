import { asProperty, readUntracked, fromComputation$, useValue, observable, getPreviousValue$, action, translate, assertIsNonEnumValue } from './index-B-pQLZz2.js';
import { runActionInComputed } from './uEIG9e6s-CoI72Q4o.js';
import { createNonEnumFormatter } from './CxoxYXlg-rXnL4f6K.js';

const WidgetVariableProperty = asProperty(({ slot, type, initialValue }, store, widgetId) => {
  const [slot$, setSlot] = store.useSlot(widgetId, slot);
  void 0 === readUntracked(slot$) && void 0 !== initialValue && setSlot(initialValue);
  const defaultFormatter = createNonEnumFormatter(type, {}), submittedValue$ = fromComputation$(`Submitted value '${slot}' for widget ${widgetId}`, () => slot$.dependOn()), [unsubmittedValue$, setUnsubmittedValue] = useValue(`Unsubmitted value of widget variable '${slot}' for widget ${widgetId}`, void 0), formatter = observable.box(defaultFormatter, { deep: false });
  let validator;
  const previousSubmittedValue$ = getPreviousValue$(submittedValue$);
  return fromComputation$(`Widget variable '${slot}' for widget ${widgetId}`, () => {
    const submitted = submittedValue$.dependOn();
    previousSubmittedValue$.dependOn() !== submitted && runActionInComputed(() => setUnsubmittedValue(void 0));
    const unsubmitted = unsubmittedValue$.dependOn(), value = void 0 !== unsubmitted && "unparsed" === unsubmitted.state ? void 0 : void 0 !== unsubmitted ? unsubmitted.value : submitted, displayValue = void 0 !== unsubmitted && "unparsed" === unsubmitted.state ? unsubmitted.value : formatter.get().format(void 0 !== unsubmitted ? unsubmitted.value : submitted);
    return { status: "available", validation: void 0 !== unsubmitted ? unsubmitted.message : void 0, universe: void 0, readOnly: false, formatter: formatter.get(), value, displayValue, isList: false, setValidator: (v) => validator = v, setFormatter: action((f) => formatter.set(f ?? defaultFormatter)), setTextValue: action((v) => function(value2) {
      const parseResult = formatter.get().parse(value2);
      parseResult.valid ? setValue(parseResult.value) : setUnsubmittedValue({ state: "unparsed", value: value2, message: translate("mendix.lib.Validations", "invalid_value") });
    }(v)), setValue: action((v) => setValue(v)) };
  });
  function setValue(value) {
    assertIsNonEnumValue(value, type, true);
    const validation = void 0 !== validator ? validator(value) : void 0;
    void 0 !== validation ? setUnsubmittedValue({ state: "parsed", value, message: validation }) : setSlot(value);
  }
});

export { WidgetVariableProperty };
