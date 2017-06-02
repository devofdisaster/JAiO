import React from 'react'
import SizePanel from './Common/SizePanel'
import BackgroundPanel from './Common/BackgroundPanel'

function SectionContent(props) {
    return <div>
        <SizePanel source={props.source}/>
        <BackgroundPanel source={props.source}/>
    </div>
}

export default SectionContent

