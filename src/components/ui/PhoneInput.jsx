function PhoneInput({ id, countryCodes = ['+62'] }) {
  return (
    <div className="phone-input-group">
      <div className="phone-country">
        <span className="indonesia-flag" aria-hidden="true"></span>
        <select name="country-code" aria-label="Kode negara">
          {countryCodes.map((code) => (
            <option key={code} value={code}>{code}</option>
          ))}
        </select>
      </div>
      <input id={id} name={id} type="tel" autoComplete="tel-national" inputMode="tel" required />
    </div>
  )
}

export default PhoneInput
