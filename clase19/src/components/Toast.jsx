import "./Toast.scss"

const Toast = ({mensaje, state, position="top-left"}) => {
    return(
        <div className={`toast-container toast-${state} position-${position}`}>
            <p>{mensaje}</p>
        </div>
    );
}

export default Toast;