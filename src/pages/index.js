import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FlameBtn from "@/reusbleComponents/FlameBtn";
import TitleAndTextCentre from "@/components/ContentBlocks/TitleAndTextCentre";
import UspBlock from "@/components/ContentBlocks/UspBlock";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  function openPopup() {
    console.log("btn-clicked");
  }
  const icon1 = "/Images/usbIcon1.svg";
  const icon2 = "/Images/usbIcon2.svg";
  const icon3 = "/Images/usbIcon3.svg";
  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <main>
        <Header />
        <Footer />
        <TitleAndTextCentre
          title={"About FlamePro & Who We Are"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id."
          }
        />
        <UspBlock
          firtImage={icon1}
          firstText="Lorem Ipsum Dolor Sit Met"
          secondImage={icon2}
          secondText="Lorem Ipsum Dolor Sit Met"
          thirdText="Lorem Ipsum Dolor Sit Met"
          thirdImage={icon3}
        />
      </main>
    </>
  );
}
