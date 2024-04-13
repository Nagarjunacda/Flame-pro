import { renderHTML } from '@/utils/htmlString';
import styles from './textAreaBlock.module.css';

function TextAreaBlock({ trayData }) {
    const desc = trayData?.description;
    return <section className={styles.mainCont}>{renderHTML(desc)}</section>
}
export default TextAreaBlock