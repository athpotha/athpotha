import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../../store";

export default function ModalTabs(props) {
  const [value, setValue] = useState(0);
  const tabValue = useSelector((state) => state.modal.modalTabValue);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(modalActions.setModalTabValue(newValue));
  };

  console.log(tabValue);

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab sx={{ width: "50%" }} value={0} label="Home" />
      <Tab sx={{ width: "50%" }} value={1} label="Connections" />
    </Tabs>
  );
}
