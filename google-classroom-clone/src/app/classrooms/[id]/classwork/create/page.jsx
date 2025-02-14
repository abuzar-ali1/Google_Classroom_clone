"use client";

import AssignmentForm from "@/app/ui/components/AssignmentForm/AssignmentForm";
import { classrooms } from "@/data/data";
import { store } from "@/redux/store";
import { useParams } from "next/navigation";
import React from "react";
import { Provider } from "react-redux";

export default function CreateAssignmentPage({ params }) {
   const classroom = classrooms.find(
    (classroom) => classroom.id === Number(useParams().id)
  );
  if (!classroom) {
    return <div>Classroom not found</div>;
  }
  return (
    <div>
      <h1>Create Assignment</h1>
       <Provider store={store}>

         <AssignmentForm classroomId={params.classroomId} />
       </Provider>

    </div>
  );
}