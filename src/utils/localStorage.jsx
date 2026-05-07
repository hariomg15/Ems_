const employees = [
  {
    "id": 1,
    "firstname": "Amit",
    "email": "e@e.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "completed": 5,
      "failed": 3,
      "newTask": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Database optimization",
        "taskDescription": "Optimize queries for better performance",
        "taskDate": "2024-10-11",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Design new feature",
        "taskDescription": "Create mockups for the new feature",
        "taskDate": "2024-10-09",
        "category": "Design"
      }
    ]
  },
  {
    "id": 2,
    "firstname": "Priya",
    "email": "priya@me.com",
    "password": "123",
    "taskCounts": {
      "active": 3,
      "completed": 4,
      "failed": 2,
      "newTask": 2
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "API Integration",
        "taskDescription": "Integrate third-party APIs",
        "taskDate": "2024-10-15",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Bug Fixing",
        "taskDescription": "Resolve UI bugs",
        "taskDate": "2024-10-10",
        "category": "Testing"
      }
    ]
  },
  {
    "id": 3,
    "firstname": "Rahul",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "completed": 6,
      "failed": 4,
      "newTask": 3
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Code Review",
        "taskDescription": "Review code for performance issues",
        "taskDate": "2024-10-18",
        "category": "Code Review"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Documentation",
        "taskDescription": "Update project documentation",
        "taskDate": "2024-10-08",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 4,
    "firstname": "Sneha",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": {
      "active": 4,
      "completed": 2,
      "failed": 1,
      "newTask": 2
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Database optimization",
        "taskDescription": "Optimize queries for better performance",
        "taskDate": "2024-10-11",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Design new feature",
        "taskDescription": "Create mockups for the new feature",
        "taskDate": "2024-10-09",
        "category": "Design"
      }
    ]
  },
  {
    "id": 5,
    "firstname": "Vikram",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "completed": 3,
      "failed": 5,
      "newTask": 4
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Server Maintenance",
        "taskDescription": "Perform routine server checks",
        "taskDate": "2024-10-12",
        "category": "IT"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Feature Deployment",
        "taskDescription": "Deploy new features to production",
        "taskDate": "2024-10-07",
        "category": "Deployment"
      }
    ]
  }
];



  
    const admin = [{
      "id": 1,
      "email": "admin@me.com",
      "password": "123"
    }];

    export const setLocalStorage = ()=>{
        localStorage.setItem('employees',JSON.stringify(employees))
        localStorage.setItem('admin',JSON.stringify(admin))
    }

    export const initializeStorage = () => {
        const existingEmployees = localStorage.getItem('employees')
        const existingAdmin = localStorage.getItem('admin')

        if (!existingEmployees || !existingAdmin) {
          setLocalStorage()
        }
    }

    export const saveEmployeesToStorage = (employeesData) => {
      localStorage.setItem('employees', JSON.stringify(employeesData))
    }

    export const getLocalStorage = ()=>{
        const employees =JSON.parse(localStorage.getItem('employees'))
        const admin =JSON.parse(localStorage.getItem('admin'))
        
        return {employees, admin}
    }
  
