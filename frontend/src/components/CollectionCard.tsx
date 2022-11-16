import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { CardMedia, IconButton, Typography } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import { makeStyles } from '@mui/styles';
import { AnyCardCollection } from 'kokoelmani-shared/dist';



const useStyles = makeStyles({
    test: {
        border: (collection: any) => {
            if (collection.category === 'comic-book') {
                return '2px solid linear-gradient(90deg, rgba(255,203,5,1) 0%, rgba(42,117,187,1) 25%, rgba(199,160,8,1) 50%, rgba(60,90,166,1) 75%);' 
            } else if (collection.category === 'pokemon') {
                return '2px solid green'
            } else if (collection.category === "mtg") {
                return '2px solid yellow'
            } else if (collection.category === 'digimon') {
                return "2px solid darkgreen"
            } else if (collection.category === 'yugioh') {
                return "2px solid brown"
            } else if (collection.category === 'toy') {
                return '2px solid red'
            } else if (collection.category === 'other tcg') {
                return '2px solid orange'
            } 
            
            // else if (collection.category === 'funkopop') {
            //     return "2px solid pink"
            // }else if (collection.category === 'nft') {
            //     return '2px solid purple'
            // }
        }
    },
})





// interface Props {
//     handleDelete: () => void;
//     collection: any
// }
interface Props {
    collection: AnyCardCollection;
    onDelete?: (id: number) => void
}

const CollectionCard: React.FC<Props> = ({ collection, onDelete }) =>  {
    const classes = useStyles(collection)

  return (
    <div>
            <Card elevation={8} className={classes.test}>
                <CardHeader 
                    action={ 
                        <IconButton onClick={() => onDelete?.(collection.id)}> 
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={collection.newItem} sx={{color: "black", textAlign: "center"}}
                    subheader={collection.category} 
                />
                <CardMedia 
                component="img"
                height="200"
                image="https://static.cardmarket.com/img/7ead308998113a46a384918072ac0416/items/1/OS69/21308.jpg"
                alt="Black"
                sx={{ padding: "1em 1em 1em 1em", objectFit: "contain", width: 300 }}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        Cost:$ {collection.cost}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Year: {collection.year}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Quantity: {collection.quantity}
                    </Typography>
                </CardContent>
            </Card>
        </div>
  )
}

export default CollectionCard
