import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import QuizBanner from './QuizBanner.jsx'
import { formatDateTime } from '../../utils/format.js'

function QuizResult({ rules, result, passed, courseDone, onRetry, onContinue }) {
  const tone = !passed ? 'danger' : courseDone ? 'warning' : 'success'

  return (
    <>
      <QuizBanner variant={passed ? 'congrats' : 'try-again'} />
      <div className="lesson-body">
        <h1 className="heading-6">Tanggal {rules.label}:</h1>
        <p className="body-medium-regular lesson-description">{formatDateTime(result.takenAt)}</p>

        <dl className="score-grid">
          <div className={`score-cell score-main score-${tone}`}>
            <dt>Nilai</dt>
            <dd>{result.score}</dd>
          </div>
          <div className="score-cell">
            <dt>Soal</dt>
            <dd>{result.total}</dd>
          </div>
          <div className="score-cell">
            <dt>Benar</dt>
            <dd><Icon name="check-circle" className="text-success" /> {result.correct}</dd>
          </div>
          <div className="score-cell">
            <dt>Salah</dt>
            <dd><Icon name="x-circle" className="text-danger" /> {result.total - result.correct}</dd>
          </div>
        </dl>

        {passed ? (
          <>
            <h2 className="heading-6">Selesai!</h2>
            <p className="body-medium-regular lesson-description">
              {rules.label} sudah selesai dan kami sudah mengetahui progresmu.
            </p>
            <p className="body-medium-regular lesson-description">Saatnya melanjutkan kelas!</p>
            {onContinue && <Button onClick={onContinue}>Lanjut ke Materi Berikutnya</Button>}
          </>
        ) : (
          <>
            <h2 className="heading-6">Sedikit Lagi!</h2>
            <p className="body-medium-regular lesson-description">
              Kamu sudah menyelesaikan {rules.label.toLowerCase()} dengan baik namun nilaimu belum cukup untuk melanjutkan materi.
            </p>
            <p className="body-medium-regular lesson-description">
              Pelajari kembali modul sebelumnya dan kerjakan kembali {rules.label.toLowerCase()} ini!
            </p>
            <Button variant="primary-color-3" onClick={onRetry}>
              <Icon name="refresh" /> Ulangi {rules.label}
            </Button>
          </>
        )}
      </div>
    </>
  )
}

export default QuizResult
