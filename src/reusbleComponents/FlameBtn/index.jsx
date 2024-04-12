import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useMediaQuery } from "react-responsive";

const FlameBtn = ({ color, text, textColor, isLoadState, btnFunction }) => {
  const isTabScreen = useMediaQuery({ query: "(min-width:600px)" });
  const applyBorderArr = ['Phone', 'Email', 'ASAP', 'Arrange A Time'];
  const applyBorder = applyBorderArr.includes(text);
  const isSmallBtn = text === 'Add To Quote Basket' && !isTabScreen;
  const buttonStyle = {
    backgroundColor: color,
    border: "none",
    color: textColor,
    padding: isSmallBtn ? '20px' : "var(--padding-btn)",
    transform: "skew(-20deg)",
    textDecoration: "none",
    transition: "all 0.3s ease",
    outline: "none",
    borderRadius: "0px",
    border: applyBorder ? 'solid 1px' : 'none',
    fontSize: "var(--font-size-xs-ext)",
    fontFamily: "'CustomFont-Black', sans-serif",
    width: 'auto'
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
