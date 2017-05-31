import Body from './Page/Element/Body'
import React from 'react'

class ApplicationComponent extends React.Component {
    constructor (props) {
        super(props)

        this.state = { page: props.page }
        this.app = props.app
    }

    componentWillMount() {
        this.app.updateView = (state) => state.toView ? this.setState(state.toView) : this.setState(state)
    }

    render() {
        return <Body source={this.state.page}/>
    }

}

export default ApplicationComponent
