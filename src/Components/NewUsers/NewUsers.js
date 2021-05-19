import Card from '../../UI/Card';
import NewForm from './NewForm';
import classes from './NewUsers.module.css';
const NewUsers = (props) =>{
    return(
        <Card className={classes.NewUsers}>
            <NewForm addUser={props.addUser}/>
        </Card>
    )
}
export default NewUsers;