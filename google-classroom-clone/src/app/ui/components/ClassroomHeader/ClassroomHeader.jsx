"use client"
import Link from 'next/link';

import { usePathname } from 'next/navigation';


const ClassroomHeader = ({ classroomId }) => {
  const pathname = usePathname();
  const activeTab = pathname.split('/').pop(); 
 
  const tabs = [
    { name: 'Stream', path: 'stream' },
    { name: 'Classwork', path: 'classwork' },
    { name: 'People', path: 'people' },
    { name: 'Grades', path: 'grades' },

  ];
 

  return (
    <div className=" bg-white w-full border-b-1 border-b-gray-500" >
      <div className="px-4">
       
        <div className ="flex space-x-4">
          {tabs.map((tab) => (
            <Link
              key={tab.path}
              href={`/classrooms/${classroomId}/${tab.path}`} 
              className={`font-sans pb-2 px-4 font-medium ${
                activeTab === tab.path
                  ? ' border-b-3 border-blue-500 text-blue-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassroomHeader;