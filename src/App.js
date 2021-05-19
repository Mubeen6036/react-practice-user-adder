import { useState } from 'react';
import classes from './App.module.css';
import NewUsers from './Components/NewUsers/NewUsers';
import Users from './Components/Users/Users';
import Backdrop from './UI/Backdrop';
import ErrorModal from './UI/ErrorModal';

function App() {
  
  const [users, updateUsers] = useState([]);
  const [showError, toggleShowError] = useState(false);
  const [errorMessage, updateErrorMessage] = useState('');
  
  const addUserHandler = (user) =>{
    if(validateUser(user)){
      updateUsers((prevUsers)=>{
        return [...prevUsers, user];
      });
    }
  }
  const validateUser = (user) => {
    let message = '';
    if(user.userName.trim()==='' && user.age.trim() === ''){
      message = 'User Name and Age are invalid';
    }else if(user.userName.trim()==='' && user.age.trim() !== ''){
      message = 'User Name is invalid';
    }else if(user.userName.trim()!=='' && user.age.trim() === ''){
      message = 'Age is invalid';
    }
    if(message.trim() !== ''){
      updateErrorMessage(message);
      toggleErrorHandler();
      return false;
    }
    return true;
  }

  const toggleErrorHandler = () =>{
    toggleShowError((previousState)=>{
      return !previousState;
    });
  }

  return (
    <div className={classes.App}>
        <Backdrop hidden={showError} toggleShowError={toggleErrorHandler}>
          <ErrorModal toggleShowError={toggleErrorHandler}>
            {errorMessage}
          </ErrorModal>
        </Backdrop>
        <NewUsers addUser={addUserHandler}/>
        <Users users={users}/>
    </div>
  );
}

export default App;
