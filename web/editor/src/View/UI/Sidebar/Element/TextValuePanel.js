import React from 'react'
import TextValueForm from './TextValueForm'

function TextValuePanel(props) {
    return <div className="panel panel-default">
        <div className="panel-body">
            <TextValueForm source={props.source}/>
        </div>
    </div>
}

export default TextValuePanel

