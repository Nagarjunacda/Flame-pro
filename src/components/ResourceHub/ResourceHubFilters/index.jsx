import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive"
import { resourceHubFilterUrl } from "@/utils/urls";
import { handleServerSideProps } from "@/utils/handleServerSideData";
import ResourceHubFiltersDweb from "./ResourceHubFiltersDweb";
import ResourceHubFiltersMweb from "./ResourceHubFiltersMweb";


function ResourceHubFilters({ setItemsNumbers, setSelectedPageNum }) {
    const [resourceFiltersData, setResourceFiltersData] = useState([]);
    const isDesktop = useMediaQuery({ query: "(min-width:900px)" });
    const availableFilters = ['industry', 'application', 'standard--certification']

    useEffect(() => {
        const getFilterData = async () => {
            const { data, error } = await handleServerSideProps(resourceHubFilterUrl);
            if (data) {
                const filteredData = [];
                for (let key in data) {
                    filteredData.push({ name: key, data: data[key] });
                }
                setResourceFiltersData(filteredData);
            }
        }
        getFilterData()
    }, [])
    return <ResourceHubFiltersDweb setItemsNumbers={setItemsNumbers} setSelectedPageNum={setSelectedPageNum} filtersData={resourceFiltersData} />

    // return <>{isDesktop ? <ResourceHubFiltersDweb products={products} setItemsNumbers={setItemsNumbers} setSelectedPageNum={setSelectedPageNum} filtersData={resourceFiltersData} getFilteredProducts={getFilteredProducts} /> : <ResourceHubFiltersMweb filtersData={resourceFiltersData} getFilteredProducts={getFilteredProducts} />}</>
}
export default ResourceHubFilters