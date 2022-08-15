import { Avatar, Chip, Grid } from '@mui/material'
import React from 'react'
import ModalOpenButton from '../../ModalOpenButton'
import ModalTabs from '../../ModalTabs';


import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CenteredBox from '../../../CenteredBox';
import { Box } from '@mui/system';


const addQuestionModalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    // height: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: "10px 0 10px 30px",
    // p: 4,
    borderRadius: 5,
    // pr: 0,
    // pt: 1,
    // pb: 2
};

const addQuestionModalTabs = [
    { id: "addQuestionModalTab-1", label: "Add Question", value: 0 },
    { id: "addQuestionModalTab-2", label: "Add Post", value: 1 },
];
function FeedsStart() {
    return (
        <Box
            style={{ backgroundColor: "#FFF"}}
            sx={{ bgcolor: "background", p: 2, borderRadius: 2 }}
        >
            <Grid container sx={{ mb: 2 }}>
                <Grid item xs={1}>
                    <Avatar src={localStorage.getItem("PROFILE_PIC")} />
                </Grid>
                <Grid item xs={11}>
                    <ModalOpenButton
                        modalName="addQuestion-post-modal"
                        isTabHave={true}
                        tabValue={0}
                        modalStyle={addQuestionModalStyle}
                        header={<ModalTabs tabs={addQuestionModalTabs} />}
                    >
                        <Chip
                            label="Are you in a problem? Share with us"
                            //   component="a"
                            //   href="#basic-chip"
                            variant="outlined"
                            clickable
                            sx={{ width: "90%", textAlign: "left" }}
                        />
                    </ModalOpenButton>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={4}>
                    <CenteredBox align="center">
                        <ModalOpenButton
                            modalName="addQuestion-post-modal"
                            isTabHave={true}
                            tabValue={0}
                            modalStyle={addQuestionModalStyle}
                            header={<ModalTabs tabs={addQuestionModalTabs} />}
                        >
                            <Chip
                                variant="outlined"
                                clickable
                                icon={<QuestionMarkIcon />}
                                label="Ask Question"
                            // onClick={}
                            />
                        </ModalOpenButton>
                    </CenteredBox>
                </Grid>
                <Grid item xs={4}>
                    <CenteredBox align="center">
                        <Chip
                            variant="outlined"
                            clickable
                            icon={<ModeEditIcon />}
                            label="Answer"
                        />
                    </CenteredBox>
                </Grid>
                <Grid item xs={4} alignSelf="right">
                    <CenteredBox align="center">
                        <ModalOpenButton
                            modalName="addQuestion-post-modal"
                            isTabHave={true}
                            tabValue={1}
                            modalStyle={addQuestionModalStyle}
                            header={<ModalTabs tabs={addQuestionModalTabs} />}
                        >
                            <Chip
                                variant="outlined"
                                clickable
                                icon={<MarkAsUnreadIcon />}
                                label="Post"
                            />
                        </ModalOpenButton>
                    </CenteredBox>
                </Grid>
            </Grid>
        </Box>
    )
}

export default FeedsStart