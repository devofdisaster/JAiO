import React from 'react'

function LabeledTextarea(props) {
    return <div className="form-group">
        <label htmlFor={props.id}>{props.label}</label>
        <textarea id={props.id}
            className="form-control"
            value={props.value}
            placeholder={props.placeholder || ''}
            onChange={props.onChange}
            disabled={props.disabled}
        />
    </div>
}

export default LabeledTextarea
