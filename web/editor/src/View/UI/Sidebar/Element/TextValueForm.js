import React from 'react'
import LabeledTextarea from '../Common/LabeledTextarea'

class TextValueForm extends React.Component {
    constructor (props) {
        super(props)

        this.onValueChange = this.onValueChange.bind(this)
    }

    onValueChange(e) {
        window.Application.changeTextElementValue(e.target.value)
    }

    render() {
        return <form>
            <LabeledTextarea
                id="elementValue"
                label="Text"
                onChange={this.onValueChange}
                placeholder="Some example text"
                value={this.props.source.value}
            />
        </form>
    }
}

export default TextValueForm
