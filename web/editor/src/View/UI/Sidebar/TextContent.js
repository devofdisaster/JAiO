import React from 'react'
import SizePanel from './Common/SizePanel'
import PositionPanel from './Common/PositionPanel'
import ActionsPanel from './Element/ActionsPanel'
import TextValuePanel from './Element/TextValuePanel'

function TextContent(props) {
    return <div>
        <ActionsPanel source={props.source}/>
        <TextValuePanel source={props.source}/>
        <PositionPanel source={props.source}/>
        <SizePanel source={props.source}/>
    </div>
}

export default TextContent


