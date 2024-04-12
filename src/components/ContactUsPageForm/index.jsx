import Link from 'next/link';
import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import DatePicker from 'react-datepicker';
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

function ContactUsPageForm({ heading, formFields, heading2 }) {
    const nonceVal = useContext(NonceContext);
    const router = useRouter();
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [contactBy, setContactBy] = useState('Phone')
    const [contactTime, setContactTime] = useState('ASAP')
    const [areaOfInt, setAreaOfInt] = useState("Area Of Interest");
    const [isDropdownOpen, setIsDropDownOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [isLoadState, setIsLoadState] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [toastMsg, setToastMsg] = useState("");
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
    // const isUserDetailForm = formFields[1]?.section1 === "Phone Number*";

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
        if (!formValid) {
            setShowToast(true);
            setToastMsg("Please enter all the required fields.");
            return;
        }
        setIsLoadState(true);
        const selOption =
            areaOfInt === "Fire Fighting Ppe"
                ? "Fire"
                : areaOfInt === "Defence Procurement"
                    ? "Defence"
                    : null;
        const userDetailData = {
            billing_address: {
                name: formData["Full Name*"],
                email: formData["Email Address*"],
                phone: formData["Phone Number*"],
                company: formData["Company Name*"],
                postcode: 'SW1A 1AA',
                address_1: ' ',
            },
            shipping_address: {
                name: formData["Full Name*"],
                postcode: 'SW1A 1AA',
                address_1: ' ',
            },
            customer_note: `${formData["Message"]}, Contact Me By: ${contactBy}`,
            create_account: false,
            payment_method: "cheque",
            payment_data: [],
            extensions: {
                additionalInfo: {
                    jobTitle: formData["Job Title*"],
                }
            }
        };
        const customHeaders = { Nonce: nonceVal };
        const url = checkoutUrl
        setIsLoadState(true)
        const res = await handlePostRequests(url, userDetailData, customHeaders);
        if (res?.data) {
            const refNum = res?.data?.order_number
            setIsLoadState(false);
            router.push(`/thank-you?ref=${refNum}`)
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
            setToastMsg(errMsg);
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

    return <section className={styles.mainCont}>
        <section className={styles.formCont}>
            <h5
                className={styles.headingTextBlock}
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
                                            ? styles.areaInterestInput
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
            {showToast && (
                <Toast
                    showToast={showToast}
                    setShowToast={setShowToast}
                    toastMsg={toastMsg}
                />
            )}
        </section>
        <section className={styles.formCont}>
            <h5
                className={styles.headingTextBlock}
            >
                {heading2}
            </h5>
            <section className={styles.form2Cont}>
                <section className={styles.phoneEmail}>
                    <FlameBtn color={phnBtncolor}
                        text={"Phone"}
                        textColor={phnBtnTextClr}
                        isLoadState={false}
                        btnFunction={() => { handleContactSel('Phone') }} />
                    <FlameBtn color={emailBtncolor}
                        text={"Email"}
                        textColor={emailBtnTextClr}
                        isLoadState={false}
                        btnFunction={() => { handleContactSel('Email') }} />
                </section>
            </section>
            <section className={styles.form2Cont}>
                <section className={styles.phoneEmail}>
                    <FlameBtn color={phnBtncolor2}
                        text={"ASAP"}
                        textColor={phnBtnTextClr2}
                        isLoadState={false}
                        btnFunction={() => { handleTimeSel('ASAP') }} />
                    <FlameBtn color={emailBtncolor2}
                        text={"Arrange A Time"}
                        textColor={emailBtnTextClr2}
                        isLoadState={false}
                        btnFunction={() => { handleTimeSel('Arrange A Time') }} />
                </section>
            </section>
            {/* <DatePickerComp /> */}
            {<section className={styles.datePickerCont}>
                <DatePicker
                    placeholderText="Please select a date"
                    selected={selectedDate}
                    minDate={new Date()}
                    dateFormat='dd/MM/yyyy'
                    scrollableMonthYearDropdown
                    wrapperClassName={styles.fullWidthDatePicker}
                    className={styles.customDatepicker}
                    calendarClassName={styles.customCalendar}
                    onChange={(date) => { setSelectedDate(date) }} />
                <section className={styles.calendarIcon}>
                    <FlameImage src={calendarIcon} alt={'calendar Icon'} />
                </section>
            </section>}
            <section className={styles.submitSec}>
                {/* <Link href={'/shop-all'} className={styles.btnStyle2}>
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