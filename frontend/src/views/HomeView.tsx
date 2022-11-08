import React from 'react'
import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Typography } from '@mui/material'
import { makeStyles } from "@mui/styles";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import { experimentalStyled as styled } from '@mui/material/styles';
import StraightIcon from '@mui/icons-material/Straight';
import {CardMedia} from '@mui/material';
import SouthIcon from '@mui/icons-material/South';
// import MoveStuffAround from '../components/Ticker';
// import { Theme } from '@mui/material/styles';



function createData(name: any, cost: any, percentage: any, up_down: any) {
  return { name, cost, percentage, up_down };
}

const rowsup = [
  createData('Black Lotus', '$50,000', '10%',<StraightIcon /> ),
  createData('Black Lotus', '$50,000', '10%',<StraightIcon /> ),
  createData('Black Lotus', '$50,000', '10%',<StraightIcon /> ),
  createData('Black Lotus', '$50,000', '10%',<StraightIcon /> ),
  createData('Black Lotus', '$50,000', '10%',<StraightIcon /> ),
];

const rowsdown = [
  createData('Mew', '$50,000', '10%',<SouthIcon /> ),
  createData('Mew', '$50,000', '10%',<SouthIcon /> ),
  createData('Mew', '$50,000', '10%',<SouthIcon /> ),
  createData('Mew', '$50,000', '10%',<SouthIcon /> ),
  createData('Mew', '$50,000', '10%',<SouthIcon /> ),
];


const useStyles = makeStyles((theme) => {
  return{
  page: {
      background: '#E5E4E2',
      width: '100%',
      // padding: theme.spacing(1) 
  },
  featured: {
    /* padding: theme.spacing(8) */
  },
  tablerow: {
    /* padding: theme.spacing(2) */

  }
}})


export default function Home() {
  const classes = useStyles()

  return (
    <div>
        <Typography sx={{mt: 6}} className={classes.page} variant='h1' color='#ff7961' align='center'>
          Kokoelmani
        </Typography>
        {/* <MoveStuffAround />  */}
        <Typography className={classes.featured} variant='h4' sx={{color: 'green', mt: 6}} align='center'>
          Featured High's of the Day
        </Typography>
        <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 350,
          height: 430,
          backgroundColor: '#efe4e2',
        },
      }}
    >
       <TableContainer component={Paper} elevation={13}> 
        <Table aria-label="simple table">
          <TableHead>
              <TableCell>MTG</TableCell>
          </TableHead>
          <TableBody>
          {rowsup.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <CardMedia 
                  sx={{paddingTop: '98%'}}
                  image="https://lorempokemon.fakerapi.it/pokemon"
                  title="Image title"
                />
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
      
      <TableContainer component={Paper} elevation={13}> 
        <Table aria-label="simple table">
          <TableHead>
              <TableCell>Poke</TableCell>
          </TableHead>
          <TableBody>
          {rowsup.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <CardMedia 
                  sx={{paddingTop: '98%'}}
                  image="https://lorempokemon.fakerapi.it/pokemon/452"
                  title="Image title"
               />
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

      <TableContainer component={Paper} elevation={13}> 
        <Table aria-label="simple table">
          <TableHead>
              <TableCell>Toys</TableCell>
          </TableHead>
          <TableBody>
          {rowsup.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <CardMedia 
                  sx={{paddingTop: '98%'}}
                  image="https://lorempokemon.fakerapi.it/pokemon/123"
                  title="Image title"
                />
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

      <TableContainer component={Paper} elevation={13}> 
        <Table aria-label="simple table">
          <TableHead>
              <TableCell>Comic</TableCell>
          </TableHead>
          <TableBody>
          {rowsup.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <CardMedia 
                  sx={{paddingTop: '98%'}}
                  image="https://lorempokemon.fakerapi.it/pokemon/145"
                  title="Image title"
                />
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

      <TableContainer component={Paper} elevation={13}> 
        <Table aria-label="simple table">
          <TableHead>
              <TableCell>Digi</TableCell>
          </TableHead>
          <TableBody>
          {rowsup.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <CardMedia 
                 sx={{paddingTop: '98%'}}
                 image="https://lorempokemon.fakerapi.it/pokemon/142"
                title="Image title"
               />
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
      
    </Box>

    <Typography className={classes.featured} variant='h4'sx={{color: 'red', mt: 6}} align='center'>
          Featured Low's of the Day
        </Typography>


        <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 350,
          height: 430,
          backgroundColor: '#efe4e2',
        },
      }}
    >
       <TableContainer component={Paper} elevation={13}> 
        <Table aria-label="simple table">
          <TableHead>
              <TableCell>MTG</TableCell>
          </TableHead>
          <TableBody>
          {rowsdown.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <CardMedia 
                  sx={{paddingTop: '98%'}}
                  image="https://lorempokemon.fakerapi.it/pokemon/45"
                  title="Image title"
               />
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
      
      <TableContainer component={Paper} elevation={13}> 
        <Table aria-label="simple table">
          <TableHead>
              <TableCell>Poke</TableCell>
          </TableHead>
          <TableBody>
          {rowsdown.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <CardMedia 
                  sx={{paddingTop: '98%'}}
                  image="https://lorempokemon.fakerapi.it/pokemon/82"
                  title="Image title"
                />
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

      <TableContainer component={Paper} elevation={13}> 
        <Table aria-label="simple table">
          <TableHead>
              <TableCell>Toys</TableCell>
          </TableHead>
          <TableBody>
          {rowsdown.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <CardMedia 
                  sx={{paddingTop: '98%'}}
                  image="https://lorempokemon.fakerapi.it/pokemon/2563"
                  title="Image title"
                />
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

      <TableContainer component={Paper} elevation={13}> 
        <Table aria-label="simple table">
          <TableHead>
              <TableCell>Comic</TableCell>
          </TableHead>
          <TableBody>
          {rowsdown.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <CardMedia 
                  sx={{paddingTop: '98%'}}
                  image="https://lorempokemon.fakerapi.it/pokemon/1045"
                  title="Image title"
                />
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

      <TableContainer component={Paper} elevation={13}> 
        <Table aria-label="simple table">
          <TableHead>
              <TableCell>Digi</TableCell>
          </TableHead>
          <TableBody>
          {rowsdown.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <CardMedia 
                  sx={{paddingTop: '98%'}}
                  image="https://lorempokemon.fakerapi.it/pokemon/485"
                  title="Image title"
                />
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
      
    </Box>
        

        
    </div>
  )
}
