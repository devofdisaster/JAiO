import React from 'react'
import BorderForm from './BorderForm'

class BorderPanel extends React.Component {
    render() {
        return <div className="panel panel-default">
            <div className="panel-body">
                <BorderForm source={this.props.source}/>
            </div>
        </div>
    }
}

export default BorderPanel
