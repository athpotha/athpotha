import { Grid } from '@mui/material'
import React from 'react'
import Category from './Category'


const images = [
    {
        id: 'buttonImage-1',
        url: '/images/main-wall/main-wall-1.jpg',
        title: 'Physical Science',
        width: '90%',
    },
    {
        id: 'buttonImage-2',
        url: '/images/main-wall/main-wall-1.jpg',
        title: 'Bio Sicence',
        width: '90%',
    },
    {
        id: 'buttonImage-3',
        url: '/images/main-wall/main-wall-1.jpg',
        title: 'Management',
        width: '90%',
    },
    {
        id: 'buttonImage-4',
        url: '/images/main-wall/main-wall-1.jpg',
        title: 'Art',
        width: '90%',
    },
];

function SubjectSelector() {
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

export default SubjectSelector