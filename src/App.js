import { useState } from 'react';
import classes from './App.module.css';
import NewUsers from './Components/NewUsers/NewUsers';
import Users from './Components/Users/Users';

function App() {
  
  const [users, updateUsers] = useState([]);
  
  const addUserHandler = (user) =>{
    updateUsers((prevUsers)=>{
      return [...prevUsers, user];
    });
  }

  return (
    <div className={classes.App}>
        <NewUsers addUser={addUserHandler}/>
        <Users users={users}/>
    </div>
  );
}

export default App;
