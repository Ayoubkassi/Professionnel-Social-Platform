import React from 'react'
import Header from '../components/Header'
import '../App.css'
import './EditProfile.css'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import MenuItem from '@mui/material/MenuItem';



function CreateJob() {

    const jobTypes = [
        {
          value: 'Stage',
          label: 'stage',
        },
        {
          value: 'CDD',
          label: 'FullTime',
        },
        {
          value: 'CDD',
          label: 'PartTime',
        },
        {
          value: 'Freelance',
          label: 'freelance',
        },
      ];
  return (
    <div className='app edit'>
       <Header />
       <div className="edit__body">
        <h1 className='editTitle'>Create Job Offer</h1>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div className='row'>
            <TextField id="outlined-basic" label="Title" variant="outlined" style={{width : '100%' , marginRight : '20px'}} />
            <TextField id="outlined-basic" label="Salary" variant="outlined" style={{width : '100%'}} />
          </div>

          <div className='row'>
            <TextField id="outlined-basic" label="Location" variant="outlined" style={{width : '100%' , marginRight : '20px'}} />
            <TextField
                id="outlined-select-currency"
                select
                label="Type"
                defaultValue="FullTime"
                helperText="Please select your job Type"
                style={{ width: "100%" }}
            >
          {jobTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>          </div>

          <div className='row'>
              <TextField
              style={{width : '100%' , marginRight : '20px'}}
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              defaultValue=""
            />

          </div>

        </Box>
        
        <div className="button" >
          <Button variant="contained" endIcon={<SendIcon />} style={{ margin : '15px 10px' }}  >
            Create Job
          </Button>
        </div>
       </div>
    </div>
  )
}

export default CreateJob
