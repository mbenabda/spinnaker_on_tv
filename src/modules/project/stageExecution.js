import React from 'react'

export default (props) => (
    <div style={{...styles.container, ...styles.status[props.status]}}>
        {props.name}
    </div>
)

const styles = {
    container: {
        height: '23px',
        flex: '1 0',
        textAlign: 'center',
        border: '1px solid transparent',
        borderLeftColor: 'white'
    },
    status: {
        NOT_STARTED: {
            backgroundColor: '#DEDEDE',
        },
        RUNNING: {
            backgroundColor: '#149cb5',
        },
        SUCCEEDED: {
            backgroundColor: '#A6BF82',
        },
        TERMINAL: {
            backgroundColor: '#CC6564',
        },
    }
}
