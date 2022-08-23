
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CellTowerIcon from "@mui/icons-material/CellTower";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SchoolIcon from "@mui/icons-material/School";
export const leftbarItem = () => {
    const userType = localStorage.getItem("USER_TYPE");
    console.log(userType);

    let listItems = [
        {
            id: "leftbar-listItem-1",
            listName: "Connections",
            icon: <PeopleAltIcon />,
        },
        {
            id: "leftbar-listItem-3",
            listName: "Commiunity Experts",
            icon: <CellTowerIcon />,
        },
        {
            id: "leftbar-listItem-2",
            listName: "Teachers",
            icon: <CastForEducationIcon />,
        },
        {
            id: "leftbar-listItem-5",
            listName: "Courses",
            icon: <SchoolIcon />,
            link: "/course-page"
        },
        {
            id: "leftbar-listItem-4",
            listName: "Bookmarks",
            icon: <BookmarksIcon />,
        },
    ];

    if (userType === "university") {
        listItems = [
            {
                id: "leftbar-listItem-1",
                listName: "Connections",
                icon: <PeopleAltIcon />,
            },
            {
                id: "leftbar-listItem-4",
                listName: "Bookmarks",
                icon: <BookmarksIcon />,
            },
        ];
    } else if (userType === "Tutor" && userType === "community") {
        listItems = [
            {
                id: "leftbar-listItem-1",
                listName: "Connections",
                icon: <PeopleAltIcon />,
            },
            {
                id: "leftbar-listItem-3",
                listName: "Commiunity Experts",
                icon: <CellTowerIcon />,
            },
            {
                id: "leftbar-listItem-4",
                listName: "Bookmarks",
                icon: <BookmarksIcon />,
            },
        ];
    }
    return listItems;
}

const getLeftbarItem = async () => {

}