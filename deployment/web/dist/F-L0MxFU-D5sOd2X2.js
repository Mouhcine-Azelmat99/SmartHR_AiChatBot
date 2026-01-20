const getValidationAriaProps = (validation, id) => validation ? { "aria-invalid": true, "aria-describedby": `${id}-error` } : void 0, getAriaLabelProps = (value) => value ? { "aria-label": value } : {};

export { getAriaLabelProps, getValidationAriaProps };
