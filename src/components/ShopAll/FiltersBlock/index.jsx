import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive"
import { filtersUrl } from "@/utils/urls";
import { handleServerSideProps } from "@/utils/handleServerSideData";
import FiltersDweb from "./FiltersDweb"
import FiltersMweb from "./FiltersMweb"


function FiltersBlock({ getFilteredProducts, products, setItemsNumbers, setSelectedPageNum }) {
    const [filtersData, setFiltersData] = useState([])
    const isDesktop = useMediaQuery({ query: "(min-width:900px)" });
    const availableFilters = ['industry', 'application', 'standard--certification']

    useEffect(() => {
        const getFilterData = async () => {
            const { data, error } = await handleServerSideProps(filtersUrl);
            if (data) {
                const filteredData = data?.filter((e) => availableFilters.includes(e?.taxonomy))
                setFiltersData(filteredData)
            }
        }
        getFilterData()
    }, [])

    return <>{isDesktop ? <FiltersDweb products={products} setItemsNumbers={setItemsNumbers} setSelectedPageNum={setSelectedPageNum} filtersData={filtersData} getFilteredProducts={getFilteredProducts} /> : <FiltersMweb filtersData={filtersData} getFilteredProducts={getFilteredProducts} />}</>
}
export default FiltersBlock