import { useEffect, useState } from "react";
import HeaderMweb from "./HeaderMweb";
import HeaderDweb from "./HeaderDweb";
import { useMediaQuery } from "react-responsive";
import { blogPostsUrl } from "@/utils/urls";
import { handleServerSideProps } from "@/utils/handleServerSideData";
import styles from "./header.module.css";

function Header({ headerData, relativeHeader, scrolled }) {
  const [postsData, setPostsData] = useState({})
  const isDesktop = useMediaQuery({ query: '(min-width:900px)' });

  useEffect(() => {
    const getPostsData = async () => {
      const { data, error, headers } = await handleServerSideProps(blogPostsUrl);
      setPostsData(data)
    }
    getPostsData();
    // setTriggerUpdate(false)
  }, [])

  return (
    <main>
      {isDesktop ? <HeaderDweb scrolled={scrolled} postsData={postsData} headerData={headerData} isFromDrawer={false} relativeHeader={relativeHeader} /> :
        <HeaderMweb postsData={postsData} scrolled={scrolled} headerData={headerData} relativeHeader={relativeHeader} />}
    </main>
  );
}
export default Header;
