import React from 'react';
import {Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Typography, Card} from '@mui/material';
import {makeStyles} from '@mui/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import { experimentalStyled as styled } from '@mui/material/styles';
import StraightIcon from '@mui/icons-material/Straight';
import {CardMedia} from '@mui/material';
import SouthIcon from '@mui/icons-material/South';
// import ItemTicker from '../components/Ticker';
import Footer from '../components/Footer';
import DailyCardTable from '../components/DailyCardTable';
import SearchBar from '../components/SearchBar';
import {useEffect, useState} from 'react';
import axios from 'axios';

const useStyles = makeStyles((theme) => {
	return {
		page: {
			background: '#E5E4E2',
			width: '100%',
			fontSize: '70px',
			// padding: theme.spacing(1)
		},
		featured: {
			/* padding: theme.spacing(8) */
		},
		tablerow: {
			/* padding: theme.spacing(2) */
		},
	};
});

const cardTables = 5;

export default function Home() {
	const classes = useStyles();
	const [mtg, setMtg] = useState([]);

	useEffect(() => {
		console.log('It started');
		axios.get('http://localhost:3009/api/item').then((response) => {
			console.log('promise fulfilled', response.data);
			setMtg(response.data);
		});
	}, []);

	return (
		<div>
			<Typography sx={{mt: 1}} className={classes.page} variant="h1" color="#ff7961" align="center">
				Kokoelmani
			</Typography>
			<SearchBar />

			{/* <Banner /> */}
			<Typography sx={{color: 'green', mt: 6}} className={classes.featured} variant="h4" align="center">
				Featured High's of the Day
			</Typography>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexWrap: 'wrap',
					'& > :not(style)': {
						m: 1,
						width: 340,
						height: 410,
						backgroundColor: '#efe4e2',
					},
				}}
			>
				{/* {cardTables.map((row index) => {
      <DailyCardTable key={row + index} />
      })} */}

				<DailyCardTable />
				<DailyCardTable />
				<DailyCardTable />
				<DailyCardTable />
				<DailyCardTable />
			</Box>
			<Typography className={classes.featured} variant="h4" sx={{color: 'red', mt: 6}} align="center">
				Featured Low's of the Day
			</Typography>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexWrap: 'wrap',
					'& > :not(style)': {
						m: 1,
						width: 340,
						height: 410,
						backgroundColor: '#efe4e2',
					},
				}}
			>
				<DailyCardTable />
				<DailyCardTable />
				<DailyCardTable />
				<DailyCardTable />
				<DailyCardTable />
			</Box>

			<div>
				<Footer />
			</div>
		</div>
	);
}
