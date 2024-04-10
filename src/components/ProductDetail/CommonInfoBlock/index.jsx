import { renderHTML } from '@/utils/htmlString';
import styles from './commonInfoBlock.module.css';

function CommonInfoBlock({ productInfo, selectedLink }) {
    const data = productInfo.filter((e) => e?.title === selectedLink);
    const info = data.length > 0 ? data[0] : {};
    const desc = info?.description;

    return <section>{renderHTML(desc)}</section>
}
export default CommonInfoBlock