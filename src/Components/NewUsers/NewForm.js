import { useRef, useState } from 'react';
import classes from './NewForm.module.css';
const NewForm = (props) =>{
    const [userName, updateUserName] = useState('');
    const [age, updateAge] = useState('');
    const userNameRef = useRef();
    const userNameChangeHandler=(event)=>{
        updateUserName(event.target.value);
    }
    const ageChangeHandler=(event)=>{
        updateAge(event.target.value);
    }
    const addUserHandler = (event) =>{
        event.preventDefault();
        const user={
            userName : userName,
            age : age,
            key : Math.random()
        };
        updateUserName('');
        updateAge('');
        props.addUser(user);
        userNameRef.current.focus();
    }
    return(
        <form className={classes.NewForm}>
            <div className={classes.NewForm__inputs}>
                <label>User Name</label>
                <input type='text' value={userName} onChange={userNameChangeHandler} ref={userNameRef}/>
                <label>Age</label>
                <input type='Number' value={age} onChange={ageChangeHandler} min='0' step ='1' max='120'/>
            </div>
            <div className={classes.NewForm__actions}>
                <button type='submit' onClick={addUserHandler}>Add User</button>
            </div>
        </form>
    )
}
export default NewForm;