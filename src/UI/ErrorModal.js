// import Card from "./Card";
import classes from './ErrorModal.module.css';

const ErrorModal = (props) =>{
    return(
        <div className={classes.ErrorModal} onClick={(event)=>{event.stopPropagation()}}>
            <header>
                <h2>Error</h2>
            </header>
            <div className={classes.ErrorModal__Content}>
                {props.children}                
            </div>
            <footer className={classes.ErrorModal__actions}>
                <button onClick={props.toggleShowError}>Okay</button>
            </footer> 
        </div>
    );
}
export default ErrorModal;