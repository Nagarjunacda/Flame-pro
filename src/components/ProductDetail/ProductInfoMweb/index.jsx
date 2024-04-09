import { useState } from 'react';
import AdditionalInfoBlock from '../AdditionalInfoBlock';
import ConformsToBlock from '../ConformsToBlock';
import styles from '../productDetail.module.css';
import OuterLayerBlock from '../OuterLayerBlock';


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
        switch (infoLink) {
            case 'Additional Information':
                return <AdditionalInfoBlock productInfo={productInfo} />
            case 'Conforms To':
                return <ConformsToBlock productInfo={productInfo} />
            case 'Outer Layers':
                return <OuterLayerBlock productInfo={productInfo} />
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