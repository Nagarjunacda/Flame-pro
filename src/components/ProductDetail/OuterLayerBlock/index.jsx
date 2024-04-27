import { useState } from 'react';
import { renderHTML } from '@/utils/htmlString';
import FlameImage from '@/reusbleComponents/FlameImage';
import styles from './outerLayerBlock.module.css';

function OuterLayerBlock({ productInfo }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupContent, setPopupContent] = useState('');
    const data = productInfo?.filter((e) => e?.title === 'Outer Layers');
    const info = data?.length > 0 ? data[0] : {};
    const offCanvasClose = '/Images/offCanvasClose.svg';
    const outerLayerItems = info?.outer_layer_item;
    const headingsArr = ['', 'Colour Availability', 'Outer Shell Tensile/Tear Strength', 'Radiant Heat Transfer Performance', 'Breathability Performance', 'Lead Times', 'Notes'];

    const closePopup = () => {
        setIsPopupOpen(false);
    }

    const handleHeadingClick = (item) => {
        setIsPopupOpen(true);
        setPopupContent(item);
    }

    return (
        <div className={styles.outerLayerTable}>
            <div className={styles.tableContainer}>
                <table>
                    <thead>
                        <tr>
                            {headingsArr?.map((heading, index) => (
                                <th key={index}>{heading}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {outerLayerItems?.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? styles.brownRow : ''}>
                                <td onClick={() => { handleHeadingClick(item) }} role='button'><u>{item.title_outer_layer}</u></td>
                                <td>{item.colour_availability}</td>
                                <td>{item.outer_shell_tensile__tear_strength}</td>
                                <td>{item.radiant_heat_transfer_performance}</td>
                                <td>{item.breathability_performance}</td>
                                <td>{renderHTML(item.lead_times)}</td>
                                <td>{item.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isPopupOpen && <div className={styles.popupBackground} onClick={closePopup}>
                <div
                    className={styles.popupContent}
                    onClick={(e) => e.stopPropagation()}
                >
                    <section className={styles.popupCont}>
                        <section className={styles.headingSec}>
                            <h3 className={styles.popupHeading}>{popupContent?.title_outer_layer}</h3>
                            <section className={styles.closeBtnSec}>
                                <figure className={styles.closeBtn} onClick={closePopup}>
                                    <FlameImage src={offCanvasClose} alt='closeBtn' />
                                </figure>
                            </section>
                        </section>
                        <p className={styles.popupText}>{renderHTML(popupContent?.popup_text)}</p>
                    </section>
                </div>
            </div>}
        </div>
    );
}

export default OuterLayerBlock;
