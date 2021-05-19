import classes from './User.module.css';
const User = (props) =>{
    <div className={classes.User}>
        {`${props.userName} (${props.age} years old)`}
    </div>
}
export default User;