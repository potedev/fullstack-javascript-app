import React from 'react'

export const InputGroup = (props) => {
    const { handleChange, isValid, label, type, required, minLength, maxLength } = props;

    // const handleChange = (event) => {
    //     console.log(`L'input : ${label} de type :${type} est : `, event.target.value);
    // }

    return (
        <div style={!isValid ? { backgroundColor: "red" } : {}}>
            <label>{label}</label>
            <input
                onChange={(e) => handleChange(e.target.value)}
                type={type}
                required={required}
                minLength={minLength}
                maxLength={maxLength}
            />
        </div>
    )
}