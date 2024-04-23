import Link from "next/link";
import FlameImage from "@/reusbleComponents/FlameImage";
import styles from "./additionalInfoBlock.module.css";

function AdditionalInfoBlock({ productInfo }) {
  const data = productInfo?.filter(
    (e) => e?.title === "Additional Information"
  );
  const info = data?.length && data.length > 0 ? data[0] : {};
  const downloadText = info?.downloads?.download_description;
  const downloadIconSrc = "/Images/downloadIcon.svg";
  const brochureLink = info?.downloads?.download_brochure?.url;
  const ukDeclaration = info?.downloads?.uk_declaration_of_conformity?.url;
  const euDeclaration = info?.downloads?.eu_declaration_of_conformity?.url;
  const pdf1 = info?.downloads?.download_brochure?.filename;
  const pdf2 = info?.downloads?.technical_data_sheet_download?.filename;
  const pdf3 = info?.downloads?.uk_declaration_of_conformity?.filename;
  const pdf4 = info?.downloads?.eu_declaration_of_conformity?.filename;
  const techDataLink = info?.downloads?.technical_data_sheet_download?.url;

  return (
    <section className={styles.mainCont}>
      <section className={styles.tableBlock}>
        {info?.fabric_system && (
          <section className={styles.tableItem}>
            <h6 className={styles.itemName}>Fabric System</h6>
            <h6 className={styles.itemVal}>{info?.fabric_system}</h6>
          </section>
        )}
        {info?.gender && (
          <section className={styles.tableItem}>
            <h6 className={styles.itemName}>Gender</h6>
            <h6 className={styles.itemVal}>{info?.gender}</h6>
          </section>
        )}
        {info?.colour && (
          <section className={styles.tableItem}>
            <h6 className={styles.itemName}>Colour</h6>
            <h6 className={styles.itemVal}>{info?.colour}</h6>
          </section>
        )}
        {info?.coverall_size && (
          <section className={styles.tableItem}>
            <h6 className={styles.itemName}>Coverall Size</h6>
            <h6 className={styles.itemVal}>{info?.coverall_size}</h6>
          </section>
        )}
        {info?.coverall_length && (
          <section className={styles.tableItem}>
            <h6 className={styles.itemName}>Coverall Length</h6>
            <h6 className={styles.itemVal}>{info?.coverall_length}</h6>
          </section>
        )}
        {info?.jacket_size && (
          <section className={styles.tableItem}>
            <h6 className={styles.itemName}>Jacket Size</h6>
            <h6 className={styles.itemVal}>{info?.jacket_size}</h6>
          </section>
        )}
        {info?.jacket_length && (
          <section className={styles.tableItem}>
            <h6 className={styles.itemName}>Jacket Length</h6>
            <h6 className={styles.itemVal}>{info?.jacket_length}</h6>
          </section>
        )}
        {info?.trouser_size && (
          <section className={styles.tableItem}>
            <h6 className={styles.itemName}>Trouser Size</h6>
            <h6 className={styles.itemVal}>{info?.trouser_size}</h6>
          </section>
        )}
        {info?.trouser_length && (
          <section className={styles.tableItem}>
            <h6 className={styles.itemName}>Trouser Length</h6>
            <h6 className={styles.itemVal}>{info?.trouser_length}</h6>
          </section>
        )}
        {info?.gloves_size && (
          <section className={styles.tableItem}>
            <h6 className={styles.itemName}>Gloves Size</h6>
            <h6 className={styles.itemVal}>{info?.gloves_size}</h6>
          </section>
        )}
        {info?.boots_size && (
          <section className={styles.tableItem}>
            <h6 className={styles.itemName}>Boots Size</h6>
            <h6 className={styles.itemVal}>{info?.boots_size}</h6>
          </section>
        )}
        {info?.helmet_size && (
          <section className={styles.tableItem}>
            <h6 className={styles.itemName}>Helmet Size</h6>
            <h6 className={styles.itemVal}>{info?.helmet_size}</h6>
          </section>
        )}
        {info?.sizes && (
          <section className={styles.tableItem}>
            <h6 className={styles.itemName}>Size</h6>
            <h6 className={styles.itemVal}>{info?.sizes}</h6>
          </section>
        )}
      </section>
      {(brochureLink || techDataLink || ukDeclaration || euDeclaration) && (
        <section className={styles.downloadsBlock}>
          <h3 className={styles.donwloadHead}>Downloads</h3>
          <h5 className={styles.downloadText}>{downloadText}</h5>
          <section className={styles.brochure}>
            {brochureLink && (
              <section className={styles.brochureItem}>
                <a href={brochureLink} download={pdf1} target="blank">
                  <FlameImage src={downloadIconSrc} alt={"downloadIcon"} />
                </a>
                <a href={brochureLink} download={pdf1} target="blank">
                  <h5 className={styles.brochureText}>Download Brochure</h5>
                </a>
              </section>
            )}
            {techDataLink && (
              <section className={styles.brochureItem}>
                <a href={techDataLink} download={pdf2} target="blank">
                  <FlameImage src={downloadIconSrc} alt={"downloadIcon"} />
                </a>
                <a href={techDataLink} download={pdf2} target="blank">
                  <h5 className={styles.brochureText}>
                    Technical Data Sheet Download
                  </h5>
                </a>
              </section>
            )}
            {ukDeclaration && (
              <section className={styles.brochureItem}>
                <a href={ukDeclaration} download={pdf3} target="blank">
                  <FlameImage src={downloadIconSrc} alt={"downloadIcon"} />
                </a>
                <a href={ukDeclaration} download={pdf3} target="blank">
                  <h5 className={styles.brochureText}>
                    UK Declaration of Conformity
                  </h5>
                </a>
              </section>
            )}
            {euDeclaration && (
              <section className={styles.brochureItem}>
                <a href={euDeclaration} download={pdf4} target="blank">
                  <FlameImage src={downloadIconSrc} alt={"downloadIcon"} />
                </a>
                <a href={euDeclaration} download={pdf4} target="blank">
                  <h5 className={styles.brochureText}>
                    EU Declaration-of- Conformity
                  </h5>
                </a>
              </section>
            )}
          </section>
        </section>
      )}
    </section>
  );
}
export default AdditionalInfoBlock;
