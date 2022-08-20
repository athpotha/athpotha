import { IconButton } from "@mui/material";
import React, { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import Swal from "sweetalert2";

export default function HomeCardActions(props) {
    const deleteHandler = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Remove it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been removed.',
                    'success'
                )
            }
        })
    }

    return (
        <IconButton onClick={deleteHandler} >
            <ClearIcon />
        </IconButton>
    );
}
