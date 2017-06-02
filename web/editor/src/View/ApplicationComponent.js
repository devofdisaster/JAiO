import BodyView from './Page/Element/BodyView'
import HeaderView from './UI/HeaderComponent'
import SidebarView from './UI/SidebarComponent'
import React from 'react'

class ApplicationComponent extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            page: window.Application.Page.toView(),
            ui: window.Application.Interface.toView()
        }
    }

    componentWillMount() {
        window.Application.setViewUpdateCallback((state) => this.setState(state))
    }

    render() {
        return (
            <div className="container-fluid">
                <HeaderView source={this.state.ui.header}/>
                <SidebarView source={this.state.ui.sidebar}/>
                <BodyView source={this.state.page}/>
            </div>
        )
    }

}

export default ApplicationComponent
