import { useState } from 'react';
import styles from '../productDetail.module.css';

function ProductInfoMweb({ data }) {
    const [selectedLink, setSelectedLink] = useState('Additional Information')

    const handleSelectedLink = (link) => {
        setSelectedLink(link)
    }
    return <>
        {
            data.map((infoLink, index) => {
                return <h5 key={index} className={selectedLink === infoLink ? styles.selectedLink : styles.infoLinks} onClick={() => { handleSelectedLink(infoLink) }}>{infoLink}</h5>
            })
        }
    </>
}
export default ProductInfoMweb