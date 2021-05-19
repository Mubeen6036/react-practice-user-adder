import Card from "./Card";
import classes from './ErrorModal.module.css';

const ErrorModal = (props) =>{
    return(
        <div className={classes.ErrorModal} onClick={(event)=>{event.stopPropagation()}}>
            {props.children}
            <button onClick={props.toggleShowError}>Okay</button>
        </div>
    );
}
export default ErrorModal;