import { useState } from 'react'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import ConfirmDialog from '../ui/ConfirmDialog.jsx'
import QuizBanner from './QuizBanner.jsx'
import QuizResult from './QuizResult.jsx'
import confirmImage from '../../assets/quiz-confirm.png'
import { QUIZ_RULES } from '../../data/curriculum.js'
import { questions } from '../../data/questions.js'

function QuizLesson({ lesson, savedResult, courseDone, onSubmit, onRetry, onContinue }) {
  const rules = QUIZ_RULES[lesson.id === 'pretest' ? 'pretest' : 'quiz']
  const [phase, setPhase] = useState(savedResult ? 'result' : 'rules')
  const [answers, setAnswers] = useState({})
  const [current, setCurrent] = useState(0)
  const [confirmOpen, setConfirmOpen] = useState(false)

  const question = questions[current]
  const isLast = current === questions.length - 1
  const allAnswered = questions.every((item) => answers[item.id] !== undefined)

  const start = () => {
    setAnswers({})
    setCurrent(0)
    setPhase('questions')
  }

  const submit = () => {
    const correct = questions.filter((item) => answers[item.id] === item.answer).length
    onSubmit({
      score: Math.round((correct / questions.length) * 100),
      correct,
      total: questions.length,
      takenAt: new Date().toISOString(),
    })
    setConfirmOpen(false)
    setPhase('result')
  }

  if (phase === 'result' && savedResult) {
    const passed = rules.passingScore === null || savedResult.score >= rules.passingScore
    return (
      <QuizResult
        rules={rules}
        result={savedResult}
        passed={passed}
        courseDone={courseDone}
        onContinue={onContinue}
        onRetry={() => {
          onRetry()
          start()
        }}
      />
    )
  }

  if (phase === 'rules') {
    return (
      <>
        <QuizBanner variant="rules" />
        <div className="lesson-body">
          <h1 className="heading-6">Aturan</h1>
          <p className="body-medium-regular lesson-description">{rules.intro}</p>
          <p className="body-medium-regular lesson-description">
            Syarat Nilai Kelulusan: {rules.passingScore ?? '-'}
            <br />
            Durasi Ujian: {rules.duration} Menit
          </p>
          <p className="body-medium-regular lesson-description">{rules.note}</p>
          <Button onClick={start}>{rules.startLabel}</Button>
        </div>
      </>
    )
  }

  return (
    <div className="quiz-layout">
      <aside className="quiz-list">
        <h2 className="body-large-bold">List Soal</h2>
        <ol className="quiz-numbers">
          {questions.map((item, index) => {
            const className = [
              'quiz-number',
              index === current && 'quiz-number-current',
              answers[item.id] !== undefined && 'quiz-number-answered',
            ].filter(Boolean).join(' ')
            return (
              <li key={item.id}>
                <button
                  type="button"
                  className={className}
                  aria-label={`Soal ${index + 1}${answers[item.id] !== undefined ? ', sudah dijawab' : ''}`}
                  aria-current={index === current ? 'step' : undefined}
                  onClick={() => setCurrent(index)}
                >
                  {index + 1}
                </button>
              </li>
            )
          })}
        </ol>
        <p className="quiz-hint">Selesaikan semua soal untuk mengakhiri {rules.label.toLowerCase()}</p>
      </aside>

      <section className="quiz-question" aria-labelledby="question-title">
        <h1 id="question-title" className="heading-5">Pertanyaan {current + 1}</h1>
        <p className="body-large-regular lesson-description">{question.text}</p>

        <div className="quiz-options" role="radiogroup" aria-labelledby="question-title">
          {question.options.map((option, index) => (
            <label
              key={option}
              className={answers[question.id] === index ? 'quiz-option quiz-option-selected' : 'quiz-option'}
            >
              <input
                type="radio"
                name={question.id}
                checked={answers[question.id] === index}
                onChange={() => setAnswers((currentAnswers) => ({ ...currentAnswers, [question.id]: index }))}
              />
              <span className="quiz-radio" aria-hidden="true" />
              {option}
            </label>
          ))}
        </div>

        <div className="quiz-actions">
          <Button
            variant={current === 0 ? 'tertiary-color-3' : 'primary-color-3'}
            disabled={current === 0}
            onClick={() => setCurrent((value) => value - 1)}
          >
            <Icon name="arrow-left" /> Sebelumnya
          </Button>
          {isLast ? (
            <Button variant="secondary-color-1" disabled={!allAnswered} onClick={() => setConfirmOpen(true)}>
              Submit <Icon name="arrow-right" />
            </Button>
          ) : (
            <Button onClick={() => setCurrent((value) => value + 1)}>
              Selanjutnya <Icon name="arrow-right" />
            </Button>
          )}
        </div>
      </section>

      <ConfirmDialog
        open={confirmOpen}
        image={confirmImage}
        title={`Selesaikan ${rules.label}`}
        message={`Apakah kamu yakin untuk menyelesaikan ${rules.label.toLowerCase()} ini?`}
        confirmLabel="Selesai"
        onConfirm={submit}
        onCancel={() => setConfirmOpen(false)}
      />
    </div>
  )
}

export default QuizLesson
