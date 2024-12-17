"use client"
const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      firstName: "John",
      position: "Developer", // Majority tasks are "Feature" and "Bug Fix"
      numbers: {
        active: 2,
        newTask: 1,
        completed: 2,
        failed: 0
      },
      tasks: [
        {
          active: true,
          newTask: false,
          completed: true,
          failed: false,
          title: "Fix Login Bug",
          description: "Resolve the issue causing login failures for some users.",
          date: "2024-11-21",
          category: "Bug Fix",
          assignee: "John"  // Added assignee
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Update Documentation",
          description: "Document the new API routes for developers.",
          date: "2024-11-18",
          category: "Documentation",
          assignee: "John"  // Added assignee
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Implement Dark Mode",
          description: "Add dark mode toggle functionality to the dashboard.",
          date: "2024-11-25",
          category: "Feature",
          assignee: "John"  // Added assignee
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      firstName: "Jane",
      position: "Tester", // Handles "Bug Fix" tasks and has failed tasks
      numbers: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 2
      },
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Optimize Homepage",
          description: "Improve page load time by optimizing assets.",
          date: "2024-11-22",
          category: "Optimization",
          assignee: "Jane"  // Added assignee
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: true,
          title: "Fix Search Filter",
          description: "Resolve issues with inaccurate search results.",
          date: "2024-11-20",
          category: "Bug Fix",
          assignee: "Jane"  // Added assignee
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Create Email Templates",
          description: "Design templates for system notifications.",
          date: "2024-11-15",
          category: "Design",
          assignee: "Jane"  // Added assignee
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Database Migration",
          description: "Migrate the database to a more robust server.",
          date: "2024-11-19",
          category: "Maintenance",
          assignee: "Jane"  // Added assignee
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      firstName: "David",
      position: "Developer", // Mainly involved in "Feature" tasks
      numbers: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 0
      },
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Add User Analytics",
          description: "Integrate analytics to track user behavior.",
          date: "2024-11-28",
          category: "Feature",
          assignee: "David"  // Added assignee
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Fix Notification Bug",
          description: "Resolve issues with notifications not showing.",
          date: "2024-11-17",
          category: "Bug Fix",
          assignee: "David"  // Added assignee
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      firstName: "Emily",
      position: "Designer", // Focused on "Design" tasks
      numbers: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 0
      },
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          title: "Develop Payment Gateway",
          description: "Integrate payment gateway into the checkout process.",
          date: "2024-11-30",
          category: "Feature",
          assignee: "Emily"  // Added assignee
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Create Landing Page",
          description: "Design and implement a new landing page.",
          date: "2024-12-01",
          category: "Design",
          assignee: "Emily"  // Added assignee
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Code Review",
          description: "Review pull requests from the team.",
          date: "2024-11-15",
          category: "Maintenance",
          assignee: "Emily"  // Added assignee
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      firstName: "Sophia",
      position: "Developer", // Tasks are primarily "Optimization" and "Feature"
      numbers: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 1
      },
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          title: "Refactor Backend Code",
          description: "Improve code readability and performance.",
          date: "2024-11-29",
          category: "Optimization",
          assignee: "Sophia"  // Added assignee
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: true,
          title: "Resolve API Issues",
          description: "Fix bugs causing incorrect API responses.",
          date: "2024-11-16",
          category: "Bug Fix",
          assignee: "Sophia"  // Added assignee
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Implement File Uploads",
          description: "Add functionality to allow users to upload files.",
          date: "2024-11-12",
          category: "Feature",
          assignee: "Sophia"  // Added assignee
        }
      ]
    }
  ];
  



const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
    firstName: "Michael"
  },
  {
    id: 2,
    email: "sumit@gmail.com",
    password: "123",
    firstName: "Sumit"
  }
];




//   export const setLocalStorage = () => {
//     localStorage.setItem('employees', JSON.stringify(employees))
//     localStorage.setItem('admin', JSON.stringify(admin))
    
//   }


//   // setLocalStorage()
// // localStorage.clear()


//   export const getLocalStorage = () => {
//     const employees = JSON.parse(localStorage.getItem('employees'))
//     const admin = JSON.parse(localStorage.getItem('admin'))
//     return {employees, admin}
//   }
  
export const setLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  if (typeof window !== "undefined") {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const admin = JSON.parse(localStorage.getItem("admin")) || [];
    return { employees, admin };
  }
  return { employees: [], admin: [] }; // Return empty if on the server
};

// Only call setLocalStorage on the client side
if (typeof window !== "undefined") {
  setLocalStorage();
}