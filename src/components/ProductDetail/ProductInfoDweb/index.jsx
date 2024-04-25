import { useState } from 'react';
import AdditionalInfoBlock from '../AdditionalInfoBlock';
import WearFitGuideBlock from '../WearFitGuideBlock';
import ConformsToBlock from '../ConformsToBlock';
import OuterLayerBlock from '../OuterLayerBlock';
import CommonInfoBlock from '../CommonInfoBlock';
import styles from '../productDetail.module.css';

function ProductInfoDweb({ data, productInfo }) {
    const [selectedLink, setSelectedLink] = useState('Additional Information');

    const handleSelectedLink = (link) => {
        setSelectedLink(link)
    }

    const getInfoData = () => {
        switch (selectedLink) {
            case 'Additional Information':
                return <AdditionalInfoBlock productInfo={productInfo} />
            case 'Conforms To':
                return <ConformsToBlock productInfo={productInfo} />
            case 'Outer Layers':
                return <OuterLayerBlock productInfo={productInfo} />
            case 'Wear Fit Guide':
                return <WearFitGuideBlock productInfo={productInfo} />
            default:
                return <CommonInfoBlock productInfo={productInfo} selectedLink={selectedLink} />
        }
    }

    return <section className={styles.infoDwebCont}>
        <section className={styles.dwebHeadingCont}>
            {
                data?.map((infoLink, index) => {
                    return <section key={index} className={selectedLink === infoLink ? styles.selectedLinkDweb : styles.infoLinksDweb} onClick={() => { handleSelectedLink(infoLink) }}><h5 className={styles.infoText}>{infoLink}</h5></section>
                })
            }
        </section>
        <section className={styles.dataBlock}>{getInfoData()}</section>
    </section>
}
export default ProductInfoDweb