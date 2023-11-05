// import "./Toast.scss"
import styles from "./Toast.module.scss"
import classNames from "classnames/bind";

const Toast = ({mensaje, state, position="top-left"}) => {
    
    const cx = classNames.bind(styles);
    let classes = cx("toast-container", "toast-" + state, "position-" + position)

    return(
        <div className={classes}>
        {/* <div className={`toast-container toast-${state} position-${position}`}> */}
            <p>{mensaje}</p>
        </div>
    );
}

export default Toast;