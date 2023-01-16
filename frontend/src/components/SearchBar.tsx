import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { useState } from "react";
import { getHome } from '../actions/demoActions';
import { useThunkDispatch } from '../reducers';
import axios from 'axios';




const FilterCard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleOnClick = ({ target: { value } }: any) => {
    setSearchTerm(value);
    // make a GET request to the server with the searchTerm as a query parameter
    axios.get(`/api/items?searchTerm=${searchTerm}`)
      .then(() => {
        // do something with the response, for example, set the filtered items to a state variable
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 1500, marginLeft: 50, marginRight: 50, marginTop: 3, backgroundColor: 'grey'}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: 'white'}}
        placeholder="Search..."
        onChange={handleOnClick}
        value={searchTerm}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default FilterCard;
