# Video Belajar — React

Static Video Belajar website (Register, Login, and Homepage) built with React + Vite.
The assignment brief is in [`docs/`](docs/).

## Getting Started

```bash
npm install
npm run dev
```

| Route       | Page     |
| ----------- | -------- |
| `/`         | Homepage |
| `/login`    | Login    |
| `/register` | Register |

## Project Structure

```
src/
├── assets/            # images & logo
├── components/
│   ├── ui/            # Button, FormField, PhoneInput, Divider, GoogleButton, RatingStars
│   ├── layout/        # Navbar, Footer, AuthLayout
│   ├── auth/          # AuthCard
│   └── home/          # HeroBanner, CategoryTabs, CourseCard, CourseSection, NewsletterBanner
├── data/              # course & footer data
├── hooks/             # usePageTitle
├── pages/             # HomePage, LoginPage, RegisterPage
├── styles/            # design tokens & component styles
├── App.jsx            # routes
└── main.jsx
```

Components are reusable and receive their content through props; pages only compose components and pass data.
Responsive layouts use CSS media queries (900px, 600px, and 480px breakpoints).

The previous HTML/CSS version (Mission 3) is kept in the git tag `mission-3-html`.
