'use client'

import React, { useContext } from 'react'


import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Search, Menu, Bell, User, Plus, Trash2 } from 'lucide-react'
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { AuthContext } from '@/context/AuthProvider'

export default function AdminDashboard({ data, changeUser }) {
  const [dates, setdates] = useState()
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete project proposal', description: 'Draft and finalize the Q3 project proposal', dates: '2023-06-15', assignee: 'John Doe', category: 'Planning' },
    { id: 2, title: 'Review code changes', description: 'Review and approve recent pull requests', dates: '2023-06-16', assignee: 'Jane Smith', category: 'Development' },
  ])
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', position: 'Developer' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', position: 'Designer' },
  ])
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('tasks')

  const handleCreateTask = (e) => {
    e.preventDefault()
    const form = e.target
    const newTask = {
      id: tasks.length + 1,
      title: form.title.value,
      description: form.description.value,
      dates: dates ? format(dates, 'yyyy-MM-dd') : '',
      assignee: form.assignee.value,
      category: form.category.value,
    }
    setTasks([...tasks, newTask])
    form.reset()
    setdates(undefined)
  }

  const handleAddEmployee = (e) => {
    e.preventDefault()
    const form = e.target
    const newEmployee = {
      id: employees.length + 1,
      name: form.name.value,
      email: form.email.value,
      position: form.position.value,
    }
    setEmployees([...employees, newEmployee])
    form.reset()
  }

  const handleRemoveEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id))
  }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    // window.location.reload()
    changeUser('')  
  }


  const authData = useContext(AuthContext)

  const taskDetails = authData.employees.flatMap(employee =>
    employee.tasks.map(task => ({
      title: task.title,
      description: task.description,
      dates: task.dates,
      assignee: task.assignee,
      category: task.category
    }))
  );

  
  const removedDuplicates = taskDetails.map((task)=>({
    category: task.category
  }  ))
  let res = Array.from(new Set(removedDuplicates.map(JSON.stringify))).map(JSON.parse);


  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setdate] = useState('')
  const [assignee, setAssignee] = useState('')
  const [category, setCategory] = useState('')
  const [allTask, setallTask] = useState([])

  console.log(title)

  // const formHandler = (e) => {
  //   e.preventDefault()
  //   const form = e.target
  //   const newTask = {
  //     title: form.title.value,
  //     description: form.description.value,
  //     dates: dates ? format(dates, 'yyyy-MM-dd') : '',
  //     assignee: form.assignee.value,
  //     category: form.category.value,
  //     active:false, 
  //     newTask:true, 
  //     completed:false, 
  //     failed:false,
  //   }
  //   setTasks([...tasks, newTask])
  //   form.reset()
  //   console.log(tasks)
  //   console.log(newTask)

  //   // setdates(undefined)
  //   // setTitle(newTask.title)
  //   // setDescription(newTask.description)
  //   // setdate(newTask.dates)
  //   setAssignee(newTask.assignee)
  //   // setCategory(newTask.category)
    
  //   setallTask({title, description, date, assignee, category, active:false, newTask:true, completed:false, failed:false})
  //   // localStorage.setItem('task', JSON.stringify(newTask))


  //   const datass = JSON.parse(localStorage.getItem("employees"));
  //   console.log(datass)
  
  //   datass.forEach(function(elem){
  //     console.log(assignee === elem.firstName)
  //     if(assignee === elem.firstName){
  //       elem.tasks.push(newTask)
  //       console.log(elem)
  //     }
  //   })
  //   console.log(datass)  
  // }


  
  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    
    // Create a new task object
    const newTask = {
      title: form.title.value,
      description: form.description.value,
      dates: dates ? format(dates, 'yyyy-MM-dd') : '',
      assignee: form.assignee.value,
      category: form.category.value,
      active: false, 
      newTask: true, 
      completed: false, 
      failed: false,
    };
    
    // Update the tasks state
    setTasks([...tasks, newTask]);
    
    // Reset the form
    form.reset();
    console.log(tasks);
    console.log(newTask);
  
    // Set additional states
    setAssignee(newTask.assignee);
    // setallTask({
    //   title: newTask.title,
    //   description: newTask.description,
    //   date: newTask.dates,
    //   assignee: newTask.assignee,
    //   category: newTask.category,
    //   active: false,
    //   newTask: true,
    //   completed: false,
    //   failed: false,
    // });
  
    // Retrieve existing employees data from localStorage
    const datass = JSON.parse(localStorage.getItem("employees")) || [];
    
    // Update the assignee's task list
    const updatedData = datass.map((employee) => {
      if (newTask.assignee === employee.firstName) {
        // Add the new task to the employee's task list
        return {
          ...employee,
          tasks: [...(employee.tasks || []), newTask], // Handle cases where `tasks` might be undefined
        };
      }
      return employee;
    });
  
    // Save the updated employees data back to localStorage
    localStorage.setItem("employees", JSON.stringify(updatedData));
    
    console.log(updatedData);
  };
  




  return (
    <div className="flex h-screen bg-gray-100">
      <h1>{data.id}</h1>
      {/* Main Content */}
      <div className="w-full flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
          <div className="flex items-center space-x-4">
            <form className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 w-full md:w-[300px] rounded-full"
              />
            </form>
            <Button
              variant={activeSection === 'employees' ? "secondary" : "ghost"}
              onClick={() => setActiveSection('employees')}
            >
              <User className="w-5 h-5 mr-2" />
              Employees
            </Button>
            <Button
              variant={activeSection === 'tasks' ? "secondary" : "ghost"}
              onClick={() => setActiveSection('tasks')}
            >
              <Plus className="w-5 h-5 mr-2" />
              Tasks
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">{data.firstName}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='bg-white  rounded-md mr-6 border-2 '>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='px-6 py-2 rounded-md hover:bg-gray-200'>Profile</DropdownMenuItem>
                <DropdownMenuItem className='px-6 py-2 rounded-md hover:bg-gray-200'>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='px-6 py-2 rounded-md  cursor-pointer hover:bg-gray-200' onClick={logOutUser}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {activeSection === 'tasks' ? (
            <>
              <h1 className="text-2xl font-semibold mb-6">Create Task</h1>

              {/* Create Task Form */}
              <form onSubmit={formHandler} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <Label htmlFor="title">Task Title</Label>
                  <Input id="title" name="title" required />
                </div>
                <div className="mb-4">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" name="description" required />
                </div>
                <div className="mb-4">
                  <Label>dates</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !dates && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dates ? format(dates, "PPP") : <span>Pick a dates</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={dates}
                        onSelect={setdates}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="mb-4">
                  <Label htmlFor="assignee">Assign To</Label>
                  <Select name="assignee" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an employee" />
                    </SelectTrigger>
                    <SelectContent>
                      {authData.employees.map((employees) => (
                        <SelectItem key={employees.id} value={employees.firstName}>{employees.firstName}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="mb-4">
                  <Label htmlFor="category">Category</Label>
                  <Select name="category" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                    {res.map((res,idx) => (
                      <SelectItem value={res.category} key={idx}>{res.category}</SelectItem>
                    ))}
                    </SelectContent>

                  </Select>
                </div>
                <Button type="submit">Create Task</Button>
              </form>

              {/* Tasks Table */}
              <h2 className="text-xl font-semibold mb-4">Existing Tasks</h2>
              <div className="bg-white shadow-md rounded overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>dates</TableHead>
                      <TableHead>Assignee</TableHead>
                      <TableHead>Category</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {taskDetails.map((task) => (
                      <TableRow key={Math.random()}>
                        <TableCell>{task.title}</TableCell>
                        <TableCell>{task.description}</TableCell>
                        <TableCell>{task.dates}</TableCell>
                        <TableCell>{task.assignee}</TableCell>
                        <TableCell>{task.category}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-semibold mb-6">Employee Management</h1>

              {/* Add Employee Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="mb-4">Add Employee</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Employee</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleAddEmployee} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                    <div>
                      <Label htmlFor="position">Position</Label>
                      <Input id="position" name="position" required />
                    </div>
                    <Button type="submit">Add Employee</Button>
                  </form>
                </DialogContent>
              </Dialog>

              {/* Employee List */}
              <div className="bg-white shadow-md rounded overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>


                    {authData.employees.map((employee) => (
                      <TableRow key={employee.id}>
                        <TableCell>{employee.firstName}</TableCell>
                        <TableCell>{employee.email}</TableCell>
                        <TableCell>{employee.position}</TableCell>
                        <TableCell>
                          <Button variant="destructive" size="sm" onClick={() => handleRemoveEmployee(authData.employees.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  )
}