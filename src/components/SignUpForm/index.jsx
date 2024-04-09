import { useState } from "react";
import CheckBoxWithText from "./CheckBoxWithText";
import FlameBtn from "@/reusbleComponents/FlameBtn";
import FlameImage from "@/reusbleComponents/FlameImage";
import Toast from "@/reusbleComponents/ToastMsg";
import { renderHTML } from "@/utils/htmlString";
import { handlePostRequests } from "@/utils/handlePostCalls";
import { userDetailsFormUrl } from "@/utils/urls";
import { newsLettersignUpUrl } from "@/utils/urls";
import styles from "./signUpForm.module.css";

function SignUpForm({ isFromFooter, text, heading, formFields }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [areaOfInt, setAreaOfInt] = useState("Area Of Interest");
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isLoadState, setIsLoadState] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const btnColor = "var(--color-secondary)";
  const textColor = "var(--color-primary)";
  const checkBoxText = "I consent to email marketing";
  const areaOfInterests = ["Fire Fighting PPE", "Defence Procurement"];
  const arrowImgSrc = isDropdownOpen
    ? "/Images/upWhiteArrow.svg"
    : "/Images/downWhiteArrow.svg";
  const isUserDetailForm = formFields[1]?.section1 === "Phone Number*";

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
    if (isUserDetailForm) {
      // need to refactor this later
      errors["Area Of Interest*"] = null;
    }
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
    if (areaOfInt === "Area Of Interest" && !isUserDetailForm) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        "Area Of Interest*": "Please select an Area Of Interest",
      }));
      formValid = false;
    }
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
    const data = {
      input_5_3: formData["Full Name*"],
      input_7: formData["Email Address*"],
      input_8: selOption,
      input_10_1: isChecked ? "I consent to email marketing" : null,
    };
    const userDetailData = {
      input_1_3: formData["Full Name*"],
      input_3: formData["Email Address*"],
      input_4: formData["Phone Number*"],
      input_5: formData["Company Name*"],
      input_6: formData["Job Title*"],
      input_7: formData["Message"],
      input_8_1: isChecked ? 1 : 0,
    };
    const userData = isUserDetailForm ? userDetailData : data;
    const url = isUserDetailForm ? userDetailsFormUrl : newsLettersignUpUrl;
    const res = await handlePostRequests(url, userData);
    if (res?.data?.is_valid) {
      setIsLoadState(false);
      setShowToast(true);
      setToastMsg("Successfully signedup to our mailing list.");
      setFormData("");
    }
    if (res?.error) {
      const errMsg = res?.error?.response?.data?.validation_messages;
      const firstKey = errMsg ? Object.keys(errMsg)[0] : null;
      const toastMsg = firstKey
        ? `!Failed ${errMsg[firstKey]}`
        : "Please check all the fields entered.";
      setIsLoadState(false);
      setShowToast(true);
      setToastMsg(toastMsg);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDropdown = () => {
    setIsDropDownOpen(!isDropdownOpen);
  };

  const handleInterestSel = (area) => {
    setAreaOfInt(area);
    setIsDropDownOpen(false);
    setErrors((prevErrors) => ({
      ...prevErrors,
      "Area Of Interest*": null,
    }));
  };

  return (
    <section className={styles.signUpCont}>
      <h5
        className={isFromFooter ? styles.headingText : styles.headingTextBlock}
      >
        {heading}
      </h5>
      {text && <p className={styles.text}>{renderHTML(text)}</p>}
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
      <section className={styles.checkBoxAndText}>
        <section className={styles.checkBoxSection}>
          <CheckBoxWithText
            text={checkBoxText}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
        </section>
      </section>
      {showToast && (
        <Toast
          showToast={showToast}
          setShowToast={setShowToast}
          toastMsg={toastMsg}
        />
      )}
      <section className={styles.cta}>
        <FlameBtn
          color={btnColor}
          text={"Sign Up"}
          textColor={textColor}
          isLoadState={isLoadState}
          btnFunction={handleButtonClick}
        />
      </section>
    </section>
  );
}
export default SignUpForm;
