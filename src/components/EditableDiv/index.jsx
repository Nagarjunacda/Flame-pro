import React, { useState } from 'react';
import styles from './editableDiv.module.css';

function EditableDiv() {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(0);

    const handleBlur = () => {
        setIsEditing(false);
    };

    return (
        <div
            className={styles.mainCont}
            onClick={() => setIsEditing(true)}
        >
            {isEditing ? (
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
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
