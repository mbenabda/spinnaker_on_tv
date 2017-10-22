import React from 'react'
import _ from 'lodash'
import StageExecution from './stageExecution'
import PipelineStatus from './pipelineStatus'

const nonSyntheticStageExecutions = (pipelineStages, stageExecutions) => {
  const nonSyntheticStagesByRefId = _.keyBy(pipelineStages, stage => stage.refId)
  return stageExecutions.filter(stageExecution => nonSyntheticStagesByRefId[stageExecution.refId])
}

export default (props) => (
  <div style={styles.container}>
    <div style={styles.stages}>
      {
        nonSyntheticStageExecutions(props.pipeline.stages, props.execution.stages).map(stageExecution => (
          <StageExecution {...stageExecution} key={stageExecution.refId}/>
        ))
      }
    </div>
    <PipelineStatus status={props.execution.status}/>
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
