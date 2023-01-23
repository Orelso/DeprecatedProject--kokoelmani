import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import {useState} from 'react';
import {getHome} from '../actions/demoActions';
import {useThunkDispatch} from '../reducers';
import {TextField} from '@mui/material';
import styled from 'styled-components';

const FilterCard = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const handleOnClick = ({target: {value}}: any) => {
		setSearchTerm(value);
		// make a GET request to the server with the searchTerm as a query parameter
		fetch(`/api/items?searchTerm=${searchTerm}`)
			.then((res) => res.json())
			.then((data) => {
				console.log('🚀 ~ file: SearchBar.tsx:25 ~ .then ~ data', data);
				// TODO setstate
				// do something with the response, for example, set the filtered items to a state variable
			})
			.catch((error: any) => {
				console.log(error);
			});
	};

	return (
		<FilterCardStyles>
			<TextField sx={{ml: 1, flex: 1, color: 'white'}} placeholder="Search..." onChange={handleOnClick} value={searchTerm} />

			{/* <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton> */}
		</FilterCardStyles>
	);
};

const FilterCardStyles = styled.div`
	max-width: 600px;
	width: 90vw;
	margin: auto;
	transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
	&:hover {
		transform: scale(1.05);
	}
	.MuiTextField-root {
		align-items: center;
		width: 100%;
	}
`;

export default FilterCard;
