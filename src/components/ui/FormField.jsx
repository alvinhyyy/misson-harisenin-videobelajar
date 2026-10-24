function FormField({ id, label, required = true, children, ...inputProps }) {
  return (
    <div className="login-field">
      <label htmlFor={id}>
        {label} {required && <span className="required-mark" aria-hidden="true">*</span>}
      </label>
      {children ?? <input id={id} name={id} required={required} {...inputProps} />}
    </div>
  )
}

export default FormField
