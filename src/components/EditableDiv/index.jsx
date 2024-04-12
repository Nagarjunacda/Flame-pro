import React, { useState } from 'react';
import styles from './editableDiv.module.css';

function EditableDiv({ getProductQuantity }) {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(1);

    const handleBlur = () => {
        setIsEditing(false);
    };

    const handleValueChange = (e) => {
        const quant = e.target.value;
        setValue(quant);
        getProductQuantity(quant);
    }

    return (
        <div
            className={styles.mainCont}
            onClick={() => setIsEditing(true)}
        >
            {isEditing ? (
                <input
                    type="text"
                    value={value}
                    onChange={(e) => handleValueChange(e)}
                    onBlur={handleBlur}
                    autoFocus
                    className={styles.inputField}
                    style={{
                        border: 'none',
                        outline: 'none',
                        width: '100%',
                    }}
                />
            ) : (
                <span>{value}</span>
            )}
        </div>
    );
}

export default EditableDiv;
