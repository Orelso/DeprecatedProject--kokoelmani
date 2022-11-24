import React from 'react'
import Ticker from 'react-ticker'
import StraightIcon from '@mui/icons-material/Straight';


const ItemTicker = () => (
    <Ticker>
        {({ index }) => (
            <>
                <p> <img src="https://deckmaster.info/images/sets/M14_C.png" alt="" width="15" height="10"/> <a href='https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=370609&type=card'>Doom Blade</a>(↑ 10%)</p>
            </>
        )}
    </Ticker>
)

export default ItemTicker