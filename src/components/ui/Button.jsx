import { Link } from 'react-router-dom'

function Button({ variant = 'primary-color-1', to, href, className = '', children, ...props }) {
  const classes = `button button-${variant} ${className}`.trim()

  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>
  }

  if (href) {
    return <a href={href} className={classes} {...props}>{children}</a>
  }

  return <button type="button" className={classes} {...props}>{children}</button>
}

export default Button
