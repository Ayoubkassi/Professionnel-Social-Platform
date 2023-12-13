import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { useState } from 'react';

const Feed = () => {
  
  const [posts , setPosts] = useState([1,2,3,4,5]);  

  const createPost = (e) => {
    e.preventDefault();
  }


  return (
    
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed_input">
            <CreateIcon />
            <form>
                <input type="text" />
                <button onClick={createPost} type="submit">Send</button>
            </form>
        </div>
        <div className="feed__inputOptions">
            <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
            <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
            <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
            <InputOption title="Write article" Icon={CalendarViewDayIcon} color="#7FCA5E" />
        </div>
      </div> 

        { posts.map(post =>  <Post name="Hamid Zghanghan" description="Recruiter in Datadog" message="We are recruiting for our summer internships software engineering , be ready and pick ur keyboard!!"/>) }
     
    </div>
  )
}

export default Feed
