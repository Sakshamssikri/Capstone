// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { UilFire } from '@iconscout/react-unicons'; // Example for Unicons library
import { UilTemperature, UilWaterDrop } from '@iconscout/react-unicons'; // Example for Unicons library
import { UilMapMarker } from '@iconscout/react-unicons'; // Example for Unicons library
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { UilHome } from '@iconscout/react-unicons'; // Example for Unicons library

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Temperature and Humidity",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25°C",
    png: UilTemperature,
    series: [
      {
        name: "Temperature",
        data: [25, 28 , 26, 27, 29, 31, 38],
      },
    ],
  },
  {
    title: "Flame Detection",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    
    value: "No Fire Detected",
    barValue:0,
    png: UilFire,
    series: [
      {
        name: "Fire",
        data: [0, 1, 0, 1, 0, 1, 0],
      },
    ],
  },
  {
    title: "Gas Detection",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "170",
    png: UilFire,
    series: [
      {
        name: "Gas",
        data: [150, 157, 155, 198, 139,200],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Saksham Sikri",
    noti: "On Work.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "Harshit Goyal",
    noti: "On Work.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Bhavya Rampal",
    noti: "On Work.",
    time: "2 hours ago",
  },
];
