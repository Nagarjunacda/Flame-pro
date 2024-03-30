import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

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
    fontSize: "var(--font-size-xs-ext)",
    fontFamily: "'CustomFont-Black', sans-serif",
  };
  const textStyle = {
    transform: "skew(20deg)",
    display: "inline-block",
    whiteSpace: "nowrap",
    display: "flex",
    gap: "12px",
    alignItems: "center",
  };
  const btnText = isLoadState ? "Loading..." : text;

  const handleClick = () => {
    btnFunction();
  };

  return (
    <Button onClick={handleClick} style={buttonStyle}>
      <span style={textStyle}>
        {isLoadState && (
          <Spinner animation="border" variant="danger" size="sm" />
        )}
        {btnText}
      </span>
    </Button>
  );
};

export default FlameBtn;
