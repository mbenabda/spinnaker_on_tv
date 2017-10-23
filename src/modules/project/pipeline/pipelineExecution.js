import React from 'react'
import _ from 'lodash'

export default (props) => (
  <div style={Object.assign({}, styles.container, styles.statuses[props.execution.status])}>
    {props.pipeline.name}
  </div>
)

const styles = {
    container: {
      padding: '1rem',
      color: 'white'
    },

    statuses: {
        NOT_STARTED: {
            backgroundColor: '#DEDEDE',
        },
        RUNNING: {
            backgroundColor: '#3391EE',
        },
        SUCCEEDED: {
            backgroundColor: '#33C753',
        },
        TERMINAL: {
            backgroundColor: '#D00000',
        },
    }
}
