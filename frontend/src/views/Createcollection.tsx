import React, { useState } from 'react'
import { FormControlLabel, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {useNavigate} from 'react-router-dom';


const useStyles = makeStyles({
  // field: {
  //   marginTop: 20,
  //   marginBottom: 20,
  //   display: 'block'
  // },
  title: {
    color: 'green',
    marginBottom: 20
  },
  placeholder:{
    color: 'red'
  }
});


export default function Createcollection() {
  const classes = useStyles();
  const navigate = useNavigate()
  const [newItem, setNewItem] = useState('') 
  const [cost, setCost] = useState('') 
  const [brandMan, setBrandMan] = useState('') 
  const [year, setYear] = useState('')
  const [quantity, setQuantity] = useState('') 
  const [category, setCategory] = useState('comic-book')
  // const [set, setSet] = useState('')
  // const [condition, setCondition] = useState('')

  const [newItemError, setNewItemError] = useState(false) // 103
  const [costError, setCostError] = useState(false)
  const [brandManError, setBrandManError] = useState(false) // 103
  const [yearError, setYearError] = useState(false)
  const [quantityError, setQuantityError] = useState(false)
  // const [setError, setSetError] = useState(false)
  // const [conditionError, setConditionError] = useState(false)

  
  const handleTheSubmit = (e: any) => {
    e.preventDefault()

    setNewItemError(false)
    setCostError(false)
    setBrandManError(false)
    setYearError(false)
    setQuantityError(false)

    if (newItem === '') { 
      setNewItemError(true) 
    }

    if (cost ==='') { 
      setCostError(true) 
    }

    if (brandMan === '') { 
      setBrandManError(true) 
    }

    if (year === '') { 
      setYearError(true) 
    }

    if (quantity === '') {
      setQuantityError(true)
    }


    if (newItem && brandMan && cost && year && category && quantity) {
      fetch('http://localhost:8001/Collections/', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ newItem, category, cost, brandMan, year, quantity })
      }).then(() => navigate('/collections')) 
    }

  }





  return (
  
<Container>
    <Typography className={classes.title} variant="h2" component='h2' gutterBottom align='center'>
        Add to my Collection
    </Typography>

    <form noValidate autoComplete='off' onSubmit={handleTheSubmit}>
        <TextField
          onChange={(e)=> setNewItem(e.target.value)}
          sx={{marginTop: 3, marginBottom: 2, display: 'block'}}
          label="Card Name"
          variant='outlined'
          color='secondary'
          fullWidth // makes form the length of page
          required // adds astrik
          error={newItemError}
          />
            <TextField
          onChange={(e)=> setNewItem(e.target.value)}
          sx={{marginTop: 3, marginBottom: 2, display: 'block'}}
          label="Set"
          variant='outlined'
          color='secondary'
          fullWidth // makes form the length of page
          required // adds astrik
          error={newItemError}
          />
        <TextField
          onChange={(e)=> setCost(e.target.value)}
          sx={{marginTop: 3, marginBottom: 2, display: 'block'}}
          label="Cost"
          variant='outlined'
          color='secondary'
          fullWidth // makes form the length of page
          required // adds astrik
          error={costError}
          >
        </TextField>
        <TextField
          onChange={(e)=> setBrandMan(e.target.value)}
          sx={{marginTop: 3, marginBottom: 2, display: 'block'}}
          label="Brand/Manufacturer"
          variant='outlined'
          color='secondary'
          fullWidth
          required // adds astrik
          error={brandManError}
          >
        </TextField>
        <TextField
          onChange={(e)=> setYear(e.target.value)}
          sx={{marginTop: 3, marginBottom: 2, display: 'block'}}
          label="Condition"
          variant='outlined'
          color='secondary'
          fullWidth
          required // adds astrik
          error={yearError}
          >
        </TextField>
        <TextField
          onChange={(e)=> setQuantity(e.target.value)}
          sx={{marginTop: 3, marginBottom: 2, display: 'block'}}
          label="Quantity"
          variant='outlined'
          color='secondary'
          fullWidth
          required // adds astrik
          error={quantityError}
          >
        </TextField>
      

        <FormControl sx={{marginTop: 3, marginBottom: 2, display: 'block'}}>
        <FormLabel>Item Category</FormLabel>
        <RadioGroup row value={category} onChange={(e) => setCategory(e.target.value)}>
        <FormControlLabel value='comic-book'control={<Radio />} label='Comic-book' />
        <FormControlLabel value='mtg'control={<Radio />} label='MTG' />
        <FormControlLabel value='pokemon'control={<Radio />} label='Pokemon' />
        <FormControlLabel value='digimon'control={<Radio />} label='Digimon' />
        <FormControlLabel value='yugioh'control={<Radio />} label='Yu-gi-oh' />
        <FormControlLabel value='other tcg'control={<Radio />} label='Other TCG' />
        {/* <FormControlLabel value='sportscard'control={<Radio />} label='Sports Card' /> */}
        <FormControlLabel value='toy'control={<Radio />} label='Toy' />
        {/* <FormControlLabel value='nft'control={<Radio />} label='NFT' />
        <FormControlLabel value='funkopop'control={<Radio />} label='FunkoPop' /> */}
        </RadioGroup>
        </FormControl>

        <Button 
        sx={{fontSize: 16,'&:hover': {backgroundColor: 'green'}}} 
        type="submit" 
        variant='contained' 
        endIcon={<SendOutlinedIcon/>}
        >
        Submit
      </Button>
      </form>
      </Container>
  )
}
