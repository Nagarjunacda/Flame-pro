import SliderComp from "@/reusbleComponents/SliderComp"
import styles from './resourceHubBlock.module.css'

function ResourceHubBlock({ trayData }) {
    const { title, button_title } = trayData
    const resourceData = trayData?.blog_select;

    return <section className={styles.mainCont}>
        <section className={styles.heading}>
            <p>{title}</p>
            <p><u>{button_title}</u></p>
        </section>
        <SliderComp data={resourceData} title={title} />
    </section>
}
export default ResourceHubBlock