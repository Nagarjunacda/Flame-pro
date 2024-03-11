import { useState } from 'react';
import CheckBoxWithText from './CheckBoxWithText';
import FlameBtn from '@/reusbleComponents/FlameBtn';
import styles from './signUpForm.module.css'

function SignUpForm({ isFromFooter }) {
    const [formData, setFormData] = useState({});
    const btnColor = 'var(--color-secondary)'
    const textColor = 'var(--color-primary)'

    const handleChange = (e, fieldName) => {
        setFormData({
            ...formData,
            [fieldName]: e.target.value,
        });
    };

    const handleButtonClick = () => { }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData);
        // Add your form submission logic here
    };
    const data = ['Full Name', 'Email Address', 'Area Of Interest']
    return <section className={styles.signUpCont}>
        <p className={styles.headingText}>Sign Up To Our Mailing List</p>
        <form onSubmit={handleSubmit} className={styles.form}>
            {data.map((fieldName) => (
                <div key={fieldName} className={styles.formDiv}>
                    <input
                        type="text"
                        id={fieldName}
                        name={fieldName}
                        className={styles.textInput}
                        placeholder={fieldName}
                        onChange={(e) => handleChange(e, fieldName)}
                        value={formData[fieldName] || ''}
                    />
                </div>
            ))}
        </form>
        <section className={styles.checkBoxAndText}>
            <section className={styles.checkBoxSection}><CheckBoxWithText text={'I consent to email marketing'} /></section>
        </section >
        <section className={styles.cta}><FlameBtn color={btnColor} text={'Sign Up'} textColor={textColor} isLoadState={false} btnFunction={handleButtonClick} /></section>
    </section>
}
export default SignUpForm