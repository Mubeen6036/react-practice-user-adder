import { useState } from 'react';
import classes from './NewForm.module.css';
const NewForm = (props) =>{
    const [userName, updateUserName] = useState('');
    const [age, updateAge] = useState('');
    const userNameChangeHandler=(event)=>{
        updateUserName(event.target.value);
    }
    const ageChangeHandler=(event)=>{
        updateAge(event.target.value);
    }
    const addUserHandler = (event) =>{
        event.preventDefault();
        const user={
            name : userName,
            age : age
        };
        props.addUser(user);
    }
    return(
        <form>
            <label>UserName</label>
            <input type='text' value={userName} onChange={userNameChangeHandler} />
            <label>Age</label>
            <input type='Number' value={age} onChange={ageChangeHandler} min='0' step ='1' max='120'/>
            <button type='submit' onClick={addUserHandler}>Add User</button>
        </form>
    )
}
export default NewForm;