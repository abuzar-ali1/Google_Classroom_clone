"use client";
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addAssignment, updateAssignment } from '@/redux/slices/assignmentSlice';
import { Button, TextField } from '@mui/material';
import { classrooms } from '@/data/data';
import React from 'react';

const AssignmentForm = ({ assignment }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [title, setTitle] = useState(assignment?.title || '');
  const [description, setDescription] = useState(assignment?.description || '');
  const [dueDate, setDueDate] = useState(assignment?.dueDate || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAssignment = {
      id: assignment?.id || Date.now().toString(),
      title,
      description,
      dueDate,
      classroomId: assignment?.classroomId,
    };

    if (assignment) {
      dispatch(updateAssignment(newAssignment));
    } else {
      dispatch(addAssignment(newAssignment));
    }
    router.push(`/classrooms/${newAssignment.classroomId}/stream`);
  };
   const classroom = classrooms.find(
    (classroom) => classroom.id === Number(useParams().id)
  );
  if (!classroom) {
    return <div>Classroom not found</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
    <TextField onChange={(e) => setTitle(e.target.value)} id="standard-basic" value={title} label="title" required variant="standard" />
      {/* <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      /> */}
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <TextField
        type="datetime-local"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <Button type="submit">{assignment ? 'Update' : 'Create'} Assignment</Button>
    </form>
  );
};

export default AssignmentForm;