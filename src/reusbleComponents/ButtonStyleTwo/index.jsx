import Button from "react-bootstrap/Button";

const ButtonStyleTwo = ({ text, textColor, isLoadState, btnFunction }) => {
  const buttonStyle = {
    backgroundColor: "transparent",
    borderTop: "0",
    borderLeft: "0",
    borderRight: "0",
    borderBottom: "1px solid #fff !important", // Increase specificity
    color: textColor,
    textDecoration: "underline",
    transition: "all 0.3s ease",
    outline: "none",
    borderRadius: "0px",
    fontSize: "16px", // Set a specific font size or use a CSS variable
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
