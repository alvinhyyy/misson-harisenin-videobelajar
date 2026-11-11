import rulesBanner from '../../assets/banner-rules.png'
import tryAgainBanner from '../../assets/banner-try-again.png'

const images = { rules: rulesBanner, 'try-again': tryAgainBanner }

function QuizBanner({ variant }) {
  if (variant === 'congrats') {
    return (
      <div className="quiz-banner quiz-banner-congrats" role="img" aria-label="Congrats">
        <span>CONGRATS</span>
      </div>
    )
  }

  return <img className="quiz-banner" src={images[variant]} alt={variant === 'rules' ? 'Rules' : 'Try again'} />
}

export default QuizBanner
