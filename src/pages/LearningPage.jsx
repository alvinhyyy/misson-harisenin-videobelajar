import { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import LearningHeader from '../components/learning/LearningHeader.jsx'
import ModuleSidebar from '../components/learning/ModuleSidebar.jsx'
import LessonNav from '../components/learning/LessonNav.jsx'
import VideoLesson from '../components/learning/VideoLesson.jsx'
import SummaryLesson from '../components/learning/SummaryLesson.jsx'
import QuizLesson from '../components/learning/QuizLesson.jsx'
import ReviewModal from '../components/learning/ReviewModal.jsx'
import Toast from '../components/ui/Toast.jsx'
import { lessons, modules, QUIZ_RULES } from '../data/curriculum.js'
import { useAppStore } from '../store/useAppStore.js'
import usePageTitle from '../hooks/usePageTitle.js'
import useToast from '../hooks/useToast.js'

function LearningPage() {
  const { courseId, lessonId } = useParams()
  const navigate = useNavigate()
  const store = useAppStore()
  const [reviewOpen, setReviewOpen] = useState(false)
  const toast = useToast()

  const course = store.getCourse(courseId)
  const enrollment = store.getEnrollment(courseId)
  const completedLessons = enrollment?.completedLessons ?? []
  const fallbackLesson = lessons.find((item) => !completedLessons.includes(item.id)) ?? lessons[0]
  const lesson = lessons.find((item) => item.id === lessonId) ?? fallbackLesson
  usePageTitle(lesson.title)

  if (!course) return <Navigate to="/kelas" replace />
  if (!enrollment) return <Navigate to={`/kelas/${courseId}`} replace />

  const index = lessons.indexOf(lesson)
  const prev = lessons[index - 1]
  const next = lessons[index + 1]
  const completedCount = lessons.filter((item) => completedLessons.includes(item.id)).length
  const courseDone = completedCount === lessons.length

  const goTo = (target) => target && navigate(`/belajar/${courseId}/${target.id}`)
  const complete = () => store.completeLesson(courseId, lesson.id)

  const handleNext = () => {
    if (lesson.type === 'video' || lesson.type === 'summary') complete()
    goTo(next)
  }

  const handleQuizSubmit = (result) => {
    store.saveQuizResult(courseId, lesson.id, result)
    const { passingScore } = QUIZ_RULES[lesson.id === 'pretest' ? 'pretest' : 'quiz']
    if (passingScore === null || result.score >= passingScore) complete()
  }

  const handleReview = (review) => {
    store.addReview(courseId, review)
    setReviewOpen(false)
    toast.show('Terima kasih! Review kamu sudah tersimpan')
  }

  const renderLesson = () => {
    if (lesson.type === 'video') return <VideoLesson lesson={lesson} course={course} onComplete={complete} />
    if (lesson.type === 'summary') return <SummaryLesson lesson={lesson} course={course} onComplete={complete} />
    return (
      <QuizLesson
        lesson={lesson}
        savedResult={store.getQuizResult(courseId, lesson.id)}
        courseDone={courseDone}
        onSubmit={handleQuizSubmit}
        onRetry={() => store.resetQuizResult(courseId, lesson.id)}
        onContinue={next ? () => goTo(next) : undefined}
      />
    )
  }

  return (
    <div className="learning-page">
      <LearningHeader course={course} completed={completedCount} total={lessons.length} avatar={store.profile.avatar} />

      <div className="learning-layout">
        <main className="learning-main" key={lesson.id}>
          {renderLesson()}
        </main>

        <LessonNav prev={prev} next={next} onPrev={() => goTo(prev)} onNext={handleNext} />

        <ModuleSidebar
          courseId={courseId}
          modules={modules}
          activeLessonId={lesson.id}
          completedLessons={completedLessons}
          onReview={() => setReviewOpen(true)}
        />
      </div>

      <ReviewModal open={reviewOpen} onClose={() => setReviewOpen(false)} onSubmit={handleReview} />
      <Toast message={toast.message} onClose={toast.clear} />
    </div>
  )
}

export default LearningPage
