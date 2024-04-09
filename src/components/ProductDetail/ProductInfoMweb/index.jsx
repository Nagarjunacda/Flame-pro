import { useState } from 'react';
import AdditionalInfoBlock from '../AdditionalInfoBlock';
import styles from '../productDetail.module.css';

function ProductInfoMweb({ data, productInfo }) {
    const [selectedLink, setSelectedLink] = useState('Additional Information')

    const handleSelectedLink = (link) => {
        if (selectedLink === link) {
            setSelectedLink('')
            return
        }
        setSelectedLink(link)
    }

    const getInfoData = (infoLink) => {
        console.log(infoLink, '!!')
        switch (infoLink) {
            case 'Additional Information':
                return <AdditionalInfoBlock productInfo={productInfo} />
            default:
                return ''
        }
    }

    return <>
        {
            data.map((infoLink, index) => {
                return <section className={styles.infoMwebCont}><h5 key={index} className={selectedLink === infoLink ? styles.selectedLink : styles.infoLinks} onClick={() => { handleSelectedLink(infoLink) }}>{infoLink}</h5>
                    {selectedLink === infoLink && <section className={styles.dataBlock}>{getInfoData(infoLink)}</section>}
                </section>
            })
        }
    </>
}
export default ProductInfoMweb