import FlameImage from '@/reusbleComponents/FlameImage';
import styles from './uspCard.module.css';

function UspCard({ data }) {
    return <section className={styles.mainCont}>
        <div
            // key={index}
            className={styles.innerBlock}
        >
            <div>
                <FlameImage src={data?.icon_x3} />
            </div>
            <p>
                <span className={styles.boldText}>{data?.title_bold}</span>{" "}
                {data?.usp_title_x3}
            </p>
        </div>
    </section>
}
export default UspCard