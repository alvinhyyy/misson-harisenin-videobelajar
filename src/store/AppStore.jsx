import { AppStoreContext } from './AppStoreContext.js'
import usePersistentState from '../hooks/usePersistentState.js'
import { initialCourses } from '../data/courses.js'
import { initialEnrollments, initialOrders, initialProfile, initialReviews } from '../data/seed.js'
import { ADMIN_FEE, findPaymentMethod } from '../data/payments.js'
import { createId } from '../utils/format.js'

// Single source of truth for app data. Every action below is the seam that will
// later call the backend API instead of mutating local state.
export function AppStoreProvider({ children }) {
  const [courses, setCourses] = usePersistentState('courses', initialCourses)
  const [profile, setProfile] = usePersistentState('profile', initialProfile)
  const [orders, setOrders] = usePersistentState('orders', initialOrders)
  const [enrollments, setEnrollments] = usePersistentState('enrollments', initialEnrollments)
  const [quizResults, setQuizResults] = usePersistentState('quizResults', {})
  const [reviews, setReviews] = usePersistentState('reviews', initialReviews)

  /* Courses */
  const getCourse = (id) => courses.find((course) => course.id === id)

  const addCourse = (data) => {
    const course = { ...data, id: createId() }
    setCourses((current) => [course, ...current])
    return course
  }

  const updateCourse = (id, changes) => {
    setCourses((current) => current.map((course) => (course.id === id ? { ...course, ...changes } : course)))
  }

  const deleteCourse = (id) => {
    setCourses((current) => current.filter((course) => course.id !== id))
  }

  /* Profile */
  const updateProfile = (changes) => {
    setProfile((current) => ({ ...current, ...changes }))
  }

  /* Orders */
  const getOrder = (id) => orders.find((order) => order.id === id)

  const createOrder = (courseId, methodId) => {
    const course = getCourse(courseId)
    const method = findPaymentMethod(methodId)
    const id = String(Date.now()).slice(-8)
    const order = {
      id,
      invoice: `HEL/VI/${id}`,
      courseId,
      courseTitle: course.title,
      courseImage: course.image,
      price: course.price,
      adminFee: ADMIN_FEE,
      total: course.price + ADMIN_FEE,
      methodId,
      vaNumber: `${method.prefix} ${profile.phone}`,
      status: 'pending',
      createdAt: new Date().toISOString(),
      paidAt: null,
    }
    setOrders((current) => [order, ...current])
    return order
  }

  const updateOrderMethod = (id, methodId) => {
    const method = findPaymentMethod(methodId)
    setOrders((current) =>
      current.map((order) =>
        order.id === id ? { ...order, methodId, vaNumber: `${method.prefix} ${profile.phone}` } : order,
      ),
    )
  }

  const payOrder = (id) => {
    const order = getOrder(id)
    if (!order) return
    setOrders((current) =>
      current.map((item) => (item.id === id ? { ...item, status: 'paid', paidAt: new Date().toISOString() } : item)),
    )
    enroll(order.courseId)
  }

  const deleteOrder = (id) => {
    setOrders((current) => current.filter((order) => order.id !== id))
  }

  /* Enrollments & learning progress */
  const getEnrollment = (courseId) => enrollments.find((item) => item.courseId === courseId)

  const enroll = (courseId) => {
    setEnrollments((current) =>
      current.some((item) => item.courseId === courseId)
        ? current
        : [{ courseId, completedLessons: [], enrolledAt: new Date().toISOString() }, ...current],
    )
  }

  const completeLesson = (courseId, lessonId) => {
    setEnrollments((current) =>
      current.map((item) =>
        item.courseId === courseId && !item.completedLessons.includes(lessonId)
          ? { ...item, completedLessons: [...item.completedLessons, lessonId] }
          : item,
      ),
    )
  }

  const getQuizResult = (courseId, lessonId) => quizResults[`${courseId}:${lessonId}`]

  const saveQuizResult = (courseId, lessonId, result) => {
    setQuizResults((current) => ({ ...current, [`${courseId}:${lessonId}`]: result }))
  }

  const resetQuizResult = (courseId, lessonId) => {
    setQuizResults((current) => {
      const next = { ...current }
      delete next[`${courseId}:${lessonId}`]
      return next
    })
  }

  /* Reviews */
  const getCourseReviews = (courseId) =>
    reviews.filter((review) => review.courseId === courseId || review.courseId === null)

  const addReview = (courseId, { rating, text }) => {
    const review = {
      id: createId(),
      courseId,
      name: profile.name,
      batch: 'Siswa videobelajar',
      avatar: profile.avatar,
      rating,
      text,
    }
    setReviews((current) => [review, ...current])
  }

  const value = {
    courses,
    getCourse,
    addCourse,
    updateCourse,
    deleteCourse,
    profile,
    updateProfile,
    orders,
    getOrder,
    createOrder,
    updateOrderMethod,
    payOrder,
    deleteOrder,
    enrollments,
    getEnrollment,
    completeLesson,
    getQuizResult,
    saveQuizResult,
    resetQuizResult,
    getCourseReviews,
    addReview,
  }

  return <AppStoreContext.Provider value={value}>{children}</AppStoreContext.Provider>
}
