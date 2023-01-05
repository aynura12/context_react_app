import React , { useState,useEffect }from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Button } from '@mui/material';
const Mytable = () => {
    const [data, setData] = useState(null)
    let URL = "https://northwind.vercel.app/api/products"

    useEffect(()=>{
        axios.get(URL).then((res)=>setData(res.data))
    },[])
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow style={{backgroundColor:"rgb(86, 165, 240)"}}>
                            <TableCell>Id</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">unitPrice</TableCell>
                            <TableCell align="center">unitsInStock</TableCell>
                            <TableCell align="center">reorderLevel</TableCell>
                            <TableCell align="center">Add button</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { data && data.map((data) => (
                            <TableRow
                              
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {data.id}
                                </TableCell>
                                <TableCell align="center">{data.name}</TableCell>
                                <TableCell align="center">{data.unitPrice}</TableCell>
                                <TableCell align="center">{data.unitsInStock}</TableCell>
                                <TableCell align="center">{data.reorderLevel}</TableCell>
                                <TableCell align="center"><Button variant="contained">Add</Button></TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Mytable
