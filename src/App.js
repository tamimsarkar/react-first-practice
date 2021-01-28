
import './App.css';
import { useState } from 'react';
import Main from './components/main/Main';
import data from './data.json'
import Salary from './components/salaray/Salary';
function App() {
 const [users, setUsers] = useState(data);
 const [salary, setSalary] = useState([]);
 const handleSalary = (user) => {
   const allSalary = [...salary,user]
   setSalary(allSalary)
 }
 const main = {
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',

 }

  return (
    <div className="App">
     <div style={main} className="main">
       {
         users.map(user => <Main salary={handleSalary} key={user.id}  user={user}></Main>)
       }
     </div>
     <div className="salary">
       <Salary addSalary={salary}></Salary>
     </div>
    </div>
  );
}

export default App;
