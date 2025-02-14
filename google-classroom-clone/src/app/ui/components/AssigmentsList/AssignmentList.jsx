"use client";
import { useSelector } from 'react-redux';
import AssignmentCard from '../AssignmentCard/AssignmentCard';

const AssignmentList = ({ classroomId }) => {
  const assignments = useSelector((state) =>
    state.assignments.assignments.filter(
      (a) => a.classroomId === classroomId
    )
  );

  return (
    <div className="space-y-4">
      {assignments.map((assignment) => (
        <AssignmentCard key={assignment.id} assignment={assignment} />
      ))}
    </div>
  );
};

export default AssignmentList;