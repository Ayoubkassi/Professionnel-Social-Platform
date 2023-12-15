import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import '../App.css'
import './EditProfile.css'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



 

function EditProfile() {

  const [user , setUser] = useState({});

  const navigate = useNavigate();

  const [updatedUser, setUpdatedUser] = useState({
    username: '',
    email: '',
    education: '',
    contactInformation: '',
    workExperience: '',
    skills: '',
  });

  const id = localStorage.getItem('userId');

  const fetchUserData = async () => {

    try {
      const response = await axios.get(`http://localhost:5000/api/v1/users/${id}`);
      console.log('Data', response.data);

      setUpdatedUser({
        username: response.data.username,
        email: response.data.email,
        education: response.data.education,
        contactInformation: response.data.contactInformation,
        workExperience: response.data.workExperience,
        skills: response.data.skills,
      });
      
      setUser(response.data);
    } catch (error) {
      console.error('Fetching data failed', error.response?.data || 'Unknown error');
    }
    
  }

  const updateProfile = async () => {
    try {
      // Make a PUT request to your API endpoint with the updated user data

      console.log('updated , ',updatedUser);
      const response = await axios.put(`http://localhost:5000/api/v1/users/${id}`, updatedUser);

      // Handle successful profile update, e.g., show a success message or redirect
      console.log('Profile updated successfully', response.data);

      // Optionally, you can update the local state with the new user data
      setUser(response.data);

      // Reset the updatedUser state
      // setUpdatedUser({
      //   username: '',
      //   email: '',
      //   education: '',
      //   contactInformation: '',
      //   workExperience: '',
      //   skills: '',
      // });

      navigate('/profile');
    } catch (error) {
      // Handle profile update error
      console.error('Profile update failed', error.response?.data || 'Unknown error');
    }
  };

  const handleChange = (e) => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value,
    });
  };


  useEffect(() => {
      fetchUserData();
  },[])

  return (
    <div className='app edit'>
       <Header />
       <div className="edit__body">
        <h1 className='editTitle'>Edit Profile</h1>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div className='rowa'>
            <TextField name="username" value={updatedUser.username}  
              onChange={handleChange} placeholder={user.username} defaultValue={user.username} id="outlined-basic" label="Username" variant="outlined" style={{width : '100%' , marginRight : '20px'}} />
            <TextField  name="email"
              value={updatedUser.email}
              onChange={handleChange} placeholder={user.email} defaultValue={user.email} id="outlined-basic" label="Email" variant="outlined" style={{width : '100%'}} />
          </div>

          <div className='rowa'>
            <TextField  name="education"
              value={updatedUser.education}
              onChange={handleChange} placeholder={user.education} defaultValue={user.education} id="outlined-basic" label="Education" variant="outlined" style={{width : '100%' , marginRight : '20px'}} />
            <TextField  name="contactInformation"
              value={updatedUser.contactInformation}
              onChange={handleChange} placeholder={user.contactInformation} defaultValue={user.contactInformation} id="outlined-basic" label="Contact Information" variant="outlined" style={{width : '100%'}} />
          </div>

          <div className='rowa'>
              <TextField
              style={{width : '100%' , marginRight : '20px'}}
              id="outlined-multiline-static"
              label="workExperience"
              multiline
              rows={4}
              name="workExperience"
              value={updatedUser.workExperience}
              onChange={handleChange}
              placeholder={user.workExperience} defaultValue={user.workExperience}
            />

            <TextField
            style={{width : '100%' }}
              id="outlined-multiline-static"
              label="Skills"
              multiline
              defaultValue=""
              rows={4}
              name="skills"
              value={updatedUser.skills}
              onChange={handleChange}
            />
          </div>

        </Box>
        
        <div className="button" >
          <Button variant="contained" endIcon={<SendIcon />} style={{ margin : '15px 10px' }} onClick={updateProfile}  >
            Edit
          </Button>
        </div>
       </div>
    </div>
  )
}

export default EditProfile
