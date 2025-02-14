"use client";
import Link from 'next/link';

const AssignmentCard = ({ assignment }) => {
  return (
    <div className="border p-4 rounded-lg">
      <h3 className="text-xl font-bold">{assignment.title}</h3>
      <p>{assignment.description}</p>
      <p>Due: {new Date(assignment.dueDate).toLocaleString()}</p>
      <Link href={`/classrooms/${assignment.classroomId}/classwork/${assignment.id}`}>
        View Details
      </Link>
    </div>
  );
};

export default AssignmentCard;