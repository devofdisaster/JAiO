import Box from './Element/Box'
import React from 'react'

function ElementComponentFactory(object) {
    switch (object.type) {
        case 'box':
            return <Box key={object.uuid} source={object}/>
    }
}

export default ElementComponentFactory
