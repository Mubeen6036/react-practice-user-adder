import classes from './Backdrop.module.css';
const Backdrop = (props) =>{
    const style = !props.hidden?{display:'none'}:{};
    return(
    <div style={style} className={classes.Backdrop} onClick={props.toggleShowError}>
        {props.children}
    </div>
    );
}
export default Backdrop;