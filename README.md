# Video Belajar — React

Interactive Video Belajar website built with React + Vite.
The assignment brief (Mission 2: useState & CRUD) is in [`docs/`](docs/).

**Live demo:** https://misson-harisenin-videobelajar.vercel.app

## Getting Started

```bash
npm install
npm run dev
```

## Pages

| Route                          | Page                                              |
| ------------------------------ | ------------------------------------------------- |
| `/`                            | Homepage — course CRUD (add, edit, delete, filter) |
| `/login`, `/register`          | Login & Register                                  |
| `/kelas`                       | All courses — filter, sort, search, pagination    |
| `/kelas/:id`                   | Course detail                                     |
| `/kelas/:id/sertifikat`        | Certificate                                       |
| `/checkout/:courseId`          | Choose payment method                             |
| `/pembayaran/:orderId`         | Payment (virtual account, guide, countdown)       |
| `/pembayaran/:orderId/ubah`    | Change payment method                             |
| `/pembayaran/:orderId/status`  | Payment success / pending / failed                |
| `/profil`                      | Edit profile & photo                              |
| `/profil/kelas`                | My courses with progress                          |
| `/profil/pesanan`              | My orders (cancel / delete)                       |
| `/belajar/:courseId/:lessonId` | Learning: video, summary, pretest/quiz, review    |

## Data & State

All data lives as arrays of objects in [`src/data/`](src/data/) and is managed with `useState`
inside [`AppStoreProvider`](src/store/AppStore.jsx). Pages read it through `useAppStore()` and pass
values and callbacks down to child components as props.

| Data        | Create          | Read                | Update                 | Delete        |
| ----------- | --------------- | ------------------- | ---------------------- | ------------- |
| Courses     | `addCourse`     | `courses`           | `updateCourse`         | `deleteCourse`|
| Orders      | `createOrder`   | `orders`            | `updateOrderMethod`, `payOrder` | `deleteOrder` |
| Profile     | —               | `profile`           | `updateProfile`        | —             |
| Reviews     | `addReview`     | `getCourseReviews`  | —                      | —             |
| Progress    | —               | `enrollments`       | `completeLesson`, `saveQuizResult` | `resetQuizResult` |

State is persisted to `localStorage` so changes survive a refresh. When a backend is added,
only the actions in `AppStore.jsx` need to switch to API calls — components stay the same.

## Project Structure

```
src/
├── assets/            # images, logo, illustrations
├── components/
│   ├── ui/            # Button, Modal, ConfirmDialog, Accordion, Tabs, Dropdown, Pagination, ...
│   ├── layout/        # Navbar, ProfileMenu, Footer, MainLayout, AccountLayout, PaymentLayout
│   ├── home/          # HeroBanner, CourseSection, CourseCard, CourseFormModal, NewsletterBanner
│   ├── course/        # FilterPanel, CourseSummaryCard, ReviewCard, InstructorInfo
│   ├── payment/       # PaymentMethodSelector, OrderSummary, MethodLogo, CountdownBanner
│   ├── account/       # MyCourseCard, OrderCard, ListToolbar
│   └── learning/      # LearningHeader, ModuleSidebar, VideoLesson, QuizLesson, ...
├── data/              # seed data (courses, curriculum, questions, payments, ...)
├── hooks/             # usePageTitle, usePersistentState, useToast
├── pages/             # one file per route
├── store/             # AppStore (state + CRUD actions)
├── styles/            # design tokens, component and page styles
└── utils/             # formatting helpers
```

Responsive layouts use CSS media queries (1200px, 900px, and 600px breakpoints).

Previous missions are kept as git tags: `mission-3-html` (HTML/CSS) and `mission-intermediate-fe1a` (static React).
