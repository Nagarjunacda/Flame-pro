import { renderHTML } from '@/utils/htmlString';
import styles from './textAreaBlock.module.css';

function TextAreaBlock({ trayData }) {
    const desc = trayData?.description;
    return <section className={styles.mainCont}>
        <section className={styles.innerCont}>{renderHTML(desc)}</section>
    </section>
}
export default TextAreaBlock