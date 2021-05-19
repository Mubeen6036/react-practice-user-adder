import Card from '../../UI/Card';
import User from './User';
import classes from './Users.module.css';
const Users =(props) =>{
    const users = props.users.map(x=>{
        <User userName={props.userName} age={props.age}/>
    });
    return(
        <Card className={classes.Users}>
            {users}
        </Card>
    )
}
export default Users;