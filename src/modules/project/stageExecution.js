import React, { Component } from 'react'

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
    },
    status: {
        NOT_STARTED: {
            backgroundColor: '#DEDEDE',
        },
        RUNNING: {
            backgroundColor: '#F2B661',
        },
        SUCCEEDED: {
            backgroundColor: '#A6BF82',
        },
        TERMINAL: {
            backgroundColor: '#CC6564',
        },
    }
}
