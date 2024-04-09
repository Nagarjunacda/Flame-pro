import Link from 'next/link';
import FlameImage from '@/reusbleComponents/FlameImage';
import styles from './additionalInfoBlock.module.css'

function AdditionalInfoBlock({ productInfo }) {
    const data = productInfo.filter((e) => e?.title === 'Additional Information');
    const info = data.length > 0 ? data[0] : {};
    const downloadText = info?.downloads?.download_description;
    const downloadIconSrc = '/Images/downloadIcon.svg';
    const brochureLink = info?.downloads?.download_brochure?.url;
    const pdf1 = info?.downloads?.download_brochure?.filename;
    const pdf2 = info?.downloads?.technical_data_sheet_download?.filename;
    const techDataLink = info?.downloads?.technical_data_sheet_download?.url;
    console.log(info, '!!!')

    return <section className={styles.mainCont}>
        <section className={styles.tableBlock}>
            <section className={styles.tableItemAlt}>
                <h6 className={styles.itemName}>Fabric System</h6>
                <h6 className={styles.itemVal}>{info?.fabric_system}</h6>
            </section>
            <section className={styles.tableItem}>
                <h6 className={styles.itemName}>Gender</h6>
                <h6 className={styles.itemVal}>{info?.gender}</h6>
            </section>
            <section className={styles.tableItemAlt}>
                <h6 className={styles.itemName}>Colour</h6>
                <h6 className={styles.itemVal}>{info?.colour}</h6>
            </section>
            <section className={styles.tableItem}>
                <h6 className={styles.itemName}>Jacket Size</h6>
                <h6 className={styles.itemVal}>{info?.jacket_size}</h6>
            </section>
            <section className={styles.tableItemAlt}>
                <h6 className={styles.itemName}>Jacket Length</h6>
                <h6 className={styles.itemVal}>{info?.jacket_length}</h6>
            </section>
            <section className={styles.tableItem}>
                <h6 className={styles.itemName}>Trouser Size</h6>
                <h6 className={styles.itemVal}>{info?.trouser_size}</h6>
            </section>
            <section className={styles.tableItemAlt}>
                <h6 className={styles.itemName}>Trouser Length</h6>
                <h6 className={styles.itemVal}>{info?.jacket_length}</h6>
            </section>
        </section>
        <section className={styles.downloadsBlock}>
            <h3 className={styles.donwloadHead}>Downloads</h3>
            <h5 className={styles.downloadText}>{downloadText}</h5>
            <section className={styles.brochure}>
                <section className={styles.brochureItem}>
                    <a href={brochureLink} download={pdf1} target='blank'>
                        <FlameImage src={downloadIconSrc} alt={'downloadIcon'} />
                    </a>
                    <h5 className={styles.brochureText}>Download Brochure</h5>
                </section>
                <section className={styles.brochureItem}>
                    <a href={techDataLink} download={pdf2} target='blank'>
                        <FlameImage src={downloadIconSrc} alt={'downloadIcon'} />
                    </a>
                    <h5 className={styles.brochureText}>Technical Data Sheet Download</h5>
                </section>
            </section>
        </section>
    </section>
}
export default AdditionalInfoBlock