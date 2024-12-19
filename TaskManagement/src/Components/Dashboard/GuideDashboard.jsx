import React from "react";

const GuideDashboard = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-12 w-full max-w-md md:max-w-2xl">
        <div className="text-center text-3xl font-semibold text-gray-800 mb-6">
          Create Task
        </div>

        <form className="flex flex-col gap-6">
          {/* Task Title */}
          <div className="flex flex-col gap-2">
            <label htmlFor="Tasktitle" className="text-lg text-gray-700">
              Task Title
            </label>
            <input
              type="text"
              name="Tasktitle"
              id="Tasktitle"
              className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:border-indigo-500"
              placeholder="Enter task title"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label htmlFor="Description" className="text-lg text-gray-700">
              Description
            </label>
            <textarea
              name="Description"
              id="Description"
              className="border-2 border-gray-300 rounded-lg p-2 h-32 md:h-48 resize-none focus:outline-none focus:border-indigo-500"
              placeholder="Enter task description"
            />
          </div>

          {/* Date */}
          <div className="flex flex-col gap-2">
            <label htmlFor="Date" className="text-lg text-gray-700">
              Date
            </label>
            <input
              type="date"
              name="Date"
              id="Date"
              className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Assign To */}
          <div className="flex flex-col gap-2">
            <label htmlFor="Assignto" className="text-lg text-gray-700">
              Assign To
            </label>
            <input
              type="text"
              name="Assignto"
              id="Assignto"
              className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:border-indigo-500"
              placeholder="Assign task"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 bg-gradient-to-r from-blue-400 to-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GuideDashboard;
