const paths = {
  'arrow-left': <path d="M19 12H5M12 19l-7-7 7-7" />,
  'arrow-right': <path d="M5 12h14M12 5l7 7-7 7" />,
  'chevron-down': <path d="M6 9l6 6 6-6" />,
  'chevron-up': <path d="M18 15l-6-6-6 6" />,
  'chevron-left': <path d="M15 18l-6-6 6-6" />,
  'chevron-right': <path d="M9 18l6-6-6-6" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </>
  ),
  'play-circle': (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5l5 3.5-5 3.5z" />
    </>
  ),
  play: <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" />,
  book: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M9 7h6M9 17h6" />
    </>
  ),
  'file-check': (
    <>
      <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
      <path d="M14 3v5h5M9 14l2 2 4-4" />
    </>
  ),
  'file-edit': (
    <>
      <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h4" />
      <path d="M14 3v5h5v3M17.5 14.5l2 2L14 22h-2v-2z" />
    </>
  ),
  'check-circle': (
    <>
      <circle cx="12" cy="12" r="10" fill="currentColor" stroke="none" />
      <path d="M7.5 12.5l3 3 6-6.5" stroke="#fff" />
    </>
  ),
  'x-circle': (
    <>
      <circle cx="12" cy="12" r="10" fill="currentColor" stroke="none" />
      <path d="M9 9l6 6M15 9l-6 6" stroke="#fff" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7" />,
  video: (
    <>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="M16 10l5-3v10l-5-3z" />
    </>
  ),
  award: (
    <>
      <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h1" />
      <path d="M14 3v5h5v4" />
      <circle cx="15" cy="15" r="3" />
      <path d="M13.5 17.5L13 22l2-1 2 1-.5-4.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
    </>
  ),
  star: <path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z" />,
  user: (
    <>
      <circle cx="12" cy="8" r="4" fill="currentColor" stroke="none" />
      <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z" fill="currentColor" stroke="none" />
    </>
  ),
  'book-filled': <path d="M5 4a1 1 0 011-1h12a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1zM9 3v8l2.5-1.5L14 11V3" fill="currentColor" stroke="none" />,
  basket: (
    <path
      d="M3 10h18l-2 10H5zM8 10l4-6 4 6"
      fill="currentColor"
      stroke="currentColor"
      strokeLinejoin="round"
    />
  ),
  logout: <path d="M10 4H5a1 1 0 00-1 1v14a1 1 0 001 1h5M15 16l4-4-4-4M19 12H9" />,
  refresh: <path d="M20 11a8 8 0 10-2.3 5.7M20 5v6h-6" />,
  download: (
    <>
      <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" fill="currentColor" stroke="none" />
      <path d="M12 10v6M9.5 13.5L12 16l2.5-2.5" stroke="#fff" />
    </>
  ),
  trophy: (
    <>
      <path d="M7 4h10v5a5 5 0 01-10 0zM7 6H4v2a3 3 0 003 3M17 6h3v2a3 3 0 01-3 3M12 14v4M8 21h8M9 18h6" />
    </>
  ),
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  plus: <path d="M12 5v14M5 12h14" />,
  edit: <path d="M4 20h4L19 9l-4-4L4 16zM14 6l4 4" />,
  trash: <path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6L6 18" />,
  filter: <path d="M4 5h16l-6 8v6l-4-2v-4z" />,
  copy: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V5a1 1 0 011-1h10" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
}

function Icon({ name, size = 20, className = '', ...props }) {
  return (
    <svg
      className={`icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  )
}

export default Icon
