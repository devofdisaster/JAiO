import Body from './Page/Element/Body'
import HeaderComponent from './UI/HeaderComponent'
import SidebarComponent from './UI/SidebarComponent'
import React from 'react'

class ApplicationComponent extends React.Component {
    constructor (props) {
        super(props)

        this.app = props.app
        this.state = {
            page: props.app.Page.toView(),
            ui: props.app.Interface.toView()
        }
    }

    componentWillMount() {
        this.app.updateView = (state) => this.setState(state)
    }

    render() {
        return (
            <div className="container-fluid">
                <HeaderComponent source={this.state.ui.header}/>
                <div className="row content">
                    <div className="col-sm-10">
                        <Body source={this.state.page}/>
                    </div>
                    <div className="col-sm-2">
                        <SidebarComponent source={this.state.ui.sidebar}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default ApplicationComponent
