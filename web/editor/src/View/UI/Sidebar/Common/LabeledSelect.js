import React from 'react'

function LabeledSelect(props) {
    const options = props.options.map(
        (option) => <option key={option.value} value={option.value}>{option.label}</option>
    )

    return <div className="form-group">
        <label htmlFor={props.id}>{props.label}</label>
        <select id={props.id}
               className="form-control"
               value={props.value}
               placeholder={props.placeholder || ''}
               onChange={props.onChange}
               disabled={props.disabled}
        >
            { options }
        </select>
    </div>
}

export default LabeledSelect
