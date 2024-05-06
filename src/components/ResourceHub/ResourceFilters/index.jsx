import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import FlameImage from "@/reusbleComponents/FlameImage";
import FlameBtn from "@/reusbleComponents/FlameBtn";
import { resourceFiltersUrl } from "@/utils/urls";
import styles from "./resourceFilters.module.css";

function ResourceFilters({
  mainCatFilter,
  setMainCatFilter,
  setSelectedPageNum,
  setItemsNumbers,
  selectedFilterArr,
  setSelectedFilterArr,
}) {
  // const [mainCatFilter, setMainCatFilter] = useState('');
  const router = useRouter();
  const filterDropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({});
  // const [selectedFilterArr, setSelectedFilterArr] = useState([]);
  const [isFireOrDefence, setIsFireOrDefence] = useState("");
  const isDesktop = useMediaQuery({ query: "(min-width:900px)" });
  const isLargeScr = useMediaQuery({ query: "(min-width:1280px)" });
  const closeBtnSrc = "/Images/closeImg.png";
  const fireBtncolor =
    mainCatFilter === "fire"
      ? "var(--color-primary)"
      : "var(--color-secondary)";
  const fireTextClr =
    mainCatFilter === "fire"
      ? "var(--color-secondary)"
      : "var(--color-primary)";
  const defenceBtncolor =
    mainCatFilter === "defence"
      ? "var(--color-primary)"
      : "var(--color-secondary)";
  const defenceTextClr =
    mainCatFilter === "defence"
      ? "var(--color-secondary)"
      : "var(--color-primary)";
  const upArrow = "/Images/upGreyArrow.svg";
  const downArrow = "/Images/downArrowGrey.svg";
  const fireFilters = [
    {
      name: "Select Type",
      filterList: ["Blogs", "Videos", "Downloads", "Case Studies"],
    },
    {
      name: "Select Application",
      filterList: ["HVP", "Structural", "Technical Rescue", "Wild Fire"],
    },
    {
      name: "Select Industry",
      filterList: ["Airports", "State Brigade", "Marine", "Petrochemical"],
    },
  ];
  const defenceFilters = [
    {
      name: "Select Type",
      filterList: ["Blogs", "Videos", "Downloads", "Case Studies"],
    },
    {
      name: "Select Category",
      filterList: [
        "Uniform",
        "PPE and Load Carry",
        "Medical Equipment",
        "Real Life Support",
      ],
    },
  ];
  const filterData = mainCatFilter === "defence" ? defenceFilters : fireFilters;

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        filterDropdownRef.current &&
        !filterDropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
        setSelectedCategory({});
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterDropdownRef]);

  const handleMainCatSel = (selectedCat) => {
    setSelectedPageNum(1);
    setItemsNumbers(10);
    setMainCatFilter(selectedCat);
  };

  const handleSelectedCategory = (selectedCat) => {
    if (selectedCategory?.name === selectedCat?.name) {
      setIsDropdownOpen(false);
      setSelectedCategory({});
      return;
    }
    setIsDropdownOpen(true);
    setSelectedCategory(selectedCat);
  };

  const handleFilterSelect = (filterName, selectedItem) => {
    if (filterName?.name === "Select Type") {
      const selStr = selectedItem;
      let resStr;

      if (selStr.includes(" ")) {
        resStr = selStr.toLowerCase().replace(/\s+/g, "-");
      } else {
        resStr = selStr.charAt(0).toLowerCase() + selStr.slice(1);
      }
      // router.push(`/resource-hub/${resStr}`)
      router.push(`/resource-hub/${resStr}`, undefined, { shallow: true });
    }
    setIsDropdownOpen(false);
    const isItemAdded = selectedFilterArr.some((e) => {
      return e?.name === filterName?.name;
    });
    const obj = { name: filterName?.name, type: selectedItem };
    if (isItemAdded) {
      const filterArr = selectedFilterArr.filter((e) => {
        return e?.name !== filterName?.name;
      });
      setSelectedFilterArr([...filterArr, obj]);
      return;
    }
    setSelectedFilterArr((prev) => [...prev, obj]);
    setItemsNumbers(10);
    setSelectedPageNum(1);
  };

  const handleClearSelections = () => {
    setMainCatFilter("");
    setSelectedFilterArr([]);
    setItemsNumbers(10);
    setSelectedPageNum(1);
  };

  return (
    <section className={styles.mainCont}>
      <section className={styles.headSection}>
        <h3 className={styles.heading}>Filter By</h3>
        {!isDesktop && (
          <section
            className={styles.headBtnSec}
            onClick={handleClearSelections}
          >
            <section className={styles.iconSty}>
              <FlameImage src={closeBtnSrc} alt="clear" />
            </section>
            <p className={styles.clearTxt}>clear Filters</p>
          </section>
        )}
      </section>
      <section className={styles.filterList}>
        <section className={styles.fireDefFilter}>
          <FlameBtn
            color={fireBtncolor}
            text={"Fire"}
            textColor={fireTextClr}
            isLoadState={false}
            btnFunction={() => {
              handleMainCatSel("fire");
            }}
            isFromContactForm
            isSmallBtn={isLargeScr ? false : true}
          />
          <FlameBtn
            color={defenceBtncolor}
            text={"Defence"}
            textColor={defenceTextClr}
            isLoadState={false}
            btnFunction={() => {
              handleMainCatSel("defence");
            }}
            isFromContactForm
            isSmallBtn={isLargeScr ? false : true}
          />
        </section>
        <section className={styles.allCatFilterSec}>
          {filterData?.map((mainCat, index) => {
            const selectedFilter = selectedFilterArr.find(
              (filter) => filter.name === mainCat.name
            );
            const displayText = selectedFilter
              ? selectedFilter.type
              : mainCat.name;
            return (
              <section
                className={styles.categoryAndDropdown}
                key={index}
                onClick={() => {
                  handleSelectedCategory(mainCat);
                }}
              >
                <section className={styles.filterDropDown}>
                  <h3 className={styles.mainCatText}>{displayText}</h3>
                  <section className={styles.downArrow}>
                    <FlameImage
                      src={
                        selectedCategory?.name === mainCat?.name
                          ? upArrow
                          : downArrow
                      }
                      alt="arrow"
                    />
                  </section>
                </section>
                {isDropdownOpen && selectedCategory?.name === mainCat?.name && (
                  <section
                    ref={filterDropdownRef}
                    className={styles.dropDownBlock}
                  >
                    {mainCat?.filterList.map((cat, index) => {
                      return (
                        <h4
                          key={index}
                          className={styles.innerCatSec}
                          onClick={() => {
                            handleFilterSelect(mainCat, cat);
                          }}
                        >
                          {cat}
                        </h4>
                      );
                    })}
                  </section>
                )}
              </section>
            );
          })}
        </section>
        {isDesktop && (
          <section
            className={styles.headBtnSec}
            onClick={handleClearSelections}
          >
            <section className={styles.iconSty}>
              <FlameImage src={closeBtnSrc} alt="clear" />
            </section>
            <p className={styles.clearTxt}>Clear Filters</p>
          </section>
        )}
      </section>
    </section>
  );
}
export default ResourceFilters;
