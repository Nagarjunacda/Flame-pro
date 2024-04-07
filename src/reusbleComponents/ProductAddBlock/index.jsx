import FlameBtn from "../FlameBtn";

const ProductAddBlock = ({ src, alt }) => {
  const productAddBlockStyle = {
    backgroundImage: "url(/Images/firebackgroundImage.svg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  };
  const productAddBlockcontent = {
    zIndex: 88,
    position: "relative",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Change the opacity value as needed
    zIndex: 1, // Adjust the alpha value to change the overlay opacity
  };
  return (
    <>
      <section style={productAddBlockStyle}>
        <div style={productAddBlockcontent}>
          <h3>We Can Help With Aftercare</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <FlameBtn
            text={"Discover Now"}
            color={"var(--color-secondary)"}
            textColor={"var(--color-primary)"}
          />
        </div>
        <div style={overlayStyle}> </div>
      </section>
    </>
  );
};

export default ProductAddBlock;
