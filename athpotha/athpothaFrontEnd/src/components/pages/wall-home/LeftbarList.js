import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const listItems = [
  {
    id: "listItem-1",
    listName: "Connections",
    icon: <InboxIcon />,
  },
  {
    id: "listItem-2",
    listName: "Teachers",
    icon: <DraftsIcon />,
  },
  {
    id: "listItem-3",
    listName: "Commiunity Experts",
    icon: <DraftsIcon />,
  },
];

export default function LeftbarList() {
  return (
    <Box sx={{ width: "100%", maxWidth: 360}}>
      <nav aria-label="main mailbox folders">
        <List>
          {listItems.map((listItem) => (
            <ListItem key={listItem.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {listItem.icon}
                </ListItemIcon>
                <ListItemText primary={listItem.listName} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
