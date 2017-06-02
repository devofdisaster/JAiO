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
                <div className="row content">
                    <div className="col-sm-10">
                        <BodyView source={this.state.page}/>
                    </div>
                    <div className="col-sm-2">
                        <SidebarView source={this.state.ui.sidebar}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default ApplicationComponent
