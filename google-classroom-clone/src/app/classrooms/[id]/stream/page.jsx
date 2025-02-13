"use client";

import ClassroomHeader from "@/app/ui/components/ClassroomHeader/ClassroomHeader";
import { classrooms } from "@/data/data";
import { Box } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";

export default function StreamContent() {
  const classroom = classrooms.find(
    (classroom) => classroom.id === Number(useParams().id)
  );
  if (!classroom) {
    return <div>Classroom not found</div>;
  }

  return (
    <div className="py-4">
      <ClassroomHeader classroomId={classroom.id} />

      <Box
        sx={{ backgroundImage: `url(${classroom.img})` }}
        className="m-5 h-60 rounded-lg bg-center bg-no-repeat bg-cover relative" 
      >
        <h2 className="text-3xl font-bold text-white absolute bottom-4 left-4 translate-y-[-10px] translate-x-[10px]">
          {classroom.class}
        </h2>
      </Box>
      {/* Add assignments/resources section here */}
    </div>
  );
}
