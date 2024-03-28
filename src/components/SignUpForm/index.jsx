import { useState } from "react";
import CheckBoxWithText from "./CheckBoxWithText";
import FlameBtn from "@/reusbleComponents/FlameBtn";
import FlameImage from "@/reusbleComponents/FlameImage";
import { renderHTML } from "@/utils/htmlString";
import styles from "./signUpForm.module.css";

function SignUpForm({ isFromFooter, text, heading, formFields }) {
  const [formData, setFormData] = useState({});
  const btnColor = "var(--color-secondary)";
  const textColor = "var(--color-primary)";
  const checkBoxText = "I consent to email marketing";

  const handleChange = (e, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };

  const handleButtonClick = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
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
              value={formData[fieldName] || ""}
            />
            {fieldName?.section1 === "Area Of Interest*" && (
              <section className={styles.downArrow}>
                <FlameImage src={"/Images/downWhiteArrow.svg"} alt="arrow" />
              </section>
            )}
            {fieldName.section2 && (
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
                value={formData[fieldName] || ""}
              />
            )}
          </div>
        ))}
      </form>
      <section className={styles.checkBoxAndText}>
        <section className={styles.checkBoxSection}>
          <CheckBoxWithText text={checkBoxText} />
        </section>
      </section>
      <section className={styles.cta}>
        <FlameBtn
          color={btnColor}
          text={"Sign Up"}
          textColor={textColor}
          isLoadState={false}
          btnFunction={handleButtonClick}
        />
      </section>
    </section>
  );
}
export default SignUpForm;
