import React, { useEffect, useState } from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { Box, Paper } from "@mui/material";
import { MessageLeft, MessageRight } from "./Message";
import TextInput from "./TextInput";

const messages = [
  {
    fid: 10,
    tid: 1,
    message: "Hello",
    timestamp: "MM/DD 00:00",
    displayName: "Ashani",
  },
  {
    fid: 1,
    tid: 10,
    message: "Hello",
    timestamp: "MM/DD 00:00",
    displayName: "Ashani",
  },
  {
    fid: 10,
    tid: 1,
    message: "Can you help me?",
    timestamp: "MM/DD 00:00",
    displayName: "you",
  },
  {
    fid: 10,
    tid: 1,
    message: "I want to know more details about CS",
    timestamp: "MM/DD 00:00",
    displayName: "you",
  },
  {
    fid: 2,
    tid: 10,
    message: "yeah, sure",
    timestamp: "MM/DD 00:00",
    displayName: "Ashani",
  },
  {
    fid: 2,
    tid: 10,
    message: "Give us degree names or interested fields of you",
    timestamp: "MM/DD 00:00",
    displayName: "Ashani",
  },
  {
    fid: 10,
    tid: 2,
    message: "ICT",
    timestamp: "MM/DD 00:00",
    displayName: "you",
  },
];

function Wall(props) {

  const id = props.selectContactdetails.value1;
  const [active, setActive] = useState()
  useEffect(() => {
    if (id == 0) {
      setActive("false")
    } else {
      setActive("true")
    }
  })


  const [msg, setMsg] = useState({});

  const d = new Date();
  const date = `${d.getMonth()+1}/${d.getDate()} ${d.getHours()}:${d.getMinutes()}`
  
  console.log(date)

  const obj = { fid: 10, tid: msg.id, message: msg.text, timestamp: date, displayName: "You" }
  messages.push(obj)


  const loginid = 10;
  const check = 0;

  return (
    <StyledEngineProvider injectFirst>
      <Box>
        <Box
          sx={{
            height: "50px",
            borderBottom: "1px solid",
            borderColor: "grey.300",
          }}
        >
          <Box sx={{ ml: 1, p: 1.5, fontSize: "12pt" }}>
            {props.selectContactdetails.value2}
          </Box>
        </Box>
        <Box
          sx={{
            overflow: "hidden",
            overflowY: "auto",
            height: "66vh",
          }}
        >
          {messages.map(({ fid, tid, message, timestamp, displayName }) => {
            if (
              (fid == id && tid == loginid) ||
              (tid == id && fid == loginid)
            ) {
              if (id == fid) {
                return (
                  <MessageLeft
                    message={message}
                    timestamp={timestamp}
                    displayName={displayName}
                  />
                );
              }
              {
                return (
                  <MessageRight
                    message={message}
                    timestamp={timestamp}
                    displayName={displayName}
                  />
                );
              }
            }
          })}


        </Box>
        {active == "true" && <TextInput id={id} setMsg={setMsg}></TextInput>}

      </Box>
    </StyledEngineProvider>
  );
}

export default Wall;
