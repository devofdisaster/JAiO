import React from 'react'
import SizePanel from './Common/SizePanel'
import PositionPanel from './Common/PositionPanel'

function ElementContent(props) {
    return <div>
        <PositionPanel source={props.source}/>
        <SizePanel source={props.source}/>
    </div>
}

export default ElementContent


