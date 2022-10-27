import { Button, Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import Addpost from '../../../../ui/insight/Addpost';
import Addquestion from '../../../../ui/insight/Addquestion';
import AddStudentMaterial from '../../../../ui/insight/AddStudentMaterial';
import { fetchUserData } from "../../../../../api/authenticationService";
import BackDrop from '../../../../ui/BackDrop';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';


function StudentMaterials(props) {


  let id = ""
  const [material, setMaterial] = React.useState([])

  if (props.profileType === "own-profile") {
    id = localStorage.getItem("USER_ID")
  } else {
    id = props.user.userId;
    // i
  }
  React.useEffect(() => {
    fetchUserData({
      url: `/materials/get-material/${id}`,
      method: "post",
      data: null
    }).then((response) => {
      setMaterial(response.data)
      console.log(material)
    })
  }, [])


  return (

    <Box>
      {props.profileType === "own-profile" && <AddStudentMaterial />}
      <Typography sx={{
        ml: 2,
        color: "#2480E7",
        fontSize: "12pt"
      }}>Student Materials</Typography>

      <Box sx={{
        mr: 4,
      }}>
        {
          material.map(({ content, materialUrl }) => {

            return (

              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: 2,
                m: 2,
                bgcolor: 'background.paper',
                borderRadius: 1,
                backgroundColor: "#D6EDF9"
              }}
              >

                <Box sx={{
                  color: "#212E6C",
                  fontWeight: "bold",
                  fontSize: "12pt"
                }}>{content}</Box>

                <a href={materialUrl} target="_blank" style={{
                  color: "#12BC22"
                }}><CloudDownloadIcon></CloudDownloadIcon></a>

                {/* <BackDrop dataUploading={materialUrl} /> */}

              </Box>

            )

          })
        }
      </Box>


    </Box>


  );
}

export default StudentMaterials