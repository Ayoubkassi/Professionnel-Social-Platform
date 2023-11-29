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
        <Navbar />
        <Main>
            <Cards>
                <Card>
                    <PersonAddIcon className='mb-4'/>
                    <p>Ajouter des clients</p>
                </Card>
                <Card>
                    <PersonAddIcon className='mb-4'/>
                    <p>Ajouter des clients</p>
                </Card>
                <Card>
                    <PersonAddIcon className='mb-4'/>
                    <p>Ajouter des clients</p>
                </Card>
            </Cards>
            <Title>Liste des clients</Title>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 350 }} aria-label="simple table">
                    <TableHead>
                    <TableRow style={{backgroundColor: '#0e1344'}}>
                        <TableCell style={{ color : 'white'}} >Identifiant</TableCell>
                        <TableCell  style={{ color : 'white'}} align="center">Name</TableCell>
                        <TableCell  style={{ color : 'white'}} align="center">Type Client</TableCell>
                        <TableCell  style={{ color : 'white'}} align="center">Net worth</TableCell>
                        <TableCell  style={{ color : 'white'}} align="center">Orders</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.identifiant}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.identifiant}
                        </TableCell>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell align="center">{row.typeClient}</TableCell>
                        <TableCell align="center">{row.netWorth}</TableCell>
                        <TableCell align="center">{row.orders}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
                <Title>Orders</Title>
                <ResponsiveContainer width="90%" height="40%" >
                    <BarChart
                    width={500}
                    height={300}
                    data={rows}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="orders" stackId="a" fill="#8884d8" />
                    <Bar dataKey="credits" stackId="a" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
        </Main>
    </Container>
  )
}

export default Dashboard
