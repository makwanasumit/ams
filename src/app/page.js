'use client'
import Login from "@/components/Auth/Login";
import AdminDashboard from "@/components/Dashboard/AdminDashboard";
import EmployeeDashboard from "@/components/Dashboard/EmployeeDashboard";
import { AuthContext } from "@/context/AuthProvider";
import { set } from "date-fns";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  const [loggedInUserdata, setloggedInUserdata] = useState(null)

  
  const authData = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    console.log(loggedInUser)

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setloggedInUserdata(userData.data)
    }
  
  }, [])
  
  
  
  // localStorage.clear()
  const handleLogin = (email, password) => {
    if (authData) {
      // Check for employee login
      const employee = authData.employees.find(
        (employee) => employee.email === email && employee.password === password
      );
      if (employee) {
        setUser("employee");
        setloggedInUserdata(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
        return; // Stop further execution
      }
  
      // Check for admin login
      const admin = authData.admin.find(
        (admin) => admin.email === email && admin.password === password
      );
      if (admin) {
        setUser("admin");
        setloggedInUserdata(admin);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "admin", data: admin })
        );
        return; // Stop further execution
      }
  
      // If no match is found
      alert("Wrong credentials");
    }
  };
  

  return (
    <>
    {!user && <Login handleLogin={handleLogin} /> }
      {user === "admin" && <AdminDashboard  changeUser={setUser} data={loggedInUserdata}/>}
      {user === "employee" && <EmployeeDashboard changeUser={setUser} data={loggedInUserdata} />}
    </>
  );
}
