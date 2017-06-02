import BoxView from './Element/BoxView'
import React from 'react'

function ElementComponentFactory(object) {
    switch (object.type) {
        case 'box':
            return <BoxView key={object.uuid} source={object}/>
    }
}

export default ElementComponentFactory
