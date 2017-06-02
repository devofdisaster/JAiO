import React from 'react'
import BackgroundPanel from './Common/BackgroundPanel'

function BodyContent(props) {
    return <div>
        <BackgroundPanel source={props.source}/>
    </div>
}

export default BodyContent

