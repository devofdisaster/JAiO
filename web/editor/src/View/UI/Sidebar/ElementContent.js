import React from 'react'
import SizePanel from './Common/SizePanel'
import PositionPanel from './Common/PositionPanel'
import BackgroundPanel from './Common/BackgroundPanel'
import BorderPanel from './Common/BorderPanel'

function ElementContent(props) {
    return <div>
        <PositionPanel source={props.source}/>
        <SizePanel source={props.source}/>
        <BackgroundPanel source={props.source}/>
        <BorderPanel source={props.source}/>
    </div>
}

export default ElementContent


