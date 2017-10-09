import React from 'react'

import StageExecution from './stageExecution'
import PipelineStatus from './pipelineStatus'

export default (props) => (
  <div style={styles.container}>
    <div style={styles.stages}>
      {props.stages.map(stage => <StageExecution {...stage} stages={props.stages} key={stage.id}/>)}
    </div>
    <PipelineStatus status={props.status}/>
  </div>
)

const styles = {
    container: {
    },

    stages: {
        display: 'flex',
        flexDirection: 'row',
    },
}
