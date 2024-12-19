import React, { useState } from 'react';
import NewTask from '../TaskList/NewTask';
import AcceptTask from '../TaskList/AcceptTask';
import CompletedTask from '../TaskList/CompletedTask';
import FailedTask from '../TaskList/FailedTask';


const StudentDashboard = ({data}) => {

  return (
    <>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-[60px] md:mt-12 mt-[20px] mx-5">
        <div className="flex flex-row items-center">
          <div className="text-lg md:text-2xl text-yellow-500 font-semibold">Hello 👋</div>
          <div className="text-3xl md:text-4xl font-bold text-blue-700 ml-2">{data.name}</div>
        </div>

        <div className="bg-blue-600 text-white py-2 px-6 rounded-lg cursor-pointer text-center font-semibold hover:bg-blue-700 transition duration-300">
          Logout
        </div>
      </div>

      {/* Stats Section */}
      <div className="m-5 flex flex-wrap justify-between gap-4 md:gap-6">
        <div className="flex flex-col items-center justify-center h-[140px] w-[160px] md:w-[300px] border-2 border-blue-500 rounded-lg p-4 bg-blue-300 hover:bg-blue-100 transition duration-300">
          <div className="text-4xl font-bold text-blue-700">{data.taskCount.newTask}</div>
          <div className="text-[20px] md:text-[30px] font-semibold text-gray-700">New Task</div>
        </div>

        <div className="flex flex-col items-center justify-center h-[140px] w-[160px] md:w-[300px] border-2 border-green-500 rounded-lg p-4 bg-green-300 hover:bg-green-100 transition duration-300">
          <div className="text-4xl font-bold text-green-700">{data.taskCount.completed}</div>
          <div className="text-[20px] md:text-[30px]  font-semibold text-gray-700">Completed</div>
        </div>

        <div className="flex flex-col items-center justify-center h-[140px] w-[160px] md:w-[300px] border-2 border-yellow-500 rounded-lg p-4 bg-yellow-300 hover:bg-yellow-100 transition duration-300 mt-5 md:mt-0">
          <div className="text-4xl font-bold text-yellow-700">{data.taskCount.progress}</div>
          <div className="text-[20px] md:text-[30px] font-semibold text-gray-700">Accepted</div>
        </div>

        <div className="flex flex-col items-center justify-center h-[140px] w-[160px] md:w-[300px] border-2 border-red-500 rounded-lg p-4 bg-red-300 hover:bg-red-100 transition duration-300 mt-5 md:mt-0">
          <div className="text-4xl font-bold text-red-700">{data.taskCount.failed}</div>
          <div className="text-[20px] md:text-[30px] font-semibold text-gray-700">Failed</div>
        </div>
      </div>

      {/* Task List Section */}
      <div className="overflow-x-auto flex space-x-4 p-4 mt-8 scrollbar-hidden">
       
<NewTask/>
<AcceptTask/>
<CompletedTask/>
<FailedTask/>

        <div className="min-w-[280px] md:min-w-[300px] h-[220px] bg-white border-2 border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300">
          <div className="text-xl font-semibold text-gray-800">Task 2</div>
        </div>
        <div className="min-w-[280px] md:min-w-[300px] h-[220px] bg-white border-2 border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300">
          <div className="text-xl font-semibold text-gray-800">Task 3</div>
        </div>
        <div className="min-w-[280px] md:min-w-[300px] h-[220px] bg-white border-2 border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300">
          <div className="text-xl font-semibold text-gray-800">Task 4</div>
        </div>
        <div className="min-w-[280px] md:min-w-[300px] h-[220px] bg-white border-2 border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300">
          <div className="text-xl font-semibold text-gray-800">Task 5</div>
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
