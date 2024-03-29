
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CellTowerIcon from "@mui/icons-material/CellTower";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SchoolIcon from "@mui/icons-material/School";
export const leftbarItem = () => {
    const userType = localStorage.getItem("USER_TYPE");
    console.log(userType);
    if (userType === "student") {
        let listItems = [
            {
                id: "leftbar-listItem-1",
                listName: "Connections",
                icon: <PeopleAltIcon />,
                link:'/my-network'
            },
            {
                id: "leftbar-listItem-3",
                listName: "Community Experts",
                icon: <CellTowerIcon />,
                link:'/community'
            },
            {
                id: "leftbar-listItem-2",
                listName: "Teachers",
                icon: <CastForEducationIcon />,
                link:"/tutor-page"
            },
            {
                id: "leftbar-listItem-5",
                listName: "Courses",
                icon: <SchoolIcon />,
                link: "/course-page"
            },
            // {
            //     id: "leftbar-listItem-4",
            //     listName: "Bookmarks",
            //     icon: <BookmarksIcon />,
            // },
        ];
        return listItems;
    } else if (userType === "university") {
        let listItems = [
            {
                id: "leftbar-listItem-1",
                listName: "Connections",
                icon: <PeopleAltIcon />,
            },
            // {
            //     id: "leftbar-listItem-4",
            //     listName: "Bookmarks",
            //     icon: <BookmarksIcon />,
            // },
        ];
        return listItems;
    } else {
        let listItems = [
            {
                id: "leftbar-listItem-1",
                listName: "Connections",
                icon: <PeopleAltIcon />,
                link:'/my-network'
            },
            {
                id: "leftbar-listItem-3",
                listName: "Community Experts",
                icon: <CellTowerIcon />,
                link:'/community'
            },
            // {
            //     id: "leftbar-listItem-4",
            //     listName: "Bookmarks",
            //     icon: <BookmarksIcon />,
            // },
        ];
        return listItems;
    }
}