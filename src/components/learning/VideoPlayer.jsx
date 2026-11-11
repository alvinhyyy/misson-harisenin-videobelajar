import { useState } from 'react'
import Icon from '../ui/Icon.jsx'

function VideoPlayer({ title, onPlay }) {
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    setPlaying((value) => !value)
    if (!playing) onPlay?.()
  }

  return (
    <div className="video-player">
      <div className="video-screen">
        <button
          type="button"
          className={playing ? 'video-play video-playing' : 'video-play'}
          onClick={handlePlay}
          aria-label={playing ? `Jeda ${title}` : `Putar ${title}`}
        >
          {playing ? <span className="video-pause" aria-hidden="true" /> : <Icon name="play" size={48} />}
        </button>
        {playing && (
          <div className="video-progress" aria-hidden="true">
            <span />
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoPlayer
