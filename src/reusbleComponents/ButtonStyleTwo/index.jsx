import Button from "react-bootstrap/Button";

const ButtonStyleTwo = ({ text, textColor, isLoadState, btnFunction }) => {
  const buttonStyle = {
    backgroundColor: "transparent",
    borderTop: "0",
    borderLeft: "0",
    borderRight: "0",
    borderColor: 'var(--color-navItemBorder)',// Change borderBottom to borderColor
    borderWidth: "0 0 1px 0", // Optional: Specify individual border widths if needed
    borderStyle: "solid",
    color: textColor,
    textDecoration: "underline",
    transition: "all 0.3s ease",
    outline: "none",
    borderRadius: "0px",
    fontSize: "16px",
  };
  const textStyle = {
    display: "inline-block",
    whiteSpace: "nowrap",
  };
  const btnText = isLoadState ? "Loading..." : text;

  const handleClick = () => {
    if (btnFunction) {
      btnFunction();
    }
  };

  return (
    <Button onClick={handleClick} style={buttonStyle}>
      <span style={textStyle}>{btnText}</span>
    </Button>
  );
};

export default ButtonStyleTwo;
