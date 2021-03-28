import React from "react";
import { AiFillHome } from "react-icons/ai";
import {
  BsCollectionFill,
  BsFillExclamationSquareFill,
  BsPeopleFill,
} from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { GrConnect } from "react-icons/gr";

export const SidebarData = [
  {
    title: "Jack",
    icon: <AiFillHome />,
    link: "/",
    state: 0,
  },
  {
    title: "Harry",
    icon: <BsCollectionFill />,
    link: "/Harry",
    state: 1,
  },
  {
    title: "Tony",
    icon: <MdWork />,
    link: "/Tony",
    state: 2,
  },

  {
    title: "Sam",
    icon: <BsPeopleFill />,
    link: "/Sam",
    state: 3,
  },
  {
    title: "Avez",
    icon: <BsPeopleFill />,
    link: "/Avez",
    state: 4,
  },
];
