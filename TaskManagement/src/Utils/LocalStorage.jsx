// localStorage.clear();


let students = [
  {
    id: 1,
    name: "Arjun Kumar",
    email: "kumar@gmail.com",
    password: "abc",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Literature Review",
        taskDescription: "Prepare a literature review on machine learning techniques.",
        taskDate: "2024-12-15",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Proposal Submission",
        taskDescription: "Submit the project proposal for guide review.",
        taskDate: "2024-11-25",
        category: "Documentation"
      }
    ],
    taskCount: {
      newTask: 5,
      completed: 8,
      failed: 2,
      progress: 70
    }
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priyasharma@gmail.com",
    password: "xyz",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Data Collection",
        taskDescription: "Collect and clean data for the project.",
        taskDate: "2024-12-20",
        category: "Data Gathering"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Dataset Preparation",
        taskDescription: "Prepare the dataset for model training.",
        taskDate: "2024-11-30",
        category: "Data Processing"
      }
    ],
    taskCount: {
      newTask: 4,
      completed: 6,
      failed: 3,
      progress: 60
    }
  },
  {
    id: 3,
    name: "Vikram Singh",
    email: "vikramsingh@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Model Design",
        taskDescription: "Design the architecture for the deep learning model.",
        taskDate: "2024-12-25",
        category: "Modeling"
      }
    ],
    taskCount: {
      newTask: 2,
      completed: 3,
      failed: 1,
      progress: 50
    }
  },
  {
    id: 4,
    name: "Anjali Verma",
    email: "anjaliverma@gmail.com",
    password: "def",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Presentation Preparation",
        taskDescription: "Prepare slides for the mid-term project presentation.",
        taskDate: "2024-12-05",
        category: "Presentation"
      }
    ],
    taskCount: {
      newTask: 1,
      completed: 10,
      failed: 0,
      progress: 90
    }
  },
  {
    id: 5,
    name: "Rahul Mehta",
    email: "rahulmehta@gmail.com",
    password: "ghi",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Code Implementation",
        taskDescription: "Implement the code for data preprocessing.",
        taskDate: "2024-12-22",
        category: "Coding"
      }
    ],
    taskCount: {
      newTask: 3,
      completed: 5,
      failed: 2,
      progress: 40
    }
  }
];

let guide = [
  {
    id: 1,
    name: "Dr. Neha Gupta",
    email: "gyan@gmail.com",
    password: "adm"
  }
];

export const SetLocalStorage = () => {
  localStorage.setItem("students", JSON.stringify(students));
  localStorage.setItem("guide", JSON.stringify(guide));
};

export const GetLocalStorage = () => {
  const students = JSON.parse(localStorage.getItem("students"));
  const guide = JSON.parse(localStorage.getItem("guide"));

  return { students, guide };
};

console.log(students);
