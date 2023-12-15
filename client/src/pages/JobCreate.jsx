import React, { useState } from 'react';
import Header from '../components/Header';
import '../App.css';
import './EditProfile.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function JobCreate() {

    const getCurrentTimestamp = () => {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().slice(0, 19).replace('T', ' '); // Format: YYYY-MM-DD HH:mm:ss
        return formattedDate;
      };

  const [jobDetails, setJobDetails] = useState({
    title: '',
    salary: '',
    location: '',
    type: 'FullTime',
    description: ''
  });

  const jobTypes = [
    { value: 'Stage', label: 'Stage' },
    { value: 'CDD', label: 'FullTime' },
    { value: 'CDD', label: 'PartTime' },
    { value: 'Freelance', label: 'Freelance' },
  ];

  const navigate = useNavigate();

 

  const handleCreateJob = async () => {
    try {
      // Make a POST request to your API endpoint with the job details
      const response = await axios.post('http://localhost:5000/api/v1/jobs', jobDetails);

      // Handle successful job creation, e.g., show a success message or redirect
      console.log('Job created successfully', response.data);

      // Optionally, you can reset the form or perform other actions after job creation
      setJobDetails({
        title: '',
        salary: '',
        location: '',
        type: 'FullTime',
        description: ''
      });

      navigate('/');
    } catch (error) {
      // Handle job creation error
      console.error('Job creation failed', error.response?.data || 'Unknown error');
    }
  };

  const handleChange = (e) => {
    setJobDetails({
      ...jobDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="app edit">
      <Header />
      <div className="edit__body">
        <h1 className="editTitle">Create Job Offer</h1>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="rowa">
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              style={{ width: '100%', marginRight: '20px' }}
              name="title"
              value={jobDetails.title}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Salary"
              variant="outlined"
              style={{ width: '100%' }}
              name="salary"
              value={jobDetails.salary}
              onChange={handleChange}
            />
          </div>

          <div className="rowa">
            <TextField
              id="outlined-basic"
              label="Location"
              variant="outlined"
              style={{ width: '100%', marginRight: '20px' }}
              name="location"
              value={jobDetails.location}
              onChange={handleChange}
            />
            <TextField
              id="outlined-select-currency"
              select
              label="Type"
              defaultValue="FullTime"
              helperText="Please select your job Type"
              style={{ width: '100%' }}
              name="type"
              value={jobDetails.type}
              onChange={handleChange}
            >
              {jobTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className="rowa">
            <TextField
              style={{ width: '100%', marginRight: '20px' }}
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              defaultValue=""
              name="description"
              value={jobDetails.description}
              onChange={handleChange}
            />
          </div>
        </Box>

        <div className="button">
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            style={{ margin: '15px 10px' }}
            onClick={handleCreateJob}
          >
            Create Job
          </Button>
        </div>
      </div>
    </div>
  );
}

export default JobCreate;
