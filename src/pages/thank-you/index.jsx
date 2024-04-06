import { useRouter } from "next/router";
import BasketTitleBlock from "@/components/ContentBlocks/BasketTitleBlock";
import BasketItems from "@/components/ContentBlocks/BasketItems";

const Basket = () => {
  const router = useRouter();
  const { query } = router;
  const { ref } = query
  return (
    <>
      <BasketTitleBlock
        title={"Thank You For Submitting Your Quote"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id."
        }
        subHeading={`Reference No. ${ref}`}
      />
    </>
  );
};

export default Basket;
