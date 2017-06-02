import React from 'react'
import BackgroundForm from './BackgroundForm'

class BackgroundPanel extends React.Component {
    render() {
        return <div className="panel panel-default">
            <div className="panel-body">
                <BackgroundForm source={this.props.source}/>
            </div>
        </div>
    }
}

export default BackgroundPanel
