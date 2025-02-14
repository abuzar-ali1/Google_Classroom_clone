"use client";
import ClassroomHeader from "@/app/ui/components/ClassroomHeader/ClassroomHeader";
import { classrooms } from "@/data/data";
import { useParams } from "next/navigation";
import React from "react";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import Menu from "@mui/material/Menu";
import Fade from '@mui/material/Fade';
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

export default function ClassworkContent() {
  const classroom = classrooms.find(
    (classroom) => classroom.id === Number(useParams().id)
  );
  if (!classroom) {
    return <div>Classroom not found</div>;
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="py-4">
      <div>
        <ClassroomHeader classroomId={classroom.id} />
      </div>

      <div>
       
      <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Create
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open} 
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}><Link href={`/classrooms/${classroom.id}/classwork/create`}>Assignment</Link></MenuItem>
        <MenuItem onClick={handleClose}>Question</MenuItem>
        <MenuItem onClick={handleClose}>Matirail</MenuItem>
      </Menu>
    </div>
      </div>
    </div>
  );
}
