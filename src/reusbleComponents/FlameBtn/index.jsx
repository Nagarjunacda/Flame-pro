import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useMediaQuery } from "react-responsive";

const FlameBtn = ({
  color,
  text,
  textColor,
  isLoadState,
  btnFunction,
  isSmallBtn,
  isFromContactForm,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isTabScreen = useMediaQuery({
    query: "(min-width: 600px) and (max-width: 899px)",
  });
  const applyBorderArr = ["Phone", "Email", "ASAP", "Arrange A Time"];
  const applyBorder = applyBorderArr.includes(text);
  // const isSmallBtn = text === "Add To Quote Basket" && !isTabScreen;

  const buttonStyle = {
    backgroundColor: isHovered ? textColor : color,
    color: isHovered ? color : textColor,
    border: `solid 1px var(--color-primary)`,
    padding: isSmallBtn ? "16px 32px" : "var(--padding-btn)",
    transform: "skew(-20deg)",
    textDecoration: "none",
    transition: "all 0.3s ease",
    outline: "none",
    borderRadius: "0px",
    fontSize: "var(--font-size-xs-ext)",
    fontFamily: "'CustomFont-Black', sans-serif",
    width: "auto",
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

  const handleMouseEnter = () => {
    if (isFromContactForm) {
      return;
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (isFromContactForm) {
      return;
    }
    setIsHovered(false);
  };

  return (
    <>
      {text && (
        <Button
          onClick={handleClick}
          style={buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span style={textStyle}>
            {isLoadState && (
              <Spinner animation="border" variant="danger" size="sm" />
            )}
            {btnText}
          </span>
        </Button>
      )}
    </>
  );
};

export default FlameBtn;
