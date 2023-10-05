import './Button.css';

function Button({ onClick, children, visual, type }) {
    let buttonClass = '';

    if (!type) {
        type = "button"
    }

    if (visual === "link") {
        buttonClass = "button-link";
    }

    if (visual === "button") {
        buttonClass = "button-button";
    }

    return (
        <button className={buttonClass} onClick={onClick} type={type}>{children}</button>
    );
}

export default Button;