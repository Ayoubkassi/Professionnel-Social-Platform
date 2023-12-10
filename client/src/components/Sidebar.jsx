import { Avatar } from '@mui/material'
import './Sidebar.css'
import myImage from './../assets/me.jpg' 


function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702080000&semt=sph" alt="" />
        <Avatar src={myImage} />
        <h2>Ayoub Kassi</h2>
        <h4>Back end engineer at Datadog</h4>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">3,632</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">2,122</p>
            </div>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  )
}

export default Sidebar
