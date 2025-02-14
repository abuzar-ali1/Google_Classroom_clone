"use client";
import AssignmentForm from '@/app/ui/components/AssignmentForm/AssignmentForm';
import { store } from '@/redux/store';
import { Provider, useSelector } from 'react-redux';

export default function EditAssignmentPage({ params }) {
  const assignment = useSelector((state) =>
    state.assignments.assignments.find(
      (a) => a.id === params.assignmentId
    )
  );

  return (
    <div>
      <h1>Edit Assignment</h1>
      <Provider store={store}>
      <AssignmentForm assignment={assignment} />
      </Provider>
    </div>
  );
}