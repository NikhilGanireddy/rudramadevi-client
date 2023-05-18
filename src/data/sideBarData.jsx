import {
  UilApps,
  UilUserCheck,
  UilUsersAlt,
  UilBedDouble,
  UilChatInfo,
  UilUserArrows,
  UilSignout,
  UilUtensilsAlt,
  UilUserCircle,
  UilQuestionCircle
} from "@iconscout/react-unicons";

export const sideBarData = [
  {
    id: 1,
    icon: <UilApps />,
    text: "Dashboard",
    class: "",
    path: "/user/dashboard"
  },
  {
    id: 2,
    icon: <UilUserCheck />,
    text: "Attendance",
    class: "",
    path: "/user/attendance"
  },
  {
    id: 3,
    icon: <UilUtensilsAlt />,
    text: "Food",
    class: "",
    path: "/user/food"
  },
  {
    id: 4,
    icon: <UilUserCircle />,
    text: "Profile",
    class: "",
    path: "/user/profile"
  },
  {
    id: 5,
    icon: <UilBedDouble />,
    text: "Room",
    class: "",
    path: "/user/room"
  },

  {
    id: 6,
    icon: <UilUsersAlt />,
    text: "MS",
    class: "",
    path: "/user/mess-secratary"
  },

  {
    id: 7,
    icon: <UilChatInfo />,
    text: "Complaints",
    class: "",
    path: "/user/complaints"
  },

  {
    id: 8,
    icon: <UilQuestionCircle />,
    text: "Help",
    class: "",
    path: "/user/help"
  },
  {
    id: 9,
    icon: <UilSignout />,
    text: "Logout",
    class: "absolute bottom-4 w-full",
    path: "/user/logout"
  }
];
