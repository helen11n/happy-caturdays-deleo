import React, { Fragment } from "react"
import "./input.scss"

export const Input = ( {id, label, value, onChange} ) => {

    return (
        <Fragment>
        <div className="label">
            <label>
                {label}
            </label>

        </div>
        <input type="text" onChange={ ({target}) => onChange(id, target.value) } value={value} />
        </Fragment>
    )
}