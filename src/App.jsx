import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import CatalogPage from './pages/CatalogPage.jsx'
import CourseDetailPage from './pages/CourseDetailPage.jsx'
import CertificatePage from './pages/CertificatePage.jsx'
import LearningPage from './pages/LearningPage.jsx'
import CheckoutPage from './pages/payment/CheckoutPage.jsx'
import PaymentPage from './pages/payment/PaymentPage.jsx'
import ChangePaymentPage from './pages/payment/ChangePaymentPage.jsx'
import PaymentStatusPage from './pages/payment/PaymentStatusPage.jsx'
import ProfilePage from './pages/account/ProfilePage.jsx'
import MyCoursesPage from './pages/account/MyCoursesPage.jsx'
import OrdersPage from './pages/account/OrdersPage.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/kelas" element={<CatalogPage />} />
        <Route path="/kelas/:courseId" element={<CourseDetailPage />} />
        <Route path="/kelas/:courseId/sertifikat" element={<CertificatePage />} />
        <Route path="/belajar/:courseId/:lessonId?" element={<LearningPage />} />

        <Route path="/checkout/:courseId" element={<CheckoutPage />} />
        <Route path="/pembayaran/:orderId" element={<PaymentPage />} />
        <Route path="/pembayaran/:orderId/ubah" element={<ChangePaymentPage />} />
        <Route path="/pembayaran/:orderId/status" element={<PaymentStatusPage />} />

        <Route path="/profil" element={<ProfilePage />} />
        <Route path="/profil/kelas" element={<MyCoursesPage />} />
        <Route path="/profil/pesanan" element={<OrdersPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
