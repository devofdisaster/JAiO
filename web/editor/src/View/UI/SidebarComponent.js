import React from 'react'
import SidebarOverlay from './Sidebar/SidebarOverlay'
import SidebarContent from './Sidebar/SidebarContent'

class SidebarComponent extends React.Component {
    render() {
        return (
            <div className="sidebar">
                {
                    this.props.source.selected ?
                    <SidebarContent source={this.props.source.selected}/> :
                    <SidebarOverlay/>
                }
            </div>
        )
    }
}

export default SidebarComponent
