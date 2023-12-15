import './JobCandidates.css';
import '../App.css';
import Header from '../components/Header';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar } from '@mui/material';
import myImage from '../assets/me.jpg'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function createData(username, genre, imageUrl, age , action) {
  return { username, genre, imageUrl, age , action  };
}

const initialRows = [
  createData('Ayoub Kassi', 'male', myImage, 23),
  createData('Youssef Firi', 'male', myImage, 32),
  createData('Krace Mui', 'male', myImage, 19),
  createData('Steven bow', 'male', myImage, 24),
  createData('Amine Sah', 'male', myImage, 27),
  createData('Steve jiytiens', 'male', myImage, 27),
];

function JobCandidates() {

  const [rows, setRows] = React.useState(initialRows);

  const handleReject = (username) => {

    const updatedRows = rows.filter((row) => row.username !== username);
    setRows([...updatedRows]); // Create a new array
    console.log(rows.length);
  };

  return (
    <div className='job__candidates app'>
      <Header />
      <h1> This Job Candidates </h1>
      {/* <TableContainer component={Paper}> */}
      <div className="table"  style={{ marginTop: '50px', padding: '50px' }}>
        <Table  sx={{ minWidth: 650, backgroundColor: '#0e1344', color: 'white!important' }} aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell style={{ color : 'white'  }} align="center" sx={{ width: '0%' }}>Image</TableCell>
              <TableCell style={{ color : 'white' }} align="center" sx={{ width: '25%' }}>Username</TableCell>
              <TableCell style={{ color : 'white'  }} align="center" sx={{ width: '25%' }}>Genre</TableCell>
              <TableCell style={{ color : 'white'  }} align="center" sx={{ width: '25%' }}>Age</TableCell>
              <TableCell style={{ color : 'white'  }} align="center" sx={{ width: '25%' }}>Action</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.username}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  <Avatar src={row.imageUrl} />
                </TableCell>
                <TableCell align="center" style={{ color : 'white' }} >{row.username}</TableCell>
                <TableCell align="center" style={{ color : 'white' }}>{row.genre}</TableCell>
                <TableCell align="center" style={{ color : 'white' }}>{row.age}</TableCell>
                <TableCell align='center'> <Button onClick={() => handleReject(row.username)} variant="outlined" color="error" startIcon={<DeleteIcon />}>Reject</Button> </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      {/* </TableContainer> */}
    </div>
  );
}

export default JobCandidates;
