import React from 'react'

class LabeledTextInput extends React.Component {
    render() {
        return <div className="form-group">
            <label htmlFor={this.props.id}>{this.props.label}</label>
            <input id={this.props.id}
                   type="text"
                   className="form-control"
                   value={this.props.value || ''}
                   placeholder={this.props.placeholder || ''}
                   onChange={this.props.onChange}
            />
        </div>
    }
}

export default LabeledTextInput
