import { Avatar, Chip, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import HomeCard from "../../ui/insight/wall-main/Feeds/HomeCard";
import CenteredBox from "../../ui/CenteredBox";
import SimpleSnackbar from "../../ui/insight/wall-main/Feeds/SimpleSnackbar";
import { useDispatch, useSelector } from "react-redux";
import BeforeDisplay from "../../ui/BeforeDisplay";
import ModalOpenButton from "../../ui/insight/ModalOpenButton";
import ModalTabs from "../../ui/insight/ModalTabs";
import FeedsStart from "../../ui/insight/wall-main/Feeds/FeedsStart";

const postDetails = [
  {
    id: "post-1",
    personName: "Ashani Imalsha",
    postDate: "Jan 9, 2014",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    postedImage:
      "https://lh3.googleusercontent.com/p/AF1QipOXTTCcP39K4RwL4vducZ0nnc7TyNj7omePLCny=w1080-h608-p-no-v0",
    personImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    userImage: "/images/tutors/tutor-1.jpg",
    noOfPostUpvotes: 123,
    noOfComments: 23,
  },

  {
    id: "post-2",
    personName: "Roneki Manamperi",
    postDate: "Jan 9, 2014",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    postedImage:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    personImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    userImage: "/images/tutors/tutor-1.jpg",
    noOfPostUpvotes: 123,
    noOfComments: 23,
  },

  {
    id: "post-3",
    personName: "Pavani Mandira",
    postDate: "Jan 9, 2014",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    postedImage:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    personImage:
      "https://images.unsplash.com/photo-1599842057874-37393e9342df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    userImage: "/images/tutors/tutor-1.jpg",
    noOfPostUpvotes: 123,
    noOfComments: 23,
  },

  {
    id: "post-4",
    personName: "Melaka Pathiranagama",
    postDate: "Jan 9, 2014",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    postedImage:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    personImage:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    userImage: "/images/tutors/tutor-1.jpg",
    noOfPostUpvotes: 123,
    noOfComments: 23,
  },

  {
    id: "post-5",
    personName: "Minura Ratnayake",
    postDate: "Jan 9, 2014",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    postedImage:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    personImage:
      "https://images.unsplash.com/photo-1508852951744-beab078a4b2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    userImage: "/images/tutors/tutor-1.jpg",
    noOfPostUpvotes: 123,
    noOfComments: 23,
  },
];

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
function Feeds() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    // for(var i = 0; i < 100000; i++) {F
    //   console.log('hello')
    // }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <BeforeDisplay />;
  }

  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ mb: 2 }}
        >
          <FeedsStart />

        </Grid>

        {postDetails.map((post) => (
          <HomeCard homeCardId={post.id} key={post.id} postItem={post} />
        ))}
      </Grid>
    </div>
  );
}

export default Feeds;
