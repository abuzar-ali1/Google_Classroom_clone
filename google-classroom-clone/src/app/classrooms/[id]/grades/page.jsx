"use client"
import ClassroomHeader from "@/app/ui/components/ClassroomHeader/ClassroomHeader";
import { classrooms } from "@/data/data";
import { useParams } from "next/navigation";
import React from "react";


export default function GradesContent() {
  const classroom = classrooms.find(
    (classroom) => classroom.id === Number(useParams().id)
  );
  if (!classroom) {
    return <div>Classroom not found</div>;
  }


    return (
      <div className="py-4">
        <div>
        <ClassroomHeader classroomId={classroom.id}/>

        </div>
        <h2 className="text-xl font-bold mb-4">Grades</h2>
        <p>Assignments and materials go here.</p>
      </div>
    );
  }