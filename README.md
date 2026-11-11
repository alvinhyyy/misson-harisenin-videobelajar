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

## How to View Each Page

Every link below opens the live demo directly. The **How to get there** column shows the clicks
a user makes from the homepage. Links rely on the sample data, so they work on a fresh visit
(see [Resetting the sample data](#resetting-the-sample-data) if something redirects).

The sample data starts with this state:

| Course (id)                                      | Status                                  |
| ------------------------------------------------ | --------------------------------------- |
| Big 4 Auditor Financial Analyst (`1`)            | Purchased, all modules completed        |
| Digital Marketing untuk Pemula (`2`)             | Purchased, not started                  |
| Gapai Karier Impianmu sebagai UI/UX Designer (`4`) | Purchased, 2 of 8 modules completed   |
| Dasar Desain Grafis dengan Figma (`8`)           | Order waiting for payment (`14062023`)  |
| Other courses (`3`, `5`, `6`, `7`, `9`)          | Not purchased                           |

### Homepage & catalog

| Page | Link | How to get there |
| --- | --- | --- |
| Homepage + CRUD | [`/`](https://misson-harisenin-videobelajar.vercel.app/) | Click **Tambah Kelas**, or **Edit** / **Hapus** on any card |
| Profile dropdown | [`/`](https://misson-harisenin-videobelajar.vercel.app/) | Click the avatar in the top-right corner |
| All courses (filter, sort, search) | [`/kelas`](https://misson-harisenin-videobelajar.vercel.app/kelas) | Click **Kategori** in the navbar |
| Course detail | [`/kelas/3`](https://misson-harisenin-videobelajar.vercel.app/kelas/3) | Click a course image or title |

### Payment flow

| Page | Link | How to get there |
| --- | --- | --- |
| Payment method | [`/checkout/3`](https://misson-harisenin-videobelajar.vercel.app/checkout/3) | Open a course you have **not** bought → **Beli Sekarang** |
| Payment (virtual account) | [`/pembayaran/14062023`](https://misson-harisenin-videobelajar.vercel.app/pembayaran/14062023) | On the payment method page, pick a method → **Beli Sekarang** |
| Change payment method | [`/pembayaran/14062023/ubah`](https://misson-harisenin-videobelajar.vercel.app/pembayaran/14062023/ubah) | On the payment page → **Ganti Metode Pembayaran** |
| Payment pending | [`/pembayaran/14062023/status`](https://misson-harisenin-videobelajar.vercel.app/pembayaran/14062023/status) | **Pesanan Saya** → click the invoice number of a *Belum Bayar* order |
| Payment success | [`/pembayaran/10062023/status`](https://misson-harisenin-videobelajar.vercel.app/pembayaran/10062023/status) | On the payment page → **Bayar Sekarang** |
| Payment failed | [`/pembayaran/13062023/status`](https://misson-harisenin-videobelajar.vercel.app/pembayaran/13062023/status) | **Pesanan Saya** → click the invoice number of a *Gagal* order |

> The payment method page only opens for a course you have not bought yet. A course you already own
> shows **Lanjutkan Belajar** instead of **Beli Sekarang**.

### Account

| Page | Link | How to get there |
| --- | --- | --- |
| Profile | [`/profil`](https://misson-harisenin-videobelajar.vercel.app/profil) | Avatar → **Profil Saya** |
| My courses | [`/profil/kelas`](https://misson-harisenin-videobelajar.vercel.app/profil/kelas) | Avatar → **Kelas Saya** |
| My orders | [`/profil/pesanan`](https://misson-harisenin-videobelajar.vercel.app/profil/pesanan) | Avatar → **Pesanan Saya** |

### Learning

| Page | Link | How to get there |
| --- | --- | --- |
| Video | [`/belajar/4/video-2`](https://misson-harisenin-videobelajar.vercel.app/belajar/4/video-2) | **Kelas Saya** → **Lanjutkan Pembelajaran** |
| Rules (pretest) | [`/belajar/2/pretest`](https://misson-harisenin-videobelajar.vercel.app/belajar/2/pretest) | Click **Pre-Test** in the module list |
| Rules (quiz) | [`/belajar/4/quiz`](https://misson-harisenin-videobelajar.vercel.app/belajar/4/quiz) | Click **Quiz** in the module list |
| Questions + submit dialog | [`/belajar/4/quiz`](https://misson-harisenin-videobelajar.vercel.app/belajar/4/quiz) | **Mulai Quiz** → answer all 10 → **Submit** |
| Congrats | [`/belajar/2/pretest`](https://misson-harisenin-videobelajar.vercel.app/belajar/2/pretest) | Finish the pretest (always passes), or score 60+ on a quiz |
| Try Again | [`/belajar/4/quiz`](https://misson-harisenin-videobelajar.vercel.app/belajar/4/quiz) | Score below 60 on the quiz (e.g. always pick the last option) |
| Summary (download) | [`/belajar/4/summary`](https://misson-harisenin-videobelajar.vercel.app/belajar/4/summary) | Click **Rangkuman** in the module list |
| Review & rating | any learning page | Click **Beri Review & Rating** below the module list |
| Course completed | [`/belajar/1/final`](https://misson-harisenin-videobelajar.vercel.app/belajar/1/final) | Top bar shows **Ambil Sertifikat** once every module is done |
| Certificate | [`/kelas/1/sertifikat`](https://misson-harisenin-videobelajar.vercel.app/kelas/1/sertifikat) | **Kelas Saya** → **Unduh Sertifikat** on a completed course |

### Resetting the sample data

Changes are saved in the browser's `localStorage`. If a link above redirects (for example, the
pending order was already paid), reset the data: open DevTools → **Application** → **Local Storage**
→ delete the keys starting with `videobelajar:`, then refresh. Opening the site in an incognito
window also starts from the sample data.

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
