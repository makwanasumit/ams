import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Menu, Search, Bell } from 'lucide-react'



import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button, buttonVariants } from '../ui/button'

export const metadata = {
  title: 'Employee Dashboard',
  description: 'Employee management system dashboard',
}


const EmployeeDashboard = ({ data, changeUser }) => {
  console.log(data)
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    // window.location.reload()
    changeUser('')  
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/tasks">Tasks</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <h1 className="text-xl font-bold text-gray-900 md:text-2xl">EMS Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">{data.firstName}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer" onClick={logOutUser}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        {/* Greeting */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Welcome, {data.firstName}</h2>
          <p className="text-gray-600">Have a great day at work!</p>
        </section>

        {/* Task Categories */}
        <section className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Tasks</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.numbers.newTask}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.numbers.completed}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Failed</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.numbers.failed}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">active</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.numbers.active}</div>
            </CardContent>
          </Card>
        </section>

        {/* Task List */}
        <section className="space-y-4">
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <h2 className="text-2xl font-bold text-gray-900">All Tasks</h2>
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
              <Input
                placeholder="Search tasks..."
                className="w-full sm:w-[300px]"
              />
              <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Filter by priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High Priority</SelectItem>
                  <SelectItem value="medium">Medium Priority</SelectItem>
                  <SelectItem value="low">Low Priority</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>


          {data.tasks.map((tasks) => (
            <Card key={Math.random()} className="">
              <CardHeader>
                <CardTitle>{tasks.title}</CardTitle>
                <CardDescription>{tasks.category} - {tasks.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{tasks.description}</p>
              </CardContent>
            </Card>
          ))}


          {/* Task Items */}

          {/* <Card className="">
            <CardHeader>
              <CardTitle>Update Documentation</CardTitle>
              <CardDescription>Medium Priority - Due: 2024-03-20</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Review and update the API documentation to reflect recent changes in the backend services.</p>
            </CardContent>
          </Card>

          <Card className="">
            <CardHeader>
              <CardTitle>Bug Fix: Mobile Responsiveness</CardTitle>
              <CardDescription>Low Priority - Due: 2024-03-25</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Address reported issues with the dashboard layout on smaller screen sizes.</p>
            </CardContent>
          </Card>
          <Card className="">
            <CardHeader>
              <CardTitle>Implement New Feature</CardTitle>
              <CardDescription>High Priority - Due: 2024-03-15</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Develop and integrate the new user authentication system as per the latest security standards.</p>
            </CardContent>
          </Card>

          <Card className="">
            <CardHeader>
              <CardTitle>Update Documentation</CardTitle>
              <CardDescription>Medium Priority - Due: 2024-03-20</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Review and update the API documentation to reflect recent changes in the backend services.</p>
            </CardContent>
          </Card>

          <Card className="">
            <CardHeader>
              <CardTitle>Bug Fix: Mobile Responsiveness</CardTitle>
              <CardDescription>Low Priority - Due: 2024-03-25</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Address reported issues with the dashboard layout on smaller screen sizes.</p>
            </CardContent>
          </Card>
           */}
        </section>
      </main>
    </div>

  )
}

export default EmployeeDashboard