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

function Post({ name , description , message , photoUrl }) {
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

      <div className="post__buttons">
        <InputOption Icon={SendOutlinedIcon} title = "Apply" color="gray" />
        <InputOption Icon={ThumbUpAltOutlinedIcon} title = "Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title = "Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title = "Share" color="gray" />
      </div>
    </div>
  )
}

export default Post
