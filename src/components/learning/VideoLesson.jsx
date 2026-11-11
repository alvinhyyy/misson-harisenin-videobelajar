import VideoPlayer from './VideoPlayer.jsx'
import InstructorInfo from '../course/InstructorInfo.jsx'
import RatingStars from '../ui/RatingStars.jsx'

function VideoLesson({ lesson, course, onComplete }) {
  return (
    <>
      <VideoPlayer title={lesson.title} onPlay={onComplete} />
      <div className="lesson-body">
        <h1 className="heading-5">{lesson.heading}</h1>
        <p className="body-large-regular lesson-description">{lesson.description}</p>
        <InstructorInfo {...course.instructor} />
        <RatingStars rating={course.rating} reviews={course.reviews} />
      </div>
    </>
  )
}

export default VideoLesson
