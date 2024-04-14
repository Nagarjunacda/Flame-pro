import FlameImage from '@/reusbleComponents/FlameImage';
import styles from './conformsToBlock.module.css'
import ButtonStyleTwo from '@/reusbleComponents/ButtonStyleTwo';

function ConformsToBlock({ productInfo }) {
    const data = productInfo?.filter((e) => e?.title === 'Conforms To');
    const info = data?.length > 0 ? data[0] : {};
    const items = info?.conforms_to_items;
    const btnText = info?.button_name;

    const handleBtnClick = () => { }

    return <section className={styles.mainCont}>
        <section className={styles.buttonSec}>
            <ButtonStyleTwo
                text={btnText}
                textColor={"var( --color-primary)"}
                btnFunction={handleBtnClick} />
        </section>
        <section className={styles.listCont}>
            {items?.map((item, index) => {
                return <section key={index} className={styles.listItem}>
                    <section className={styles.image}>
                        <FlameImage src={item?.icons_comforts} alt={'icon'} />
                    </section>
                    <section className={styles.textBlock}>
                        <h3 className={styles.title}>{item?.title_conforms_to}</h3>
                        <h5 className={styles.desc}>{item?.description_conforms_to}</h5>
                    </section>
                </section>
            })}
        </section>
    </section>
}
export default ConformsToBlock