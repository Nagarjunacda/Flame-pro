import Link from 'next/link';
import TitleAndTextCard from '@/components/Cards/TitleAndTextCard';
import ResourceFilters from '../ResourceFilters';
import styles from '../resourceHub.module.css';

function ResourceHubListing({ listingData }) {

    return <section className={styles.mainCont}>
        <section className={styles.filterCont}>
            <ResourceFilters />
        </section>
        <section className={styles.products}>
            {listingData?.map((product, index) => {
                return <TitleAndTextCard key={index} data={product} />
            })}
        </section>
    </section>
}
export default ResourceHubListing