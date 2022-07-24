import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Addquestion from "./Addquestion";
import Addpost from "./Addpost";

const style = {
  width: "50%",
};
export default function AddPostQuestionModal() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", height: "400px" }} >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab sx={style} label="Add Question" value="1" />
            <Tab sx={style} label="Add Post" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ p: 0, pt: 2 }}>
          <Addquestion />
        </TabPanel>
        <TabPanel value="2" sx={{ p: 0, pt: 2 }}>
          <Addpost />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
