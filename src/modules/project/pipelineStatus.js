import React, { Component } from 'react'

export default (props) => (
    <div>
        Status: <span style={styles.status[props.status]}>{props.status}</span>
    </div>
)

const styles = {
    status: {
        NOT_STARTED: {
            color: '#DEDEDE',
        },
        RUNNING: {
            color: '#F2B661',
        },
        SUCCEEDED: {
            color: '#A6BF82',
        },
        TERMINAL: {
            color: '#CC6564',
        },
    },
}
