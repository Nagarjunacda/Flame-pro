// pages/[...slug].js

import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./breadCrumbs.module.css";

const Breadcrumbs = ({ isPadding }) => {
  const router = useRouter();
  const { asPath } = router;
  const urlString = asPath.split("?")[0] || "";
  const pathArray = urlString.split("/").filter(Boolean);
  // const uppercasedArray = pathArray.map((str) => str.toUpperCase())
  const uppercasedArray = pathArray.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1)
  );
  const isShopAllOnly =
    pathArray.length === 1 && pathArray.includes("shop-all");
  const shopAllRoute = isShopAllOnly
    ? uppercasedArray
    : uppercasedArray.slice(0, -1);
  const routeArr = pathArray.includes("shop-all")
    ? shopAllRoute
    : uppercasedArray;

  // Render the breadcrumbs
  return (
    <section
      className={isPadding ? styles.mainContwithPadding : styles.mainCont}
    >
      <Link href="/">Home</Link>
      {routeArr.map((segment, index) => (
        <span key={index}>
          {" / "}
          {routeArr.length === index + 1 ? (
            <span className={styles.fontBold}>{segment}</span>
          ) : (
            <Link
              href={`/${pathArray.slice(0, index + 1).join("/")}`}
              className={styles.fontNormal}
            >
              {segment}
            </Link>
          )}
        </span>
      ))}
    </section>
  );
};

export default Breadcrumbs;
