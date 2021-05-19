import classes from './User.module.css';
const User = (props) =>{
    return(
    <div className={classes.User}>
        {`${props.userName} (${props.age} years old)`}
    </div>
    );
}
export default User;