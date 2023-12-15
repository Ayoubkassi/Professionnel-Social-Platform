import './Post.css'
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import myImage from '../assets/datadog.jpeg';
import scar from '../assets/scar.jpg';
import jobImage from '../assets/job.jpg'
import axios from 'axios';
import { useState , useEffect } from 'react';


function Post({idPost, name , description , message , photoUrl }) {

  const id = localStorage.getItem('userId');

  const applyToJob = async () => {
    try {
      const userId = parseInt(id, 10); // Convert id to integer if needed
      const jobId = idPost; // Assuming idPost is the job ID

      // Make a POST request to the applyForJob endpoint
      const response = await axios.post(`http://localhost:5000/api/v1/users/${userId}/apply/${jobId}`);
      
      // Handle the response as needed (optional)
      console.log('Apply for job successful', response.data);
    } catch (error) {
      // Handle the error
      console.error('Apply for job failed', error.response?.data || 'Unknown error');
    }
  }

  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={scar} />
        <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
        <img src={jobImage} alt="" className='post__image' />
      </div>

      <div onClick={ applyToJob } className="post__buttons">
        <InputOption  Icon={SendOutlinedIcon} title = "Apply" color="gray" />
        <InputOption Icon={ThumbUpAltOutlinedIcon} title = "Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title = "Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title = "Share" color="gray" />
      </div>
    </div>
  )
}

export default Post
