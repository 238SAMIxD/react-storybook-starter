import PropTypes from "prop-types";

function Button({ label, backgroundColor = "red", size = "md", onClick }) {
    let scale = 1;
    if(size === "sm") scale = 0.75;
    if(size === "lg") scale = 1.5;

    const style = {
        backgroundColor,
        padding: `${scale * 0.5}rem ${scale}rem`,
        border: "none"
    };

    return <button onClick={onClick} style={style}>{label}</button>;
}

// eslint-disable-next-line react/no-typos
Button.PropTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    onClick: PropTypes.func
};

export default Button;