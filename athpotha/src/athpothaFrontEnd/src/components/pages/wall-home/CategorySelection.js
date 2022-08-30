import { Grid } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import Category from './Category'
import { useSelector } from 'react-redux';
import { fetchUserData } from '../../../api/authenticationService';

function CategorySelection() {
    let categories = useSelector((state) => state.educationCategory.categories);
    const studentType = useSelector((state) => state.educationCategory.selectedStudentType);
    const subjectType = useSelector((state) => state.educationCategory.selectedSubject);
    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState([]);
    const user_type = localStorage.getItem("USER_TYPE");
    const fetchCategoryHandler = async () => {
        setIsLoading(true);
        try {
            const response = await fetchUserData({
                url: "api/v1/category/get-categories",
                method: "post",
            })

            const categories = await response.data;
            console.log(studentType);
            console.log(user_type)
            if (user_type === "student") {
                categories.map((category) => {
                    if (studentType == "OL_Qualified") {
                        category.studentType === "OL_Qualified" && images.push({
                            id: `buttonImage-${category.categoryId}`,
                            url: category.image,
                            title: category.categoryName,
                            width: '90%',
                        });
                    } else if (studentType == "AL_Qualified") {
                        category.studentType === "AL_Qualified" && images.push({
                            id: `buttonImage-${category.categoryId}`,
                            url: category.image,
                            title: category.categoryName,
                            width: '90%',
                        });
                    } else if (studentType == "Undergraduate") {
                        category.studentType === "Undergraduate" && images.push({
                            id: `buttonImage-${category.categoryId}`,
                            url: category.image,
                            title: category.categoryName,
                            width: '90%',
                        });
                    }
                })
            } else if (user_type === "tutor") {
                categories.map((category) => {
                    category.studentType === "OL_Qualified" && images.push({
                        id: `buttonImage-${category.categoryId}`,
                        url: category.image,
                        title: category.categoryName,
                        width: '90%',
                    });
                })
            } else {
                categories.map((category) => {
                    category.studentType === "AL_Qualified" && images.push({
                        id: `buttonImage-${category.categoryId}`,
                        url: category.image,
                        title: category.categoryName,
                        width: '90%',
                    });
                })
            }

        } catch (error) {
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchCategoryHandler();
    }, [])
    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <Grid container style={{ height: "210px", overflowY: "scroll", overflowX: "hidden" }}>
            {images.map((image) => (
                <Grid key={image.id} item xs={4}>
                    <Category image={image} />
                </Grid>
            ))}
        </Grid>
    )
}

export default CategorySelection