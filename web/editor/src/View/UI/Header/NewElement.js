import React from 'react'

class NewElement extends React.Component {

    constructor (props) {
        super(props)

        this.elem = null
    }

    componentDidMount() {
        $(this.elem).draggable({
            appendTo: '.navbar',
            cursor: 'move',
            helper: 'clone',
            scroll: false,
            zIndex: 10
        })
    }

    render() {
        const icons = {
            'box': 'glyphicon glyphicon-stop',
            'text': 'glyphicon glyphicon-font'
        }
        const classes = icons[this.props.type]

        return <div className="btn-group">
            <btn className="btn btn-default new-element"
                 type={this.props.type}
                 ref={(elem) => this.elem = elem}>
                <i className={classes}/>
            </btn>
        </div>
    }
}

export default NewElement
