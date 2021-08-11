import React from 'react'

export const SubmitButton = (props) => {

    const { name } = props;

    return (
        <button>{name}</button>
    )
}