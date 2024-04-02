import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive"
import { filtersUrl } from "@/utils/urls";
import { handleServerSideProps } from "@/utils/handleServerSideData";
import FiltersDweb from "./FiltersDweb"
import FiltersMweb from "./FiltersMweb"


function FiltersBlock() {
    const [filtersData, setFiltersData] = useState([])
    const isDesktop = useMediaQuery({ query: "(min-width:900px)" });
    const availableFilters = ['industry', 'application', 'pa_gender', 'pa_colour']

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

    return <>{isDesktop ? <FiltersDweb filtersData={filtersData} /> : <FiltersMweb filtersData={filtersData} />}</>
}
export default FiltersBlock