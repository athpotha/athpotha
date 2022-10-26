// import React, { useRef,useState, useEffect} from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { ChatEngine } from "react-chat-engine";
// import { auth } from "../../../../../Firebase";

// import { useAuth } from "../context/AuthContext";


// export default function Chats() {
//     const didMountRef = useRef(false)
//     const [loading, setLoading] = useState(true)
//     const { user } = useAuth()
//     const navigate = useNavigate()
    
   
//     async function handleLogout()  {
//         await auth.signOut();

//         navigate("/");
//     }

//     async function getFile(url) {
//         let response = await fetch(url);
//         let data = await response.blob();

//         return new File ([data], "userPhoto.jpg", {type: "image/jpeg"});
//     }

//     useEffect(() => {
//         if (!didMountRef.current){
//             didMountRef.current = true
//         }
//         if(!user || user === null){
//             navigate("/")

//             return
//         }

//         axios.get( 
//             'https://api.chatengine.io/users/me/', 
//             { headers: {
//                 "project-id": 'dbee0612-9a82-4b05-9cae-f5048f73dffb',
//                 "user-name": user.email,
//                 "user-secret": user.uid
//             }}
        
//         )
//         .then(() => {setLoading(false);

//         })
//         .catch(e => {
//             let formdata = new FormData()
//             formdata.append("email", user.email)
//             formdata.append("username", user.email)
//             formdata.append("secret", user.uid)

//             getFile(user.photoURL)
//                 .then((avatar) => {
//                     formdata.append("avatar", avatar, avatar.name)

//                     axios.post(
//                         'https://api.chatengine.io/users/',
//                         formdata,
//                         {headers: {"private-key": '4868d7e4-0e55-44ae-b4db-b434e9114bc9'}}
//                     )

//                     .then(() => setLoading(false))
//                     .catch(e => console.log("e", e.response))
//                 })
//         })

//     }, [user, navigate]);

//     if (!user || loading) return <div />

//     return (
//         <div className="chats-page">
//             <div className="nav-bar">
//                 <div className="logo-tab">
//                     Unichat
//                 </div>

//                 <div onClick={handleLogout} className="logout-tab">
//                     Logout
//                 </div>

//             </div>

//             <ChatEngine 
//                 height="calc(100vh - 66px)"
//                 projectID= 'dbee0612-9a82-4b05-9cae-f5048f73dffb'
//                 userName='melaka36pathiranagama@gmail.com'
//                 userSecret='1234'
//             />

//         </div>
//     )
// }







// import React, { useState } from 'react'

// import { ChatEngine, getOrCreateChat } from 'react-chat-engine'
// import { useAuth } from "../context/AuthContext";

// import StyledEngineProvider from "@mui/material/StyledEngineProvider";
// import MainHeader from "../../../../ui/insight/MainHeader";
// import Content from "../../Content";
// import Leftbar from "../../../../ui/insight/leftbar/Leftbar";
// import Rightbar from "../../../../ui/insight/rightbar/Rightbar";
// import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { leftbarItem } from "../../../../../services/ListItemService";

// const DirectChatPage = () => {
// 	const [username, setUsername] = useState('')

// 	function createDirectChat(creds) {
// 		getOrCreateChat(
// 			creds,
// 			{ is_direct_chat: true, usernames: [username] },
// 			() => setUsername('')
// 		)
// 	}
//     const { user } = useAuth()

// 	function renderChatForm(creds) {
    
// 		return (
// 			<div>
// 				<input 
// 					placeholder='Username' 
// 					value={username} 
// 					onChange={(e) => setUsername(e.target.value)} 
// 				/>
// 				<button onClick={() => createDirectChat(creds)}>
// 					Create
// 				</button>
// 			</div>
// 		)
// 	}
// 	const userType = localStorage.getItem("USER_TYPE");
// 	const navigate = useNavigate();
// 	const listItems = leftbarItem();
// 	return (


		
 
//     <StyledEngineProvider injectFirst>
//       <MainHeader value={userType === "university" ? 2 : 3} />
//       <Grid
//         container
//         spacing={2}
//         style={{
//           boxSizing: "initial",
//           width: "1500px",
//           marginLeft: "auto",
//           marginRight: "auto",
//           alignItems: "stretch",
//           backgroundColor: "rgb(242, 250, 255)",
//         }}
//       >
//         <Grid
//           item
//           xs={2}
//           style={{
//             height: "100vh",
//             position: "sticky",
//             top: 0,
//             paddingTop: 100,
//           }}
//         >
//           <Leftbar>
//             <List>
//               {listItems.map((listItem) => (
//                 <ListItem key={listItem.id} disablePadding>
//                   <ListItemButton onClick={() => { navigate(listItem.link) }}>
//                     <ListItemIcon>{listItem.icon}</ListItemIcon>
//                     <ListItemText primary={listItem.listName} />
//                   </ListItemButton>
//                 </ListItem>
//               ))}
//             </List>
//           </Leftbar>
//         </Grid>
//         <Grid item xs={10} style={{ paddingTop: 120 }}>
// 		<ChatEngine
// 			height='100vh'
// 			userName='melaka36pathiranagama@gmail.com'
// 			userSecret='1234'
// 			projectID='dbee0612-9a82-4b05-9cae-f5048f73dffb'
// 			renderNewChatForm={(creds) => renderChatForm(creds)}
// 		/>
//         </Grid>
//       </Grid>
//     </StyledEngineProvider>
  

		
// 	)
// }

// export default DirectChatPage;


import React, { useState } from 'react'

import { ChatEngine, getOrCreateChat } from 'react-chat-engine'
import '../index.css';
import axios from "axios";

function createUser(params) {
	// var axios = require('axios');
var data = {
	"username": localStorage.getItem("FIRST_NAME")+'_'+localStorage.getItem("LAST_NAME"),
	"secret": "1234",
	"email": localStorage.getItem("USER_EMAIL"),
	"first_name": localStorage.getItem("FIRST_NAME"),
	"last_name": localStorage.getItem("LAST_NAME")
};

var config = {
	method: 'post',
	url: 'https://api.chatengine.io/users/',
	headers: {
		'PRIVATE-KEY': '4868d7e4-0e55-44ae-b4db-b434e9114bc9'
	},
	data : data
};

axios(config)
.then(function (response) {
	console.log(JSON.stringify(response.data));
})
.catch(function (error) {
	console.log(error);
});

}


const DirectChatPage = () => {
	console.log(localStorage.getItem('USER_EMAIL'));
	createUser();
	const [username, setUsername] = useState('')

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			
			<div>
				<input 
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
			
			</div>
		)
	}

	return (
		
		<ChatEngine
			height='80vh'
			userName={localStorage.getItem("FIRST_NAME")+'_'+localStorage.getItem("LAST_NAME")}
			userSecret='1234'
			projectID='dbee0612-9a82-4b05-9cae-f5048f73dffb'
			renderNewChatForm={(creds) => renderChatForm(creds)}
		/>
	)
}

export default DirectChatPage;  
