import { FormatterType, formatDate, parseDate, getDateFormatPlaceholder, translateEnumeration, formatNumber, parseNumber, getAttributeType, getAttributeEnumerationType, ensure, formatValue, translate } from './index-B-pQLZz2.js';

class DefaultDateTimeFormatter {
  constructor(config) {
    this.config = config, this.type = FormatterType.DateTime;
  }
  format(value) {
    return !value || isNaN(value.getTime()) ? "" : formatDate(value, this.config);
  }
  parse(value, fallbackDate) {
    if ("" === value)
      return { valid: true, value: void 0 };
    const result = parseDate(value, this.config, fallbackDate);
    return void 0 === result ? { valid: false } : { valid: true, value: result };
  }
  getFormatPlaceholder() {
    return getDateFormatPlaceholder(this.config);
  }
  withConfig(config) {
    return new DefaultDateTimeFormatter(config);
  }
}

class DefaultEnumFormatter {
  constructor(enumeration) {
    this.enumeration = enumeration;
  }
  format(value) {
    return value ? translateEnumeration(this.enumeration, value) : "";
  }
  parse(_value) {
    throw new Error("Enumeration values cannot be parsed");
  }
}
class DefaultNumberFormatter {
  constructor(config) {
    this.config = config, this.type = FormatterType.Number;
  }
  format(value) {
    return value ? formatNumber(value, this.config.groupDigits, this.config.decimalPrecision) : "";
  }
  parse(inputValue) {
    if ("" === inputValue)
      return { valid: true, value: void 0 };
    const result = parseNumber(inputValue, this.config.decimalPrecision);
    return void 0 === result ? { valid: false } : { valid: true, value: result };
  }
  withConfig(config) {
    return new DefaultNumberFormatter(config);
  }
}
const createFormatter = (entity, attribute, config) => createFormatterByType(getAttributeType(entity, attribute), () => getAttributeEnumerationType(entity, attribute), config);
function createFormatterByType(attributeType, getEnumerationType, config = {}) {
  return void 0 === attributeType ? /* @__PURE__ */ function() {
    const formatter = { format: (value) => void 0 === value ? "" : String(value), parse: (inputValue) => ({ valid: true, value: inputValue }), withConfig: () => formatter, getFormatPlaceholder: () => {
    } };
    return formatter;
  }() : "Enum" === attributeType ? new DefaultEnumFormatter(ensure(getEnumerationType())) : createNonEnumFormatter(attributeType, config);
}
function createNonEnumFormatter(attributeType, config) {
  switch (attributeType) {
    case "DateTime":
      return new DefaultDateTimeFormatter(config.dateFormat ?? { type: "date" });
    case "Integer":
    case "Long":
    case "Decimal":
      return new DefaultNumberFormatter(config.numberFormat ?? { groupDigits: false });
    default:
      return /* @__PURE__ */ function(attributeType2) {
        const formatter = { format: (value) => formatValue(value, attributeType2), parse: (inputValue) => {
          const value = function(value2, type) {
            switch (type) {
              case "Decimal":
              case "Integer":
              case "Long":
                return parseNumber(value2);
              case "DateTime":
                return parseDate(value2);
              case "Boolean":
                return value2 === translate("mxui.common", "true");
              default:
                return value2;
            }
          }(inputValue, attributeType2);
          return void 0 !== value ? { valid: true, value } : { valid: false };
        }, withConfig: () => formatter, getFormatPlaceholder: () => {
        } };
        return formatter;
      }(attributeType);
  }
}

export { createFormatter, createNonEnumFormatter };
