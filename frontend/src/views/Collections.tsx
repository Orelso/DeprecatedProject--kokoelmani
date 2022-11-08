import { Container } from '@mui/material';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Grid } from '@mui/material';
import {AnyCardCollection} from 'kokoelmani-shared/dist';
import CollectionCard from '../components/CollectionCard';


export default function Collections() {
    const [collections, setCollections] = useState<AnyCardCollection[]>([])

  useEffect(() => {
    fetch('http://localhost:3009/api/item/')
      .then(res => res.json())
      .then(data => setCollections(data))
  }, []) // [] tells the serever to run it once

  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:3009/api/item/${id}`, {
        method: 'DELETE'
    })
    const newCollections = collections.filter(collection => collection.id !== id)
    setCollections(newCollections)
  }


  return (
    <Container sx={{mt: 6}}>
      {/* <h1>Your Collection</h1> */}
        <Grid container spacing={10}>
      {collections.map(collection => (
        <Grid item key={collection.id} xs={12} sm={8} md={6} lg={4}>
            <CollectionCard collection={collection} onDelete={handleDelete}/> 
        </Grid>
      ))}
        </Grid>
    </Container>
  )
}