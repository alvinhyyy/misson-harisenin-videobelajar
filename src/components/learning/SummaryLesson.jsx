import VideoPlayer from './VideoPlayer.jsx'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import { modules } from '../../data/curriculum.js'

function buildSummary(course) {
  const lines = [
    `Rangkuman Modul - ${course.title}`,
    `Tutor: ${course.instructor.name}`,
    '',
    ...modules.flatMap((module) => [
      module.title,
      ...module.lessons.map((lesson) => `- ${lesson.title}${lesson.description ? `: ${lesson.description}` : ''}`),
      '',
    ]),
  ]
  return lines.join('\n')
}

function SummaryLesson({ lesson, course, onComplete }) {
  const handleDownload = () => {
    const blob = new Blob([buildSummary(course)], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `rangkuman-${course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.txt`
    link.click()
    URL.revokeObjectURL(url)
    onComplete()
  }

  return (
    <>
      <VideoPlayer title={lesson.title} onPlay={onComplete} />
      <div className="lesson-body">
        <h1 className="heading-5">Download Rangkuman Modul</h1>
        <p className="body-medium-regular lesson-description">Silakan download rangkuman modul dari materi yang telah kamu pelajari</p>
        <Button variant="primary-color-3" onClick={handleDownload}>
          <Icon name="download" /> Download Rangkuman
        </Button>
      </div>
    </>
  )
}

export default SummaryLesson
