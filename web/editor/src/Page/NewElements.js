const NewElements = {
    'box': {
        type: 'box',
        attributes: {},
        parameters: {
            style: {
                'background-color': '#FF5DBA',
                'box-sizing': 'border-box',
                height: 100,
                position: 'absolute',
                width: 100
            }
        },
        children: []
    },
    'text': {
        type: 'text',
        value: 'Super example text',
        attributes: {},
        parameters: {
            style: {
                'box-sizing': 'border-box',
                color: '#000',
                'font-family': 'Arial',
                'font-weight': 400,
                'font-style': 'initial',
                'font-size': '14px',
                'line-height': '14px',
                height: 'auto',
                position: 'absolute',
                width: 200
            }
        },
        children: []
    }
}

export default NewElements
