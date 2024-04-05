import { useContext } from "react";
import NonceContext from "@/context/NonceContext";
import { useCartData } from "@/context/CartContext";
import CartContext from "@/context/CartContext";
import BasketTitleBlock from "@/components/ContentBlocks/BasketTitleBlock";
import BasketItems from "@/components/ContentBlocks/BasketItems";
import Breadcrumbs from "@/components/BreadCrumbs";
import { handleServerSideProps } from "@/utils/handleServerSideData";
import { basketPageUrl } from "@/utils/urls";
import RenderTrays from "@/components/RenderTrays";
import Popup from "@/reusbleComponents/Popup";
import CheckoutForm from "@/components/CheckoutForm";

const Basket = ({ data }) => {
  const nonceVal = useContext(NonceContext);
  const { cartData } = useCartData();
  const trayData = data?.acf?.content_blocks;
  const formData = [{ section1: 'Full Name*' }, { section1: 'Email Address*' }, { section1: 'Phone Number*' }, { section1: 'Company Name*' }, { section1: 'Job Title*' }, { section1: 'Message' }]

  // return (
  //   <>
  //     <Breadcrumbs isPadding={true} />
  //     <BasketTitleBlock
  //       title={"Your Quote Basket"}
  //       description={
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id."
  //       }
  //     />
  //     {cartData?.items?.length ? <BasketItems cartData={cartData} /> : null}
  //   </>
  // );
  return (
    <>
      <main>
        {trayData ? (
          <>
            <RenderTrays trayData={trayData} />
            <CheckoutForm heading={'Enter Your Details'} formFields={formData} heading2={'Contact Me By...'} />
          </>
        ) : (
          <p>This Page Under Development</p>
        )}
      </main>
      <Popup />
    </>
  );
};

export default Basket;

export async function getServerSideProps(context) {
  const { data, error } = await handleServerSideProps(basketPageUrl);
  if (error) {
    return {
      props: {
        data: null,
      },
    };
  }

  return {
    props: {
      data,
    },
  };
}
