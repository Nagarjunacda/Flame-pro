// pages/[...slug].js

import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./breadCrumbs.module.css";

const Breadcrumbs = ({ isPadding }) => {
  const router = useRouter();
  const { asPath } = router;
  const urlString = asPath.split("?")[0] || "";
  const pathArray = urlString.split("/").filter(Boolean);
  const uppercasedArray = pathArray.map((str) => {
    if (str === "shop") {
      return str.charAt(0).toUpperCase() + str.slice(1);
    } else if (str === "firefighting-ppe") {
      return "Firefighting PPE";
    } else {
      return str
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(" ");
    }
  });

  const isShopAllOnly =
    pathArray.length === 1 && pathArray.includes("shop");
  const isResourceHubOnly =
    pathArray.length === 1 && pathArray.includes("resource-hub");
  const shopAllRoute = isShopAllOnly
    ? uppercasedArray
    : uppercasedArray.slice(0, -1);
  const resourceHubRoute = isResourceHubOnly
    ? uppercasedArray
    : uppercasedArray.slice(0, -1);
  const routeArr = pathArray.includes("shop")
    ? shopAllRoute
    : pathArray.includes("resource-hub")
      ? resourceHubRoute
      : uppercasedArray;

  // Render the breadcrumbs
  return (
    <section
      className={isPadding ? styles.mainContwithPadding : styles.mainCont}
    >
      <section className={styles.flexCont}>
        <Link href="/">Home</Link>
        {routeArr.map((segment, index) => (
          <span key={index}>
            {" > "}
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
    </section>
  );
};

export default Breadcrumbs;
