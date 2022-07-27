import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../../store/modal-slice";

export default function ModalTabs(props) {
  const [value, setValue] = useState(0);
  const tabValue = useSelector((state) => state.modal.modalTabValue);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(modalActions.setModalTabValue(newValue));
  };

  console.log(tabValue);

  const tabs = props.tabs;
  const tabWidth = 100 / tabs.length;
  return (
    <Tabs value={tabValue} onChange={handleChange}>
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          sx={{ width: `${tabWidth}%` }}
          value={tab.value}
          label={tab.label}
        />
      ))}
      {/* <Tab sx={{ width: `${tabWidth}%` }} value={1} label="Connections" /> */}
    </Tabs>
  );
}
