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
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import ClearIcon from '@mui/icons-material/Clear';


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
  const [language, setLanguage] = useState('') 
  const [set, setSet] = useState('')
  const [quantity, setQuantity] = useState('') 
  const [category, setCategory] = useState('MTG')
  const [condition, setCondition] = useState('')
  // const [foil, setFoil] = useState(Boolean)
  // const [autographed, setAutographed] = useState(Boolean)

  const [newItemError, setNewItemError] = useState(false) // 103
  const [costError, setCostError] = useState(false)
  const [languageError, setLanguageError] = useState(false) // 103
  const [setError, setSetError] = useState(false)
  const [quantityError, setQuantityError] = useState(false)
  const [conditionError, setConditionError] = useState(false)


  
  const handleTheSubmit = (e: any) => {
    e.preventDefault()

    setNewItemError(false)
    setCostError(false)
    setLanguageError(false)
    setSetError(false)
    setQuantityError(false)
    setConditionError(false)

    if (newItem === '') { 
      setNewItemError(true) 
    }

    if (cost ==='') { 
      setCostError(true) 
    }

    if (language === '') { 
      setLanguageError(true) 
    }

    if (set === '') { 
      setSetError(true) 
    }

    if (quantity === '') {
      setQuantityError(true)
    }

    if (condition === '') {
      setConditionError(true)
    }

    if (newItem && cost && set && category && quantity && language && condition) {
      fetch('http://localhost:3009/api/item/', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
    body: JSON.stringify({ category, newItem, set, quantity, cost, language, condition, /*foil, autographed */ })
      }).then(() => navigate('/collections')) 
    }

  }





  return (
  
<Container>
    <Typography sx={{mt: 12}} className={classes.title} variant="h2" component='h2' gutterBottom align='center'>
        Add to my Collection
    </Typography>

    <form noValidate autoComplete='off' onSubmit={handleTheSubmit}>
    <FormControl sx={{marginTop: 1, marginBottom: 2, display: 'block', }}>
        <RadioGroup row value={category} onChange={(e) => setCategory(e.target.value)}>
        <FormControlLabel value='MTG'control={<Radio />} label='MTG' />
        <FormControlLabel value='Pokemon'control={<Radio />} label='Pokemon' />
        <FormControlLabel value='Digimon'control={<Radio />} label='Digimon' />
        <FormControlLabel value='Yu-Gi-Oh'control={<Radio />} label='Yu-gi-oh' />
        <FormControlLabel value='Other TCG'control={<Radio />} label='Other TCG' />
        </RadioGroup>
        </FormControl>
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
          onChange={(e)=> setSet(e.target.value)}
          sx={{marginTop: 3, marginBottom: 2, display: 'block'}}
          label="Set"
          variant='outlined'
          color='secondary'
          fullWidth // makes form the length of page
          required // adds astrik
          error={setError}
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
          onChange={(e)=> setLanguage(e.target.value)}
          sx={{marginTop: 3, marginBottom: 2, display: 'block'}}
          label="Language"
          variant='outlined'
          color='secondary'
          fullWidth
          required // adds astrik
          error={languageError}
          >
        </TextField>
        <TextField
          onChange={(e)=> setCondition(e.target.value)}
          sx={{marginTop: 3, marginBottom: 2, display: 'block'}}
          label="Condition"
          variant='outlined'
          color='secondary'
          fullWidth
          required // adds astrik
          error={conditionError}
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
      
        <FormControl sx={{marginTop: -1, marginBottom: 5, display: 'block', }}>
        <FormControlLabel control={<Checkbox />} label="Foil" />
        <FormControlLabel control={<Checkbox />} label="Autographed" />
        </FormControl>

        <Button 
        sx={{fontSize: 16,'&:hover': {backgroundColor: 'green'}, marginTop: -7}} 
        type="submit" 
        variant='contained' 
        endIcon={<SendOutlinedIcon/>}
        >
        Submit
      </Button>
      <Button 
        sx={{fontSize: 16,'&:hover': {backgroundColor: 'green'}, marginTop: -7, marginLeft: 1}} 
        type="reset" 
        variant='contained' 
        endIcon={<ClearIcon/>}
        >
        Clear
      </Button>
      </form>
      </Container>
  )
}
