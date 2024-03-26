import { useContext } from "react";
import NonceContext from "@/context/NonceContext";
import { useCartData } from "@/context/CartContext";
import CartContext from "@/context/CartContext";
import BasketTitleBlock from "@/components/ContentBlocks/BasketTitleBlock";
import BasketItems from "@/components/ContentBlocks/BasketItems";

const Basket = () => {
  const nonceVal = useContext(NonceContext)
  const { cartData } = useCartData();

  return (
    <>
      <BasketTitleBlock
        title={"Your Quote Basket"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id."
        }
      />
      {cartData?.items?.length && <BasketItems cartData={cartData} />}
    </>
  );
};

export default Basket;
