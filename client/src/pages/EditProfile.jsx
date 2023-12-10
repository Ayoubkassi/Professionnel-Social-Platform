import React from 'react'
import Header from '../components/Header'
import '../App.css'
import './EditProfile.css'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';



function EditProfile() {
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
          <div className='row'>
            <TextField id="outlined-basic" label="Username" variant="outlined" style={{width : '100%' , marginRight : '20px'}} />
            <TextField id="outlined-basic" label="Email" variant="outlined" style={{width : '100%'}} />
          </div>

          <div className='row'>
            <TextField id="outlined-basic" label="Education" variant="outlined" style={{width : '100%' , marginRight : '20px'}} />
            <TextField id="outlined-basic" label="Contact Information" variant="outlined" style={{width : '100%'}} />
          </div>

          <div className='row'>
              <TextField
              style={{width : '100%' , marginRight : '20px'}}
              id="outlined-multiline-static"
              label="workExperience"
              multiline
              rows={4}
              defaultValue=""
            />

            <TextField
            style={{width : '100%' }}
              id="outlined-multiline-static"
              label="Skills"
              multiline
              rows={4}
              defaultValue=""
            />
          </div>

        </Box>
        
        <div className="button" >
          <Button variant="contained" endIcon={<SendIcon />} style={{ margin : '15px 10px' }}  >
            Edit
          </Button>
        </div>
       </div>
    </div>
  )
}

export default EditProfile
