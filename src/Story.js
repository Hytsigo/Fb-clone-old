import { Avatar } from '@mui/material'
import './Story.css'

export const Story = ({image, profileSrc, title }) => {
  return (
    <div style={{backgroundImage: `url(${image})`}} className="story">
        <Avatar className='story__avatar' src={profileSrc}/>

        {/* <Avatar src={profileSrc}/> */}
        <h4>{title}</h4>

    </div>
  )
}
