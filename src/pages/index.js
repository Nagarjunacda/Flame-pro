import { Inter } from "next/font/google";
import { homePageUrl } from "@/utils/urls";
import { handleServerSideProps } from "@/utils/handleServerSideData";
import TitleAndTextCentre from "@/components/ContentBlocks/TitleAndTextCentre";
import HeaderBanner from "@/components/ContentBlocks/HeaderBanner";
import UspBlock from "@/components/ContentBlocks/UspBlock";
import ResourceHubBlock from "@/components/ContentBlocks/ResourceHubBlock";
import TwoAdBlocks from "@/components/ContentBlocks/TwoAdBlocks";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const { data } = props;
  const trayData = data?.acf?.content_blocks;
  function getTrays(tray) {
    switch (tray?.acf_fc_layout) {
      case "header_banner_with_cta":
        return <HeaderBanner trayData={tray} />;
      case "usp_block":
        return <UspBlock trayData={tray} />;
      case "title_and_text_centre":
        return <TitleAndTextCentre trayData={tray} />;
      case "two_ad_blocks":
        return <TwoAdBlocks trayData={tray} />;
      case "resource_hub":
        return <ResourceHubBlock trayData={tray} />;
      default:
        return null;
    }
  }

  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <main>
        {trayData ? (
          trayData.map((tray) => {
            return getTrays(tray);
          })
        ) : (
          <p>Something went wrong unable to fetch the data</p>
        )}
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { data, error } = await handleServerSideProps(homePageUrl);
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
