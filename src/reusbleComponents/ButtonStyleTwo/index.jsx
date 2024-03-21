import Button from "react-bootstrap/Button";
import FlameImage from "../FlameImage";

const ButtonStyleTwo = ({
  text,
  textColor,
  isLoadState,
  btnFunction,
  btnIcon,
}) => {
  const buttonStyle = {
    backgroundColor: "transparent",
    border: "0",
    color: textColor,
    textDecoration: "none",
    transition: "all 0.3s ease",
    outline: "none",
    borderRadius: "0px",
    fontSize: "16px",
    padding: "0px",
  };
  const iconStyleInline = {
    width: "15px",
    height: "15px",
    display: "inline-block",
    marginRight: "10px",
  };
  const textStyle = {
    display: "inline-block",
    whiteSpace: "nowrap",
    borderTop: "0",
    borderLeft: "0",
    borderRight: "0",
    borderColor: "var(--color-navItemBorder)", // Change borderBottom to borderColor
    borderWidth: "0 0 1px 0", // Optional: Specify individual border widths if needed
    borderStyle: "solid",
  };
  const btnText = isLoadState ? "Loading..." : text;

  const handleClick = () => {
    if (btnFunction) {
      btnFunction();
    }
  };

  return (
    <Button onClick={handleClick} style={buttonStyle}>
      {btnIcon && (
        <figure style={iconStyleInline}>
          <FlameImage src={btnIcon} alt={"icon"} />
        </figure>
      )}
      <span style={textStyle}>{btnText}</span>
    </Button>
  );
};

export default ButtonStyleTwo;
