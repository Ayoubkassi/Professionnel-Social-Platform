import React from 'react'
import PeopleIcon from '@mui/icons-material/People';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapIcon from '@mui/icons-material/Map';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import { Logo , Span} from '../pages/Login.styles'
import { SideBar , ItemNavbar, Text , Logout } from './Navbar.styles';


const Navbar = () => {
  return (
    <SideBar>
            <Logo>Talent Co<Span>nn</Span>ect</Logo>
            <ItemNavbar>
                <PeopleIcon />
                <Text>Job Offers</Text>
            </ItemNavbar>
            <ItemNavbar>
                <LocalShippingIcon />
                <Text>Candidates</Text>
            </ItemNavbar>
            <ItemNavbar>
                <LocationOnIcon />
                <Text>Post a Job</Text>
            </ItemNavbar>
            <ItemNavbar>
                <MapIcon />
                <Text>My Jobs</Text>
            </ItemNavbar>
            <ItemNavbar>
                <AddIcon />
                <Text>My Profile</Text>
            </ItemNavbar>
            <ItemNavbar>
                <AddIcon />
                <Text>Notifications</Text>
            </ItemNavbar>
            <ItemNavbar>
                <AddIcon />
                <Text>Messages</Text>
            </ItemNavbar>
            <ItemNavbar>
                <AddIcon />
                <Text>About Us</Text>
            </ItemNavbar>
            <ItemNavbar>
                <AddIcon />
                <Text>Contact Us</Text>
            </ItemNavbar>
            <Logout>
                <LogoutIcon />
                <h4>Logout</h4>
            </Logout>
    </SideBar>
  )
}

export default Navbar
