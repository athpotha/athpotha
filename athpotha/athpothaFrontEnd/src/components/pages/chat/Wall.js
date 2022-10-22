import React, { useEffect, useState } from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { Box, Paper } from "@mui/material";
import { MessageLeft, MessageRight } from "./Message";
import TextInput from "./TextInput";
import { doc, onSnapshot } from "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwQwsbsx3SM5ttB7jFvRtB43Fux3_YwRc",
  authDomain: "athpotha-720ab.firebaseapp.com",
  projectId: "athpotha-720ab",
  storageBucket: "athpotha-720ab.appspot.com",
  messagingSenderId: "188904584167",
  appId: "1:188904584167:web:09ef3ddab8a8ac44f58342",
  measurementId: "G-41HG9SFB13"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()


// const db = getFirestore()
console.log("db :" + db.data);
const unsub = onSnapshot(doc(db, "messages","s"), (doc) => {
    console.log("Current data: ", doc.data());
});

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

  useEffect(() => {
    if (msg !== null) {

      const d = new Date();
      const date = `${d.getMonth() + 1}/${d.getDate()} ${d.getHours()}:${d.getMinutes()}`

      console.log(date)

      const obj = { fid: 10, tid: msg.id, message: msg.text, timestamp: date, displayName: "You" }
      messages.push(obj)
      setMsg(null)
    }
  })



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
