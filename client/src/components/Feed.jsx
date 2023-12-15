import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Feed = () => {
  
  const [posts , setPosts] = useState([1,2]);  

  const createPost = (e) => {
    e.preventDefault();
  }

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/jobs');
      console.log('Data', response.data);
      setPosts(response.data);
    } catch (error) {
      console.error('Fetching data failed', error.response?.data || 'Unknown error');
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount


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

        { posts.map(post =>  <Post name={post.creator} description="Recruiter in Datadog" message={post.description} />) }
     
    </div>
  )
}

export default Feed
