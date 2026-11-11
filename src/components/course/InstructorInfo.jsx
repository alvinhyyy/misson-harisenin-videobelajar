function InstructorInfo({ name, role, company, avatar, className = '' }) {
  return (
    <div className={`instructor ${className}`.trim()}>
      <img className="instructor-avatar" src={avatar} alt="" />
      <div>
        <strong>{name}</strong>
        <span>
          {role}
          {company && (
            <>
              {' '}di <b>{company}</b>
            </>
          )}
        </span>
      </div>
    </div>
  )
}

export default InstructorInfo
