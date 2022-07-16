import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Content from "./Content";
import MainHeader from "../../ui/wall-main/MainHeader";

function MyNetwork(){

    return(
        <StyledEngineProvider injectFirst>
            <MainHeader value={1} />
            <Content></Content>
        </StyledEngineProvider>
    );
}

export default MyNetwork;