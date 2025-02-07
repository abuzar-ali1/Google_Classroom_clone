"use client";
import { Box } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";

const HomeComponent = () => {
  const classrooms = [
    {
      id: 1,
      class: "Data Science",
      img: "https://gstatic.com/classroom/themes/img_learnlanguage.jpg",
      href: `/classrooms/345`
    },
    {
      id: 2,
      class: "Full Stack Development",
      img: "https://www.gstatic.com/classroom/themes/img_breakfast.jpg",
      href: `/classrooms/345345`

    },
    {
      id: 3,
      class: "Frontend Development",
      img: "https://gstatic.com/classroom/themes/Chemistry.jpg",
      href: `/classrooms/645647`

    },
  ];

  return (
    <Box className="mx-auto px-4 py-8 container">
      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classrooms.map((item) => (
          <Link key={item?.id} href={item?.href}>
            <Card className="rounded hover:cursor-pointer">
              <Box
                sx={{ backgroundImage: `url(${item.img})` }}
                className="flex justify-between pt-4 px-3 mb-35 bg-gray-700/50 bg-blend-multiply bg-center bg-no-repeat bg-cover h-25 w-full"
              >
                <h2 className="text-white font-medium text-xl no-underline font-sans">
                  {item.class}
                </h2>

                <Box>
                  <IconButton aria-label="More options">
                    <MoreVertIcon className="text-gray-50" />
                  </IconButton>
                </Box>
              </Box>

              <CardActions className="flex justify-end border-t border-gray-300">
                <IconButton aria-label="Open folder">
                  <FolderOpenIcon />
                </IconButton>
                <IconButton aria-label="View trends">
                  <TrendingUpIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Link>
        ))}
      </Box>
    </Box>
  );
};
export default HomeComponent;
