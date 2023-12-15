import './Header.css'
import WorkIcon from '@mui/icons-material/Work';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import myImage from './../assets/me.jpg' 


const Header = () => {

  return (
    <div className="header">
      
      <div className="header__left">
            <a href="/"  style={{ color : 'inherit' , textDecoration : 'none' }}>
             <WorkIcon sx={{color: "white"}} style={{ fontSize: 38 }} />
            </a>
            <div className="header__search">
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 , height: 40 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>

            </Paper>
            </div>
      </div>
      <div className="header__right">
            <a href="/"  style={{ color : 'inherit' , textDecoration : 'none' }}>
              <HeaderOption title="Home" Icon={HomeIcon} />
            </a>
            <HeaderOption title="Candidates" Icon={GroupIcon} />
            <a href="/myjobs"  style={{ color : 'inherit' , textDecoration : 'none' }}>
            <HeaderOption title = "Jobs" Icon={ LocalOfferIcon } />
            </a>
            <HeaderOption title = "Notifications" Icon={NotificationsIcon} />
            <a href="/profile"  style={{ color : 'inherit' , textDecoration : 'none' }}>
              <HeaderOption title="me" avatar={myImage} />
            </a>
      </div>
    </div>
  )
}

export default Header
