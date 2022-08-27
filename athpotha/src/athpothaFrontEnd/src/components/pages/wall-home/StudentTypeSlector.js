import { Grid } from '@mui/material'
import React from 'react'
import Category from './Category'


const images = [
    {
        id: 'buttonImage-4',
        url: '/images/main-wall/main-wall-1.jpg',
        title: 'Regular',
        width: '90%',
    },
    {
        id: 'buttonImage-1',
        url: '/images/main-wall/main-wall-1.jpg',
        title: 'OL_Qualified',
        width: '90%',
    },
    {
        id: 'buttonImage-2',
        url: '/images/main-wall/main-wall-1.jpg',
        title: 'AL_Qualified',
        width: '90%',
    },
    {
        id: 'buttonImage-3',
        url: '/images/main-wall/main-wall-1.jpg',
        title: 'Undergraduate',
        width: '90%',
    },
];

function StudentTypeSlector() {
    return (
        <Grid container>
            {images.map((image) => (
                <Grid key={image.id} item xs={3}>
                    <Category image={image} />
                </Grid>
            ))}
        </Grid>
    )
}

export default StudentTypeSlector