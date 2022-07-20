import React, { useState } from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { styled, alpha } from '@mui/material/styles';
import { Box, Divider, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ChatIcon from '@mui/icons-material/Chat';

const messages = [
    {
        id: 1,
        primary: 'Pavani Mandira',
        secondary: "Are you ...",
        person: 'images/tutors/tutor-2.png',
    },
    {
        id: 2,
        primary: 'Roneki Manamperi',
        secondary: "Are you ...",
        person: 'images/tutors/tutor-3.png',
    },
    {
        id: 3,
        primary: 'Melaka Pathirangama',
        secondary: 'Are you ...',
        person: 'images/tutors/tutor-1.png',
    },
    {
        id: 4,
        primary: 'Kumud Perera',
        secondary: 'Are you ...',
        person: 'images/tutors/tutor-2.png',
    },
    {
        id: 5,
        primary: 'Pearson',
        secondary: 'Are you ...',
        person: 'images/tutors/tutor-3.png',
    },
    {
        id: 6,
        primary: 'UCSC',
        secondary: 'Are you ...',
        person: 'images/tutors/tutor-1.png',
    },
    {
        id: 7,
        primary: 'SLIIT',
        secondary: 'Are you ...',
        person: 'images/tutors/tutor-2.png',
    },
];

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    height: '45px',
    borderLeft: '2px #ffffff solid',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    height: '45px',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '14ch',
            '&:focus': {
                width: '25.4ch',
                backgroundColor: '#F4F4F4',
            },
        },
    },
}));


function ContactList(props) {

    const [active, setActive] = useState(-1);
    const selectItem = (id, name) => {
        setActive(id)
        { props.setSelectContactdetails((obj)=>({...obj,value1:id,value2:name})) }
}

    return (
        <StyledEngineProvider injectFirst>
            <Box sx={{ height: "50px", borderBottom: '1px solid', borderColor: 'grey.300', p: 1.5, display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ fontWeight: '500', fontSize: '12pt' }}>Messaging</div>
                <div>
                    <IconButton size="small" color="inherit">
                        <ChatIcon sx={{ color: "grey.600" }}></ChatIcon>
                    </IconButton>
                </div>
            </Box>
            <Box>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon sx={{ color: 'grey.400', }} />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search messages ..."
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Box>
            <Divider />
            <Box sx={{
                overflow: "hidden",
                overflowY: "scroll", height: '68.5vh',
            }}>
                <List sx={{ mb: 2 }}>
                    {messages.map(({ id, primary, secondary, person }) => (
                        <React.Fragment key={id} >
                            <ListItem button
                                style={{ borderLeft: active == id ? '3px #3399FF solid' : '3px #FFFFFF solid' }}
                                onClick={() => selectItem(id, primary)}
                            >
                                <ListItemAvatar>
                                    <Avatar alt="Profile Picture" src={person} />
                                </ListItemAvatar>
                                <ListItemText primary={primary} secondary={secondary} />
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    ))}
                </List>
            </Box>
        </StyledEngineProvider >
    );
}


export default ContactList;