import React from 'react'
import BodyContent from './BodyContent'
import ElementContent from './ElementContent'
import SectionContent from './SectionContent'

function SidebarContent(props) {
    switch (props.source.type) {
        case 'body':
            return <BodyContent source={props.source}/>
        case 'section':
            return <SectionContent source={props.source}/>
        default:
            return <ElementContent source={props.source} />
    }
}

export default SidebarContent
