import FlameImage from '@/reusbleComponents/FlameImage';
import styles from '../signUpForm.module.css'

function CheckBoxWithText({ text, setIsChecked, isChecked }) {
    const checkIconSrc = '/Images/blackTickIcon.svg'

    const handleCheckBox = () => {
        setIsChecked(!isChecked)
    }

    return <section className={styles.checkBoxCont}>
        <section className={styles.checkBox} onClick={handleCheckBox}>
            {isChecked && <FlameImage src={checkIconSrc} alt='check' />}
        </section>
        <p className={styles.checkBoxText}>{text}</p>
    </section>
}
export default CheckBoxWithText;