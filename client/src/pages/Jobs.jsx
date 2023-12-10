
import './Jobs.css';
import '../App.css';
import Header from '../components/Header';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import JobCard from '../components/JobCard';



function Jobs() {
  return (
    <div className='app jobs'>
        <Header />
        <h1>My Jobs</h1>
        <Box sx={{ width: '100%' , padding : '100px'}}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3}>
                    <JobCard />
                </Grid>
                <Grid item xs={3}>
                    <JobCard />
                </Grid>
                <Grid item xs={3}>
                    <JobCard />
                </Grid>
                <Grid item xs={3}>
                    <JobCard />
                </Grid>
                <Grid item xs={3}>
                    <JobCard />
                </Grid>
                <Grid item xs={3}>
                    <JobCard />
                </Grid>
            </Grid>
        </Box>
      
    </div>
  )
}

export default Jobs
