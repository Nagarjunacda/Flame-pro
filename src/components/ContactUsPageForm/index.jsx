import Link from 'next/link';
import { useState, useEffect, useContext, useRef } from 'react';
import { useRouter } from 'next/router';
import DatePicker from 'react-datepicker';
import { contactUsFormPageUrl } from '@/utils/urls';
import CountrySelector from '../CountrySelector';
import { useMediaQuery } from 'react-responsive';
// import { BsCalendar } from 'react-icons/bs';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import NonceContext from "@/context/NonceContext";
import Toast from '@/reusbleComponents/ToastMsg';
import FlameBtn from '@/reusbleComponents/FlameBtn';
import FlameImage from '@/reusbleComponents/FlameImage';
import { checkoutUrl } from '@/utils/urls';
import { handlePostRequests } from '@/utils/handlePostCalls';
import styles from './contactUsPageForm.module.css';

function ContactUsPageForm({ heading, formFields, heading2, isFromPopup }) {
    const nonceVal = useContext(NonceContext);
    const router = useRouter();
    const dropdownRef = useRef(null);
    const countryRef = useRef(null);
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [contactBy, setContactBy] = useState('Phone')
    const [contactTime, setContactTime] = useState('ASAP')
    const [isDropdownOpen, setIsDropDownOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [selTime, setSelTime] = useState('Please Select A Time')
    const [showToast, setShowToast] = useState(false);
    const [isLoadState, setIsLoadState] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [dateError, setDateError] = useState(false);
    const [timeError, setTimeError] = useState(false);
    const [toastMsg, setToastMsg] = useState("");
    const [countryDropdown, setCountryDropdown] = useState(false)
    const isDesktop = useMediaQuery({ query: "(min-width:900px)" });
    const timeZoneVal = 'BST';
    const btnColor = "var(--color-primary)";
    const textColor = "var(--color-secondary)";
    const calendarIcon = '/Images/calendarIcon.svg';
    const phnBtncolor = contactBy === 'Phone' ? "var(--color-primary)" : "var(--color-secondary)";
    const phnBtnTextClr = contactBy === 'Phone' ? "var(--color-secondary)" : "var(--color-primary)";
    const emailBtncolor = contactBy === 'Email' ? "var(--color-primary)" : "var(--color-secondary)";
    const emailBtnTextClr = contactBy === 'Email' ? "var(--color-secondary)" : "var(--color-primary)";
    const phnBtncolor2 = contactTime === 'ASAP' ? "var(--color-primary)" : "var(--color-secondary)";
    const phnBtnTextClr2 = contactTime === 'ASAP' ? "var(--color-secondary)" : "var(--color-primary)";
    const emailBtncolor2 = contactTime === 'Arrange A Time' ? "var(--color-primary)" : "var(--color-secondary)";
    const emailBtnTextClr2 = contactTime === 'Arrange A Time' ? "var(--color-secondary)" : "var(--color-primary)";
    const arrowImgSrc = isDropdownOpen
        ? "/Images/upGreyArrow.svg"
        : "/Images/downArrowGrey.svg";
    // const isUserDetailForm = formFields[1]?.section1 === "Phone Number*";
    const timeZones = ['6.00 - 8.00', '8.00 - 10.00', '10.00 - 12.00', '12.00 - 14.00', '14.00 - 16.00', '16.00 - 18.00', '18.00 - 20.00', '20.00 - 22.00']

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropDownOpen(false);
            }
            if (countryRef.current && !countryRef.current.contains(event.target)) {
                setCountryDropdown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef, countryRef]);

    const handleDropdown = () => {
        setIsDropDownOpen(!isDropdownOpen);
    };

    const handleChange = async (e, fieldName) => {
        const { name, value } = e.target;
        if (!value) {
            setErrors({
                ...errors,
                [fieldName]: `${fieldName} is required`,
            });
            setFormData({
                ...formData,
                [fieldName]: e.target.value,
            });
            return;
        }
        if (name === "Full Name*") {
            if (!/^[a-zA-Z\s]+$/.test(value)) {
                setErrors({
                    ...errors,
                    [fieldName]: "Please enter a valid name",
                });
            }
        }
        if (name === "Email Address*") {
            if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
                setErrors({
                    ...errors,
                    [fieldName]: "Please enter valid email address",
                });
            }
        }
        if (name === "Phone Number*") {
            if (!/^[0-9]+$/.test(value)) {
                setErrors({
                    ...errors,
                    [fieldName]: "Please enter valid phone number",
                });
            }
        }
        errors[fieldName] = null;
        setFormData({
            ...formData,
            [fieldName]: e.target.value,
        });
    };

    const handleButtonClick = async () => {
        if (isLoadState) {
            return;
        }
        errors["Area Of Interest*"] = null; // need to refactor later
        if (Object.keys(errors).some((key) => errors[key])) {
            setShowToast(true);
            setToastMsg("Please enter all the required fields.");
            return;
        }
        let formValid = true;
        formFields.forEach((fieldName) => {
            if (!formData[fieldName?.section1]) {
                if (fieldName?.section1 === "Area Of Interest*") {
                    return;
                }
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [fieldName?.section1]: `${fieldName?.section1} is required`,
                }));
                formValid = false;
            }

            if (fieldName?.section2 && !formData[fieldName?.section2]) {
                if (fieldName?.section1 === "Area Of Interest*") {
                    return;
                }
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [fieldName?.section2]: `${fieldName?.section2} is required`,
                }));
                formValid = false;
            }
        });
        const dateNotSel = contactTime === 'Arrange A Time' && contactBy === 'Phone' && !selectedDate;
        const timeNotSel = contactTime === 'Arrange A Time' && contactBy === 'Phone' && (!selTime || selTime === 'Please Select A Time');
        if (!formValid || dateNotSel || timeNotSel) {
            if (dateNotSel) {
                setDateError('Please select a date to contact');
            }
            if (timeNotSel) {
                setTimeError('Please select a time to contact')
            }
            setShowToast(true);
            setToastMsg("Please enter all the required fields.");
            return;
        }
        setIsLoadState(true);
        // const selOption =
        //     areaOfInt === "Fire Fighting Ppe"
        //         ? "Fire"
        //         : areaOfInt === "Defence Procurement"
        //             ? "Defence"
        //             : null;
        const userDetailData = {
            input_1_3: formData["Full Name*"],
            input_5: formData["Email Address*"],
            input_6: formData["Phone Number*"],
            input_8: formData["Company Name*"],
            input_17: formData["Job Title*"],
            input_11: contactBy === 'Phone' ? contactTime : '',
            input_12: contactBy,
            input_18: formData["Message*"],
            input_14: selectedDate,
            input_15: selTime
        };
        const data = JSON.stringify(userDetailData);
        const customHeaders = { 'Content-Type': 'application/json' };
        const url = contactUsFormPageUrl
        setIsLoadState(true)
        const res = await handlePostRequests(url, data, customHeaders);
        if (res?.data) {
            const refNum = res?.data?.order_number
            setIsLoadState(false);
            setShowToast(true);
            setToastMsg('Success! Your form has been submitted. We wll be in touch shortly');
            // router.push(`/thank-you?ref=${refNum}`)
            // setShowToast(true);
            // setToastMsg("Successfully signedup to our mailing list.");
        }
        if (res?.error) {
            const errMsg = res?.error?.response?.data?.message;
            // const firstKey = errMsg ? Object.keys(errMsg)[0] : null;
            // const toastMsg = firstKey
            //     ? `!Failed ${errMsg[firstKey]}`
            //     : "Please check all the fields entered.";
            setIsLoadState(false);
            setShowToast(true);
            setToastMsg(errMsg || "An error occurred during the request. Please try again.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleContactSel = (item) => {
        setContactBy(item)
    }

    const handleTimeSel = (item) => {
        setContactTime(item)
    }

    const handleBrowseAll = () => { }

    const handleInterestSel = (area) => {
        setSelTime(area);
        setIsDropDownOpen(false);
        setTimeError('')
        // setErrors((prevErrors) => ({
        //     ...prevErrors,
        //     "Area Of Interest*": null,
        // }));
    };

    const handleDateSel = (date) => {
        setSelectedDate(date);
        setDateError('')
    }

    return <section className={isFromPopup ? styles.mainContPopup : styles.mainCont}>
        <section className={styles.formCont}>
            <h5
                className={isFromPopup ? styles.headingTextBlockPopup : styles.headingTextBlock}
            >
                {heading}
            </h5>
            <form onSubmit={handleSubmit} className={styles.form}>
                {formFields?.map((fieldName) => (
                    <div key={fieldName} className={styles.formDiv}>
                        <section className={styles.formInput}>
                            {fieldName?.section1 !== "Area Of Interest*" ? (
                                <input
                                    type="text"
                                    id={fieldName?.section1}
                                    name={fieldName?.section1}
                                    className={
                                        fieldName?.section1 === "Area Of Interest*"
                                            ? styles.areaInterestInput : fieldName?.section1 === 'Phone Number*' ? styles.textInputPhoneNum
                                                : styles.textInput
                                    }
                                    placeholder={fieldName?.section1}
                                    onChange={(e) => handleChange(e, fieldName?.section1)}
                                    value={formData[fieldName?.section1] || ""}
                                />
                            ) : (
                                <section
                                    className={styles.areaInterestInput}
                                    onClick={handleDropdown}
                                >
                                    {areaOfInt}
                                </section>
                            )}
                            {fieldName.section1 === 'Phone Number*' && <CountrySelector countryDropdown={countryDropdown} setCountryDropdown={setCountryDropdown} isError={errors[fieldName?.section1]} countryRef={countryRef} />}
                            {errors[fieldName?.section1] && (
                                <p className={styles.errorMsg}>{errors[fieldName?.section1]}</p>
                            )}
                            {fieldName?.section1 === "Area Of Interest*" && (
                                <section className={styles.downArrow} onClick={handleDropdown}>
                                    <FlameImage src={arrowImgSrc} alt="arrow" />
                                </section>
                            )}
                            {fieldName?.section1 === "Area Of Interest*" &&
                                isDropdownOpen && (
                                    <section className={styles.areaOfInt}>
                                        {areaOfInterests.map((area, index) => {
                                            return (
                                                <section
                                                    key={index}
                                                    className={
                                                        area === areaOfInt
                                                            ? styles.selectedArea
                                                            : styles.interestOptions
                                                    }
                                                    onClick={() => {
                                                        handleInterestSel(area);
                                                    }}
                                                >
                                                    {area}
                                                </section>
                                            );
                                        })}
                                    </section>
                                )}
                        </section>
                        {fieldName.section2 && (
                            <section className={styles.formInput}>
                                {fieldName?.section2 !== "Area Of Interest*" ? (
                                    <input
                                        type="text"
                                        id={fieldName?.section2}
                                        name={fieldName?.section2}
                                        className={
                                            fieldName?.section2 === "Area Of Interest*"
                                                ? styles.areaInterestInput
                                                : styles.textInput
                                        }
                                        placeholder={fieldName?.section2}
                                        onChange={(e) => handleChange(e, fieldName?.section2)}
                                        value={formData[fieldName?.section2] || ""}
                                    />
                                ) : (
                                    <section className={styles.areaInterestInput}>
                                        Area Of Interest
                                    </section>
                                )}
                                {errors[fieldName?.section2] && (
                                    <p className={styles.errorMsg}>
                                        {errors[fieldName?.section2]}
                                    </p>
                                )}
                                {fieldName?.section2 === "Area Of Interest*" && (
                                    <section className={styles.downArrow}>
                                        <FlameImage
                                            src={"/Images/downWhiteArrow.svg"}
                                            alt="arrow"
                                        />
                                    </section>
                                )}
                            </section>
                        )}
                    </div>
                ))}
            </form>
        </section>
        <section className={styles.formCont}>
            <h5
                className={isFromPopup ? styles.headingTextBlockPopup : styles.headingTextBlock}
            >
                {heading2}
            </h5>
            <section className={styles.form2Cont}>
                <section className={styles.phoneEmail}>
                    <FlameBtn color={phnBtncolor}
                        text={"Phone"}
                        textColor={phnBtnTextClr}
                        isLoadState={false}
                        btnFunction={() => { handleContactSel('Phone') }}
                        isFromContactForm
                        isSmallBtn={isDesktop ? false : true} />
                    <FlameBtn color={emailBtncolor}
                        text={"Email"}
                        textColor={emailBtnTextClr}
                        isLoadState={false}
                        btnFunction={() => { handleContactSel('Email') }}
                        isFromContactForm
                        isSmallBtn={isDesktop ? false : true} />
                </section>
            </section>
            {contactBy === 'Phone' && <section className={styles.form2Cont}>
                <section className={styles.phoneEmail}>
                    <FlameBtn color={phnBtncolor2}
                        text={"ASAP"}
                        textColor={phnBtnTextClr2}
                        isLoadState={false}
                        btnFunction={() => { handleTimeSel('ASAP') }}
                        isFromContactForm
                        isSmallBtn={isDesktop ? false : true}
                    />
                    <FlameBtn color={emailBtncolor2}
                        text={"Arrange A Time"}
                        textColor={emailBtnTextClr2}
                        isLoadState={false}
                        btnFunction={() => { handleTimeSel('Arrange A Time') }}
                        isFromContactForm
                        isSmallBtn={isDesktop ? false : true} />
                </section>
            </section>}
            {/* <DatePickerComp /> */}
            {contactTime === 'Arrange A Time' && contactBy === 'Phone' &&
                <section className={styles.datePickerMain}>
                    <section className={styles.datePickerCont}>
                        <DatePicker
                            placeholderText="Please select a date"
                            selected={selectedDate}
                            minDate={new Date()}
                            dateFormat='dd/MM/yyyy'
                            scrollableMonthYearDropdown
                            wrapperClassName={styles.fullWidthDatePicker}
                            className={styles.customDatepicker}
                            calendarClassName={styles.customCalendar}
                            onChange={(date) => { handleDateSel(date) }} />
                        <section className={styles.calendarIcon}>
                            <FlameImage src={calendarIcon} alt={'calendar Icon'} />
                        </section>
                    </section>
                    {dateError && <p className={styles.errorMsg}>{dateError}</p>}
                </section>
            }
            {contactTime === 'Arrange A Time' && contactBy === 'Phone' &&
                <section className={styles.datePickerMain}>
                    <section className={styles.formInput}>
                        <section
                            className={selTime === 'Please Select A Time' ? styles.areaInterestInput : styles.areaInterestInputSel}
                            onClick={handleDropdown}
                        >
                            {selTime === 'Please Select A Time' ? selTime : `${selTime} ${timeZoneVal}`}
                        </section>
                        <section className={styles.downArrow} onClick={handleDropdown}>
                            <FlameImage src={arrowImgSrc} alt="arrow" />
                        </section>
                        {isDropdownOpen &&
                            <section ref={dropdownRef} className={styles.timeZone}>
                                {timeZones.map((time, index) => {
                                    return (
                                        <section
                                            key={index}
                                            className={
                                                time === selTime
                                                    ? styles.selectedArea
                                                    : styles.interestOptions
                                            }
                                            onClick={() => {
                                                handleInterestSel(time);
                                            }}
                                        >
                                            {`${time} ${timeZoneVal}`}
                                        </section>
                                    );
                                })}
                            </section>
                        }
                    </section>
                    {timeError && <p className={styles.errorMsg}>{timeError}</p>}
                </section>}
            {showToast && (
                <Toast
                    showToast={showToast}
                    setShowToast={setShowToast}
                    toastMsg={toastMsg}
                />
            )}
            <section className={styles.submitSec}>
                {/* <Link href={'/shop'} className={styles.btnStyle2}>
                    <ButtonStyleTwo
                        text={"Keep Browsing Products"}
                        textColor={"var( --color-primary)"}
                        btnFunction={handleBrowseAll}
                    // btnIcon={"/Images/deleteIcon.svg"}
                    />
                </Link> */}
                <section className={styles.cta}>
                    <FlameBtn
                        color={btnColor}
                        text={"Submit"}
                        textColor={textColor}
                        isLoadState={isLoadState}
                        btnFunction={handleButtonClick}
                    />
                </section>
            </section>
        </section>
    </section>
}
export default ContactUsPageForm