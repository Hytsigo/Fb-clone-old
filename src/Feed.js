import './Feed.css'
import { MessageSender } from './MessageSender'
import { StoryReel } from './StoryReel'

export const Feed = () => {
  return (
    <div className="feed">
        <StoryReel />
        <MessageSender />

    </div>
  )
}
