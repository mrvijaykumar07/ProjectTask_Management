import React, { useContext, useState, useEffect } from 'react';
import Login from './Components/Auth/Login';
import StudentDashboard from './Components/Dashboard/StudentDashboard';
import GuideDashboard from './Components/Dashboard/GuideDashboard';
import { AuthContext } from './Contexts/AuthProvider';

function App() {
  const [user, setUser] = useState(null);
  const [currentStudent, setCurrentStudent] = useState(null); 
  const AuthData = useContext(AuthContext);
  const LoggedInUser=""
  // useEffect(() => {
  //   SetLocalStorage();
  // }, []);


  useEffect(() => {
    if(AuthData){
    const LoggedInUser =localStorage.getItem('LoggedInUser')}
    if(LoggedInUser){
      setUser(LoggedInUser.role)
    }
  }, [AuthData]);

  if (!AuthData || !AuthData.students || !AuthData.guide) {
    return <div>Loading...</div>;
  }

  const LoginHandle = (email, password) => {
    // Check if the user is a guide
    if (email === 'gyan@gmail.com' && password === 'adm') {
      setUser('guide'); 
      localStorage.setItem('LoggedInUser', JSON.stringify({role:"Guide"}))
    } 
    // Check if the user is a student
    else {
      const foundStudent = AuthData.students.find(
        (student) => student.email === email && student.password === password
      );
      if (foundStudent) {
        setUser('student');
        setCurrentStudent(foundStudent);
        localStorage.setItem('LoggedInUser', JSON.stringify({role:"Students"}))
      } 
      
      else {
        alert('Invalid Credentials');
      }
    }
  };

  return (
    <>
      {!user && <Login LoginHandle={LoginHandle} />}
      
      {user === 'guide' && <GuideDashboard />}
      
      {user === 'student' && <StudentDashboard data={currentStudent} />}
    </>
  );
}

export default App;
