import { Avatar } from '@mui/material';
import './MessageSender.css';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';


export const MessageSender = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="messageSender">

      <div className="messageSender__top">
        <Avatar /> 
        <form>
          <input 
          className='messageSender__input'
          placeholder={'Que estas pensando?'}
          />

          <input placeholder='URL de imagen (Opcional)' />

          <button onClick={handleSubmit} type="submit">Hidden submit</button>
        </form>


      </div>
      <div class="messageSender__bottom">
        <div class="messageSender__option">
          <VideocamIcon style ={{color: "red"}} />
          <h3>Live Video</h3>
        </div>
        <div class="messageSender__option">
          <PhotoLibraryIcon style ={{color: "green"}} />
          <h3>Photo/Video</h3>
        </div>
        <div class="messageSender__option">
          <InsertEmoticonIcon style ={{color: "orange"}} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>

    </div>
  )
}
