import styles from '../signUpForm.module.css'
function CheckBoxWithText({ text }) {
    return <section className={styles.checkBoxCont}>
        <section className={styles.checkBox}></section>
        <p className={styles.checkBoxText}>{text}</p>
    </section>
}
export default CheckBoxWithText;