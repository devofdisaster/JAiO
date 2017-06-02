import React from 'react'
import SizePanel from './Common/SizePanel'
import PositionPanel from './Common/PositionPanel'
import BackgroundPanel from './Common/BackgroundPanel'
import BorderPanel from './Common/BorderPanel'
import ActionsPanel from './Element/ActionsPanel'

function BoxContent(props) {
    return <div>
        <ActionsPanel source={props.source}/>
        <PositionPanel source={props.source}/>
        <SizePanel source={props.source}/>
        <BackgroundPanel source={props.source}/>
        <BorderPanel source={props.source}/>
    </div>
}

export default BoxContent


