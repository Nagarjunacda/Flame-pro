import { useState } from 'react';
import styles from '../productDetail.module.css';

function ProductInfoDweb({ data }) {
    const [selectedLink, setSelectedLink] = useState('Additional Information')

    const handleSelectedLink = (link) => {
        setSelectedLink(link)
    }
    return <>
        {
            data.map((infoLink, index) => {
                return <section key={index} className={selectedLink === infoLink ? styles.selectedLinkDweb : styles.infoLinksDweb} onClick={() => { handleSelectedLink(infoLink) }}><h5 className={styles.infoText}>{infoLink}</h5></section>
            })
        }
    </>
}
export default ProductInfoDweb