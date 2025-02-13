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
import { classrooms } from "@/data/data";


const HomeComponent = () => {
  

  return (
    <Box className="mx-auto px-4 py-8 container">
      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classrooms.map((item) => (
          <Link key={item?.id} href={`/classrooms/${item?.id}`} >
            <Card className="rounded-lg hover:cursor-pointer">
              <Box
                sx={{ backgroundImage: `url(${item.img})` }}
                className="flex justify-between pt-4 px-3 mb-35 bg-gray-700/50 bg-blend-multiply bg-center bg-no-repeat bg-cover h-25 w-full"
              >
                <h2 className="text-white font-medium text-xl hover:underline font-sans">
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
