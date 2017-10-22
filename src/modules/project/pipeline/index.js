

import { connect } from 'react-redux'
import Pipeline from './pipeline'
import actions from '../../../redux/modules/spinnaker/actions'

const { fetchPipelineExecutions } = actions

export default connect(
    (state, ownProps) => ({
        executions: state.spinnaker.pipelineExecutions[ownProps.pipeline.id] || []
    }),
    ({
        fetchPipelineExecutions
    })
)(Pipeline)
