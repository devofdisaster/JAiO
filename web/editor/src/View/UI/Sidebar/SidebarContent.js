import React from 'react'
import BodyContent from './BodyContent'
import SectionContent from './SectionContent'
import BoxContent from './BoxContent'
import TextContent from './TextContent'

function SidebarContent(props) {
    switch (props.source.type) {
        case 'body':
            return <BodyContent source={props.source}/>
        case 'section':
            return <SectionContent source={props.source}/>
        case 'text':
            return <TextContent source={props.source}/>
        default:
            return <BoxContent source={props.source} />
    }
}

export default SidebarContent
