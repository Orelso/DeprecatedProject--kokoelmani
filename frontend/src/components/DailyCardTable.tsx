import React from 'react'
import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Typography, Card } from '@mui/material'
import { makeStyles } from "@mui/styles";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import StraightIcon from '@mui/icons-material/Straight';


function createData(name: any, cost: any, percentage: any, up_down: any) {
    return { name, cost, percentage, up_down };
  }
  

function rowsup(){
     return [
    createData('Black Lotus', '$50,000', '10%',<StraightIcon /> ),
    createData('Black Lotus', '$50,000', '10%',<StraightIcon /> ),
    createData('Black Lotus', '$50,000', '10%',<StraightIcon /> ),
    createData('Black Lotus', '$50,000', '10%',<StraightIcon /> ),
    createData('Black Lotus', '$50,000', '10%',<StraightIcon /> ),
  ]}
  
//   const rowsdown = [
//     createData('Mew', '$50,000', '10%',<SouthIcon /> ),
//     createData('Mew', '$50,000', '10%',<SouthIcon /> ),
//     createData('Mew', '$50,000', '10%',<SouthIcon /> ),
//     createData('Mew', '$50,000', '10%',<SouthIcon /> ),
//     createData('Mew', '$50,000', '10%',<SouthIcon /> ),
//   ];

export default function DailyCardTable() {
    return (
        <TableContainer component={Paper} elevation={13}> 
        <Table aria-label="simple table">
          {/* <TableHead>
              <TableCell>MTG</TableCell>
          </TableHead> */}
          <TableBody>
          {rowsup().map((row, index) => (
            <TableRow
              key={row.name + index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>
               <img 
                  // style={{paddingTop: '98%'}}
                  src="https://lorempokemon.fakerapi.it/pokemon"
                  title="Image title"
                  alt="img"
                  width="47"
                ></img>
                </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.cost}</TableCell>
              <TableCell align="right">{row.percentage}</TableCell>
              <TableCell align="right">{row.up_down}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
    )
  }
