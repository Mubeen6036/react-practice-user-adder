import Card from '../../UI/Card';
import User from './User';
import classes from './Users.module.css';
const Users =(props) =>{
    const users = props.users.length?props.users.map(x=><User userName={x.userName} age={x.age} key={x.key}/>):null;
    return(
        <Card className={classes.Users}>
            {users}
        </Card>
    )
}
export default Users;