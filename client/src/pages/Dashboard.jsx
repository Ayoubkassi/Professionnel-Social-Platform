import React , { PureComponent } from 'react'
import {  Main , Container, Cards , Card , Title} from './Dashboard.styles'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbar from '../components/Navbar';
import MUINavbar from '../components/MUINavbar';


const Dashboard = () => {

    const createData = (
        identifiant,
        name,
        typeClient,
        netWorth,
        orders,
        credits
      ) => {
        return { identifiant , name, typeClient , netWorth , orders , credits};
      }

    const rows = [
        createData(1,"Mthieu" ,"Agriculteur" , "48000$", 178 , 66 ),
        createData(2,"Henry" ,"Agriculteur" , "167000$", 1211 , 312),
        createData(3,"Pierre" ,"Agriculteur" , "1400$", 576, 102),
        createData(4,"Bruno" ,"Cooperative" , "32000$" ,268,63),
        createData(5,"Enubi" ,"Agriculteuse" , "82000$" ,768,333),
        createData(6,"Hector" ,"Cooperative" , "122000$" ,368,123)
    ];

  return (
    <Container>
        <MUINavbar />
        <Main>
            
        </Main>
    </Container>
  )
}

export default Dashboard
