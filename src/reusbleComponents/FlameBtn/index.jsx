import Button from "react-bootstrap/Button";

const FlameBtn = ({ color, text, textColor, isLoadState, btnFunction }) => {
  const buttonStyle = {
    backgroundColor: color,
    border: "none",
    color: textColor,
    padding: "var(--padding-btn)",
    transform: "skew(-20deg)",
    textDecoration: "none",
    transition: "all 0.3s ease",
    outline: "none",
    borderRadius: "0px",
    fontSize: "var(--font-size-btn)",
  };
  const textStyle = {
    transform: "skew(20deg)",
  };
  const btnText = isLoadState ? "Loading..." : text;
  return (
    <Button onClick={btnFunction} style={buttonStyle}>
      <span style={textStyle}>{btnText}</span>
    </Button>
  );
};

export default FlameBtn;
